<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberByCategoryTable extends Migration
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
// - username: int
        Schema::create('member_by_category', function (Blueprint $table) {
            $table->increments('id',10);
            $table->string('invoice',10);
            $table->string('username');            
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
        Schema::dropIfExists('member_by_category');
    }
}
