<?php

namespace App\Services;


use App\Models\DeliveryType;
use App\Models\Product;
use Illuminate\Support\Facades\Session;

class CartService
{

    public array $items = [];
    public int $count;
    public string $lastAction;
    private $delivery;
    public float $total = 0;
    public float $final = 0;

    public const TEXTS = [
        'label' => [
            'added' => 'В корзине',
            'removed' => 'В корзину'
        ],
        'title' => [
            'added' => 'В корзине',
            'removed' => 'В корзину'
        ]
    ];


    public function __construct()
    {
        $this->items = Session::get('cart') ?? [];
        $this->count = array_sum($this->items);

    }

    public function getProducts(){
        if(count($this->items)){
            $productIds = array_keys($this->items);
            $products = Product::whereIn('id',$productIds)->get();
            foreach ($products as $product){
                $product->cartCount = $this->items[$product->id];
                $product->cartPrice = $product->price*$this->items[$product->id];
                $product->cartPriceText = $this->priceText($product->cartPrice);

            }
            $this->setTotal($products);
            $this->setFinal();
            return $products;
        }
        return collect([]);
    }

    private function setTotal($products){
        $total = 0;
        foreach ($products as $product){
            $total += $product->cartPrice;
        }
        $this->total = $total;
    }

    private function setFinal(){

//        if(!$this->delivery){
//            $this->delivery = DeliveryType::whereIsActive(1)->orderBy('pos')->first();
//        }
//
//        $this->final = $this->delivery->price + $this->total;
        //r17
        $this->final = $this->total;
    }

    public function deliveryUpdate($deliveryId){
        $this->delivery = DeliveryType::whereId($deliveryId)->first();
    }

    public function addRemove($id){
        if(!isset($this->items[$id])) {
            $this->items[$id] = 1;
            $this->lastAction = 'added';
        }else{
            unset($this->items[$id]);
            $this->lastAction = 'removed';
        }
        Session::put('cart',$this->items);
        $this->count = array_sum($this->items);
    }

    public function add($id, $count){
        if(!isset($this->items[$id])) {
            $this->items[$id] = $count;
        }else{
            $this->items[$id] += $count;
        }
        $this->lastAction = 'added';
        Session::put('cart',$this->items);
        $this->count = array_sum($this->items);
    }

    public function set($id, $count, $deliveryId){
        if(isset($this->items[$id])) {
            if($count){
                $this->items[$id] = $count;
            }else{
                unset($this->items[$id]);
            }
        }
        Session::put('cart',$this->items);
        $this->delivery = DeliveryType::whereId($deliveryId)->first();
        $this->count = array_sum($this->items);
    }


    public function removeByids($idsImploded, $deliveryId){
        if($idsImploded){
            $ids = explode(',',$idsImploded);
            foreach ($ids as $id){
                if(isset($this->items[$id])) {
                    unset($this->items[$id]);
                }
            }
            Session::put('cart',$this->items);
            $this->delivery = DeliveryType::whereId($deliveryId)->first();
            $this->count = array_sum($this->items);
        }
    }

    public function removeById($id, $deliveryId){
        if($id){
            unset($this->items[$id]);
            Session::put('cart',$this->items);
            $this->delivery = DeliveryType::whereId($deliveryId)->first();
            $this->count = array_sum($this->items);
        }
    }

    public function clear(){
        $this->items = [];
        Session::put('cart',$this->items);
        $this->count = array_sum($this->items);
    }

    public function removeAll($id){
        if(isset($this->items[$id])) {
            unset($this->items[$id]);

        }
        $this->lastAction = 'removed';
        Session::put('cart',$this->items);
        $this->count = array_sum($this->items);
    }

    private function priceText($value){
        return $value ? number_format($value,'2',',',' '). ' руб.' : '0 руб.';
    }

    public function transChoice($count, $vocabulary){
        $num = ($count % 10 == 1) ? 0	: ((($count % 10 >= 2)  && ($count % 10 <= 4))  ? 1 : 2);
        return  $count.' '.trans_choice($vocabulary, $num);
    }

    public function getTotal(){
        return $this->priceText($this->total);
    }

    public function getFinal(){
        return $this->final;
        //return $this->priceText($this->final);
    }



}
