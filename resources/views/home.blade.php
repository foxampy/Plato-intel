@extends('layouts.app',['headerClass' => 'absolute'])
@section('breadcrumbs') @show
@section('content')
    @include('home.slider')
    @include('parts.advantages')
    @include('home.catalog')
    @include('parts.products-main')
    @include('home.about-news')

@endsection