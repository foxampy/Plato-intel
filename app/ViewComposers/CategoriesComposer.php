<?php

namespace App\ViewComposers;

use App\Models\Advantage;
use App\Models\Category;
use Illuminate\View\View;

class CategoriesComposer
{

    public function compose(View $view)
    {
        $categories = Category::query()
            ->with('categories')
            ->whereNull('category_id')
            ->whereIsActive(1)
            ->orderBy('pos')
            ->get();
        return $view->with('categories', $categories);
    }
}
