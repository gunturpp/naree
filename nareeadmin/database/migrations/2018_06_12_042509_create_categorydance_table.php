<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategorydanceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
// + id: int(10)
// + id_event: int
// + name: varchar(100)
// + min_person:int
// + max_person:int
// + persons: int(1:solo,2:team)
// + exp: int(11)

        Schema::create('categorydance', function (Blueprint $table) {
            $table->increments('id',10);
            $table->integer('id_event');
            $table->string('category',100);
            $table->integer('min_person');
            $table->integer('max_person');
            $table->integer('persons');
            $table->integer('exp');
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
        Schema::dropIfExists('categorydance');
    }
}
