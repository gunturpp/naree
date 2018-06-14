<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Participantbycategory extends Model
{
    protected $table = 'participant_by_category';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'invoice',
        'id_category',
        'id_ticket_type'
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
