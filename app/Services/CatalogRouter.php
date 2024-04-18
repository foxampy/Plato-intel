<?php

namespace App\Services;

use App\Models\Category;
use App\Models\Page;
use App\Models\Product;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class CatalogRouter
{

    private $request;
    private $pageService;
    private $slug;
    private $page;
    private $pageType;
    private const BASE = 'catalog';


    public function __construct(Request $request, PageService $pageService)
    {
        $this->request = $request;
        $this->pageService = $pageService;
        $this->slug = last($this->request->segments());
    }

    public function getPage(){
        if(!$this->is404()){
            return $this->page;
        }
        abort(404);
    }

    public function getPageType(){
        return $this->pageType;
    }

    private function is404(){
        if($this->isCatalog()){
            return false;
        }
        if($this->isCategory()){
            return false;
        }
        if($this->isSubcategory()){
            return false;
        }
        if($this->isProduct()){
            return false;
        }
        return true;
    }

    private function isCatalog(){
        if(self::BASE == $this->slug && Page::whereSlug(self::BASE)->whereIsActive(1)->first()){
            $this->page = Page::whereSlug(self::BASE)->whereIsActive(1)->first();
            $this->pageType = 'catalog';
            return true;
        }
        return false;
    }

    private function isCategory(){
        $page = Category::with(['category'])->whereIsActive(1)->whereNull('category_id')->where('slug', $this->slug)->first();
        if($page && $this->isCorrectLinkStructure($page)){
            $this->page = $this->pageService->getCategory($this->slug);
            $this->pageType = 'category';
            return true;
        }
        return false;
    }

    private function isSubcategory(){
        $page = Category::whereIsActive(1)->whereNotNull('category_id')->where('slug', $this->slug)->first();
        if($page && $this->isCorrectLinkStructure($page)){
            $this->page = $this->pageService->getCategory($this->slug);
            $this->pageType = 'subCategory';
            return true;
        }
        return false;
    }

    private function isProduct(){
        $page = Product::with(['stickers','brand','category','images','parameters'])->whereIsActive(1)->where('slug', $this->slug)->first();
        if($page && $this->isCorrectLinkStructure($page)){
            $this->page = $page;
            $this->pageType = 'product';
            return true;
        }
        return false;
    }

    private function isCorrectLinkStructure($page){
        $correctSegments = $this->getCorrectSegments($page);
        if($correctSegments != $this->request->segments()){
            return false;
        }
        return true;
    }

    private function getCorrectSegments($page, $segments = []){
        if(!$segments){
            $segments[] = $page->slug;
        }
        if($page->category_id){
            $page = Category::whereId($page->category_id)->whereIsActive(1)->first();
            if($page){
                $segments[] = $page->slug;
                return $this->getCorrectSegments($page, $segments);
            }
        }
        $segments[] = self::BASE;
        return array_reverse($segments);
    }


}
