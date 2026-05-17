/**
 * Definiciones de tipos TypeScript para el proyecto
 */

// Tipos de eventos
export type EventType =
  | 'wedding'
  | 'quinceanera'
  | 'birthday'
  | 'corporate'
  | 'graduation'
  | 'custom'

// Estado de formulario
export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// Servicio
export interface Service {
  id: string
  type: EventType
  title: string
  description: string
  capacity: number
  features: string[]
  price?: number
  images: string[]
  featured: boolean
}

// Paquete/Plan
export interface Plan {
  id: string
  name: string
  description: string
  price: number
  features: string[]
  popular?: boolean
  capacity: number
}

// Galería
export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: EventType
  title?: string
}

// Testimonio
export interface Testimonial {
  id: string
  name: string
  event: string
  content: string
  rating: number
  image?: string
}

// FAQ
export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

// Blog Post
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  image: string
  category: string
  slug: string
}

// Formulario de reserva
export interface ReservationForm {
  name: string
  email: string
  phone: string
  eventType: EventType
  date: string
  guests: number
  message: string
}

// Miembro del equipo
export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
}

// Navegación
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// Metadata SEO
export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}
