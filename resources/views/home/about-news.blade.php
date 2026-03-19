<section class="s-line s-gray-bg pt-60 pb-20">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 col-12 pb-40">
                <article class="article _h6">
                    {!! setting('general.about_left') !!}
                </article>
                <div class="w-button mt-30">
                    <div class="row">
                        <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12">
                            <a href="{{route('news.index')}}" class="button block">Новости и события</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-12 pb-40">
                <div class="w-news-list-aside">
                    <div class="row">
                        @foreach($newsMain as $newsItem)
                            <div class="col-xl-12 col-md-6 col-sm-12 col-12 mb-30">
                                <div class="w-news-list-aside-item">
                                    <a href="{{route('news.show',$newsItem->slug)}}" class="block__link color-black no-underline">
                                        <div class="row row-news-list-aside-item">
                                            <div class="col-image col">
                                                <div class="image">
                                                    <img class="block" src="{{zImage::resize($newsItem->image, $newsItem::IMAGE_SIZES['large'])}}" alt="{{$newsItem->name}}">
                                                </div>
                                            </div>
                                            <div class="col-content col">
                                                <div class="name _h6 semibold mb-5">
                                                    <span class="dashed">{{$newsItem->name}}</span>
                                                </div>
                                                <div class="date">{{$newsItem->created_at->translatedFormat('d F Y')}}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>



