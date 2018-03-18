<?php

use Illuminate\Http\Request;


Route::post('post-feedback', 'Auth\PassportController@postFeedback');

Route::get('get-users', 'Auth\PassportController@getUsers');
Route::get('get-news', 'Auth\PassportController@getNews');
Route::get('get-events', 'Auth\PassportController@getEvents');
Route::get('get-advertisements', 'Auth\PassportController@getAdvertisement');

// Route::group(['middleware' => 'auth:api'], function(){
//     Route::post('login', 'Auth\PassportController@login'){
//         return $userss;
//     }
// });
Route::middleware('auth:api')->get('/user', function (Request $request) {
    
   
});
Route::post('register', 'Auth\PassportController@register');

Route::post('login', 'Auth\PassportController@login');

// Route::get('/home', 'HomeController@index')->name('home');

