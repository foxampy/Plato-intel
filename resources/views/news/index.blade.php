@extends('layouts.app', ['baseClass' => 'p-news-list'])
@section('content')
    @include('common.breadcrumbs')
    <section class="s-line md-pt-20 pt-0 pb-50">
        <div class="container">
            <h1 class="pagetitle md-mb-30 mb-20">{{$page->h1 ?? $page->name}}</h1>
            <div class="row">
                <div class="col-xl-8 col-12 pb-40">
                    <div class="w-news-list">
                        @foreach($news as $newsItem)
                            @include('news.item')
                        @endforeach
                    </div>
                    {{ $news->appends(Request::except('_token'))->links('common.pagination') }}
                </div>
                <div class="col-xl-4 col-12 pb-40"></div>
            </div>
        </div>
    </section>
    @include('parts.advantages')
@endsection
