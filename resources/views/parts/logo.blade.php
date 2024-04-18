@isset(json_decode(setting('general.logo'))[0])
    <a @if(!\request()->routeIs('home')) href="/" @endif class="logo__link block__link">
        <img class="block" src="{{asset('storage/'.json_decode(setting('general.logo'))[0]->download_link)}}" alt="{{env('APP_NAME')}}">
    </a>
@endisset
