@extends('layouts.app', ['headerClass' => 'absolute s-inner-header header-404', 'wrapperClass' => 'p-404'])
@section('breadcrumbs') @show
@section('content')
    <section class="s-line s-404">
			<div class="container">
				<div class="row row-404 align-items-center justify-content-center">
					<div class="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-12 pt-40 pb-40">
						<div class="w-404 align-center">
							<div class="mb-30">
								<div class="number ищдв">404</div>
								<div class="title _h3 bold">Страница не существует или была удалена</div>
							</div>
							<div class="description semibold _h6">Нам очень жаль, но такой страницы не существует, или она была удалена Начните работу с <a href="/" class="no-underline"><span class="dashed">Главной</span></a> или со страницы <a href="/catalog" class="no-underline"><span class="dashed">Каталога</span></a></div>
						</div>
					</div>
				</div>
			</div>
		</section>
@endsection
