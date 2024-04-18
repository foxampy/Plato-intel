<?php

namespace App\Http\Controllers\Ajax;

use App\Http\Requests\OrderRequest;
use App\Services\CartService;
use App\Services\OrderService;
use App\Services\Support\GrinchService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Routing\Controller as BaseController;

class OrderController extends BaseController
{
    private $cartService;

    public function __construct(CartService $cartService){
        $this->cartService = $cartService;
    }

    public function createOrder(OrderRequest $request){
        $orderService = new OrderService($request);
        $order = $orderService->create();
        $this->cartService->clear();
        return Redirect::back()->with('message','OK');
    }

}
