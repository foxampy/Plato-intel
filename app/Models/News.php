<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class News extends Model
{
    public $attributes = [
        'pos' => 100
    ];

    public const IMAGE_SIZES = [
        'small' => [100,100],
        'large' => [590,295]
    ];

    public function getDateTextAttribute(){
        return Carbon::parse($this->created_at)->format('d.m.Y');
    }
}
