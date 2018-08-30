<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdvertisementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
//         Atribut nya apa aja
// - provinsi company
        Schema::create('advertisements', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title',100);
            $table->string('company_name',100);
            $table->string('url',100);
            $table->string('company_contact',16);
            $table->string('category',25);
            $table->string('poster');
            $table->date('period_start');
            $table->date('period_end');
            $table->integer('price');
            $table->boolean('status');
            $table->string('province', 30);
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
        Schema::dropIfExists('advertisements');
    }
}
