import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        direccion: "",
        localidad: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Registrarse" />

            <div className='authentication-box-content'>

                <form onSubmit={submit}>

                    <ApplicationLogo className="mb-4" height={35} />

                    <span className="authentication-box-title mb-[12px]">Crear una cuenta</span>
                    <span className="authentication-box-subtitle mb-[8px]">Únete para gestionar la recolección de tus residuos.</span>

                    <div className='form-control mb-6'>

                        <TextInput
                            id="name"
                            name="name"
                            placeholder="Nombre"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="form-control mb-6">

                        <TextInput
                            id="email"
                            type="email"
                            placeholder="Correo electrónico"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="form-control mb-6">

                        <TextInput
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="form-control mb-6">

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            placeholder="Confirmar contraseña"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                     <div className='form-control mb-6'>

                        <TextInput
                            id="direccion"
                            name="direccion"
                            placeholder="Dirección"
                            value={data.direccion}
                            className="mt-1 block w-full"
                            autoComplete="direccion"
                            isFocused={true}
                            onChange={(e) => setData('direccion', e.target.value)}
                            required
                        />

                        <InputError message={errors.direccion} className="mt-2" />
                    </div>


                    <div className='form-control mb-6'>

                        <TextInput
                            id="localidad"
                            name="localidad"
                            placeholder="Localidad"
                            value={data.localidad}
                            className="mt-1 block w-full"
                            autoComplete="localidad"
                            isFocused={true}
                            onChange={(e) => setData('localidad', e.target.value)}
                            required
                        />

                        <InputError message={errors.localidad} className="mt-2" />
                    </div>


                    <PrimaryButton className="mb-8" disabled={processing}>
                        Registrarse
                    </PrimaryButton>

                    <div className="authentication-box-links mb-6">
                        <span>
                            ¿Ya tienes una cuenta?
                        </span>
                        <Link
                            href={route('login')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Iniciar sesión
                        </Link>

                    
                    </div>
                </form>

            </div>

        </GuestLayout>
    );
}
