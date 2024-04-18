<section class="s-header-mobile w-mobile-header-btns">
    <div class="container-fluid">
        <div class="row row-h-mobile align-items-center justify-content-between">
            <div class="col-logo col">
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
            <div class="col-right col col-auto">
                <div class="row sm-gutters align-items-center justify-content-end">
                    <div class="row lg-lg-gutters md-md-gutters sm-sm-gutters xxxs-no-gutters align-items-center justify-content-end">
                        <div class="col-auto">
                            <a href="{{route('order')}}" class="mobile-btn__link fcm cart {{$cart->count ? '_active' : ''}} _js-mobile-cart-total">
                                <div class="count">{{$cart->count}}</div>
                                <svg width="26" height="23" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1993 3.5424e-06H0V1.64706H1.83991L4.65658 9.62129C4.76912 9.93876 4.97362 10.213 5.24244 10.407C5.51126 10.6009 5.83144 10.7053 6.15971 10.7059H12.7994V9.05883H6.15971L5.57734 7.41177H12.7994C13.1194 7.41177 13.409 7.21577 13.5346 6.91271L15.9345 1.148C15.987 1.02277 16.0085 0.886038 15.997 0.75013C15.9854 0.614221 15.9411 0.483415 15.8682 0.369511C15.7952 0.255607 15.6959 0.162187 15.5791 0.0976791C15.4624 0.0331708 15.3318 -0.000396971 15.1993 3.5424e-06Z" fill="#1C212D"/><path d="M6.79968 14C7.46239 14 7.99963 13.4469 7.99963 12.7647C7.99963 12.0825 7.46239 11.5294 6.79968 11.5294C6.13697 11.5294 5.59974 12.0825 5.59974 12.7647C5.59974 13.4469 6.13697 14 6.79968 14Z" fill="#1C212D"/><path d="M11.5995 14C12.2622 14 12.7994 13.4469 12.7994 12.7647C12.7994 12.0825 12.2622 11.5294 11.5995 11.5294C10.9367 11.5294 10.3995 12.0825 10.3995 12.7647C10.3995 13.4469 10.9367 14 11.5995 14Z" fill="#1C212D"/>
                                </svg>
                            </a>
                        </div>
                        <div class="col-auto">
                            <div class="w-cloud-dropper js _js-click-dropper">
                                <div class="parent">
                                    <a href="" class="mobile-btn__link fcm contacts _js-b-click-dropper">
                                        <svg version="1.1" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 513.64 513.64" style="enable-background:new 0 0 513.64 513.64;" xml:space="preserve"><path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72
												c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68 c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44 l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"/></svg>
                                    </a>
                                    <div class="inset _js-inset">
                                        <div class="frame">
                                            <div class="corner"></div>
                                            @if(setting('general.phone_city'))
                                            <div class="mb-10">
                                                <div class="phone-item">
                                                    <div class="description mb-5">Многоканальный</div>
                                                    @include('parts.phone',['class' => 'phone__link _h5 static semibold', 'phone' => setting('general.phone_city')])
                                                </div>
                                            </div>
                                            @endif
                                            @if(setting('general.phone_a1'))
                                                <div class="mb-10">
                                                    <div class="phone-item">
                                                        <div class="description mb-5">А1, мобильный</div>
                                                        @include('parts.phone',['class' => 'phone__link _h5 static semibold', 'phone' => setting('general.phone_a1')])
                                                    </div>
                                                </div>
                                            @endif
                                            <div class="">
                                                <div class="row sm-gutters">
                                                    @include('parts.messengers')
                                                </div>
                                            </div>
                                            <div class="pt-20">
                                                @if(setting('general.address'))
                                                <div class="pb-15">
                                                    <div class="w-icon-left location">
                                                        <div class="icon top">
                                                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.1998L6.531 15.7646C6.46132 15.8392 6.37851 15.8984 6.28732 15.9388C6.19613 15.9792 6.09837 16 5.99963 16C5.90089 16 5.80312 15.9792 5.71193 15.9388C5.62074 15.8984 5.53793 15.8392 5.46825 15.7646L5.46375 15.759L5.451 15.7454L5.4045 15.695C5.14012 15.4045 4.88008 15.1095 4.6245 14.8102C3.9828 14.0602 3.36835 13.2841 2.7825 12.4838C2.1135 11.5638 1.4295 10.5238 0.90975 9.49666C0.40125 8.48948 0 7.39829 0 6.39991C0 2.76876 2.694 0 6 0C9.306 0 12 2.76876 12 6.39991C12 7.39829 11.5988 8.48948 11.0903 9.49586C10.5705 10.5246 9.88725 11.5638 9.2175 12.4838C8.39804 13.6035 7.52277 14.6754 6.5955 15.695L6.549 15.7454L6.53625 15.759L6.53175 15.7638L6 15.1998ZM6 8.79987C6.59674 8.79987 7.16903 8.54702 7.59099 8.09694C8.01295 7.64686 8.25 7.03642 8.25 6.39991C8.25 5.7634 8.01295 5.15296 7.59099 4.70288C7.16903 4.25279 6.59674 3.99994 6 3.99994C5.40326 3.99994 4.83097 4.25279 4.40901 4.70288C3.98705 5.15296 3.75 5.7634 3.75 6.39991C3.75 7.03642 3.98705 7.64686 4.40901 8.09694C4.83097 8.54702 5.40326 8.79987 6 8.79987Z" fill="#FFECA8"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="text">{!! setting('general.address') !!}</div>
                                                    </div>
                                                </div>
                                                @endif
                                                @if(setting('general.working_hours'))
                                                <div class="pb-15">
                                                    <div class="w-icon-left worktime">
                                                        <div class="icon top">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM11.36 11.36L7.2 8.8V4H8.4V8.16L12 10.32L11.36 11.36Z" fill="#FFECA8"></path></svg>
                                                        </div>
                                                        <div class="text">{!! setting('general.working_hours') !!}</div>
                                                    </div>
                                                </div>
                                                @endif
                                                @if(setting('general.email'))
                                                <div class="pb-15">
                                                    <div class="w-icon-left mail">
                                                        <div class="icon top">
                                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4 0.5H1.6C0.712 0.5 0 1.22312 0 2.125V11.875C0 12.306 0.168571 12.7193 0.468629 13.024C0.768687 13.3288 1.17565 13.5 1.6 13.5H14.4C14.8243 13.5 15.2313 13.3288 15.5314 13.024C15.8314 12.7193 16 12.306 16 11.875V2.125C16 1.69402 15.8314 1.2807 15.5314 0.975951C15.2313 0.671205 14.8243 0.5 14.4 0.5ZM12 11.0625H4V9.4375H12M12 7.8125H4V6.1875H12M14.4 4.5625H12V2.125H14.4" fill="#FFECA8"></path></svg>
                                                        </div>
                                                        <div class="text">По всем вопросам <br><a href="mailto:{{setting('general.email')}}" class="no-underline semibold">{{setting('general.email')}}</a></div>
                                                    </div>
                                                </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <a href="" class="mobile-btn__link fcm menu _js-b-toggle-mobile-menu">
                                <div class="burger black">
                                    <div class="line"></div>
                                    <div class="line"></div>
                                    <div class="line"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="header-mobile-empty"></div>
