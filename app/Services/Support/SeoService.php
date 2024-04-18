<?php

namespace App\Services\Support;

use App\Models\Seo;

class SeoService
{

    /**
     * Генерация сео данных
     * @param $model
     */
    public function generate($model): void
    {

        $table = $model->getTable();

        $seo = Seo::firstOrNew(['table' => $table, 'item_id' => $model->id]);

        $seo->title ?? $seo->title = $this->setTitle($model);
        $seo->description ?? $seo->description = $this->setDescription($model);

        \View::share(compact('seo'));
    }
	
	public function generateForProduct($model): void
    {

        $table = $model->getTable();

        $seo = Seo::firstOrNew(['table' => $table, 'item_id' => $model->id]);

        $seo->title = $model->name.' купить в Минске недорого, цена';
        $seo->description = 'Купить '.$model->name.' в Минске по доступной цене. Доставка по всей Беларуси. Опт, розница. Магазин электротехники Plato-Intel.';

        \View::share(compact('seo'));
    }


    /**
     * Установить title по умолчанию
     * @return string
     */
    public function setTitle($model)
    {
        if(!$model->title && !$model->name){
            return $model->carModel->name;
        }
        return ($model->title ?? $model->name);
    }

    /**
     * Установить description по умолчанию
     * @return string
     */
    public function setDescription($model)
    {
        return ($model->title ?? $model->name);
    }
}
