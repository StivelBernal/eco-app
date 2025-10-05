<?php

namespace App\Http\Controllers;

use App\Models\Recoleccion;
use App\Models\TipoResiduo;
use App\Models\EmpresaRecolectora;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class RecoleccionController extends Controller
{
    /**
     * Mostrar lista de recolecciones del usuario autenticado
     */
    public function index(): Response
    {
        $recolecciones = Recoleccion::with(['tipoResiduo', 'empresaRecolectora'])
            ->where('user_id', Auth::id())
            ->orderBy('fecha_recoleccion', 'desc')
            ->paginate(10);

        return Inertia::render('Recolecciones/Index', [
            'recolecciones' => $recolecciones
        ]);
    }

    /**
     * Mostrar formulario para crear nueva recolección
     */
    public function create(): Response
    {
        $tiposResiduos = TipoResiduo::all();
        $empresasRecolectoras = EmpresaRecolectora::all();

        return Inertia::render('Recolecciones/Create', [
            'tiposResiduos' => $tiposResiduos,
            'empresasRecolectoras' => $empresasRecolectoras
        ]);
    }

    /**
     * Guardar nueva recolección
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'tipo_residuo_id' => 'required|exists:tipo_residuos,id',
            'empresa_recolectora_id' => 'required|exists:empresa_recolectoras,id',
            'cantidad_kg' => 'required|numeric|min:0.1|max:10000',
            'fecha_recoleccion' => 'required|date|before_or_equal:today',
            'observaciones' => 'nullable|string|max:500',
        ]);

        // Calcular puntos basados en la cantidad (ejemplo: 1 punto por kg)
        $puntos = (int) $request->cantidad_kg;

        $recoleccion = Recoleccion::create([
            'user_id' => Auth::id(),
            'tipo_residuo_id' => $request->tipo_residuo_id,
            'empresa_recolectora_id' => $request->empresa_recolectora_id,
            'cantidad_kg' => $request->cantidad_kg,
            'fecha_recoleccion' => $request->fecha_recoleccion,
            'observaciones' => $request->observaciones,
            'puntos_obtenidos' => $puntos,
            'estado' => 'completada'
        ]);

        // Actualizar puntos del usuario
        Auth::user()->increment('puntos', $puntos);

        return redirect()->route('recolecciones.index')
            ->with('success', "¡Recolección registrada! Has ganado {$puntos} puntos.");
    }

    /**
     * Mostrar detalles de una recolección específica
     */
    public function show(Recoleccion $recoleccion): Response
    {
        // Verificar que la recolección pertenece al usuario autenticado
        if ($recoleccion->user_id !== Auth::id()) {
            abort(403);
        }

        $recoleccion->load(['tipoResiduo', 'empresaRecolectora']);

        return Inertia::render('Recolecciones/Show', [
            'recoleccion' => $recoleccion
        ]);
    }
}
