<?php

namespace App\Traits;

use App\Models\Seo;
use Illuminate\Database\Eloquent\Relations\HasOne;

trait SeoTrait
{
    public function seo(): HasOne
    {
        return $this->hasOne(Seo::class, 'item_id')->where('table', $this->getTable());
    }
}