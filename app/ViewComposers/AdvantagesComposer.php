<?php

namespace App\ViewComposers;

use App\Models\Advantage;
use Illuminate\View\View;

class AdvantagesComposer
{

    public function compose(View $view)
    {
        $advantages = Advantage::whereIsActive(1)->orderBy('pos')->get();
        return $view->with('advantages', $advantages);
    }
}
