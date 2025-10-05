import ApplicationLogo from "@/Components/ApplicationLogo"
import { Link } from "@inertiajs/react"
import { useAuth } from "@/Hooks/useAuth"

// Helper para las rutas de Laravel
declare global {
    function route(name: string, params?: any): string;
}

export const Header = () => {
    const { user, isAuthenticated, isGuest } = useAuth();

    return (
        <header>
            <Link href="/">
                <ApplicationLogo />
            </Link>

            <nav>
                <ul>
                    <li><Link href={route('dashboard')}>Inicio</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link href={route('recolecciones.index')}>Reportes</Link></li>
                            <li><Link href={route('profile.edit')}>Perfil</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link href={route('servicios')}>Servicios</Link></li>
                            <li><Link href={route('contacto')}>Contacto</Link></li>
                        </>
                    )}
                </ul>
            </nav>

            <div className="auth-section">
                {isGuest ? (
                    // Mostrar cuando el usuario NO está autenticado
                    <>
                        <Link className="link-btn" href={route('login')}>
                            Iniciar sesión
                        </Link>
                        <Link className="link-btn" href={route('register')}>
                            Registrarse
                        </Link>
                    </>
                ) : (
                    // Mostrar cuando el usuario SÍ está autenticado
                    <>
                        <span className="user-greeting">
                            Hola, {user?.name}
                        </span>
                        <Link 
                            className="link-btn" 
                            href={route('logout')} 
                            method="post" 
                            as="button"
                        >
                            Cerrar sesión
                        </Link>
                    </>
                )}
            </div>
        </header>
    )
}
