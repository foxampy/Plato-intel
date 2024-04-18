<?php

namespace App\Services;

use App\Models\DeliveryType;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Carbon\Carbon;

class OrderService
{

    public $request;


    public function __construct(Request $request)
    {
        $this->request = $request->all();
    }


    public function create(){
        $cartService = new CartService();
        $productsText = '';
        $products = $cartService->getProducts();

        foreach ($products as $product){
            if(isset($cartService->items[$product->id])){
                /*$product->update([
                    'count' => $product->count - $cartService->items[$product->id]
                ]);*/
                $productsText .= $product->name.'(Арт. '.$product->vendor_code.') - '.$product->cartCount.'<br/>';
            }
        }

        //$deliveryPrice = DeliveryType::whereId($this->request['delivery'])->first()->price;
        $deliveryPrice = 0;

        return Order::create([
            'name' => $this->request['name'],
            'phone' => $this->request['phone'],
            'email' => $this->request['email'],
            'address' => $this->request['address'],
            'address2' => $this->request['address2'],
            'organization' => $this->request['organization'],
            'requisites' => $this->request['requisites'] ?? null,
            'message' => $this->request['message'] ?? null,
            'delivery_type_id' => $this->request['delivery'],
            'delivery_price' => $deliveryPrice,
            'total' => $cartService->getFinal(),
            'items' => json_encode($cartService->items),
            'products_text' => $productsText
        ]);
    }


   



}
