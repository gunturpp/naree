<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    protected $table = 'histories';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_user','exp','judul'
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
