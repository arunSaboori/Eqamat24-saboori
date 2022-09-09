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


Route::get('/',function(){return view('home');})->name('home');



//return provider page
Route::get('/provider',[ServiceController::class,'provider'])->name('service.provider');
//
//store provider data to database after submit redirct to home page
Route::post('/provider',[ServiceController::class,'store'])->name('store.provider');
//

Route::get('/receiver',[ServiceController::class,'receiver'])->name('service.receiver');



