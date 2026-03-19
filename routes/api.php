<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Voyager\Tables\VoyagerProductController;
use App\Http\Controllers\Api\CategoryController as ApiCategoryController;
use App\Http\Controllers\Api\ParameterGroupController as ApiParameterGroupController;
use App\Http\Controllers\Api\ProductController as ApiProductController;
use App\Http\Controllers\Api\BrandController as ApiBrandController;
use App\Http\Controllers\Api\ParameterController as ApiParameterController;


Route::get('/dell-image/products', [VoyagerProductController::class, 'dellImage']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//1C
Route::group(['prefix' => 'v1'], function() {
    Route::post('/categories/createOrUpdate', [ApiCategoryController::class,'postCreateOrUpdateCategory']);
    Route::post('/categories/delete', [ApiCategoryController::class,'postDeleteCategories']);
    Route::post('/parameterGroups/createOrUpdate', [ApiParameterGroupController::class,'postCreateOrUpdate']);
    Route::post('/parameterGroups/delete', [ApiParameterGroupController::class,'postDelete']);
    Route::post('/products/createOrUpdate', [ApiProductController::class,'postCreateOrUpdate']);
    Route::post('/products/delete', [ApiProductController::class,'postDelete']);
    Route::post('/brands/createOrUpdate', [ApiBrandController::class,'postCreateOrUpdate']);
    Route::post('/brands/delete', [ApiBrandController::class,'postDelete']);
    Route::post('/parameters/createOrUpdate', [ApiParameterController::class,'postCreateOrUpdate']);
    Route::post('/parameters/delete', [ApiParameterController::class,'postDelete']);
});