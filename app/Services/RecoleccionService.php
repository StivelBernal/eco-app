<?php

namespace App\Services;

use App\Models\Recoleccion;
use Illuminate\Support\Facades\Auth;

class RecoleccionService
{
    public function crear(array $data): Recoleccion
    {
        // Aquí puedes agregar lógica de negocio, validaciones, etc.
        $recoleccion = Recoleccion::create([
            'user_id' => Auth::id(),
            'tipo_residuo_id' => $data['tipo_residuo_id'],
            'fecha' => $data['fecha'],
            'estado' => 'pendiente',
            'peso' => $data['peso'] ?? null,
        ]);

        // Disparar evento
        event(new \App\Events\RecoleccionCreada($recoleccion));

        return $recoleccion;
    }
}
