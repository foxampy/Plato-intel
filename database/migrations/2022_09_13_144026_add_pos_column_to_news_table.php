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
        Schema::table('news', function (Blueprint $table) {
            $table->unsignedBigInteger('category_id')->nullable()->default(0)->change();
            $table->integer('pos');
            $table->text('image');
            $table->tinyInteger('show_main');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('news', function (Blueprint $table) {
            $table->unsignedBigInteger('category_id')->default(0)->change();
            $table->dropColumn(['pos','show_main','image']);
        });
    }
};
