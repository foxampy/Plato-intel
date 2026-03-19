@extends('layouts.app')
@section('content')
    @include('common.breadcrumbs')
    <section class="s-line _js-mobile-menu catalog-filters md-pt-20 pt-0 pb-50">
        <div class="container">
            <h1 class="pagetitle md-mb-30 mb-20">{{$page->h1 ?? $page->name}}</h1>
            <div class="row">
                <div class="col-xl-3 col-12 xl-pb-30 pb-20">
                    <div class="w-mobile-navigation-button">
                        <a href="" class="button block yellow btn-mobile-filters _js-b-toggle-navigation-menu" data-nav-id="catalog-filters">
                            <div class="w-icon-left">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve">	<path d="m16 90.259h243.605c7.342 33.419 37.186 58.508 72.778 58.508s65.436-25.088 72.778-58.508h90.839c8.836 0 16-7.164 16-16s-7.164-16-16-16h-90.847c-7.356-33.402-37.241-58.507-72.77-58.507-35.548 0-65.419 25.101-72.772 58.507h-243.611c-8.836 0-16 7.164-16 16s7.164 16 16 16zm273.877-15.958c0-.057.001-.115.001-.172.07-23.367 19.137-42.376 42.505-42.376 23.335 0 42.403 18.983 42.504 42.339l.003.235c-.037 23.407-19.091 42.441-42.507 42.441-23.406 0-42.454-19.015-42.507-42.408zm206.123 347.439h-90.847c-7.357-33.401-37.241-58.507-72.77-58.507-35.548 0-65.419 25.102-72.772 58.507h-243.611c-8.836 0-16 7.163-16 16s7.164 16 16 16h243.605c7.342 33.419 37.186 58.508 72.778 58.508s65.436-25.089 72.778-58.508h90.839c8.836 0 16-7.163 16-16s-7.164-16-16-16zm-163.617 58.508c-23.406 0-42.454-19.015-42.507-42.408l.001-.058c0-.058.001-.115.001-.172.07-23.367 19.137-42.377 42.505-42.377 23.335 0 42.403 18.983 42.504 42.338l.003.235c-.034 23.41-19.089 42.442-42.507 42.442zm163.617-240.248h-243.605c-7.342-33.419-37.186-58.507-72.778-58.507s-65.436 25.088-72.778 58.507h-90.839c-8.836 0-16 7.164-16 16 0 8.837 7.164 16 16 16h90.847c7.357 33.401 37.241 58.507 72.77 58.507 35.548 0 65.419-25.102 72.772-58.507h243.611c8.836 0 16-7.163 16-16 0-8.836-7.164-16-16-16zm-273.877 15.958c0 .058-.001.115-.001.172-.07 23.367-19.137 42.376-42.505 42.376-23.335 0-42.403-18.983-42.504-42.338l-.003-.234c.035-23.41 19.09-42.441 42.507-42.441 23.406 0 42.454 19.014 42.507 42.408z" data-original="#000000"></path></svg>
                                </div>
                                <div class="text">Подобрать по параметрам</div>
                            </div>
                        </a>
                    </div>
                    <div class="navigation-menu left-side _js-navigation-menu catalog-filters">
                        <div class="menu-layout body-layout _js-b-toggle-navigation-menu catalog-filters" data-nav-id="catalog-filters"></div>
                        <div class="mobile-menu-header">
                            Подобрать по параметрам
                            <a href="" class="close white _js-b-toggle-navigation-menu catalog-filters" data-nav-id="catalog-filters"></a>
                        </div>
                        @include('catalog.filter')
                    </div>
                </div>

                <div class="col-catalog-list col-xl-9 col-12 xl-pb-30 pb-20">
                    <div class="row no-gutters">
                        <div class="col-12 order-xl-3 order-2">
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
