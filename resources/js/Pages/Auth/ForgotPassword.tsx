import ApplicationLogo from '@/Components/ApplicationLogo';
import InputError from '@/Components/InputError';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Recuperar Contraseña" />

            <div className="authentication-box-content">
                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <ApplicationLogo className="mb-4" height={35} />

                    <span className="authentication-box-title mb-[12px]">Recuperar contraseña</span>
                    <span className="authentication-box-subtitle mb-[8px]">
                        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                    </span>

                    <div className='form-control mb-6'>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Correo electrónico"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <Button className="mb-4" styleType='primary' disabled={processing}>
                        Enviar enlace de recuperación
                    </Button>

                    <div className="authentication-box-links mb-6">
                        <span>¿Recordaste tu contraseña?</span>
                        <Link href={route('login')}>
                            volver al inicio de sesión
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
