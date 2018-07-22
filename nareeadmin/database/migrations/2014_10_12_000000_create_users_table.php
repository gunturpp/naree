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
            $table->string('email',100)->unique();
            $table->string('username',20)->unique();
            $table->string('password');
            $table->boolean('gender');
            $table->date('birthdate');
            $table->string('occupation', 30);
            $table->string('photo')->nullable();
            $table->string('no_hp',15)->nullable();
            $table->string('about_me',150)->nullable();
            $table->string('team', 30)->nullable();
            $table->string('province', 30)->nullable();
            $table->integer('exp')->nullable();
            $table->string('dance_type', 30)->nullable();
            $table->integer('level');
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