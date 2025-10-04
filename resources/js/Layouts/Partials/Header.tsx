import { Link } from "@inertiajs/react"

export const Header = () => {
    // TODO: Crear versiones con autenticacion y sin autenticación
  return (
    <header>
      <Link href="/">
        <img src="/images/logo.png" alt="Logo ecoAPP" />
      </Link>

      <nav>
        <ul>
          <li><Link href={route('dashboard')}>Inicio</Link></li>
          <li><Link href={route('register')}>Servicios</Link></li>
          <li><Link href={route('login')}>Contacto</Link></li>
        </ul>
      </nav>

      <div className="auth-section">
        <Link className="link-btn" href={route('login')}>Iniciar sesión</Link>
      </div>

    </header>
  )
}
