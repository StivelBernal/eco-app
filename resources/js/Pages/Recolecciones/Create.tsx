import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";


const tiposResiduos = [
    { value: 'organico', label: 'Orgánico' },
    { value: 'reciclable', label: 'Reciclable' },
    { value: 'voluminoso', label: 'Voluminoso' },
];

const proximas = [
    { tipo: 'Orgánico', fecha: '15 de Mayo, 2024', estado: 'Pendiente' },
    { tipo: 'Reciclable', fecha: '22 de Mayo, 2024', estado: 'Realizada' },
    { tipo: 'Voluminoso', fecha: '29 de Mayo, 2024', estado: 'Cancelada' },
];

const estadoColor: any = {
    Pendiente: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    Realizada: 'bg-green-50 text-green-700 border border-green-200',
    Cancelada: 'bg-red-50 text-red-700 border border-red-200',
};

export default function RecoleccionesCreate() {
    const [tipoResiduo, setTipoResiduo] = useState(tiposResiduos[0].value);
    const [fecha, setFecha] = useState<Date | null>(new Date());

    return (
        <AuthenticatedLayout header={<h1 className="text-2xl font-bold mb-6">Programar Recolección</h1>}>
            <Head title="Programar Recolección" />
            <div className="flex flex-col md:flex-row gap-12 items-start justify-center py-12 px-2 bg-[#f6f9f6] min-h-[70vh]">
                {/* Formulario */}
                <form className="bg-white rounded-2xl p-8 shadow w-full max-w-md border border-[#e6ebea]" style={{ minWidth: 340 }}>
                    <label className="block mb-6">
                        <span className="block font-semibold mb-2 text-gray-900 text-lg">Tipo de Residuo</span>
                        <select
                            className="w-full border border-[#e6ebea] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-[#f6f9f6] text-gray-900"
                            value={tipoResiduo}
                            onChange={e => setTipoResiduo(e.target.value)}
                        >
                            {tiposResiduos.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </label>
                    <div className="mb-8">
                        <ReactDatePicker
                            selected={fecha}
                            onChange={date => setFecha(date)}
                            inline
                            calendarClassName="!border-0 !bg-[#f6f9f6] rounded-xl"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#16c23a] hover:bg-green-600 text-white font-bold py-3 rounded-lg transition text-lg shadow-sm"
                        style={{ marginTop: 10 }}
                    >
                        Confirmar Solicitud
                    </button>
                </form>

                {/* Próximas Recolecciones */}
                <div className="bg-white rounded-2xl p-8 shadow w-full max-w-md border border-[#e6ebea]" style={{ minWidth: 340 }}>
                    <h2 className="text-lg font-bold mb-4 text-gray-900">Próximas Recolecciones</h2>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-gray-500">
                                <th className="text-left pb-2">Tipo de Residuo</th>
                                <th className="text-left pb-2">Fecha</th>
                                <th className="text-left pb-2">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proximas.map((r, i) => (
                                <tr key={i} className="border-t last:border-b-0 border-[#e6ebea]">
                                    <td className="py-2 text-gray-900 font-medium">{r.tipo}</td>
                                    <td className="py-2 text-gray-700">{r.fecha}</td>
                                    <td className="py-2">
                                        <span className={`px-3 py-1 rounded-full font-semibold text-xs ${estadoColor[r.estado] || ''} border`}>{r.estado}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
