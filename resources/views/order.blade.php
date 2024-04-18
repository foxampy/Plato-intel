@extends('layouts.app')
@section('content')
    @include('common.breadcrumbs')
    <section class="md-pt-20 pt-0">
        <div class="container">
            <h1 class="pagetitle md-mb-30 mb-20">{{$page->h1 ?? $page->name}}</h1>
            @include('parts.cart')
        </div>
    </section>
    @if($products->count())
        <section class="s-line pt-10 pb-50">
            <div class="container">
                <div class="s-name _h2 bold mb-20">Оформление заказа</div>
                <form class="row" id="_js-order-fields" method="post" action="/create-order">
                    <div class="col-xxl-5 col-lg-6 col-12 order-lg-1 order-2 pb-20">
                        <div class="s-name _h3 semibold mb-10">Данные получателя</div>
                        <div class="mb-10"><span class="color-red">*</span> поля обязательны для заполнения</div>
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="input label-top mb-15">
                                    <label class="label">Ф.И.О <span class="color-red">*</span></label>
                                    <div class="input icon-end">
                                        <input name="name" type="text" class="input__default" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="input label-top mb-15">
                                    <label class="label">Название компании</label>
                                    <div class="input icon-end">
                                        <input name="organization" type="text" class="input__default" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="input label-top mb-15">
                                    <label class="label">Контактный телефон <span class="color-red">*</span></label>
                                    <div class="input icon-end">
                                        <input name="phone" type="text" class="input__default" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="input label-top mb-15">
                                    <label class="label">Email <span class="color-red">*</span></label>
                                    <div class="input icon-end">
                                        <input name="email" type="text" class="input__default" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="input label-top mb-15">
                                    <label class="label">Юридический адрес</label>
                                    <div class="input icon-end">
                                        <input name="address2" type="text" class="input__default" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="input label-top mb-15">
                                    <label class="label">ИНН</label>
                                    <div class="input icon-end">
                                        <input name="requisites" type="text" class="input__default" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="input label-top mb-15">
                                    <label class="label">Комментарий к заказу</label>
                                    <div class="input icon-end">
                                        <textarea name="message" class="textarea__default"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-5 offset-xxl-1 col-lg-6 col-12 order-lg-2 order-1 pb-20">
                        <div class="s-name _h3 semibold mb-10">Получение товара</div>
                        <div class="mb-10"><span class="color-red">*</span> поля обязательны для заполнения</div>

                        <div class="mb-20">
                            <div class="mb-10">
                                Выберите способ доставки
                            </div>
                            <div class="row">
                                @foreach($deliveryTypes as $deliveryType)
                                <div class="col-auto">
                                    <div class="custom-selector radio mb-5">
                                        <label class="block">
                                            <div class="input">
                                                <input type="radio" name="delivery" value="{{$deliveryType->id}}" class="selector hidden" checked="">
                                                <div class="styled-figure">
                                                    <div class="border">
                                                        <div class="inset-figure"></div>
                                                    </div>
                                                </div>
                                                <div class="label label-inner">{{$deliveryType->name}}</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="input label-top mb-15">
                                    <label class="label">Адрес доставки <span class="color-red">*</span></label>
                                    <div class="input icon-end">
                                        <input name="address" type="text" class="input__default" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="mb-25">
                    <div class="mb-5">Итого товаров: <b class="_js-cart-items">{{$itemsCountText}}</b></div>
                    <div class="row sm-gutters align-items-end">
                        <div class="col-auto"><div class="mb-5">На сумму:</div></div>
                        <div class="col-auto"><div class="_h4 bold static _js-cart-detail-total">{{$totalText}}</div></div>
                    </div>
                </div>
                <div class="w-button">
                    <div class="row">
                        <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12">
                            <button type="submit"  class="button block _js-submit-order">Отправить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


@endif



@endsection


@section('scripts')
    <script type="text/javascript" src="{{asset('js/order.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/sweetalert2.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/jquery.mask.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/js-z-valid.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/valid.js')}}"></script>
    <script>
        $(document).ready(function (){
            $("form [name=phone]").mask('+375 (00) 000-00-00', {placeholder: "+375 (__) ___-__-__"});
        });
    </script>
@endsection