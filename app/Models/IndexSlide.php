<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IndexSlide extends Model
{
    public const SIZES = [1903,700];
    public  $timestamps = false;
    public $attributes = [
        'pos' => 100
    ];
}
