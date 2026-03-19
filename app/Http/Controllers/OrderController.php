<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddToCartRequest;
use App\Http\Requests\SetCartRequest;
use App\Models\DeliveryType;
use App\Models\Product;
use App\Services\CartService;
use App\Services\PageService;
use App\Services\WishlistService;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    private $cartService;

    public function __construct(PageService $pageService)
    {

        $this->middleware(function ($request, $next)  {
            $this->cartService = new CartService();
            return $next($request);
        });

        parent::__construct($pageService);

    }


    public function index(){
        $products = $this->cartService->getProducts();

        return view('order', [
            'page' => $this->pageService->getPage('order'),
            'products' => $products,
            'itemsCountText' => $this->cartService->transChoice($products->count(),'cart.items'),
            'productsCountText' => $this->cartService->transChoice($products->sum('cartCount'),'cart.products'),
            'totalText' => $this->cartService->getTotal(),
            'finalText' => $this->cartService->getFinal(),
            'deliveryTypes' => DeliveryType::whereIsActive(1)->orderBy('pos')->get()
        ]);
    }


    //ajax
    public function add(AddToCartRequest $request){
        $this->cartService->add($request->id, $request->count);
        return [
            'action' => $this->cartService->lastAction,
            'text' => $this->cartService::TEXTS,
            'count' => $this->cartService->count
        ];
    }

    public function set(SetCartRequest $request){
        $this->cartService->set($request->id, $request->count, $request->delivery);
        $products = $this->cartService->getProducts();
        return [
            'count' => $this->cartService->count,
            'itemsCountText' => $this->cartService->transChoice($products->count(),'cart.items'),
            'productsCountText' => $this->cartService->transChoice($products->sum('cartCount'),'cart.products'),
            'totalText' => $this->cartService->getTotal(),
            'product' => $products->where('id',$request->id)->first(),
            'finalText' => $this->cartService->getFinal()
        ];
    }

    public function deliveryUpdate(Request $request){
        $this->cartService->deliveryUpdate($request->delivery);
        $products = $this->cartService->getProducts();
        return [
            'finalText' => $this->cartService->getFinal()
        ];
    }

    public function addRemove(Request $request){
        $this->cartService->addRemove($request->id);
        return [
            'action' => $this->cartService->lastAction,
            'text' => $this->cartService::TEXTS,
            'count' => $this->cartService->count
        ];
    }

    public function removeAll(Request $request){

        $this->cartService->removeAll($request->id);
        return [
            'action' => $this->cartService->lastAction,
            'text' => $this->cartService::TEXTS,
            'count' => $this->cartService->count
        ];
    }

    public function removeByIds(Request $request){
        $this->cartService->removeByIds($request->ids, $request->delivery);
        $products = $this->cartService->getProducts();
        return [
            'count' => $this->cartService->count,
            'itemsCountText' => $this->cartService->transChoice($products->count(),'cart.items'),
            'productsCountText' => $this->cartService->transChoice($products->sum('cartCount'),'cart.products'),
            'totalText' => $this->cartService->getTotal(),
            'finalText' => $this->cartService->getFinal()
        ];
    }

    public function clear(Request $request){
        $this->cartService->clear();
        $products = $this->cartService->getProducts();
        return [
            'count' => $this->cartService->count,
            'itemsCountText' => $this->cartService->transChoice($products->count(),'cart.items'),
            'productsCountText' => $this->cartService->transChoice($products->sum('cartCount'),'cart.products'),
            'totalText' => $this->cartService->getTotal(),
            'finalText' => $this->cartService->getFinal()
        ];
    }

    public function removeById(Request $request){
        $this->cartService->removeById($request->id, $request->delivery);
        $products = $this->cartService->getProducts();
        return [
            'count' => $this->cartService->count,
            'itemsCountText' => $this->cartService->transChoice($products->count(),'cart.items'),
            'productsCountText' => $this->cartService->transChoice($products->sum('cartCount'),'cart.products'),
            'totalText' => $this->cartService->getTotal(),
            'finalText' => $this->cartService->getFinal()
        ];
    }







}
