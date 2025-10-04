// resources/types/inertia.d.ts
import { PageProps as InertiaPageProps } from '@inertiajs/core'

export interface AuthUser {
  id: number
  name: string
  email: string
}

export interface SharedProps {
  auth: {
    user?: AuthUser
  }
  flash?: {
    success?: string
    error?: string
  }
  laravelVersion?: string
  phpVersion?: string
}

// Combinas tus props personalizadas con las de Inertia
declare module '@inertiajs/core' {
  interface PageProps extends SharedProps {}
}