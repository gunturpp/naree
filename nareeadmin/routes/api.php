<?php

use Illuminate\Http\Request;

Route::post('register', 'Auth\PassportController@register');
Route::post('login', 'Auth\PassportController@login');
Route::post('post-history', 'Auth\PassportController@postHistories');
Route::post('post-feedback', 'Auth\PassportController@postFeedback');
Route::post('post-achievement', 'Auth\PassportController@postAchievement');
Route::post('post-kehadiran', 'Auth\PassportController@postKehadiranEvent');
Route::post('post-payment', 'Auth\PassportController@postPayment');
Route::post('post-participant-by-category', 'Auth\PassportController@postParticipant_by_category');
Route::post('post-member-by-category', 'Auth\PassportController@postMember_by_category');


Route::get('payment/{id}/edit', 'Auth\PassportController@editPayment');
Route::put('payment/{id}/nota-update', 'Auth\PassportController@updateNotaPayment');
Route::get('users/{id}/edit', 'Auth\PassportController@editUser');
Route::put('users/{id}/update', 'Auth\PassportController@updateUser');
Route::put('users/{id}/photo', 'Auth\PassportController@updateFotoUser');


Route::get('get-users', 'Auth\PassportController@getUsers');
Route::get('get-news', 'Auth\PassportController@getNews');
Route::get('get-advertisements', 'Auth\PassportController@getAdvertisement');
Route::get('get-achievement', 'Auth\PassportController@getAchievement');
Route::get('get-history', 'Auth\PassportController@getHistories');
Route::get('get-events', 'Auth\PassportController@getEvents');
Route::get('get-exps', 'Auth\PassportController@getExp');
Route::get('get-kehadirans', 'Auth\PassportController@getKehadiran');
Route::get('get-categories', 'Auth\PassportController@getCategory');
Route::get('get-tickettype', 'Auth\PassportController@getTicket');
Route::get('get-payments', 'Auth\PassportController@getPayment');

// reset password in API
Route::post('password/email', 'Auth\ForgotPasswordController@getResetToken');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');
// Route::group(['middleware' => 'auth:api'], function(){
//     Route::post('login', 'Auth\PassportController@login'){
//         return $userss;
//     }
// });
Route::middleware('auth:api')->group(function () {
    // jadi h arus pake token dan harus login
    
    // test edit profile
    // Route::get('edit/{id}', 'Auth\PassportController@editUser');
    // Route::patch('users/{user}/update', 'Auth\PassportController@updateUser');
    
});

// Route::get('/home', 'HomeController@index')->name('home');

