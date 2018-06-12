<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
// - Id: int(10)*
// - id_user : number
// - id_event : number
// - status : varchar(lunas dll)
// - create_at
// - Total Price : number
// - invoice:unique
    Schema::create('payments', function (Blueprint $table) {
        $table->increments('id');
        $table->integer('id_user');
        $table->integer('id_event');
        $table->string('status',10);
        $table->integer('total_price');
        $table->string('invoice',10);
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
        Schema::dropIfExists('payments');
    }
}
