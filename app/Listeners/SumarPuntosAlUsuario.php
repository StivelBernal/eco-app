<?php

namespace App\Listeners;

use App\Events\RecoleccionCreada;
use Illuminate\Contracts\Queue\ShouldQueue;

class SumarPuntosAlUsuario
{
    public function handle(RecoleccionCreada $event)
    {
        $user = $event->recoleccion->usuario;
        if ($user) {
            $user->increment('puntos', 10); // Ejemplo: suma 10 puntos por recolección
        }
    }
}
