<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Vacancy;
use App\Services\CatalogService;
use App\Services\PageService;


class PageController extends Controller
{

    public function __construct(PageService $pageService)
    {
        parent::__construct($pageService);
    }


    public function contacts(){
        $page = $this->pageService->getPage('contacts');
        return view('contacts',[
            'page' => $page,
        ]);
    }


    public function page($slug){
        $page = $this->pageService->getPage($slug);
        return view('page',[
            'page' => $page,
            'news' => News::whereIsActive(1)->orderBy('created_at','desc')->take(3)->get()
        ]);
    }

    public function error404()
    {
        return $this->pageService->getPage(404);
    }



}
