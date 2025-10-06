import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Header } from './Partials/Header';

export default function AuthenticatedLayout({ header, children }) {

    return (
        <>
        <Header />

            <main className="main-content unlogged-page">
                {children}
            </main>
            
        </>
    );
}
