@extends('layouts.app',['headerClass' => 'absolute'])
@section('content')
    <section class="s-line md-pt-20 pt-0 pb-50">
        <div class="container">
            <h1 class="pagetitle md-mb-30 mb-20">{{$page->h1 ?? $page->name}}</h1>
            <div class="row">
                <div class="col-xl-8 col-12 pb-40">
                    <article class="article _h6">
                        {!! $page->text !!}
                    </article>
                    <div class="w-yandex-share pt-30 pb-20">
                        Поделиться:
                        <div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,gplus,twitter,viber,whatsapp,skype,telegram"></div>
                    </div>
                </div>
                <div class="col-xl-4 col-12 pb-40">
                    <div class="w-news-list-aside">
                        <div class="row">
                            @foreach($news as $newsItem)
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
    @include('parts.advantages')
@endsection
