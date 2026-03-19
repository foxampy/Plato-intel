@if($productsMain->count())
    <section class="s-line s-more-products sm-pt-70 sm-pb-40 pt-50 pb-20">
        <div class="container">
            <div class="s-name _h2 mb-30">Популярные товары</div>
            <div class="w-catalog-list">
                <div class="row row-catalog-list lg-lg-gutters sm-gutters">
                    @foreach($productsMain as $product)
                        @include('catalog.product-item', ['class' => 'col-xl-3 col-md-4 col-xxs-6 col-12 col lg-mb-30 sm-mb-10 mb-35'])
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endif