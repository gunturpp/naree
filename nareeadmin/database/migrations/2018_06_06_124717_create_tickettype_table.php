<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTickettypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
// + id: int(10)
// + id_category: int
// + type: varchar(30)
// + price: int
// + period_start:date
// + period_end:date

        Schema::create('tickettype', function (Blueprint $table) {
            $table->increments('id',10);
            $table->integer('id_category');
            $table->string('type',40);
            $table->integer('price');
            $table->date('period_start');
            $table->date('periode_end');
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
        Schema::dropIfExists('tickettype');
    }
}
