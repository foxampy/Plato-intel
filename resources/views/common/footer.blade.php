<footer class="s-footer">
    <div class="footer-top col-lg-hide">
        <div class="container">
            <div class="dashed mb-45">
                @isset($footerMenus)
                    <ul class="row ul-site-nav pt-10">
                        @foreach($footerMenus as $menu)
                            <li class="col-auto col li {{ Request::is($menu->url.'*') ? '_active' : '' }}">
                                <a href="{{url($menu->url)}}"
                                   class="__link {{ !Request::is($menu->url.'*') ? '' : 'no-underline' }} ">
                                    <span class="dashed">{{$menu->title}}</span>
                                </a>
                            </li>
                        @endforeach
                    </ul>
                @endisset
            </div>
        </div>
    </div>
    <div class="footer-middle _h6 xl-pt-0 pt-50">
        <div class="container">
            <div class="align-md-left align-center pb-55">
                <div class="pb-5">
                    {!! setting('general.footer_text') !!}
                </div>
                <div class="row row-footer-law-links">
                    <div class="col-md-auto col-12 col">
                        <a href="{{route('page','privacy-policy')}}"
                           class="__link no-underline block align-md-left align-center"><span class="dashed">Политика конфиденциальности</span></a>
                    </div>
                    <div class="col-md-auto col-12 col">
                        <a href="{{route('page','agreement')}}"
                           class="__link no-underline block align-md-left align-center"><span class="dashed">Соглашение об использовании сайта</span></a>
                    </div>
                </div>
            </div>
            <div class="col-sm-hide">
                <div class="row row-footer-contacts align-items-end">
                    @if(setting('general.phone_city'))
                        <div class="col-auto col col-phone mb-10">
                            <div class="phone-item">
                                <div class="description mb-5">Многоканальный</div>
                                @include('parts.phone',['class' => 'phone__link color-white _h5 semibold', 'phone' => setting('general.phone_city')])
                            </div>
                        </div>
                    @endif
                    @if(setting('general.phone_a1'))
                        <div class="col-auto col col-phone mb-10">
                            <div class="phone-item">
                                <div class="description mb-5">А1, мобильный</div>
                                @include('parts.phone',['class' => 'phone__link color-white _h5 semibold', 'phone' => setting('general.phone_a1')])
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
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container pt-20 pb-40">
            <div class="row row-f-bottom align-items-end justify-content-between">
                <div class="col-lg-8 col-md-7 col-12 col col-copy">
                    <div class="row justify-content-md-start justify-content-center">
                        <div class="col-auto">
                            <div class="copyright pt-20 align-md-left align-center">
                                @if(setting('general.copyright')) &copy; {!! setting('general.copyright') !!} @endif
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-5 col-12 col col-developer">
                    <div class="row justify-content-md-end justify-content-center">
                        <div class="col-auto">
                            <div class="developer mt-20">
                                <div class="w-icon-left">
                                    Разработка сайта
                                    <a href="https://zmitroc.by" target="_blank">ZmitroC.by</a>™ &
                                    <a href="https://zmitroc.by/pages/promotion" target="_blank">SEO-оптимизация</a>
                                    <div class="icon fcm">
                                        <svg width="10" height="10" viewBox="0 0 10 10"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0H10V2H8V4H6V2H2V4H0V0Z"/>
                                            <path d="M4 6V4H6V6H4Z"/>
                                            <path d="M4 8V6H2V8H0V10H10V6H8V8H4Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>


<!--FOOTER END-->
<section class="s-fixed-elements">
    <div class="absolute left-content">

    </div>
    <div class="absolute right-content">
        <div class="pager-up">
            <div class="uparrow"></div>
        </div>
    </div>
</section>


