<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\ServiceController;
use Carbon\Laravel\ServiceProvider;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/',function(){
return view('home');
})->name('home');
Route::get('/sp',[ServiceController::class,'pageRr'])->name('service.receiver');
Route::get('/sp/show',[ServiceController::class,'show'])->name('show.receiver');
Route::get('/sr',[ServiceController::class,'pagePr'])->name('service.provider');
Route::post('/sr/insert',[ServiceController::class,'store'])->name('store.provider');