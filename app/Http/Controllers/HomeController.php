<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\IndexSlide;
use App\Models\News;
use App\Models\Product;
use App\Services\CatalogService;
use App\Services\PageService;

class HomeController extends Controller
{
    public $page;
    public $catalogService;


    public function __construct(PageService $pageService)
    {
        parent::__construct($pageService);
        $this->page = $pageService->getPage('/');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home',[
            'page' => $this->page,
            'slides' => IndexSlide::orderBy('pos','asc')->where('is_active',1)->get(),
            'categories' => Category::whereIsActive(1)->whereShowMain(1)->orderBy('pos')->get(),
            'productsMain' => Product::query()
                ->whereShowMain(1)
                ->whereIsActive(1)
                ->orderBy('pos')
                ->get(),
            'newsMain' => News::whereIsActive(1)->whereShowMain(1)->orderBy('created_at','desc')->take(3)->get()
        ]);
    }
}