<section class="s-mobile-menu _js-s-toggle-mobile-menu">
    <div class="w-mobile-menu">
        <div class="mobile-menu-header">
            <div class="row sm-gutters align-items-center">
                <div class="col-auto">
                    Меню
                </div>
                <div class="col-auto">
                    <div class="burger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
            <a href="" class="close white _js-b-toggle-mobile-menu"></a>
        </div>
        <div class="mobile-menu-body">
            <div class="w-mobile-menu-group-list">
                <div class="w-mobile-menu-group-list-item">
                    @isset($siteMenus)
                        <ul class="ul-mobile-menu mt-10">
                            @foreach($siteMenus as $menu)
                                @if($menu->url == 'catalog')
                                    <li class="li-mobile-menu li-dropper _js-li-dropper {{ Request::is($menu->url.'*') ? '_active' : '' }}">
                                        <div class="w-relative-b-dropper">
                                            <a href="{{url($menu->url)}}" class="mobile-menu__link">{{$menu->title}}</a>
                                            <div class="b-dropper-overlay _js-b-dropper"></div>
                                            <div class="b-dropper"></div>
                                        </div>
                                        <div class="inset _js-inset"
                                             style="display: {{ Request::is($menu->url.'*') ? 'block' : 'none' }};">
                                            <ul class="ul-inset">
                                                @foreach($categories as $category)
                                                    @if($category->categories->count())
                                                        <li class="li-mobile-menu li-dropper _js-li-dropper {{ Request::is('catalog/'.$category->link().'*') ? '_active' : '' }}">
                                                            <div class="w-relative-b-dropper">
                                                                <a href="{{route('catalog',$category->link())}}"
                                                                   class="mobile-menu__link">{{$category->name}}</a>
                                                                <div class="b-dropper-overlay _js-b-dropper"></div>
                                                                <div class="b-dropper {{ Request::is('catalog/'.$category->link().'*') ? '_toggled' : '' }}"></div>
                                                            </div>
                                                            <div class="inset _js-inset"
                                                                 style="display: {{ Request::is($menu->url.'*') ? 'block' : 'none' }};">
                                                                <ul class="ul-inset">
                                                                    @foreach($category->categories as $subCategory)
                                                                        <li class="li-mobile-menu {{ Request::is('catalog/'.$subCategory->link().'*') ? '_active' : '' }}">
                                                                            <a href="{{route('catalog',$subCategory->link())}}"
                                                                               class="mobile-menu__link">{{$subCategory->name}}</a>
                                                                        </li>
                                                                    @endforeach
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    @else
                                                        <li class="li-mobile-menu {{ Request::is('catalog/'.$category->link().'*') ? '_active' : '' }}">
                                                            <a href="{{route('catalog',$category->link())}}"
                                                               class="mobile-menu__link">{{$category->name}}</a>
                                                        </li>
                                                    @endif
                                                @endforeach
                                            </ul>
                                        </div>
                                    </li>
                                @else
                                    <li class="li-mobile-menu {{ Request::is($menu->url.'*') ? '_active' : '' }}">
                                        <a href="{{url($menu->url)}}" class="mobile-menu__link">{{$menu->title}}</a>
                                    </li>
                                @endif
                            @endforeach
                        </ul>
                    @endisset
                </div>
                <div class="w-mobile-menu-group-list-item pt-50">
                    <div class="w-mobile-menu-offset-item">
                        @if(setting('general.phone_city'))
                            <div class="mb-20">
                                <div class="phone-item">
                                    <div class="description mb-5">Многоканальный</div>
                                    @include('parts.phone',['class' => 'phone__link _h5 static semibold', 'phone' => setting('general.phone_city')])
                                </div>
                            </div>
                        @endif
                        @if(setting('general.phone_a1'))
                            <div class="mb-20">
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
                    </div>
                    <div class="w-mobile-menu-offset-item pt-30">
                        @if(setting('general.address'))
                            <div class="pb-15">
                                <div class="w-icon-left location">
                                    <div class="icon top">
                                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M6 15.1998L6.531 15.7646C6.46132 15.8392 6.37851 15.8984 6.28732 15.9388C6.19613 15.9792 6.09837 16 5.99963 16C5.90089 16 5.80312 15.9792 5.71193 15.9388C5.62074 15.8984 5.53793 15.8392 5.46825 15.7646L5.46375 15.759L5.451 15.7454L5.4045 15.695C5.14012 15.4045 4.88008 15.1095 4.6245 14.8102C3.9828 14.0602 3.36835 13.2841 2.7825 12.4838C2.1135 11.5638 1.4295 10.5238 0.90975 9.49666C0.40125 8.48948 0 7.39829 0 6.39991C0 2.76876 2.694 0 6 0C9.306 0 12 2.76876 12 6.39991C12 7.39829 11.5988 8.48948 11.0903 9.49586C10.5705 10.5246 9.88725 11.5638 9.2175 12.4838C8.39804 13.6035 7.52277 14.6754 6.5955 15.695L6.549 15.7454L6.53625 15.759L6.53175 15.7638L6 15.1998ZM6 8.79987C6.59674 8.79987 7.16903 8.54702 7.59099 8.09694C8.01295 7.64686 8.25 7.03642 8.25 6.39991C8.25 5.7634 8.01295 5.15296 7.59099 4.70288C7.16903 4.25279 6.59674 3.99994 6 3.99994C5.40326 3.99994 4.83097 4.25279 4.40901 4.70288C3.98705 5.15296 3.75 5.7634 3.75 6.39991C3.75 7.03642 3.98705 7.64686 4.40901 8.09694C4.83097 8.54702 5.40326 8.79987 6 8.79987Z"
                                                  fill="#FFECA8"></path>
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
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM11.36 11.36L7.2 8.8V4H8.4V8.16L12 10.32L11.36 11.36Z"
                                                  fill="#FFECA8"></path>
                                        </svg>
                                    </div>
                                    <div class="text">{!! setting('general.working_hours') !!}</div>
                                </div>
                            </div>
                        @endif
                        @if(setting('general.email'))
                            <div class="pb-15">
                                <div class="w-icon-left mail">
                                    <div class="icon top">
                                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 0.5H1.6C0.712 0.5 0 1.22312 0 2.125V11.875C0 12.306 0.168571 12.7193 0.468629 13.024C0.768687 13.3288 1.17565 13.5 1.6 13.5H14.4C14.8243 13.5 15.2313 13.3288 15.5314 13.024C15.8314 12.7193 16 12.306 16 11.875V2.125C16 1.69402 15.8314 1.2807 15.5314 0.975951C15.2313 0.671205 14.8243 0.5 14.4 0.5ZM12 11.0625H4V9.4375H12M12 7.8125H4V6.1875H12M14.4 4.5625H12V2.125H14.4"
                                                  fill="#FFECA8"></path>
                                        </svg>
                                    </div>
                                    <div class="text">По всем вопросам <br><a href="mailto:{{setting('general.email')}}"
                                                                              class="no-underline semibold">{{setting('general.email')}}</a>
                                    </div>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="mobile-menu-background _js-b-toggle-mobile-menu"></div>
