<div class="mb-30">
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
                    <div class="date">{{$newsItem->created_at->format('d.m.y')}}</div>
                    <div class="description _h6 md-mt-10 mt-5">{!! $newsItem->preview_text !!}</div>
                </div>
            </div>
        </a>
    </div>
</div>
