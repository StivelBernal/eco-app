import ApplicationLogo from "@/Components/ApplicationLogo"
import { Link } from "@inertiajs/react"
import { useAuth } from "@/Hooks/useAuth"
import { useState, useRef, useEffect } from "react"

// Helper para las rutas de Laravel
declare global {
    function route(name: string, params?: any): string;
}

export const Header = () => {
    const { user, isAuthenticated, isGuest } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userActionsRef = useRef<HTMLDivElement>(null);

    // Cerrar el menú si se hace click fuera
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (userActionsRef.current && !userActionsRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <header className="primary-header">
            <Link href="/">
                <ApplicationLogo />
            </Link>

            <nav>
                <ul>
                    <li><Link href={route('dashboard')}>Inicio</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link href={route('recolecciones.index')}>Recolecciones</Link></li>
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
                    <>
                        <Link className="link-btn" href={route('login')}>
                            Iniciar sesión
                        </Link>
                        <Link className="link-btn" href={route('register')}>
                            Registrarse
                        </Link>
                    </>
                ) : (
                    <>
                      <div className="user-actions" ref={userActionsRef}>
                        <div className="notifications">
                            <img src="/images/notificacion.svg" alt="Notificaciones" />
                        </div>
                        <div className="user-avatar" title={user?.name} onClick={() => setDropdownOpen((v) => !v)}>
                          {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <span className="user-greeting">
                            Hola, {user?.name.split(' ')[0]}
                        </span>
                        <div className="dropdown-indicator" onClick={() => setDropdownOpen((v) => !v)}>
                          <img src="/images/arrow-down.svg" alt="Notificaciones" />
                        </div>
                        <div className="dropdown-menu" style={{ display: dropdownOpen ? 'flex' : 'none' }}>
                          <Link href={route('dashboard')}>Dashboard</Link>
                          <Link href={route('profile.edit')}>Perfil</Link>
                          <Link method="post"  href={route('logout')}>Cerrar sesión</Link>
                        </div>
                      </div>
                    </>
                )}
            </div>
        </header>
    )
}
