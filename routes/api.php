<?php

use Illuminate\Http\Request;
use Laravel\Passport\Bridge\AccessToken;
use Laravel\Passport\Http\Controllers\PersonalAccessTokenController;

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
// Route::post(uri:'login',[AccessTokenController::class, 'issueToken'])
//     ->middleware([api-login, 'throttle'])
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//passport
Route::post('/register', 'AuthAPIController@register');
Route::post('/login', 'AuthAPIController@login');


Route::group(['middleware' => 'auth:api'], function () {
        Route::GET('/test', 'TestAPIController@index');
        Route::POST('/logout', 'TestAPIController@logout');
    });

Route::resource('question', 'Api\QuestionController');
Route::resource('answer', 'Api\AnswerController');

