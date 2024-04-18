<?php

namespace App\Services;

use App\Models\Category;
use App\Models\News;
use App\Models\Page;
use App\Models\Service;
use App\Services\Support\BreadcrumbsService;
use App\Services\Support\SeoService;

class PageService
{
    private $seoService;
    private $breadcrumbsService;

    public function __construct(SeoService $seoService, BreadcrumbsService $breadcrumbsService)
    {
        $this->seoService = $seoService;
        $this->breadcrumbsService = $breadcrumbsService;

    }

    public function getPage($slug){

        $page = Page::whereIsActive(1)->where('slug', $slug)->firstOrFail();
        $this->breadcrumbsService->page($page)->generate();
        $this->seoService->generate($page);

        return $page;
    }

    public function getCategory($slug){

        $page = Category::whereIsActive(1)->where('slug', $slug)->firstOrFail();
        $this->breadcrumbsService->category($page)->generate();
        $this->seoService->generate($page);

        return $page;
    }

    public function getNewsItem($slug){

        $page = News::whereIsActive(1)->where('slug', $slug)->firstOrFail();
        $this->seoService->generate($page);
        $this->breadcrumbsService->newsItem($page)->generate();

        return $page;
    }

    public function getServiceItem($slug){

        $page = Service::whereIsActive(1)->where('slug', $slug)->firstOrFail();
        $this->seoService->generate($page);
        $this->breadcrumbsService->serviceItem($page)->generate();

        return $page;
    }

   



}
