<?php

namespace App\Http\Controllers\Voyager;

use App\Models\Order;
use App\Models\OrderMenu;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Http\Controllers\VoyagerBaseController as BaseVoyagerBaseController;

class VoyagerCalendarController extends BaseVoyagerBaseController
{
    public function index(Request $request)
    {
        if(!Auth::user()){
            abort(404);
        }
        $view = "voyager::calendar.browse";
        return Voyager::view($view, []);
    }

    public function detail(Request $request)
    {
        if(!Auth::user() || !$request->query('date')){
            abort(404);
        }

        $date = $request->query('date');
        $orders = Order::where('date',$date)->orderBy('id')->get();

        foreach ($orders as $order){
            $dishesTypes = [];
            foreach(json_decode($order->dishes) as $dish){
                $dishModel = OrderMenu::where('id',$dish->id)->first();
                $dishesTypes[OrderMenu::TYPES_PLURAL[$dish->type]][] = [
                    'name' => $dishModel->name,
                    'count' => $dish->count
                ];
            }
            $order->dishesTypes = $dishesTypes;
        }


        $view = "voyager::calendar.detail";
        return Voyager::view($view, [
            'date' => $date,
            'orders' => $orders
        ]);
    }


    public function getOrdersAsJson(){

        $orders = Order::get();

        $data = [];
        $ordersByDay = [];
        foreach ($orders as $order) {
            $orderDate = Carbon::parse($order->date . ' ' . $order->time . ':00')->format("Y-m-d H:i");
            $ordersByDay[$orderDate][] = $order;
        }
        foreach ($ordersByDay as $date=>$dayOrders){
            $allDayDishes = [];
            foreach($dayOrders as $order){
                $orderDishes = json_decode($order->dishes);
                foreach ($orderDishes as $orderDish){
                    $dish = OrderMenu::whereId($orderDish->id)->first();
                    if($dish){
                        $type = OrderMenu::TYPES_PLURAL[$orderDish->type];
                        if(isset($allDayDishes[$type][$dish->name])){
                            $allDayDishes[$type][$dish->name] += $orderDish->count;
                        }else{
                            $allDayDishes[$type][$dish->name] = $orderDish->count;
                        }
                    }
                }

            }
            $ordersByDay[$date] = $allDayDishes;
        }
        foreach ($ordersByDay as $date=>$group){
            $text = '';
            foreach ($group as $groupName=>$dishes){
                $text .= '<span class="dishType">'.$groupName.':</span>';
                foreach($dishes as $dish=>$count){
                    $text .= $dish.' - '.$count.'<br/>';
                }
            }
            $text .= '<a target="_blank" class="button more" href="/admin/calendar/detail/?date='.Carbon::parse($date)->format('Y-m-d').'">Подробнее</a>';
            $section_id = Carbon::parse($date)->format("H");
            $data[] = [
                'start_date' => Carbon::parse($date)->startOfDay()->format("Y-m-d H:i"),
                'name' => '' ,
                'start_date_text' => (string)Carbon::parse($date)->format("Y-m-d H:i"),
                "end_date_text" =>  (string)Carbon::parse($date)->addHour()->format("Y-m-d H:i"),
                "end_date" =>  Carbon::parse($date)->startOfDay()->addHour()->format("Y-m-d H:i"),
                "text" => $text,
                'section_id' => $section_id
            ];
        }
        $data = [
            'data' => $data
        ];

        return response()->json($data,  200, [], JSON_UNESCAPED_UNICODE);
    }
}


