<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('recolecciones', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('tipo_residuo_id')->constrained('tipo_residuos')->onDelete('cascade');
            $table->date('fecha');
            $table->time('hora')->nullable();
            $table->decimal('peso', 8, 2)->nullable();
            $table->enum('estado', ['pendiente', 'completada', 'cancelada'])->default('pendiente');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('recolecciones');
    }
};
