<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);        
        Schema::create('Events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_event', 100);
            $table->text('description',10000);
            $table->integer('ticket_price');
            $table->date('date_event');
            $table->string('location',100);
            $table->string('province', 30);
            $table->string('organizer', 30);
            $table->string('dance_type', 30);
            $table->string('poster');
            $table->integer('duration');
            $table->float('rating');
            $table->decimal('long',10,7);
            $table->decimal('lat',10,7);
            $table->boolean('any_register');
            $table->string('type',7);
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
        Schema::dropIfExists('Events');
    }
}