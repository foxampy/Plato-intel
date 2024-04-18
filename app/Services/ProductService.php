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

class ProductService
{
    private $product;
    public $parameterGroups;
    public $mainParameters;
    public $similarProducts;
    public $relatedProducts;


    public function __construct($product)
    {
        $this->product = $product;
        $this->similarProducts = $this->getSimilarProducts();
    }


    private function getSimilarProducts(){
        return Product::whereCategoryId($this->product->category_id)->where('id','!=',$this->product->id)->take(4)->inRandomOrder()->get();
    }




}
