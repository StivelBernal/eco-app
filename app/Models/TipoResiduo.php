<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoResiduo extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'descripcion',
        'frecuencia_recoleccion',
        'empresa_id',
        'puntos_asignados',
    ];

    public function empresaRecolectora()
    {
        return $this->belongsTo(EmpresaRecolectora::class, 'empresa_id');
    }

    public function recolecciones()
    {
        return $this->hasMany(Recoleccion::class);
    }
}

