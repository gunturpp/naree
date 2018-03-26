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

// cruds
// Route::get('cruds/index', 'CrudsController@index');
// Route::get('/cruds', 'CrudsController@index');
// Route::get('cruds/create', 'CrudController@create');
// Route::post('cruds/store', 'CrudController@store');
// Route::delete('cruds/destroy', 'CrudController@destroy');
// Route::put('cruds/update', 'CrudController@update');
// Route::get('cruds/show', 'CrudController@show');
// Route::get('cruds/edit', 'CrudController@edit');

// // homestays
// // Route::get('homestays/index', 'HomestayController@index');
// Route::get('/homestays', 'HomestaysController@index');
// Route::get('homestays/create', 'HomestayController@create');
// Route::post('homestays/store', 'HomestayController@store');
// Route::delete('homestays/destroy', 'HomestayController@destroy');
// Route::put('homestays/update', 'HomestayController@update');
// Route::get('homestays/show', 'HomestayController@show');
// Route::get('homestays/edit', 'HomestayController@edit');

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

Route::get('/feedback', 'FeedbackController@index');
Route::get('feedback/create', 'FeedbackController@create');
Route::post('feedback/store', 'FeedbackController@store');
Route::delete('feedback/destroy', 'FeedbackController@destroy');
Route::put('feedback/update', 'FeedbackController@update');
Route::get('feedback/show', 'FeedbackController@show');
Route::get('feedback/edit', 'FeedbackController@edit');

// // Souvenir
// Route::get('/souvenir', 'SouvenirController@index');
// Route::get('souvenir/create', 'SouvenirController@create');
// Route::post('souvenir/store', 'SouvenirController@store');
// Route::delete('souvenir/destroy', 'SouvenirController@destroy');
// Route::put('souvenir/update', 'SouvenirController@update');
// Route::get('souvenir/show', 'SouvenirController@show');
// Route::get('souvenir/edit', 'SouvenirController@edit');

// // resources
// Route::resource('cruds','CrudController');
// Route::resource('homestays','HomestayController');
Route::resource('news','NewsController');
Route::resource('event','EventController');
Route::resource('advertisement','AdvertisementController');
Route::resource('feeback','FeedbackController');
// Route::resource('explore','ExploreController');
// Route::resource('souvenir','SouvenirController');