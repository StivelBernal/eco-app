<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('telefono')->nullable()->after('email');
            $table->string('direccion')->nullable()->after('telefono');
            $table->string('localidad')->nullable()->after('direccion');
            $table->integer('puntos')->default(0)->after('localidad');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['telefono', 'direccion', 'localidad', 'puntos']);
        });
    }
};
