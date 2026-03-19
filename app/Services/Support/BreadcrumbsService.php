<?php

namespace App\Services\Support;


use App\Models\Category;
use App\Models\Event;
use App\Models\MenuType;
use App\Models\Page;
use Illuminate\Support\Facades\Cache;

class BreadcrumbsService
{


    private $bread = [
        'Главная' => '/'
    ];

    /**
     * Генерация для отдельных страниц
     * @param $page
     * @return $this
     */
    public function page($page){
        $this->bread[$page->name] = route('page',$page->slug);
        return $this;
    }

    public function newsItem($page){
        $newsPage = Page::where('slug', 'news')->first();
        if($newsPage){
            $this->page($newsPage);
        }
        $this->bread[$page->name] = end($this->bread) . $page->slug;
        return $this;
    }

    public function serviceItem($page){
        $servicesPage = Page::where('slug', 'services')->first();
        if($servicesPage){
            $this->page($servicesPage);
        }
        $this->bread[$page->name] = end($this->bread) . $page->slug;
        return $this;
    }

    public function category($page){
        $catalogPage = Page::where('slug', 'catalog')->first();
        if($catalogPage){
            $this->page($catalogPage);
        }

        $parentCategories = [];
        $pageCategory = $page->category;
        while($pageCategory){
            $parentCategories[] = $pageCategory;
            $pageCategory = $pageCategory->category;
        }

        if($parentCategories){
            foreach (array_reverse($parentCategories) as $category){
                $this->bread[$category->name] = end($this->bread) .'/'. $category->slug;
            }
        }

        $this->bread[$page->name] = end($this->bread) . $page->slug;
        return $this;
    }

    public function product($page){
        $catalogPage = Page::where('slug', 'catalog')->first();
        if($catalogPage){
            $this->page($catalogPage);
        }

        $parentCategories = [];
        $pageCategory = $page->category;
        while($pageCategory){
            $parentCategories[] = $pageCategory;
            $pageCategory = $pageCategory->category;
        }

        if($parentCategories){
            foreach (array_reverse($parentCategories) as $category){
                $this->bread[$category->name] = end($this->bread) .'/'. $category->slug;
            }
        }

        $this->bread[$page->name] = end($this->bread) . $page->slug;
        return $this;
    }

    public function generate(){

        $lastKeyBread = array_keys($this->bread)[count($this->bread)-1];
        $this->bread[$lastKeyBread] = '';

        \View::share([
            'breadcrumbs' =>  $this->bread
        ]);
    }

}
