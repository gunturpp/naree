<?php

use Illuminate\Http\Request;

Route::post('register', 'Auth\PassportController@register');
Route::post('login', 'Auth\PassportController@login');
Route::post('post-history', 'Auth\PassportController@postHistories');
Route::post('post-feedback', 'Auth\PassportController@postFeedback');
Route::post('post-achievement', 'Auth\PassportController@postAchievement');

Route::get('users/{id}/edit', 'Auth\PassportController@editUser');
Route::put('users/{id}/update', 'Auth\PassportController@updateUser');



Route::get('get-users', 'Auth\PassportController@getUsers');
Route::get('get-news', 'Auth\PassportController@getNews');
Route::get('get-advertisements', 'Auth\PassportController@getAdvertisement');
Route::get('get-achievement', 'Auth\PassportController@getAchievement');
Route::get('get-history', 'Auth\PassportController@getHistories');
Route::get('get-events', 'Auth\PassportController@getEvents');

// Route::group(['middleware' => 'auth:api'], function(){
//     Route::post('login', 'Auth\PassportController@login'){
//         return $userss;
//     }
// });
Route::middleware('auth:api')->group(function () {
    // jadi harus pake token dan harus login

    // test edit profile
    // Route::get('edit/{id}', 'Auth\PassportController@editUser');
    // Route::patch('users/{user}/update', 'Auth\PassportController@updateUser');

});

// Route::get('/home', 'HomeController@index')->name('home');

