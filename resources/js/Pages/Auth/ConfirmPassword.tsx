import ApplicationLogo from '@/Components/ApplicationLogo';
import InputError from '@/Components/InputError';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirmar Contraseña" />

            <div className="authentication-box-content">
                <form onSubmit={submit}>
                    <ApplicationLogo className="mb-4" height={35} />

                    <span className="authentication-box-title mb-[12px]">Confirmar contraseña</span>
                    <span className="authentication-box-subtitle mb-[8px]">
                        Esta es un área segura de la aplicación. Por favor confirma tu contraseña antes de continuar.
                    </span>

                    <div className='form-control mb-6'>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="Contraseña"
                            autoComplete="current-password"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <Button className="mb-4" styleType='primary' disabled={processing}>
                        Confirmar
                    </Button>
                </form>
            </div>
        </GuestLayout>
    );
}