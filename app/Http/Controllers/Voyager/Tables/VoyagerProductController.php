<?php

namespace App\Http\Controllers\Voyager\Tables;

use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductParameter;
use App\Models\Seo;
use Exception;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use TCG\Voyager\Database\Schema\SchemaManager;
use TCG\Voyager\Events\BreadDataAdded;
use TCG\Voyager\Events\BreadDataDeleted;
use TCG\Voyager\Events\BreadDataRestored;
use TCG\Voyager\Events\BreadDataUpdated;
use TCG\Voyager\Events\BreadImagesDeleted;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Http\Controllers\Traits\BreadRelationshipParser;
use TCG\Voyager\Http\Controllers\VoyagerBaseController as BaseVoyagerBaseController;

class VoyagerProductController extends BaseVoyagerBaseController
{
    public function edit(Request $request, $id)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        if (strlen($dataType->model_name) != 0) {
            $model = app($dataType->model_name);

            // Use withTrashed() if model uses SoftDeletes and if toggle is selected
            if ($model && in_array(SoftDeletes::class, class_uses_recursive($model))) {
                $model = $model->withTrashed();
            }
            if ($dataType->scope && $dataType->scope != '' && method_exists($model, 'scope' . ucfirst($dataType->scope))) {
                $model = $model->{$dataType->scope}();
            }
            $dataTypeContent = call_user_func([$model, 'findOrFail'], $id);
        } else {
            // If Model doest exist, get data from table name
            $dataTypeContent = DB::table($dataType->name)->where('id', $id)->first();
        }

        foreach ($dataType->editRows as $key => $row) {
            $dataType->editRows[$key]['col_width'] = isset($row->details->width) ? $row->details->width : 100;
        }

        // If a column has a relationship associated with it, we do not want to show that field
        $this->removeRelationshipField($dataType, 'edit');

        // Check permission
        $this->authorize('edit', $dataTypeContent);

        // Check if BREAD is Translatable
        $isModelTranslatable = is_bread_translatable($dataTypeContent);

        // Eagerload Relations
        $this->eagerLoadRelations($dataTypeContent, $dataType, 'edit', $isModelTranslatable);

        $product = Product::whereId($id)->first();
		if($product->category){
			$categoryParameters = $product->category->parameters->toArray();
			$grandCategoryParameters = $product->category->category ? $product->category->category->parameters->toArray() : [];
			$parameters = array_merge($categoryParameters, $grandCategoryParameters);
		}else{
			$parameters = [];
		}
        
        $parametersValues = $product->parameters->pluck('value','parameter_id')->toArray();

        $view = 'vendor.voyager.bread.edit-add';

        $dataSeo = Seo::where('table', $dataType->name)->where('item_id', $id)->firstOrNew([]);

        if (view()->exists("voyager::$slug.edit-add")) {
            $view = "voyager::$slug.edit-add";
        }

