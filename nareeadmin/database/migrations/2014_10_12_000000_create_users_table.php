<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);        
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',30);
            $table->string('email',30)->unique();
            $table->string('username',20)->unique();
            $table->string('password');
            $table->string('gender', 6);
            $table->date('birthdate');
            $table->string('occupation', 30);
            $table->string('photo')->nullable();
            $table->string('about_me')->nullable();
            $table->string('team', 30)->nullable();
            $table->integer('exp')->nullable();
            $table->string('dance_type', 30)->nullable();
            
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}