<?php

namespace App\Http\Controllers;

use App\Services\PageService;

class ContactsController extends Controller
{
    public $page;


    public function __construct(PageService $pageService)
    {
        parent::__construct($pageService);
        $this->page = $pageService->getPage('contacts');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('contacts',[
            'page' => $this->page,
        ]);
    }
}
