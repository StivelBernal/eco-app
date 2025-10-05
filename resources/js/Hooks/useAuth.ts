import { usePage, router } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
    direccion?: string;
    localidad?: string;
    telefono?: string;
    puntos?: number;
    email_verified_at?: string;
    created_at?: string;
    updated_at?: string;
}

interface AuthProps {
    user?: User;
}

export function useAuth() {
    const { props } = usePage<{ auth: AuthProps }>();
    
    const user = props.auth?.user;
    const isAuthenticated = !!user;
    const isGuest = !isAuthenticated;
    const isVerified = !!user?.email_verified_at;
    
    // Funciones de utilidad para navegación
    const logout = () => {
        router.post('/logout');
    };
    
    const redirectIfGuest = (redirectTo: string = '/login') => {
        if (isGuest) {
            router.visit(redirectTo);
        }
    };
    
    const redirectIfAuthenticated = (redirectTo: string = '/dashboard') => {
        if (isAuthenticated) {
            router.visit(redirectTo);
        }
    };
    
    // Funciones para verificar roles o permisos (extensible)
    const hasRole = (role: string): boolean => {
        // Implementar lógica de roles si la tienes en el futuro
        // return user?.roles?.includes(role) || false;
        return false;
    };
    
    const can = (permission: string): boolean => {
        // Implementar lógica de permisos si la tienes en el futuro
        // return user?.permissions?.includes(permission) || false;
        return false;
    };
    
    // Funciones de utilidad para datos del usuario
    const getUserInitials = (): string => {
        if (!user?.name) return '';
        return user.name
            .split(' ')
            .map(name => name.charAt(0).toUpperCase())
            .join('')
            .substring(0, 2);
    };
    
    const getFullAddress = (): string => {
        const parts = [user?.direccion, user?.localidad].filter(Boolean);
        return parts.join(', ');
    };
    
    const hasCompleteProfile = (): boolean => {
        return !!(user?.name && user?.email && user?.direccion && user?.localidad);
    };
    
    // Funciones para puntos (específico de tu app ecológica)
    const addPoints = (points: number) => {
        // Esta función se podría conectar a una API para actualizar puntos
        console.log(`Adding ${points} points to user ${user?.id}`);
        // router.post('/api/user/add-points', { points });
    };
    
    const getPointsLevel = (): string => {
        const points = user?.puntos || 0;
        if (points >= 1000) return 'Eco-Experto';
        if (points >= 500) return 'Eco-Avanzado';
        if (points >= 100) return 'Eco-Intermedio';
        return 'Eco-Principiante';
    };
    
    return {
        // Datos básicos del usuario
        user,
        
        // Estados de autenticación
        isAuthenticated,
        isGuest,
        isVerified,
        
        // Información del usuario formateada
        userName: user?.name || '',
        userEmail: user?.email || '',
        userPhone: user?.telefono || '',
        userAddress: user?.direccion || '',
        userCity: user?.localidad || '',
        userPoints: user?.puntos || 0,
        fullAddress: getFullAddress(),
        initials: getUserInitials(),
        
        // Estados del perfil
        hasCompleteProfile: hasCompleteProfile(),
        pointsLevel: getPointsLevel(),
        
        // Funciones de navegación
        logout,
        redirectIfGuest,
        redirectIfAuthenticated,
        
        // Funciones de autorización (para futuro)
        hasRole,
        can,
        
        // Funciones específicas de la app
        addPoints,
        
        // Funciones de utilidad
        refresh: () => router.reload(),
        goToDashboard: () => router.visit('/dashboard'),
        goToProfile: () => router.visit('/profile'),
    };
}

export default useAuth;