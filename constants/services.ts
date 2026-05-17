import { Service, EventType } from '@/types'

/**
 * Datos mock de servicios
 * Estos datos se usan para mostrar los servicios disponibles
 */
export const services: Service[] = [
  {
    id: '1',
    type: 'wedding',
    title: 'Bodas Íntimas',
    description:
      'Celebra el día más especial de tu vida en un ambiente cálido y acogedor. Nuestro espacio íntimo es ideal para bodas de hasta 80 invitados donde cada detalle importa.',
    capacity: 80,
    features: [
      'Ambiente cálido e íntimo',
      'Decoración personalizada',
      'Iluminación ambiental',
      'Sistema de sonido',
      'Espacio para ceremonia y recepción',
      'Estacionamiento',
    ],
    images: ['https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'],
    featured: true,
  },
  {
    id: '2',
    type: 'birthday',
    title: 'Cumpleaños',
    description:
      'Desde fiestas infantiles hasta celebraciones de adultos, nuestro espacio se adapta a cada tipo de festejo para que disfrutes al máximo.',
    capacity: 80,
    features: [
      'Decoración temática',
      'Espacio para mesa de dulces',
      'Sistema de sonido',
      'Iluminación decorativa',
      'Zona segura para niños',
    ],
    images: ['https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop'],
    featured: true,
  },
  {
    id: '3',
    type: 'quinceanera',
    title: 'Quinceañeras',
    description:
      'La celebración de tus 15 años merece un lugar especial. Nuestro salón te ofrece un espacio elegante y acogedor para este momento único.',
    capacity: 80,
    features: [
      'Espacio para vals y coreografías',
      'Iluminación especial',
      'Sistema de sonido profesional',
      'Decoración personalizada',
      'Espacio para mesa de honor',
    ],
    images: ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop'],
    featured: true,
  },
  {
    id: '4',
    type: 'corporate',
    title: 'Reuniones y Eventos Sociales',
    description:
      'Espacio versátil para reuniones familiares, baby showers, despedidas, aniversarios y cualquier celebración social que desees organizar.',
    capacity: 80,
    features: [
      'Mobiliario adaptable',
      'Sistema de sonido',
      'Iluminación ambiental',
      'Acceso a estacionamiento',
      'Espacio para catering externo',
    ],
    images: ['https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop'],
    featured: false,
  },
  {
    id: '5',
    type: 'graduation',
    title: 'Graduaciones',
    description:
      'Celebra tu logro académico en un espacio íntimo y especial. Ideal para graduaciones de escuela, preparatoria y universidad.',
    capacity: 80,
    features: [
      'Decoración personalizada',
      'Sistema de sonido',
      'Iluminación ambiental',
      'Espacio para fotos',
      'Mobiliario confortable',
    ],
    images: ['https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop'],
    featured: false,
  },
  {
    id: '6',
    type: 'custom',
    title: 'Eventos a la Medida',
    description:
      '¿Tienes una idea especial? Adaptamos nuestro espacio a tus necesidades para cualquier tipo de celebración.',
    capacity: 80,
    features: [
      'Espacio adaptable',
      'Consultoría personalizada',
      'Decoración flexible',
      'Servicios a tu medida',
    ],
    images: ['https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1200&auto=format&fit=crop'],
    featured: false,
  },
]

export const getServiceByType = (type: EventType): Service[] => {
  return services.filter((service) => service.type === type)
}

export const getFeaturedServices = (): Service[] => {
  return services.filter((service) => service.featured)
}
