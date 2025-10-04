import { Header } from '@/Layouts/Partials/Header';
import { Head, Link } from '@inertiajs/react';

interface WelcomeProps {
    auth: {
        user?: any; // Replace 'any' with your actual user type if available
    };
    laravelVersion: string;
    phpVersion: string;
}


export default function Welcome({ auth, laravelVersion, phpVersion }: WelcomeProps) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Header />

            <main className="main-content">
                   
            </main>
            
            <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                Laravel v{laravelVersion} (PHP v{phpVersion})
            </footer>
        </>
    );
}
