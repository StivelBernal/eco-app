import { Head } from '@inertiajs/react';
import { Header } from '@/Layouts/Partials/Header';

export default function Servicios() {
    return (
        <>
            <Head title="Servicios - EcoApp" />
            <Header />

            <main className="main-content">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
                        Nuestros Servicios
                    </h1>
                    
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 text-center mb-12">
                            Descubre cómo EcoApp te ayuda a contribuir con el medio ambiente
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-green-700 mb-4">
                                    Recolección de Residuos
                                </h3>
                                <p className="text-gray-600">
                                    Registra y programa la recolección de tus residuos reciclables
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-green-700 mb-4">
                                    Sistema de Puntos
                                </h3>
                                <p className="text-gray-600">
                                    Gana puntos por cada kilogramo de residuo que recicles
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-green-700 mb-4">
                                    Seguimiento
                                </h3>
                                <p className="text-gray-600">
                                    Monitorea tu impacto ambiental y historial de reciclaje
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
         
        </>
    );
}