@if($products->count())
<div class="_js-cart">
    <div class="w-cart-list">
        <div class="w-cart-list-item head">
            <div class="row row-cart-list-item pt-10">
                <div class="col-image col pb-10">
                    Название товара
                </div>
                <div class="col-name col pb-10">

                </div>
                <div class="col-controlls col">
                    <div class="row row-controlls justify-content-between sm-gutters">
                        <div class="col-xxl-3 col-xl-3 col-md-12 col-4 col-price col pb-10">
                            Цена за 1 шт.
                        </div>
                        <div class="col-xxl-4 col-xl-5 col-md-12 col-4 col-pcs col pb-10">
                            Кол-во
                        </div>
                        <div class="col-xxl-4 col-xl-3 col-md-12 col-4 col-price total col sm-pb-10 pb-0">
                            Сумма
                        </div>
                    </div>
                </div>
                <div class="col-delete col"></div>
            </div>
        </div>
    </div>
    <div class="w-cart-list">
        @foreach($products as $key=>$product)
            <div class="w-cart-list-item _js-cart-item" data-id="{{$product->id}}">
                <div class="row row-cart-list-item pt-10">
                    <div class="col-image col pb-10">
                        <div class="image">
                            <a href="{{route('catalog',$product->link())}}" class="image__link block__link">
                                <img src="{{zImage::resize($product->image, $product::IMAGE_SIZES['small'])}}" alt="{{$product->name}}">
                            </a>
                        </div>
                    </div>
                    <div class="col-name col pb-10">
                        <div class="name _h5 bold mb-5">
                            <a href="{{route('catalog',$product->link())}}" class="name__link no-underline color-black">
                                <span class="dashed">{{$product->name}}</span>
                            </a>
                        </div>
                        @if($product->vendor_code)
                        <div class="mb-5">Арт.: {{$product->vendor_code}}</div>
                        @endif
                        <div class="mb-5">{!! $product->preview_text !!}</div>
                    </div>
                    <div class="col-controlls col">
                        <div class="row row-controlls justify-content-between sm-gutters">
                            <div class="col-xxl-3 col-xl-3 col-md-12 col-4 col-price col pb-10">
                                <div class="mobile-description">Цена:</div>
                                @if($product->old_price)<div class="price old">{{$product->old_price_text}}</div>@endif
                                <div class="price _h5 bold">{{$product->price_text}}</div>
                            </div>
                            <div class="col-xxl-4 col-xl-5 col-md-12 col-4 col-pcs col pb-10">
                                <div class="_js-pcscontrolls pcscontrolls mb-10">
                                    <a class="btn fcm left minus _js-b-minus">
                                        <svg width="20" height="20" viewBox="0 0 34 5" xmlns="http://www.w3.org/2000/svg"><path d="M0.333496 2.75008C0.333496 2.19755 0.55299 1.66764 0.943691 1.27694C1.33439 0.886241 1.8643 0.666748 2.41683 0.666748H31.5835C32.136 0.666748 32.6659 0.886241 33.0566 1.27694C33.4473 1.66764 33.6668 2.19755 33.6668 2.75008C33.6668 3.30262 33.4473 3.83252 33.0566 4.22322C32.6659 4.61392 32.136 4.83341 31.5835 4.83341H2.41683C1.8643 4.83341 1.33439 4.61392 0.943691 4.22322C0.55299 3.83252 0.333496 3.30262 0.333496 2.75008Z"></path></svg>
                                    </a>
                                    <input type="text" data-id="{{$product->id}}" value="{{$product->cartCount}}" class="input__default _js-cart-count">
                                    <a class="btn fcm right plus _js-b-plus">
                                        <svg width="20" height="20" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><path d="M0 17.0833C0 16.5308 0.219494 16.0009 0.610195 15.6102C1.0009 15.2195 1.5308 15 2.08333 15H31.25C31.8025 15 32.3324 15.2195 32.7231 15.6102C33.1138 16.0009 33.3333 16.5308 33.3333 17.0833C33.3333 17.6359 33.1138 18.1658 32.7231 18.5565C32.3324 18.9472 31.8025 19.1667 31.25 19.1667H2.08333C1.5308 19.1667 1.0009 18.9472 0.610195 18.5565C0.219494 18.1658 0 17.6359 0 17.0833Z"></path><path d="M17.0833 0C17.6359 0 18.1658 0.219493 18.5565 0.610194C18.9472 1.00089 19.1667 1.5308 19.1667 2.08333V31.25C19.1667 31.8025 18.9472 32.3324 18.5565 32.7231C18.1658 33.1138 17.6359 33.3333 17.0833 33.3333C16.5308 33.3333 16.0009 33.1138 15.6102 32.7231C15.2195 32.3324 15 31.8025 15 31.25V2.08333C15 1.5308 15.2195 1.00089 15.6102 0.610194C16.0009 0.219493 16.5308 0 17.0833 0Z"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-3 col-md-12 col-4 col-price total col sm-pb-10 pb-0">
                                <div class="w-price-total-mobile-bg">
                                    <div class="mobile-description">Сумма:</div>
                                    <div class="price _h5 bold sum">{{$product->cartPriceText}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-delete col">
                        <a data-id="{{$product->id}}" class="close relative _js-cart-remove"></a>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    <div class="w-cart-list">
        <div class="w-cart-total pt-30 pb-30">
            <div class="row justify-content-md-end justify-content-center">
                <div class="col-auto">
                    <a class="clear-cart__link color-black no-underline _js-cart-clear">
                        <div class="row align-items-center md-gutters">
                            <div class="col-auto"><span class="dashed">Удалить все из корзины</span></div>
                            <div class="col-auto"><div class="close relative"></div></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@else
    <p class="_h4">Ваша корзина пуста.</p>
    <script>
        cartRedirect();
    </script>
@endif
