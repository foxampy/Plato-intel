<?php

namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Support\Facades\Schema;

class ActiveRecordScope implements Scope
{
    protected $excludedUrls;

    // Конструктор для получения массива исключённых URL
    public function __construct(array $excludedUrls = [])
    {
        $this->excludedUrls = $excludedUrls;
    }

    public function apply(Builder $builder, Model $model)
    {
        $excludedUrls = $this->excludedUrls;
        $excludedUrls[] = 'admin/*';
        $excludedUrls[] = 'livewire/*';
        if ($this->isExcludedRoute($excludedUrls)) {
            return;
        }
        $table = $model->getTable(); // Получить имя таблицы модели
        if (Schema::hasColumn($table, 'is_active')) {
            $builder->where("{$table}.is_active", true);
        }
    }

    protected function isExcludedRoute(array $excludedUrls): bool
    {
        // Проверяем имя маршрута
        if (request()->routeIs($excludedUrls)) {
            return true;
        }
        // Проверяем URL с учетом путей
        foreach ($excludedUrls as $excludedUrl) {
            if (request()->is($excludedUrl)) {
                return true;
            }
        }

        return false;
    }
}
