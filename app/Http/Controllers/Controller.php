<?php

namespace App\Http\Controllers;

use App\Services\CartService;
use App\Services\CompareService;
use App\Services\PageService;
use App\Services\WishlistService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\View;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    protected $pageService;

    public function __construct(PageService $page)
    {
        $this->pageService = $page;
        $this->middleware(function ($request, $next) {

            //cart
            $cartService = new CartService();
            View::share('cart',$cartService);

            return $next($request);
        });
        View::share('acceptCookie', \request()->cookie('hide-cookie-message'));
    }
}
