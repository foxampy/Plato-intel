<section class="s-line s-gray-bg pt-60 pb-30">
    <div class="container">
        <div class="row">
            <div class="col-xxl-9 col-xl-11 col-12">
                <article class="article _h6 mb-40">
                    {!! setting('general.catalog_text') !!}
                </article>
            </div>
        </div>
        <div class="w-index-category-list">
            <div class="row">
                @foreach($categories as $category)
                <div class="col-xl-4 col-md-6 col-12 col pb-30">
                    <div class="w-index-category-list-item">
                        <a href="{{route('catalog',$category->link())}}" class="block__link">
                            <img src="{{zImage::resize($category->image, $category::LIST_IMAGE_SIZES,'h')}}" class="block" alt="{{$category->name}}">
                            <div class="w-absolute-name">
                                <div class="name">{{$category->name}}</div>
                            </div>
                        </a>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</section>
