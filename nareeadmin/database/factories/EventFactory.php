<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'name_event' => 'Bboy Shane Workshop (international)',
        'description' => 'Calling all bboy & bgirl in Bandung. Bboy @shanehkz @hustlekidz_ workshop will be in Bandung on Date : 14 May 2018 Venue : Bandung TBA(to be added) - lets learn from one best bboy in the world,if you dont know him you can search in google - FYI he have half indo blood,and half ducth blood.and bandung is one of his hometown ROOT,his mission is teach as many bboy in the world. - so dont miss this rare oppurtunity, - Also we will have a 1on1 bboy and allstyle battle - For more info : DM me 087785638866 - supported by @naree.app @bboyindo',
        'ticket_price' => 10000,
        'date_event' => $faker->dateTimeThisCentury->format('Y-m-d'),
        'province' => 'Jakarta',
        'location' => str_random(0,100),
        'organizer' => str_random(0,30),
        'dance_type' => str_random(0,30),
        'poster' => '../images/event/e7MZj1fLiNAkAuoOHN5D1OqkGu7Rs0Z1lvnLcdgi.jpeg',
        'duration' => 1,
        'long' => '107.5848920',
        'lat' => '-6.8930960',
        'exp' => 100,
        'rating' => 5,
    ];
});
