<?php

namespace App\ViewComposers;

use App\Models\Menu;
use Illuminate\Support\Facades\Cache;

class MenuComposer
{
    protected $menu;

    public function __construct()
    {
        $this->menu = Menu::with('items')->get();
    }
}
