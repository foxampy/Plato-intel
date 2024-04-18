<?php

namespace App\Services;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Parameter;
use App\Models\Product;
use App\Models\ProductParameter;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class CategoryService
{
    public const SORTS = [
        'Недорогие' => 1,
        'Дорогие' => 2,
        'Со скидкой' => 3,
        'Новые' => 4
    ];
    public const DEFAULT_SORT = 1;

    public $category;
    public $productsQuery;
    public $products;
    public $request;
    public $brands;
    public $minPrice;
    public $maxPrice;
    public $filterParameters;
    public $filterParameterValues;
    public $filterParameterChecked;
    public $filteredProducts;
    public $price_column;
    public $sortOrder;

    public function __construct($category, Request $request)
    {
        $this->request = $request;
        $this->category = $category;
        $this->productsQuery = $this->getProductsByCategory();
        if($category->category) {
            $this->products = $this->productsQuery->get();
            $this->filterParameters = $this->getFilterParameters();
            $this->filterParameterValues = $this->getFilterParameterValues();
            $this->sortOrder = $this->getSort();
            $this->filteredProducts = $this->getProducts();
        }
    }

    public function getProductsByCategory(){
        $query = Product::whereIsActive(1)->orderByRaw('price = 0, name');
        $categoryIds = [$this->category->id];
        if($this->category->categories->count()) {
            $categoryIds = array_merge($categoryIds,$this->category->categories->pluck('id')->toArray());
        }
        $query->whereIn('category_id', $categoryIds);
        return $query;
    }


    private function getProducts(){

        if($this->request->brand){
            $this->productsQuery->whereIn('brand_id',$this->request->brand);
            $this->setCheckedParameters('brand',$this->request->brand);
        }
        if(isset($this->request->price_from) && is_numeric($this->request->price_from) && isset($this->request->price_to) && $this->request->price_to && is_numeric($this->request->price_to)){
            $this->productsQuery->whereBetween($this->price_column,[$this->request->price_from,$this->request->price_to]);
            $this->setCheckedParameters('price_to',$this->request->price_to);
            $this->setCheckedParameters('price_from',$this->request->price_from);
        }else{
            if(isset($this->request->price_from) && is_numeric($this->request->price_from)){
                $this->productsQuery->where($this->price_column,'>=',$this->request->price_from);
            }
            if(isset($this->request->price_to) && is_numeric($this->request->price_to)){
                $this->productsQuery->where($this->price_column,'<=',$this->request->price_to);
                $this->setCheckedParameters('price_from',$this->request->price_from);
                $this->setCheckedParameters('price_to',$this->request->price_to);
            }
        }

        foreach ($this->filterParameters as $parameter) {
            if($this->request->has('parameter_'.$parameter->id) && $this->request->{'parameter_'.$parameter->id}[0]){
                $productIds = ProductParameter::whereIn('value',$this->request->{'parameter_'.$parameter->id})->whereParameterId($parameter->id)->pluck('product_id');
                $this->productsQuery->whereIn('id',$productIds);
                $this->setCheckedParameters('parameter_'.$parameter->id,$this->request->{'parameter_'.$parameter->id});
            }
        }

        //$this->sort();

        //pagination
        if(isset($this->request->page) && $this->request->page){
            $this->productsQuery->skip(setting('general.products_count')*($this->request->page-1))->take(setting('general.products_count'))->get();
        }
        return $this->productsQuery;
    }

    private function getSort(){
        if($this->request->has('sort')){
            Cookie::queue('sort', $this->request->sort);
            return $this->request->sort;
        }else{
            Cookie::queue('sort', Cookie::get('sort') ?? self::DEFAULT_SORT);
            return Cookie::get('sort') ?? self::DEFAULT_SORT;
        }
    }

    private function sort(){
        switch($this->sortOrder){
            case 1:
                $this->productsQuery->orderBy($this->price_column);
                break;
            case 2:
                $this->productsQuery->orderBy($this->price_column,'desc');
                break;
            case 3:
                $this->productsQuery->orderBy('old_price','desc'); //допилить r17
            case 4:
                $this->productsQuery->orderBy('is_new', 'desc');

        }
    }

    private function setCheckedParameters($param,$values){
        $this->filterParameterChecked[$param] = $values;
    }

    private function getFilterParameters(){
        $parameters = $this->category->parameters;

        if($this->category->category){
            $parameters = $parameters->merge($this->category->category->parameters);
        }
        return $parameters;
    }

    private function getBrands(){
        $brandsIds = $this->productsQuery->pluck('brand_id')->unique();
        return Brand::whereIn('id', $brandsIds)->whereIsActive(1)->get();
    }

    public function getFilterParameterValues(){
        $productsIds = $this->products->pluck('id')->toArray();
        $parametersValues = DB::table('product_parameters')
            ->select('value','parameter_id')
            ->whereIn('product_id',$productsIds)
            ->distinct()
            ->orderBy('value')
            ->get()
            ->groupBy('parameter_id')
            ->toArray();
        return $parametersValues;
    }



}
