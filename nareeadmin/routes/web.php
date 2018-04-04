<?php
Route::get('/', function () {
    return view('/auth/admin-login');
    // return view('/dashboard/index');  
});
Auth::routes();

Route::get('/home', 'HomeController@index');

Route::prefix('admin')->group(function() {
    Route::get('/', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/', 'Auth\AdminLoginController@login')->name('admin.login.submit');
  });

 Route::get('/dashboard', 'AdminController@index');

// News
Route::get('/news', 'NewsController@index');
Route::get('news/create', 'NewsController@create');
Route::post('news/store', 'NewsController@store');
Route::delete('news/destroy', 'NewsController@destroy');
Route::put('news/update', 'NewsController@update');
Route::get('news/show', 'NewsController@show');
Route::get('news/edit', 'NewsController@edit');

// // Event
Route::get('/event', 'EventController@index');
Route::get('event/create', 'EventController@create');
Route::post('event/store', 'EventController@store');
Route::delete('event/destroy', 'EventController@destroy');
Route::put('event/update', 'EventController@update');
Route::get('event/show', 'EventController@show');
Route::get('event/edit', 'EventController@edit');

// // Advertisement
Route::get('/advertisement', 'AdvertisementController@index');
Route::get('advertisement/create', 'AdvertisementController@create');
Route::post('advertisement/store', 'AdvertisementController@store');
Route::delete('advertisement/destroy', 'AdvertisementController@destroy');
Route::put('advertisement/update', 'AdvertisementController@update');
Route::get('advertisement/show', 'AdvertisementController@show');
Route::get('advertisement/edit', 'AdvertisementController@edit');

// feedback
Route::get('/feedback', 'FeedbackController@index');
Route::get('feedback/create', 'FeedbackController@create');
Route::post('feedback/store', 'FeedbackController@store');
Route::delete('feedback/destroy', 'FeedbackController@destroy');
Route::put('feedback/update', 'FeedbackController@update');
Route::get('feedback/show', 'FeedbackController@show');
Route::get('feedback/edit', 'FeedbackController@edit');

// Advertisement
Route::get('/achievement', 'AchievementController@index');
Route::get('achievement/create', 'AchievementController@create');
Route::post('achievement/store', 'AchievementController@store');
Route::delete('achievement/destroy', 'AchievementController@destroy');
Route::put('achievement/update', 'AchievementController@update');
Route::get('achievement/show', 'AchievementController@show');
Route::get('achievement/edit', 'AchievementController@edit');

// // resources
Route::resource('news','NewsController');
Route::resource('event','EventController');
Route::resource('advertisement','AdvertisementController');
Route::resource('feeback','FeedbackController');
Route::resource('achievement','AchievementController');