<?php

use App\Http\Controllers\Ajax\FormController;
use App\Http\Controllers\Ajax\OrderController as AjaxOrderController;
use App\Http\Controllers\Ajax\PostTasksController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

//Route::get('news/magnitnyj-puskatel-tipy-konstrukciya-i-princip-raboty', fn() => redirect('/', 301));
//Route::get('news/naznachenie-vidy-ustrojstvo-i-sovety-po-vyboru-koncevyh-vyklyuchatelej', fn() => redirect('/', 301));
//Route::get('news/rele-maksimalnogo-toka-osnovnye-vidy-i-princip-raboty', fn() => redirect('/', 301));
//Route::get('news/avtomaticheskie-vyklyuchateli-naznachenie-vidy-princip-raboty', fn() => redirect('/', 301));
Route::get('news/novinka-modulnye-kontaktory-finder', fn() => redirect('/', 301));

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::resource('news', NewsController::class)->only(['index', 'show']);
Route::get('/catalog/{parts?}', [CatalogController::class, 'router'])->where(['parts' => '.+'])->name('catalog');
Route::get('/contacts', [PageController::class, 'contacts'])->name('contacts');
Route::get('/order', [OrderController::class, 'index'])->name('order');
Route::get('/{slug}', [PageController::class, 'page'])->name('page');


Route::post('/feedback', [FormController::class, 'feedback'])->name('feedback');

//upload photos from admin area
Route::post('/upload', [PostTasksController::class, 'upload']);

//ajax

Route::post('/cart-add-remove', [OrderController::class, 'addRemove']);
Route::post('/cart-remove-by-id', [OrderController::class, 'removeById']);
Route::post('/cart-remove-all', [OrderController::class, 'removeAll']);
Route::post('/cart-clear', [OrderController::class, 'clear']);
Route::post('/cart-remove-by-ids', [OrderController::class, 'removeByIds']);
Route::post('/cart-add', [OrderController::class, 'add']);
Route::post('/cart-set', [OrderController::class, 'set']);
Route::post('/cart-delivery-update', [OrderController::class, 'deliveryUpdate']);
Route::post('/create-order', [AjaxOrderController::class, 'createOrder']);

