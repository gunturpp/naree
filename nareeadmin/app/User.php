<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     * 
     *
     * @var array
     */
    protected $table = 'users';
    
    protected $fillable = [
        'id','name', 'email','no_hp','username', 'password', 'birthdate','gender','occupation',
        'photo','about_me','team','province','exp','dance_type', 'level'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
