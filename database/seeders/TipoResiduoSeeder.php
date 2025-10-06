<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TipoResiduoSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('tipo_residuos')->insert([
            ['nombre' => 'Orgánico', 'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'Reciclable', 'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'Voluminoso', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
