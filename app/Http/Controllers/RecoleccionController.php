<?php

namespace App\Http\Controllers;

use App\Models\Recoleccion;
use App\Services\RecoleccionService;
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
        $recolecciones = Recoleccion::with('tipoResiduo')
            ->where('user_id', Auth::id())
            ->orderBy('fecha', 'desc')
            ->get(['id', 'fecha', 'tipo_residuo_id', 'estado', 'peso']);

        // Mapear para enviar el nombre del tipo de residuo directamente
        $recolecciones = $recolecciones->map(function ($rec) {
            return [
                'id' => $rec->id,
                'fecha' => $rec->fecha,
                'tipo_residuo' => $rec->tipoResiduo ? $rec->tipoResiduo->nombre : '',
                'estado' => $rec->estado,
                'peso' => $rec->peso,
            ];
        });

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

        $proximasRecolecciones = Recoleccion::with('tipoResiduo')
            ->where('user_id', Auth::id())
            ->whereDate('fecha', '>=', now()->toDateString())
            ->orderBy('fecha', 'asc')
            ->limit(3)
            ->get();

        $proximas = $proximasRecolecciones->map(function ($rec) {
            return [
                'tipo' => $rec->tipoResiduo ? $rec->tipoResiduo->nombre : '',
                'fecha' => \Carbon\Carbon::parse($rec->fecha)->translatedFormat('d \d\e F, Y'),
                'estado' => ucfirst($rec->estado),
            ];
        });

        return Inertia::render('Recolecciones/Create', [
            'tiposResiduos' => $tiposResiduos,
            'proximas' => $proximas,
        ]);
    }

    /**
     * Guardar nueva recolección
     */
    public function store(Request $request, RecoleccionService $service): RedirectResponse
    {
        $request->validate([
            'tipo_residuo_id' => 'required|exists:tipo_residuos,id',
            'fecha' => 'required|date',
        ]);

        $service->crear([
            'tipo_residuo_id' => $request->tipo_residuo_id,
            'fecha' => $request->fecha,
            // Puedes agregar más campos aquí si lo deseas
        ]);

        return redirect()->route('recolecciones.index')
            ->with('success', '¡Recolección registrada correctamente!');
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
