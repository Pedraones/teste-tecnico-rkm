<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if(!Schema::hasTable("patients")){
            Schema::create("patients", function (Blueprint $table){
                $table->id();
                $table->string("name");
                $table->bigInteger("cpf")->unique();
                $table->date("birth_day");
                $table->char("phone", length:15)->nullable();
                $table->foreignId("health_unit_id");
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("patients");
    }
};
