<?php

namespace App\Events;

use App\Models\Recoleccion;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class RecoleccionCreada
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $recoleccion;

    public function __construct(Recoleccion $recoleccion)
    {
        $this->recoleccion = $recoleccion;
    }
}