        return Voyager::view($view, compact(
            'dataType',
            'dataTypeContent',
            'isModelTranslatable',
            'dataSeo',
            'parameters',
            'parametersValues',
        ));
    }

    // POST BR(E)AD
    public function update(Request $request, $id)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        // Compatibility with Model binding.
        $id = $id instanceof \Illuminate\Database\Eloquent\Model ? $id->{$id->getKeyName()} : $id;

        $model = app($dataType->model_name);
        if ($dataType->scope && $dataType->scope != '' && method_exists($model, 'scope' . ucfirst($dataType->scope))) {
            $model = $model->{$dataType->scope}();
        }
        if ($model && in_array(SoftDeletes::class, class_uses_recursive($model))) {
            $data = $model->withTrashed()->findOrFail($id);
        } else {
            $data = $model->findOrFail($id);
        }

        // Check permission
        $this->authorize('edit', $data);

        // Validate fields with ajax
        $val = $this->validateBread($request->all(), $dataType->editRows, $dataType->name, $id)->validate();
        $data = $this->insertUpdateData($request, $slug, $dataType->editRows, $data);
        $this->saveSeo($request, $dataType->name, $id);
        $this->saveImages($request, $id);
        $this->saveParameters($request, $id);


        event(new BreadDataUpdated($dataType, $data));


        if (auth()->user()->can('browse', app($dataType->model_name))) {
            $redirect = redirect()->route("voyager.{$dataType->slug}.index");
        } else {
            $redirect = redirect()->back();
        }


        return $redirect->with([
            'message' => __('voyager::generic.successfully_updated') . " {$dataType->getTranslatedAttribute('display_name_singular')}",
            'alert-type' => 'success',
        ]);
    }

    public function create(Request $request)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        // Check permission
        $this->authorize('add', app($dataType->model_name));

        $dataTypeContent = (strlen($dataType->model_name) != 0)
            ? new $dataType->model_name()
            : false;

        foreach ($dataType->addRows as $key => $row) {
            $dataType->addRows[$key]['col_width'] = $row->details->width ?? 100;
        }

        // If a column has a relationship associated with it, we do not want to show that field
        $this->removeRelationshipField($dataType, 'add');

        // Check if BREAD is Translatable
        $isModelTranslatable = is_bread_translatable($dataTypeContent);

        // Eagerload Relations
        $this->eagerLoadRelations($dataTypeContent, $dataType, 'add', $isModelTranslatable);
        $view = 'vendor.voyager.bread.edit-add';

        if (view()->exists("voyager::$slug.edit-add")) {
            $view = "voyager::$slug.edit-add";
        }
        $dataSeo = new Seo;

        return Voyager::view($view, compact('dataType', 'dataTypeContent', 'isModelTranslatable', 'dataSeo'));
    }

    /**
     * POST BRE(A)D - Store data.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $slug = $this->getSlug($request);

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        // Check permission
        $this->authorize('add', app($dataType->model_name));

        // Validate fields with ajax
        $val = $this->validateBread($request->all(), $dataType->addRows)->validate();
        $data = $this->insertUpdateData($request, $slug, $dataType->addRows, new $dataType->model_name());
        $this->saveSeo($request, $dataType->name, $data->id);
        $this->saveImages($request, $data->id);
        //$this->saveParameters($request, $data->id);

        event(new BreadDataAdded($dataType, $data));


        if (!$request->has('_tagging')) {
            if (auth()->user()->can('browse', $data)) {
                $redirect = redirect()->to('/admin/'.$dataType->slug.'/'.$data->id.'/edit#parameters');
            } else {
                $redirect = redirect()->back();
            }

            return $redirect->with([
                'message' => __('voyager::generic.successfully_added_new') . " {$dataType->getTranslatedAttribute('display_name_singular')}",
                'alert-type' => 'success',
            ]);
        } else {
            return response()->json(['success' => true, 'data' => $data]);
        }
    }

    private function saveSeo(Request $request, $tableName, $id)
    {
        if ($request->metaTitle || $request->metaDescription) {
            Seo::updateOrCreate(
                [
                    'table' => $tableName,
                    'item_id' => $id
                ],
                [
                    'title' => $request->metaTitle,
                    'description' => $request->metaDescription,
                ]
            );
        }
    }

    private function saveParameters(Request $request, $id)
    {
        ProductParameter::whereProductId($id)->delete();
        if($request->parameters) {
            foreach ($request->parameters as $parameter_id => $value) {
                if ($value) {
                    ProductParameter::updateOrCreate(
                        [
                            'product_id' => $id,
                            'parameter_id' => $parameter_id,
                            'value' => $value
                        ]
                    );
                }
            }
        }
    }

    private function saveImages(Request $request, $id)
    {
        ProductImage::where('product_id', $id)->delete();
        if ($request->has('file')) {
            foreach ($request->file as $key => $file) {
                $file_name = $key . time() . time() . '.' . $file->getClientOriginalExtension();
                $target_path = storage_path('app/public/products/');
                $request->file[$key]->move($target_path, $file_name);
				//dd($target_path);
                ProductImage::create([
                    'product_id' => $id,
                    'image' => '/products/' . $file_name,
                    'pos' => $key
                ]);
            }
        } elseif ($request->has('images')) {
            foreach ($request->images as $key => $file) {
                ProductImage::create([
                    'product_id' => $id,
                    'image' => $file,
                    'pos' => $key
                ]);
            }
        }
    }


    public function dellImage(Request $request)
    {
        $imageId = $request->get('image');
        if ($imageId) {
            $image = ProductImage::find($imageId);
            $image->delete();
            return response()->json(array('success' => true, 'image' => $imageId));
        }
    }

}
