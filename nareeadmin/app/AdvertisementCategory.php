<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AdvertisementCategory extends Model
{
    protected $table = 'advertisement_category';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'category_ads'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'remember_token',
    ];
}
