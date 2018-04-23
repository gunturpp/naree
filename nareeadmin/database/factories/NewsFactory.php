<?php

use Faker\Generator as Faker;

$factory->define(App\News::class, function (Faker $faker) {
    return [
        'judul_news' => str_random(0,100),
        'description' => "Dance Prix Indonesia, the annual ballet and contemporary dance competition, will return for its fourth edition on April 13 to 15 at the Jakarta Art Building, Central Jakarta. A total of 350,000 participants from Indonesia, Malaysia and Singapore will compete to win cash prizes and scholarships to the Singapore Ballet Academy, Universal Ballet in South Korea, Ena Ballet Studio in Japan and V. Chabukiani Tbilisi Ballet State School in Georgia. There are also cash prizes and scholarship to Ballet Legacy – Master Class Series in the US for winners of Jury’s Choice Awards. Said to be the largest and the first annual dance competition in Indonesia, Dance Prix has assembled a three-person judging panel comprising Simon Pointon, a former principal dancer of the Royal New Zealand Ballet, Han Kee Juan, principal of Singapore Ballet Academy and Maria Sascha Khan, a former principal dancer at the Ekaterinburg State Ballet in Russia.",
        'image' => "../images/news/UoVfgucvNKj3K4WI0BiKmgwpyZvnYOa1lBpSElS8.jpeg",
    ];
});
