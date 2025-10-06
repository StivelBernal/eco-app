import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            direccion: user.direccion || '',
            localidad: user.localidad || '',
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Información del perfil
                </h2>
                <p className="text-gray-500 mb-6 text-base">
                    Actualiza la información de perfil y la dirección de correo
                    electrónico de tu cuenta.
                </p>
                <div className="form-control">
                    <InputLabel htmlFor="name" value="Nombre" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div className="form-control">
                    <InputLabel htmlFor="email" value="Correo electrónico" />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div className="flex gap-4">
                    <div className="form-control flex-1">
                        <InputLabel htmlFor="direccion" value="Dirección" />
                        <TextInput
                            id="direccion"
                            className="mt-1 block w-full"
                            value={data.direccion}
                            onChange={(e) => setData('direccion', e.target.value)}
                            autoComplete="street-address"
                        />
                        <InputError className="mt-2" message={errors.direccion} />
                    </div>
                    <div className="form-control flex-1">
                        <InputLabel htmlFor="localidad" value="Localidad" />
                        <TextInput
                            id="localidad"
                            className="mt-1 block w-full"
                            value={data.localidad}
                            onChange={(e) => setData('localidad', e.target.value)}
                            autoComplete="address-level2"
                        />
                        <InputError className="mt-2" message={errors.localidad} />
                    </div>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Tu dirección de correo electrónico no está verificada.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Haz clic aquí para reenviar el correo electrónico de
                                verificación.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                Se ha enviado un nuevo enlace de verificación a tu
                                dirección de correo electrónico.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Guardar</Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Guardado.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
