<?php

namespace App\Jobs;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductRelated;
use App\Models\ProductSimilar;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;

class ProcessProducts implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $categories;
    private $brands;
    public function __construct()
    {
        $this->categories = Cache::remember('allCategories', config('catalog.cache.allCategories'), function () {
            return Category::whereIsActive(1)->orderBy('category_id')->orderBy('pos')->get();
        });
        $this->brands = Brand::get();

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $products = Product::whereNull('category_id')->orWhereNull('brand_id')->get();
        foreach ($products as $product) {
            $category = $this->categories->where('external_id',$product->category_external_id)->first();
            $brand = $this->brands->where('external_id',$product->brand_external_id)->first();
            $categoryId = $category ? $category->id : null;
            $brandId = $brand ? $brand->id : null;
            $product->update([
                'category_id' => $categoryId,
                'brand_id' => $brandId
            ]);
        }
        //similar related
        $products = Product::where('similar','!=', null)->orWhere('related','!=',null)->get();
        $productIds = $products->pluck('id');
        ProductSimilar::whereIn('product_id',$productIds)->delete();
        ProductRelated::whereIn('product_id',$productIds)->delete();
        foreach ($products as $product){
            $similarVendorCodesArr = $product->similar ? explode(',',$product->similar) : [];
            $relatedVendorCodesArr = $product->related ? explode(',',$product->related) : [];
            $similarIds = Product::whereIn('vendor_code',$similarVendorCodesArr)->pluck('id');
            $relatedIds = Product::whereIn('vendor_code',$relatedVendorCodesArr)->pluck('id');
            foreach ($similarIds as $similarId){
                ProductSimilar::create([
                    'product_id' => $product->id,
                    'similar_id' => $similarId
                ]);
            }
            foreach ($relatedIds as $relatedId){
                ProductRelated::create([
                    'product_id' => $product->id,
                    'related_id' => $relatedId
                ]);
            }
        }

    }
}
