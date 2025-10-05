import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Button';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});
    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };
    return (
        <GuestLayout>
            <Head title="Verificar Email" />
            <div className="authentication-box-content">
                <ApplicationLogo className="mb-4" height={35} />
                <span className="authentication-box-title mb-[12px]">Verificar email</span>
                <span className="authentication-box-subtitle mb-[8px]">
                    ¡Gracias por registrarte! Antes de comenzar, por favor verifica tu dirección de email haciendo clic en el enlace que acabamos de enviarte.
                </span>
                {status === 'verification-link-sent' && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        Se ha enviado un nuevo enlace de verificación a tu email.
                    </div>
                )}
                <form onSubmit={submit}>
                    <Button className="mb-4" styleType='primary' disabled={processing}>
                        Reenviar email de verificación
                    </Button>
                </form>
            </div>
        </GuestLayout>
    );
}
