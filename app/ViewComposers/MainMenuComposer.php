<?php

namespace App\ViewComposers;

use Illuminate\View\View;

class MainMenuComposer extends MenuComposer
{
    protected const MAIN_MENU_ID = 2;

    public function compose(View $view)
    {
        $menu = $this->menu->where('id',self::MAIN_MENU_ID)->first();
        //dd($menu);
        return $view->with('siteMenus', $menu->items);
    }
}
