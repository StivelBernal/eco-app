import ApplicationLogo from '@/Components/ApplicationLogo';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Restablecer Contraseña" />
            <div className="authentication-box-content">
                <form onSubmit={submit}>
                    <ApplicationLogo className="mb-4" height={35} />
                    <span className="authentication-box-title mb-[12px]">
                        Restablecer contraseña
                    </span>
                    <span className="authentication-box-subtitle mb-[8px]">
                        Ingresa tu nueva contraseña para completar el
                        restablecimiento.
                    </span>
                    <div className="form-control mb-6">
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Correo electrónico"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            readOnly
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="form-control mb-6">
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="Nueva contraseña"
                            autoComplete="new-password"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div className="form-control mb-6">
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            placeholder="Confirmar nueva contraseña"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                    <PrimaryButton
                        className="mb-4"
                        styleType="primary"
                        disabled={processing}
                    >
                        Restablecer contraseña
                    </PrimaryButton>
                </form>
            </div>
        </GuestLayout>
    );
}
