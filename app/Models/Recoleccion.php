<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recoleccion extends Model
{
    protected $table = 'recolecciones';
    use HasFactory;

    protected $fillable = [
        'user_id',
        'tipo_residuo_id',
        'fecha',
        'hora',
        'peso',
        'estado',
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function tipoResiduo()
    {
        return $this->belongsTo(TipoResiduo::class);
    }
}
