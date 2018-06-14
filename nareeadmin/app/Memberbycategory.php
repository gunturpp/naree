<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Memberbycategory extends Model
{
    protected $table = 'member_by_category';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'invoice',
        'username'
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
