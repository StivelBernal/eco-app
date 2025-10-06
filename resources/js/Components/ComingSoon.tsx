import React from 'react';

export default function ComingSoon({ title = 'Próximamente', message = 'Esta sección estará disponible muy pronto.' }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] py-12">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                className="w-20 h-20 text-gray-300 mb-6"
            >
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="4" />
                <path d="M16 32c0-4 8-4 8-8V16m0 0V12m0 4h4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-500 text-base text-center max-w-md">{message}</p>
        </div>
    );
}
