<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Parameter extends Model
{
    public $attributes = [
        'pos' => 100,
        'is_active' => 1,
        'is_collapsed' => 0
    ];

    public $guarded = [];
    public $timestamps = false;
    public function category(){
        $this->belongsTo(Category::class);
    }
}
