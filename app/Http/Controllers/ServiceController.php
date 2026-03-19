<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Service;
use App\Services\PageService;

class ServiceController extends Controller
{
    public function __construct(PageService $pageService)
    {
        parent::__construct($pageService);
    }

    public function index()
    {
        return view('services', [
            'page' => $this->pageService->getPage('services'),
            'services' => Service::whereIsActive(1)->orderBy('pos')->get(),
            'news' => News::query()
                ->whereIsActive(1)
                ->orderBy('pos')
                ->orderBy('created_at','desc')
                ->take(4)
                ->get(),
        ]);
    }

    public function show($slug)
    {
        $page = $this->pageService->getServiceItem($slug);
        return view('page', [
            'page' => $page,
        ]);
    }



}
