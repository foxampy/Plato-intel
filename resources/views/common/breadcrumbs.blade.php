@isset($breadcrumbs)
    <section class="s-line s-page-branding">
        <div class="container">
            <div class="bordered md-mb-20 mb-15">
                <div class="w-breadcrumbs-mobile-scroll-shadow" itemscope itemtype="http://schema.org/BreadcrumbList">
                    <div class="w-breadcrumbs md-pt-25 md-pb-25 pt-10 pb-10">
                    @foreach($breadcrumbs as $k => $v)
                        <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    @if(!$loop->last)
                                <a href="{{$v}}" itemprop="item" class="__link">
                            <span itemprop="name">{{$k}}</span>
                            <meta itemprop="position" content="{{$loop->iteration}}">
                        </a>
                                <span class="hr"></span>
                            @else
                                <span class="page-name" itemprop="item">
                            <span itemprop="name">{{$k}}</span>
                            <meta itemprop="position" content="{{$loop->iteration}}">
                        </span>
                            @endif
                    </span>
                    @endforeach
                </div>
                </div>
            </div>
        </div>
    </section>
@endisset