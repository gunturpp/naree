<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAchievementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);        
        Schema::create('achievements', function (Blueprint $table) {
            $table->increments('id');
            $table->string('username',20)->nullable();
            $table->string('title',30)->nullable();
            $table->string('scope',15)->nullable();
            $table->string('month',10)->nullable();
            $table->string('year',4)->nullable();
            $table->string('exp');
            $table->string('poster')->nullable();
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
        Schema::dropIfExists('achievements');
    }
}
