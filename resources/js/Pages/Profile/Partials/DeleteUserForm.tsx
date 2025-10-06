import Button from '@/Components/Button';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Eliminar Cuenta
            </h2>
            <p className="text-gray-500 mb-6 text-base">
                Una vez que elimines tu cuenta, todos tus datos serán borrados
                permanentemente. Descarga cualquier información que desees
                conservar antes de continuar.
            </p>

            <Button onClick={confirmUserDeletion}>
                Eliminar cuenta
            </Button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        ¿Estás seguro de que deseas eliminar tu cuenta?
                    </h2>

                    <p className="text-gray-600 mb-4">
                        Esta acción no se puede deshacer. Ingresa tu contraseña para
                        confirmar que deseas eliminar tu cuenta de forma permanente.
                    </p>

                    <div className="form-control mb-4">
                        <InputLabel htmlFor="password" value="Contraseña" />

                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end gap-4">
                        <Button  styleType='secondary' onClick={closeModal} type="button">
                            Cancelar
                        </Button>

                        <Button className="ml-3" disabled={processing}>
                            Eliminar cuenta
                        </Button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
