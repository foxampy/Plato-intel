<?php

namespace App\Models;

use App\Traits\SeoTrait;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use SeoTrait;

    public const IMAGE_SIZES = [
        'small' => [330, 245],
        'large' => [1200, 900]
    ];

    public $guarded = [];

    public const PRICE_NOTE = 'c НДС';

    public $attributes = [
        'pos' => 100,
    ];

    public function getCountAttribute()
    {
        return 99999;
    }


    public function getDiscountPercentAttribute()
    {
        return $this->oldPrice ? '- '.((1 - round($this->price / $this->oldPrice, 2)) * 100).'%' : false;
    }

    public function getPriceTextAttribute()
    {
        return number_format($this->price, '2', ',', ' ').' руб.';
    }

    public function getOldPriceTextAttribute()
    {
        return $this->oldPrice ? number_format($this->oldPrice, '2', ',', ' ').' руб.' : false;
    }

    public function getWholesalePriceTextAttribute()
    {
        return number_format($this->wholesalePrice, '2', ',', ' ').' руб.';
    }

    public function getWholesaleOldPriceTextAttribute()
    {
        return $this->wholesaleOldPrice ? number_format($this->wholesaleOldPrice, '2', ',', ' ').' руб.' : false;
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }


    public function parameters()
    {
        return $this->hasMany(ProductParameter::class)->with('parameter');
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function stickers()
    {
        return $this->belongsToMany(Sticker::class);
    }

    public function link()
    {
        $urlParts = [$this->slug];
        $category = $this;
        while ($category->category) {
            $category = $category->category;
            $urlParts[] = $category->slug;
        }
        return implode('/', array_reverse($urlParts));
    }
}
