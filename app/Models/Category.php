<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $attributes = [
        'pos' => 100,
    ];
    public const LIST_IMAGE_SIZES = [288,191];
    public $guarded = [];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function categories(){
        return $this->hasMany(Category::class)->whereIsActive(1)->orderBy('pos');
    }

    public function products(){
        return $this->hasMany(Product::class)->whereIsActive(1)->orderBy('pos');
    }

    public function filterParameters(){
        return $this->hasMany(Parameter::class)
            ->whereIsActive(1)
            ->whereShowFilter(1)
            ->orderBy('pos');
    }


    public function parameters(){
        return $this->hasMany(Parameter::class)
            ->whereIsActive(1)
            ->orderBy('pos');
    }


    public function link(){
        $urlParts = [$this->slug];
        $category = $this;
        while($category->category){
            $category = $category->category;
            $urlParts[] = $category->slug;
        }
        return implode('/',array_reverse($urlParts));
    }
}
