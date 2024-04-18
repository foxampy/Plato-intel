<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sticker extends Model
{
    public $timestamps = false;
    public $attributes = [
        'pos' => 100
    ];

    public function products(){
        return $this->belongsToMany(Product::class);
    }
}
