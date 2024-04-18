<head>
    <meta http-equiv="content-type" content="text/html" charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="format-detection" content="telephone=no"/>
    <!--colors-->
    <meta name="theme-color" content="#fff">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @if(isset($seo))
        <title>{{$seo->title}}</title>
        <meta name="title" content="{{$seo->title}}">
        <meta name="description" content="{{$seo->description}}">
    @endif
    <link rel="canonical"
          href="{{ url('/').parse_url(url()->current(), PHP_URL_PATH) }}@if(\request()->routeIs('home'))/@endif"/>
    <link rel="shortcut icon" href="{{asset('i/favicon.png')}}" sizes="any" type="image/svg+xml"/>
    <link rel="stylesheet" href="{{asset('css/sweetalert2.min.css')}}"/>
    <link rel="stylesheet" href="{{asset('css/common.css')}}?v=1.1"/>
    <link rel="stylesheet" href="{{asset('css/ki.css')}}?v=1.01"/>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="{{asset('js/vendor/detectmobilebrowser.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/jquery.fancybox.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/jquery.owl.carousel.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/select2.min.js')}}"></script>
    <script type="text/javascript" src="https://yastatic.net/share2/share.js"></script> <!--поделиться-->
    <script type="text/javascript" src="{{asset('js/vendor/jquery-ui.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/jquery.mousewheel.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/vendor/jQRangeSlider-min.js')}}"></script>
    @yield('scripts')
    <script type="text/javascript" src="{{asset('js/main.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/add.js')}}"></script>


    {!! setting('scripts.yandex-script') !!}
    {!! setting('scripts.google-script') !!}
</head>
