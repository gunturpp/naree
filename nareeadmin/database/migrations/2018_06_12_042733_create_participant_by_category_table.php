<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParticipantByCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
// - Id: int(10)*
// - invoice: unique
// - id_category: int
// - id_ticket_type: int
        Schema::create('participant_by_category', function (Blueprint $table) {
            $table->increments('id',10);
            $table->string('invoice',10)->unique();
            $table->integer('id_category');
            $table->integer('id_ticket_type');
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
        Schema::dropIfExists('participant_by_category');
    }
}
