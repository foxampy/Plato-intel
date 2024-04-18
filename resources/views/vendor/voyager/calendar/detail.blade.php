@extends('vendor.voyager.calendar')

@section('content')
    <style>
        @media print{
            .app-footer, .no-print{display: none}
        }
    </style>
    <div class="container-fluid">
        @if(count($orders))
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Время доставки</th>
                        <th scope="col">Адрес</th>
                        <th scope="col">Координаты</th>
                        <th scope="col">Заказ</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Сообщение</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($orders as $order)
                    <tr>
                        <td>{{$order->name}}</td>
                        <td>{{$order->phone}}</td>
                        <td>{{$order->time}}:00 - {{++$order->time}}:00</td>
                        <td>{{$order->street}}, {{$order->house}}{{$order->building ? ', корпус '.$order->building : ''}}{{$order->flat ? ', кв./оф. '.$order->flat : ''}}</td>
                        <td>{{$order->coords}}</td>
                        <td>
                            @foreach($order->dishesTypes as $type=>$dishes)
                                <strong>{{$type}}:</strong><br/>
                                @foreach($dishes as $dish)
                                    <p>{{$dish['name']}} - {{$dish['count']}}</p>
                                @endforeach
                            @endforeach
                        </td>
                        <td>{{$order->total}} руб.</td>
                        <td>{{$order->message}}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            <button class="no-print" onclick="window.print();">Печать</button>
        @else
            <p>Заказов нет...</p>
        @endif
    </div>
@stop