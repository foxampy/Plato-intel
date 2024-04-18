<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Services\PageService;

class NewsController extends Controller
{
    public const PER_PAGE = 6;
    public function __construct(PageService $pageService)
    {
        parent::__construct($pageService);
    }

    public function index()
    {
        return view('news.index', [
            'page' => $this->pageService->getPage('news'),
            'news' => News::query()
                ->orderBy('pos')
                ->orderBy('created_at','desc')
                ->paginate(self::PER_PAGE),
        ]);
    }

    public function show($slug)
    {
        $page = $this->pageService->getNewsItem($slug);
        return view('page', [
            'page' => $page,
            'news' => News::whereIsActive(1)->where('id','!=',$page->id)->orderBy('created_at','desc')->take(3)->get()
        ]);
    }



}
