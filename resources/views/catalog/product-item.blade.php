<div class="{{$class ?? 'col-lg-4 col-md-4 col-xxs-6 col-12 col lg-mb-30 sm-mb-10 mb-35'}}">
    <div class="w-catalog-list-item">
        <div class="frame">
            <div class="top">
                <a href="{{route('catalog',$product->link())}}" class="block__link image__link">
                    <img src="{{zImage::resize($product->image, $product::IMAGE_SIZES['small'],'h')}}" alt="{{$product->name}}" class="block">
                </a>
                @if($product->stickers->count())
                <div class="w-sticker">
                    @foreach($product->stickers as $sticker)
                        <div class="sticker" style="background: {{$sticker->color}}">{{$sticker->name}}</div>
                    @endforeach
                </div>
                @endif
            </div>
            <div class="bottom">
                <div class="name _h6 bold sm-mb-10 mb-5">
                    <a href="{{route('catalog',$product->link())}}" class="name__link color-black no-underline"><span class="dashed">{{$product->name}}</span></a>
                </div>
                @if($product->vendor_code)
                <div class="art color-gray mb-5">
                    Арт.: {{$product->vendor_code}}
                </div>
                @endif
				@if($product->price > 0)
					<div class="w-price mb-10">
						<div class="price _h6 static bold">{{$product->price_text}}</div>
					</div>
					@include('parts.product-add-cart')
                @else
                    <div class="w-price mb-10">
                        <div class="price _h6 static bold on-order" style="color:#704813">Под заказ</div>
                    </div>
				@endif
            </div>
        </div>
    </div>
</div>
