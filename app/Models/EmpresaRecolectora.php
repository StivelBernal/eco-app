<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmpresaRecolectora extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'tipo_residuo',
        'contacto',
    ];

    public function tiposResiduos()
    {
        return $this->hasMany(TipoResiduo::class, 'empresa_id');
    }
}

