@include('common.header-mobile')
<header class="s-header">
    <div class="header-top">
        <div class="container">
            <div class="row row-header-top align-items-center pt-10">
                <div class="col-8 col">
                    <div class="row align-items-center">
                        @if(setting('general.address'))
                        <div class="col-auto col pb-10">
                            <div class="w-icon-left location">
                                <div class="icon">
                                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.1998L6.531 15.7646C6.46132 15.8392 6.37851 15.8984 6.28732 15.9388C6.19613 15.9792 6.09837 16 5.99963 16C5.90089 16 5.80312 15.9792 5.71193 15.9388C5.62074 15.8984 5.53793 15.8392 5.46825 15.7646L5.46375 15.759L5.451 15.7454L5.4045 15.695C5.14012 15.4045 4.88008 15.1095 4.6245 14.8102C3.9828 14.0602 3.36835 13.2841 2.7825 12.4838C2.1135 11.5638 1.4295 10.5238 0.90975 9.49666C0.40125 8.48948 0 7.39829 0 6.39991C0 2.76876 2.694 0 6 0C9.306 0 12 2.76876 12 6.39991C12 7.39829 11.5988 8.48948 11.0903 9.49586C10.5705 10.5246 9.88725 11.5638 9.2175 12.4838C8.39804 13.6035 7.52277 14.6754 6.5955 15.695L6.549 15.7454L6.53625 15.759L6.53175 15.7638L6 15.1998ZM6 8.79987C6.59674 8.79987 7.16903 8.54702 7.59099 8.09694C8.01295 7.64686 8.25 7.03642 8.25 6.39991C8.25 5.7634 8.01295 5.15296 7.59099 4.70288C7.16903 4.25279 6.59674 3.99994 6 3.99994C5.40326 3.99994 4.83097 4.25279 4.40901 4.70288C3.98705 5.15296 3.75 5.7634 3.75 6.39991C3.75 7.03642 3.98705 7.64686 4.40901 8.09694C4.83097 8.54702 5.40326 8.79987 6 8.79987Z" fill="#FFECA8"/>
                                    </svg>
                                </div>
                                <div class="text">{!! setting('general.address') !!}</div>
                            </div>
                        </div>
                        @endif
                        @if(setting('general.working_hours'))
                        <div class="col-auto col pb-10">
                            <div class="w-icon-left worktime">
                                <div class="icon">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM11.36 11.36L7.2 8.8V4H8.4V8.16L12 10.32L11.36 11.36Z" fill="#FFECA8"/></svg>
                                </div>
                                <div class="text">{!! setting('general.working_hours') !!}</div>
                            </div>
                        </div>
                        @endif
                    </div>
                </div>
                @if(setting('general.email'))
                <div class="col-4 col">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-auto col pb-10">
                            <div class="w-icon-left mail">
                                <div class="icon">
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4 0.5H1.6C0.712 0.5 0 1.22312 0 2.125V11.875C0 12.306 0.168571 12.7193 0.468629 13.024C0.768687 13.3288 1.17565 13.5 1.6 13.5H14.4C14.8243 13.5 15.2313 13.3288 15.5314 13.024C15.8314 12.7193 16 12.306 16 11.875V2.125C16 1.69402 15.8314 1.2807 15.5314 0.975951C15.2313 0.671205 14.8243 0.5 14.4 0.5ZM12 11.0625H4V9.4375H12M12 7.8125H4V6.1875H12M14.4 4.5625H12V2.125H14.4" fill="#FFECA8"/></svg>
                                </div>
                                <div class="text">По всем вопросам <a href="mailto:{{setting('general.email')}}" class="no-underline semibold">{{setting('general.email')}}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                @endif
            </div>
        </div>
    </div>
    <div class="header-middle">
        <div class="container pt-25 pb-15">
            <div class="row row-header-middle align-items-center justify-content-between">
                <div class="col-xxl-4 col-xl-4 col pb-10">
                    <a @if(!\request()->routeIs('home')) href="/" @endif class="logo__link color-black no-underline">
                        <div class="w-plato-logo-parent">
                            <div class="row row-plato-logo-parent align-items-center">
                                <div class="col-image col">
                                    <div class="image">
                                        @isset(json_decode(setting('general.logo'))[0])
                                            <img src="{{asset('storage/'.json_decode(setting('general.logo'))[0]->download_link)}}" class="block" alt="{{env('APP_NAME')}}">
                                        @endisset
                                    </div>
                                </div>
                                <div class="col-text col">
                                    <div class="w-text">
                                        <div class="title">{{setting('general.company')}}</div>
                                        <div class="description">{{setting('general.headline')}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xxl-8 col-xl-8 col">
                    <div class="row justify-content-end align-items-end">
                        <div class="col-auto">
                            <div class="row row-footer-contacts align-items-end">
                                @if(setting('general.phone_city'))
                                <div class="col-auto col col-phone mb-10">
                                    <div class="phone-item">
                                        <div class="description mb-5">Многоканальный</div>
                                        @include('parts.phone',['class' => 'phone__link _h5 semibold', 'phone' => setting('general.phone_city')])
                                    </div>
                                </div>
                                @endif
                                @if(setting('general.phone_a1'))
                                <div class="col-auto col col-phone mb-10">
                                    <div class="phone-item">
                                        <div class="description mb-5">А1, мобильный</div>
                                        @include('parts.phone',['class' => 'phone__link _h5 semibold', 'phone' => setting('general.phone_a1')])
                                    </div>
                                </div>
                                @endif
                                <div class="col-auto col mb-10">
                                    <div class="row sm-gutters justify-content-xl-start justify-content-center center">
                                        @include('parts.messengers')
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto col">
                            <a class="button cart-btn w-icon-left {{$cart->count ? '_active' : ''}} _js-cart-total" href="{{route('order')}}" >
                                <div class="icon">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="20" fill="#FFECA8"></rect>
                                        <path d="M26.1993 14H11V15.6471H12.8399L15.6566 23.6213C15.7691 23.9388 15.9736 24.213 16.2424 24.407C16.5113 24.6009 16.8314 24.7053 17.1597 24.7059H23.7994V23.0588H17.1597L16.5773 21.4118H23.7994C24.1194 21.4118 24.409 21.2158 24.5346 20.9127L26.9345 15.148C26.987 15.0228 27.0085 14.886 26.997 14.7501C26.9854 14.6142 26.9411 14.4834 26.8682 14.3695C26.7952 14.2556 26.6959 14.1622 26.5791 14.0977C26.4624 14.0332 26.3318 13.9996 26.1993 14Z" fill="#1C212D"></path>
                                        <path d="M17.7997 28C18.4624 28 18.9996 27.4469 18.9996 26.7647C18.9996 26.0825 18.4624 25.5294 17.7997 25.5294C17.137 25.5294 16.5997 26.0825 16.5997 26.7647C16.5997 27.4469 17.137 28 17.7997 28Z" fill="#1C212D"></path>
                                        <path d="M22.5995 28C23.2622 28 23.7994 27.4469 23.7994 26.7647C23.7994 26.0825 23.2622 25.5294 22.5995 25.5294C21.9367 25.5294 21.3995 26.0825 21.3995 26.7647C21.3995 27.4469 21.9367 28 22.5995 28Z" fill="#1C212D"></path>
                                    </svg>
                                </div>
                                <div class="text">
                                    <div class="row align-items-center sm-gutters">
                                        <div class="col-auto">Корзина</div>
                                        <div class="col-auto"><div class="counter count">{{$cart->count}}</div></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @isset($siteMenus)
        <div class="header-bottom">
            <div class="container">
                <ul class="row ul-site-nav main-menu">
                    @foreach($siteMenus as $menu)
                        @if($menu->url == 'catalog')
                            <li class="col-auto col li li-dropper {{ Request::is($menu->url.'*') ? '_active' : '' }}">
                                <a href="{{url($menu->url)}}" class="__link {{ !Request::is($menu->url.'*') ? '' : 'no-underline' }}">
                                    <span class="dashed">{{$menu->title}}</span>
                                    <div class="b-dropper"></div>
                                </a>
                                <div class="inset">
                                    <ul class="ul-inset">
                                        @foreach($categories as $category)
                                            @if($category->categories->count())
                                                <li class="li-inset li-dropper {{ Request::is('catalog/'.$category->link().'*') ? '_active' : '' }}">
                                                    <a href="{{route('catalog',$category->link())}}" class="__link">
                                                        <span class="text">{{$category->name}}</span>
                                                        <div class="b-dropper"></div>
                                                    </a>
                                                    <div class="inset">
                                                        <ul class="ul-inset">
                                                            @foreach($category->categories as $subCategory)
                                                                <li class="li-inset {{ Request::is('catalog/'.$subCategory->link().'*') ? '_active' : '' }}"><a href="{{route('catalog',$subCategory->link())}}" class="__link">{{$subCategory->name}}</a></li>
                                                            @endforeach
                                                        </ul>
                                                    </div>
                                                </li>
                                            @else
                                                <li class="li-inset {{ Request::is('catalog/'.$category->link().'*') ? '_active' : '' }}"><a href="{{route('catalog',$category->link())}}" class="__link">{{$category->name}}</a></li>
                                            @endif
                                        @endforeach
                                    </ul>
                                </div>
                            </li>
                        @else
                            <li class="col-auto col li {{ Request::is($menu->url.'*') ? '_active' : '' }}">
                                <a href="{{url($menu->url)}}" class="__link {{ !Request::is($menu->url.'*') ? '' : 'no-underline' }}">
                                    <span class="dashed">{{$menu->title}}</span>
                                </a>
                            </li>
                        @endif
                    @endforeach
                </ul>
            </div>
        </div>
    @endisset
</header>
<div class="header-empty"></div>
