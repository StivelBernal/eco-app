import { Head } from '@inertiajs/react';
import { Header } from '@/Layouts/Partials/Header';

export default function Contacto() {
    return (
        <>
            <Head title="Contacto - EcoApp" />
            <Header />

            <main className="main-content">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
                        Contáctanos
                    </h1>
                    
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-gray-700 text-center mb-12">
                            ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-green-700 mb-4">
                                    Información de Contacto
                                </h3>
                                
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium text-gray-800">Email</h4>
                                        <p className="text-gray-600">contacto@ecoapp.com</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-medium text-gray-800">Teléfono</h4>
                                        <p className="text-gray-600">+57 300 123 4567</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-medium text-gray-800">Dirección</h4>
                                        <p className="text-gray-600">
                                            Calle 123 #45-67<br />
                                            Bogotá, Colombia
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-green-700 mb-4">
                                    Horarios de Atención
                                </h3>
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="font-medium text-gray-800">Lunes - Viernes</span>
                                        <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span className="font-medium text-gray-800">Sábados</span>
                                        <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span className="font-medium text-gray-800">Domingos</span>
                                        <span className="text-gray-600">Cerrado</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <div className="bg-green-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-green-800 mb-2">
                                    ¡Únete a la comunidad EcoApp!
                                </h3>
                                <p className="text-green-700">
                                    Síguenos en nuestras redes sociales para más consejos sobre reciclaje y cuidado del medio ambiente
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center text-sm text-gray-600 bg-gray-50">
                <p>&copy; 2025 EcoApp. Todos los derechos reservados.</p>
            </footer>
        </>
    );
}