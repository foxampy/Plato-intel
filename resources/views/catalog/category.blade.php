@extends('layouts.app')
@section('content')
    @include('common.breadcrumbs')
    <section class="s-line _js-mobile-menu catalog-nav-list md-pt-20 pt-0 pb-50">
        <div class="container">
            <h1 class="pagetitle md-mb-30 mb-20">{{$page->h1 ?? $page->name}}</h1>
            <div class="row">
                <div class="col-xl-3 col-12 xl-pb-30 pb-20">
                    <div class="w-mobile-navigation-button">
                        <a href="" class="button block yellow btn-mobile-catalog _js-b-toggle-navigation-menu" data-nav-id="catalog-nav-list">
                            <div class="w-icon-left">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="42" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><path d="m10.92 9.683h-1c-.497 0-.9.403-.9.9s.403.9.9.9h1c.497 0 .9-.403.9-.9s-.403-.9-.9-.9z" data-original="#000000"></path><path d="m22.08 9.683h-7.621c-.497 0-.9.403-.9.9s.403.9.9.9h7.621c.497 0 .9-.403.9-.9s-.403-.9-.9-.9z" data-original="#000000"></path><path d="m10.92 15.1h-1c-.497 0-.9.403-.9.9s.403.9.9.9h1c.497 0 .9-.403.9-.9s-.403-.9-.9-.9z" data-original="#000000"></path><path d="m22.08 15.1h-7.621c-.497 0-.9.403-.9.9s.403.9.9.9h7.621c.497 0 .9-.403.9-.9s-.403-.9-.9-.9z" data-original="#000000"></path><path d="m10.92 20.517h-1c-.497 0-.9.403-.9.9s.403.9.9.9h1c.497 0 .9-.403.9-.9s-.403-.9-.9-.9z" data-original="#000000"></path><path d="m22.08 20.517h-7.621c-.497 0-.9.403-.9.9s.403.9.9.9h7.621c.497 0 .9-.403.9-.9s-.403-.9-.9-.9z" data-original="#000000"></path></svg>
                                </div>
                                <div class="text">Развернуть каталог</div>
                            </div>
                        </a>
                    </div>
                    <div class="navigation-menu left-side _js-navigation-menu catalog-nav-list">
                        <div class="menu-layout body-layout _js-b-toggle-navigation-menu catalog-nav-list" data-nav-id="catalog-nav-list"></div>
                        <div class="mobile-menu-header">
                            Каталог прогдукции
                            <a href="" class="close white _js-b-toggle-navigation-menu catalog-nav-list" data-nav-id="catalog-nav-list"></a>
                        </div>
                        <div class="navigation-menu-body">
                            <div class="w-aside-catalog-nav">
                                <ul class="ul-aside-catalog-nav">
                                    @foreach($categories as $category)
                                        @if($category->categories->count())
                                            <li class="li _js-toggler-button-parrent {{ Request::is('catalog/'.$category->link().'*') ? '_toggled' : '' }}">
                                                <div class="w-dropper relative">
                                                    <a href="{{route('catalog',$category->link())}}" class="__link parent">{{$category->name}}</a>
                                                    <div class="b-dropper _js-b-toggler-button"></div>
                                                </div>
                                                <div class="inset _js-inset" style="display: {{ Request::is('catalog/'.$category->link().'*') ? 'block' : 'none' }};">
                                                    <div class="bordered">
                                                        <ul class="ul-inset">
                                                            @foreach($category->categories as $subCategory)
                                                                <li class="li {{ Request::is('catalog/'.$subCategory->link().'*') ? '_active' : '' }}"><a href="{{route('catalog',$subCategory->link())}}" class="__link secondary">{{$subCategory->name}}</a></li>
                                                            @endforeach
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        @else
                                            <li class="li _js-toggler-button-parrent {{ Request::is('catalog/'.$category->link().'*') ? '_active' : '' }}">
                                                <a href="{{route('catalog',$category->link())}}" class="__link parent">{{$category->name}}</a>
                                            </li>
                                        @endif
                                    @endforeach

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-catalog-list col-xl-9 col-12 xl-pb-30 pb-20">
                    <div class="w-catalog-list">
                        <div class="row row-catalog-list lg-lg-gutters sm-gutters">
                            @foreach($products as $product)
                                @include('catalog.product-item')
                            @endforeach
                        </div>
                        {{ $products->appends(Request::except('_token'))->links('common.pagination') }}
                    </div>
                </div>
            </div>
        </div>
    </section>
    @if($page->text)
        <section>
            <div class="container">
                <article class="article bigger mb-60">
                    {!! $page->text !!}
                </article>
            </div>
        </section>
    @endif
    @include('parts.advantages')
@endsection
