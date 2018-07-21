<?php

use Illuminate\Http\Request;

Route::post('register', 'Auth\PassportController@register');
Route::post('login', 'Auth\PassportController@login');

// reset password in API
Route::post('password/email', 'Auth\ForgotPasswordController@getResetToken');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::group(['middleware' => 'auth:api'], function(){
    // user
    Route::get('get-users', 'Auth\PassportController@getUsers'); //get list
    Route::get('users/{id}/edit', 'Auth\PassportController@editUser');
    Route::put('users/{id}/update', 'Auth\PassportController@updateUser');
    Route::put('users/{id}/photo', 'Auth\PassportController@updateFotoUser');
    // event
    Route::get('get-events', 'Auth\PassportController@getEvents');
    Route::get('get-event-by-id/{id}', 'Auth\PassportController@getEventById');
    Route::get('get-tickettype/{id}', 'Auth\PassportController@getTicketByIdEvent');    
    // achievement
    Route::post('post-achievement', 'Auth\PassportController@postAchievement');
    Route::get('get-achievement', 'Auth\PassportController@getAchievement');
    // advertiement
    Route::get('get-advertisements', 'Auth\PassportController@getAdvertisement');
    // payment
    Route::post('post-payment', 'Auth\PassportController@postPayment');
    Route::put('payment/{id}/nota-update', 'Auth\PassportController@updateNotaPayment');
    Route::get('get-payments', 'Auth\PassportController@getPayment');
    Route::get('get-payments-by-iduser/{id}', 'Auth\PassportController@getPaymentById');
    Route::get('payment/{id}/edit', 'Auth\PassportController@editPayment');
    // history
    Route::post('post-history', 'Auth\PassportController@postHistories');
    Route::get('get-history', 'Auth\PassportController@getHistories');
    // feedback
    Route::post('post-feedback', 'Auth\PassportController@postFeedback');
    // news    
    Route::get('get-news', 'Auth\PassportController@getNews');
    // exps
    Route::get('get-exps', 'Auth\PassportController@getExp');
    // kehadiran
    Route::get('get-kehadirans', 'Auth\PassportController@getKehadiran');
    Route::post('post-kehadiran', 'Auth\PassportController@postKehadiranEvent');
    // categories
    Route::get('get-categories', 'Auth\PassportController@getCategory');
    Route::post('post-participant-by-category', 'Auth\PassportController@postParticipant_by_category');
    Route::post('post-member-by-category', 'Auth\PassportController@postMember_by_category');
});