<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/alumni', 'AlumniController@store');
Route::get('/alumnis', 'AlumniController@listAll');
Route::get('/alumni/{id}', 'AlumniController@list');
Route::post('/login', 'AlumniController@login');
