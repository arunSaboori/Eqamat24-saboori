<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    schema::create('instalment_user',function(Blueprint $table){
                   $table->id();
                   $table->string('fullname');
                   $table->string('job');
                   $table->string('instalments')->nullable();
                   $table->string('phone_number');
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
        //
    }
};
