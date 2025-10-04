import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { Header } from './Partials/Header';

export default function GuestLayout({ children }) {
    
    return (
        <>
        <Header />

            <main className="main-content unlogged-page">
                {children}
            </main>
            
        </>
    );
}
