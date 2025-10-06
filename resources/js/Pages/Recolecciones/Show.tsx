import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ComingSoon from '@/Components/ComingSoon';

export default function RecoleccionesShow() {
    return (
        <AuthenticatedLayout header={<h1 className="text-2xl font-bold">Detalle de Recolección</h1>}>
            <Head title="Detalle de Recolección" />
            <ComingSoon title="Detalle de Recolección" message="Aquí podrás ver el detalle de una recolección." />
        </AuthenticatedLayout>
    );
}
