<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductAdvantage;
use App\Services\CatalogRouter;
use App\Services\CatalogService;
use App\Services\CategoryService;
use App\Services\PageService;
use App\Services\ProductService;
use App\Services\Support\BreadcrumbsService;
use App\Services\Support\SeoService;
use Illuminate\Http\Request;

class CatalogController extends Controller
{
    public $request;


    public function __construct(PageService $pageService, Request $request)
    {
        parent::__construct($pageService);
        $this->request = $request;
    }

    public function router(CatalogRouter $catalogRouter)
    {
        $page = $catalogRouter->getPage();
        switch ($catalogRouter->getPageType()) {
            case 'catalog':
                return $this->index($page);
            case 'category':
                return $this->category($page);
            case 'subCategory':
                return $this->subCategory($page);
            case 'product':
                return $this->product($page);
        }
    }

    public function index($page)
    {
        return view('catalog.index', [
            'page' => $this->pageService->getPage('catalog'),
            'categories' => Category::with('categories')->whereIsActive(1)->whereNull('category_id')->orderBy('pos')->get(),
            'products' => Product::with('stickers')->whereIsActive(1)->orderBy('pos')->orderBy('created_at',
                'desc')->paginate(setting('general.products_count'))
        ]);
    }

    public function product($page)
    {
        $productService = new ProductService($page);
        $breadcrumbService = new BreadcrumbsService();
        $breadcrumbService->product($page)->generate();
        
        return view('catalog.product', [
            'page' => $page,
            'seo' => (new SeoService())->generateForProduct($page),
            'productAdvantages' => ProductAdvantage::whereIsActive(1)->orderBy('pos')->get(),
            'parameterGroups' => $productService->parameterGroups,
            'similarProducts' => $productService->similarProducts,
        ]);
    }

    public function category($page)
    {
        $categoryService = new CategoryService($page, $this->request);
        return view('catalog.category', [
            'page' => $page,
            'categories' => Category::with('categories')->whereNull('category_id')->whereIsActive(1)->orderBy('pos')->get(),
            'products' => $categoryService->getProductsByCategory()->paginate(setting('general.products_count')),
        ]);
    }

    public function subCategory($page)
    {
        $categoryService = new CategoryService($page, $this->request);
        $leftCategoryMenuItems = collect([]);
        if (isset($page->category)) {
            $leftCategoryMenuItems = $page->categories->count() ? $page->categories : $page->category->categories;
        }
        return view('catalog.sub-category', [
            'page' => $page,
            'products' => $categoryService->filteredProducts->paginate(setting('general.products_count')),
            'filterParameters' => $categoryService->filterParameters,
            'filterParameterValues' => $categoryService->filterParameterValues,
            'filterParametersChecked' => $categoryService->filterParameterChecked,
        ]);
    }


    //post
    public function ajaxFilter(Request $request)
    {
        $page = Category::whereId($request->category_id)->first();
        $categoryService = new CategoryService($page, $this->request);
        $view = view('catalog.ajax-items', [
            'products' => $categoryService->filteredProducts->paginate(setting('general.products_count'))
        ]);
        return $view->render();
    }


}
