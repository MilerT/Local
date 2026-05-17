/**
 * Configuración centralizada de branding
 * Modifica este archivo para personalizar el nombre, colores, logo y contacto del local
 */

export const branding = {
  // Información básica del negocio
  name: 'Mi Local de Eventos',
  tagline: 'Momentos íntimos, recuerdos eternos',
  description:
    'Salón de eventos acogedor e íntimo para celebraciones de hasta 80 personas. Bodas, cumpleaños, reuniones familiares y eventos sociales con atención personalizada.',
  
  // Capacidad máxima del local
  maxCapacity: 80,
  
  // Colores de marca (pueden ser nombres de Tailwind o valores hex)
  colors: {
    primary: 'primary',
    secondary: 'secondary',
    accent: 'amber',
  },
  
  // Logo (ruta relativa a public/)
  logo: '/logo.svg',
  logoAlt: `Mi Local de Eventos Logo`,
  
  // Información de contacto
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE || '+1234567890',
    email: process.env.NEXT_PUBLIC_EMAIL || 'contacto@mievento.com',
    address: process.env.NEXT_PUBLIC_ADDRESS || '123 Calle Principal, Ciudad',
    whatsapp: process.env.NEXT_PUBLIC_PHONE || '+1234567890',
  },
  
  // Redes sociales
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || 'https://facebook.com/mievento',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || 'https://instagram.com/mievento',
    twitter: process.env.NEXT_PUBLIC_TWITTER || 'https://twitter.com/mievento',
  },
  
  // Horarios
  hours: {
    weekdays: 'Lun - Vie: 9:00 AM - 8:00 PM',
    saturday: 'Sábado: 10:00 AM - 6:00 PM',
    sunday: 'Domingo: Cerrado',
  },
  
  // SEO
  seo: {
    title: 'Mi Local de Eventos | Salón de Eventos Íntimo',
    titleTemplate: '%s | Mi Local de Eventos',
    description:
      'Salón de eventos acogedor para celebraciones íntimas de hasta 80 personas. Bodas, cumpleaños, reuniones y eventos sociales con atención personalizada.',
    keywords:
      'salón de eventos, bodas íntimas, cumpleaños, reuniones familiares, eventos sociales, celebraciones, fiestas',
    ogImage: '/og-image.jpg',
  },
  
  // Configuración del sitio
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    locale: 'es',
  },
}

export default branding
