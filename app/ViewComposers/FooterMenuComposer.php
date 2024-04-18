<?php

namespace App\ViewComposers;

use Illuminate\View\View;

class FooterMenuComposer extends MenuComposer
{
    protected const MAIN_MENU_ID = 3;

    public function compose(View $view)
    {
        $menu = $this->menu->where('id',self::MAIN_MENU_ID)->first();
        return $view->with('footerMenus', $menu->items);
    }
}
