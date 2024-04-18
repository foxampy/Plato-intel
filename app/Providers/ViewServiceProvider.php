<?php

namespace App\Providers;

use App\ViewComposers\AdvantagesComposer;
use App\ViewComposers\CategoriesComposer;
use App\ViewComposers\FooterMenuComposer;
use App\ViewComposers\MainMenuComposer;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

        view()->composer(['common.header', 'common.footer'], MainMenuComposer::class);
        view()->composer(['common.footer'], FooterMenuComposer::class);
        view()->composer(['common.header','common.footer'], CategoriesComposer::class);
        view()->composer(['parts.advantages'], AdvantagesComposer::class);

    }
}