</section>


<!--POPUP-->
<section class="s-validation _js-validation-alert hide">
    <div class="w-validation-alert color001">
        <div class="container">
            <div class="validation-content">
                <a href="" class="close small _js-b-close-validation-alert"></a>
                <div class="w-icon-left">
                    <div class="icon">
                        <!-- ИКОНКА Идея! -->
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                             width="100%" height="100%" x="0" y="0"
                             viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"
                             class="">
							<path d="M255.985,59.99c-8.284,0-15,6.716-15,15s6.716,15,15,15c49.634,0,90.015,40.374,90.015,90c0,8.284,6.716,15,15,15    s15-6.716,15-15C376,113.822,322.162,59.99,255.985,59.99z"
                                  fill="#000000" data-original="#000000" class=""></path>
                            <path d="M217.335,4.03c-67.77,14.161-122.72,68.585-137.179,136.776c-12.209,57.582,2.836,115.392,41.277,158.607    C140.224,320.536,151,348.419,151,375.99v30c0,19.96,13.067,36.917,31.093,42.79c5.928,35.025,36.328,63.209,73.907,63.209    c37.569,0,67.977-28.175,73.907-63.209C347.933,442.907,361,425.95,361,405.989v-30c0-27.625,10.812-55.173,30.442-77.569    C420.176,265.64,436,223.58,436,179.99C436,66.425,332.051-19.936,217.335,4.03z M256,481.99c-19.282,0-36.188-13.268-42.431-31.1    h84.861C292.188,468.722,275.282,481.99,256,481.99z M331,405.99c0,8.271-6.729,15-15,15H196c-8.271,0-15-6.729-15-15v-15h150    V405.99z M368.882,278.647c-20.92,23.867-33.791,52.647-37.057,82.343H180.178c-3.262-29.712-16.1-58.775-36.328-81.516    c-32.038-36.016-44.557-84.291-34.346-132.445C121.423,90.815,167.223,45.15,223.472,33.397C319.496,13.33,406,85.442,406,179.99    C406,216.302,392.818,251.339,368.882,278.647z"
                                  fill="#000000" data-original="#000000" class=""></path>
                            <path d="M45,179.99H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h30c8.284,0,15-6.716,15-15S53.284,179.99,45,179.99z"
                                  fill="#000000" data-original="#000000" class=""></path>
                            <path d="M51.213,104.99L30,83.777c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L30,126.203    c5.857,5.858,15.355,5.859,21.213,0C57.071,120.345,57.071,110.848,51.213,104.99z"
                                  fill="#000000" data-original="#000000" class=""></path>
                            <path d="M51.213,263.777c-5.858-5.858-15.356-5.858-21.213,0L8.787,284.99c-5.858,5.858-5.858,15.355,0,21.213    c5.857,5.858,15.355,5.859,21.213,0l21.213-21.213C57.071,279.132,57.071,269.635,51.213,263.777z"
                                  fill="#000000" data-original="#000000" class=""></path>
                            <path d="M497,179.99h-30c-8.284,0-15,6.716-15,15s6.716,15,15,15h30c8.284,0,15-6.716,15-15S505.284,179.99,497,179.99z"
                                  fill="#000000" data-original="#000000" class=""></path>
                            <path d="M503.213,83.777c-5.857-5.858-15.355-5.858-21.213,0l-21.213,21.213c-5.858,5.858-5.858,15.355,0,21.213    c5.857,5.857,15.355,5.858,21.213,0l21.213-21.213C509.071,99.132,509.071,89.635,503.213,83.777z"
                                  fill="#000000" data-original="#000000" class=""></path>
                            <path d="M503.213,284.99L482,263.777c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L482,306.203    c5.857,5.857,15.355,5.858,21.213,0C509.071,300.345,509.071,290.848,503.213,284.99z"
                                  fill="#000000" data-original="#000000" class=""></path></svg>
                    </div>
                    <div class="content">
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="s-popup">
    <div style="display: none;">
        <a href="" class="button _js-b-pop" data-pop-id="popup001"></a>
    </div>

    <div class="w-popup w-pop-callback _js-popup popup001">
        <div class="pop-head">
            <a href="" class="close white _js-pop-close"></a>
            <div class="pop-name">Обратный звонок</div>
        </div>
        <div class="pop-body">
            <div class="input mb-15 label-top">
                <label class="label">Ваше имя</label>
                <input type="text" class="input__default" placeholder="">
            </div>
            <div class="input mb-15 label-top">
                <label class="label">Ваш E-mail</label>
                <input type="text" class="input__default" placeholder="">
            </div>
            <div class="input mb-15 label-top">
                <label class="label">Ваш телефон<span class="red">*</span></label>
                <input type="tel" class="input__default" placeholder="">
            </div>
            <div class="input mb-15 label-top">
                <label class="label">Сообщение</label>
                <textarea class="textarea__default" placeholder=""></textarea>
            </div>
            <div class="input ">
                <button class="button block">Отправить</button>
            </div>
        </div>
    </div>
    <div class="s-popup__background _js-pop-close"></div>
</section>