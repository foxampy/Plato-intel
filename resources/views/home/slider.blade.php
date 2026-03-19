@if($slides->count())
    <section class="s-line s-index-slider">
        <div class="owl-carousel owl-index-slider">
        @foreach($slides as $slide)
            <div class="slide" style="background-image: url('{{zImage::resize($slide->image, $slide::SIZES)}}');">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row row-index-slider align-items-center">
                        <div class="col-xxl-9 col-xl-11 col-12">
                            <div class="content">
                                <div class="s-name _h1 bold xxl-mb-30 mb-30">{{$slide->name}}</div>
                                <div class="s-name _h5 xxl-mb-50 mb-30">{!! $slide->text !!}</div>
                                @if($slide->link)
                                <div class="w-button">
                                    <a href="{{$slide->link}}" class="button">{{$slide->link_text ?? 'Подробнее'}}</a>
                                </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
        </div>
    </section>
@endif