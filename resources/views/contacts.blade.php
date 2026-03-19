@extends('layouts.app',['headerClass' => 's-inner-header'])
@section('content')
    @include('common.breadcrumbs')
    <section class="s-line md-pt-20 pt-0 pb-50">
        <div class="container">
            <h1 class="pagetitle md-mb-30 mb-20">{{$page->h1 ?? $page->name}}</h1>
            <div class="row">
                <div class="col-xxl-5 col-lg-6 col-12 pb-20">
                    <div class="mb-40">
                        <div class="s-name _h4 semibold mb-20">ООО «Плато - Интел»</div>
                        @if(setting('general.address'))
                        <div class="mb-30">
                            <div>Адрес компании</div>
                            <div class="_h5 semibold">{{setting('general.address')}}</div>
                        </div>
                        @endif
                        <div class="row mb-20">
                            @if(setting('general.phone_city'))
                            <div class="col-auto mb-10">
                                <div>Многоканальный</div>
                                <div class="phone _h5 semibold">
                                    @include('parts.phone',['class' => 'phone__link color-black no-underline', 'phone' => setting('general.phone_city')])
                                </div>
                            </div>
                            @endif
                            @if(setting('general.phone_mts'))
                            <div class="col-auto mb-10">
                                <div>MTS</div>
                                <div class="phone _h5 semibold">
                                    @include('parts.phone',['class' => 'phone__link color-black no-underline', 'phone' => setting('general.phone_mts')])
                                </div>
                            </div>
                            @endif
                        </div>

                        <div class="row align-items-center mb-20">
                            @if(setting('general.phone_a1'))
                            <div class="col-auto mb-10">
                                <div>А1</div>
                                <div class="phone _h5 semibold">
                                    @include('parts.phone',['class' => 'phone__link color-black no-underline', 'phone' => setting('general.phone_a1')])
                                </div>
                            </div>
                            @endif
                            <div class="col-auto mb-10">
                                <div class="row sm-gutters justify-content-xl-start justify-content-center center">
                                    @include('parts.messengers')
                                </div>
                            </div>
                        </div>
                        @if(setting('general.email'))
                        <div class="mb-30">
                            <div>По всем вопросам</div>
                            <div class="phone _h5 semibold">
                                <a href="mailto:{{setting('general.email')}}" class="phone__link mail no-underline">{{setting('general.email')}}</a>
                            </div>
                        </div>
                        @endif
                    </div>
                    @include('forms.feedback')
                </div>
                <div class="col-xxl-6 offset-xxl-1 col-lg-6 col-12 pb-20 lg-pt-0 pt-20">
                    <div id="map" class="ymap"></div>
                </div>
            </div>
        </div>
    </section>
    @include('parts.advantages')
@endsection
@section('scripts')
    <script>
        let coords = [{{setting('contacts.coords')}}];
        let baloonText = '{{setting('contacts.map_text') ?? 'Наш адрес'}}';
    </script>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=964c4795-841c-462e-981e-d2d2bdc94ffe&lang=ru-RU" type="text/javascript"></script>
    <script type="text/javascript" src="{{asset('js/map.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/sweetalert2.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/jquery.mask.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/js-z-valid.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/valid.js')}}"></script>
    <script>
        $(document).ready(function (){
            $("form [name=phone]").mask('+375 (00) 000-00-00', {placeholder: "+375 (__) ___-__-__"});
        });
    </script>
@endsection
