@if(isset($advantages) && $advantages->count())
    <section class="s-line s-index-benefits sm-pt-70 sm-pb-40 pt-50 pb-20">
        <div class="container">
            <div class="w-index-benefits-list">
                <div class="row">
                @foreach($advantages as $advantage)
                    <div class="col-lg-20 col-md-4 col-sm-6 col-12 col pb-30">
                        <div class="w-index-benefits-list-item">
                            <div class="icon sm-mb-15 mb-0">
                                @isset(json_decode($advantage->svg)[0])
                                    <img src="{{asset('storage/'.json_decode($advantage->svg)[0]->download_link)}}" alt="{{$advantage->name}}">
                                @endisset
                            </div>
                            <div class="text">
                                <div class="name _h5 bold sm-mb-10 mb-5">{{$advantage->name}}</div>
                                <div class="description">{{$advantage->text}}</div>
                            </div>
                        </div>
                    </div>
                @endforeach
                </div>
            </div>
        </div>
    </section>
@endif
