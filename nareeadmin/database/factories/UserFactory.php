<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    static $password;
    

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        'no_hp' => "081213535003",
        'username' => $faker->userName(6,12),
        'birthdate' => $faker->dateTimeThisCentury->format('Y-m-d'),
        'gender' => $gender = 0 | 1,
        'occupation' => "pelajar",
        'photo' => "/images/photoprofile/default/png",
        'about_me'=> str_random(150),
        'team' => "GG Squad",
        'exp' => 0,
        'dance_type' => "Baledh",
        'level' => 0


    ];
});
$factory->define(App\Admin::class, function (Faker $faker) {
    static $password;

    return [
        'name' => "Admin Ganteng",
        'email' => "admin@nareeapp.com",
        'password' => $password ?: $password = bcrypt('adminnaree'),
        'remember_token' => str_random(10),
        'role' => 'admin'
    ];
});
