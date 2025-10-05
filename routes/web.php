<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecoleccionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::get('/', function () {
    // Si el usuario ya está autenticado, redirigir al dashboard
    if (Auth::check()) {
        return redirect()->route('dashboard');
    }
    
    // Si no está autenticado, redirigir al login
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Rutas para recolecciones
    Route::get('/recolecciones', [RecoleccionController::class, 'index'])->name('recolecciones.index');
    Route::get('/recolecciones/crear', [RecoleccionController::class, 'create'])->name('recolecciones.create');
    Route::post('/recolecciones', [RecoleccionController::class, 'store'])->name('recolecciones.store');
    Route::get('/recolecciones/{recoleccion}', [RecoleccionController::class, 'show'])->name('recolecciones.show');
});

require __DIR__.'/auth.php';
