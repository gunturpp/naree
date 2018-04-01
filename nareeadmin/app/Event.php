<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'name_event',
        'description',
        'ticket_price',
        'exp',
        'date_event',
        'province',
        'location',
        'organizer',
        'dance_type',
        'poster',
        'duration',
        'long',
        'lat',
        'exp',
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
