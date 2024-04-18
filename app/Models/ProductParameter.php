<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductParameter extends Model
{
    public $guarded = [];
    public $timestamps = false;

    public function parameter(){
        return $this->belongsTo(Parameter::class);
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
