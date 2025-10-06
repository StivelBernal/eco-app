

import Button from '@/Components/Button';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

type Recoleccion = {
    id: number;
    fecha: string;
    tipo_residuo: string;
    estado: string;
    peso: number;
};

export default function RecoleccionesIndex() {
    const { recolecciones } = usePage<PageProps<{ recolecciones: Recoleccion[] }>>().props;
    console.log({ recolecciones });

    return (
        <AuthenticatedLayout header={<h1 className="text-2xl font-bold">Recolecciones</h1>}>
            <Head title="Reporte de Recolecciones" />
            <section className="recolecciones-page">
                <header className="page-header">
                    <div>
                        <h1 className="recolecciones-title">Reporte de Recolecciones</h1>
                        <p className="lead">
                            Consulta el historial de tus recolecciones y el impacto ambiental de tus acciones.
                        </p>
                    </div>
                    <div className="points">
                        <div className="label">Puntos Acumulados</div>
                        <div className="value">1250</div>
                    </div>
                </header>

                <div className="card">
                    <div className="filters">
                        <label className="field">
                            <input type="text" placeholder="Fecha de inicio" aria-label="Fecha de inicio" />
                            <div style={{ opacity: 0.6 }}>
                                {/* ...icono... */}
                            </div>
                        </label>
                        <label className="field">
                            <input type="text" placeholder="Fecha de fin" aria-label="Fecha de fin" />
                            <div style={{ opacity: 0.6 }}>
                                {/* ...icono... */}
                            </div>
                        </label>
                        <button className="filter-btn">Filtrar</button>
                    </div>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Tipo de Residuo</th>
                                    <th>Estado</th>
                                    <th style={{ textAlign: 'right' }}>Peso (kg)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recolecciones.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} style={{ textAlign: 'center', color: '#888' }}>
                                            No hay recolecciones registradas.
                                        </td>
                                    </tr>
                                ) : (
                                    recolecciones.map((rec) => (
                                        <tr key={rec.id}>
                                            <td className="date">{rec.fecha}</td>
                                            <td className="type">{rec.tipo_residuo}</td>
                                            <td><span className="pill">{rec.estado.charAt(0).toUpperCase() + rec.estado.slice(1)}</span></td>
                                            <td className="peso">{rec.peso ?? '-'}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>


                    </div>
                    <div className='action-bottom'>
                        <Link href={route('recolecciones.create')}>
                            <Button>Agregar Recolección</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
