<!DOCTYPE html>
<html>
@include('common.head')
<body>
<div class="b-wrapper {{$wrapperClass ?? ''}}">
    @include('common.header')

    @yield('content')
</div>
@include('common.footer')
</body>
</html>

