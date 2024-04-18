<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    public $attributes = [
        'pos' => 100,
    ];
    public const IMAGE_SIZES = [300,150];
    public $guarded = [];
}
