import { NavItem } from '@/types'

/**
 * Configuración de navegación del sitio
 */
export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/about' },
  { label: 'Servicios', href: '/services' },
  { label: 'Galería', href: '/gallery' },
  { label: 'Planes', href: '/plans' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contacto', href: '/contact' },
]

export const footerNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/about' },
  { label: 'Servicios', href: '/services' },
  { label: 'Galería', href: '/gallery' },
  { label: 'Planes', href: '/plans' },
]

export const legalNav: NavItem[] = [
  { label: 'Términos y Condiciones', href: '/terms' },
  { label: 'Política de Privacidad', href: '/privacy' },
]
