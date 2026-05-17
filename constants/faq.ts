import { FAQ } from '@/types'

/**
 * Datos mock de preguntas frecuentes
 */
export const faqs: FAQ[] = [
  {
    id: '1',
    question: '¿Cuál es la capacidad máxima del local?',
    answer:
      'Nuestro salón tiene capacidad para hasta 80 personas sentadas cómodamente. Es un espacio íntimo y acogedor ideal para celebraciones personales.',
    category: 'general',
  },
  {
    id: '2',
    question: '¿Con cuánta antelación debo reservar?',
    answer:
      'Recomendamos reservar con al menos 2-4 semanas de antelación, especialmente para fines de semana. Para fechas en temporada alta (diciembre, febrero, mayo), lo ideal es reservar con 1-2 meses de anticipación.',
    category: 'general',
  },
  {
    id: '3',
    question: '¿Puedo llevar mi propio catering o comida?',
    answer:
      'Sí, puedes traer tu propio catering, comida, pastel y bebidas. Nosotros proporcionamos el espacio y las instalaciones. Solo pedimos que se deje el lugar limpio y ordenado.',
    category: 'servicios',
  },
  {
    id: '4',
    question: '¿Qué incluye el alquiler del salón?',
    answer:
      'El alquiler incluye el uso del espacio por el tiempo acordado, mesas, sillas, iluminación ambiental, sistema de sonido básico, baños y estacionamiento.',
    category: 'general',
  },
  {
    id: '5',
    question: '¿Puedo decorar el salón a mi gusto?',
    answer:
      'Por supuesto. Puedes decorar el espacio según la temática de tu evento. Solo pedimos que no se dañen las instalaciones. También contamos con decoración básica disponible.',
    category: 'servicios',
  },
  {
    id: '6',
    question: '¿Hay estacionamiento disponible?',
    answer:
      'Sí, contamos con estacionamiento para nuestros invitados. El acceso es gratuito durante el evento.',
    category: 'instalaciones',
  },
  {
    id: '7',
    question: '¿Cuáles son las formas de pago?',
    answer:
      'Aceptamos efectivo, transferencias bancarias y depósitos. Se requiere un anticipo para confirmar la reserva y el resto se cubre antes del evento.',
    category: 'pagos',
  },
  {
    id: '8',
    question: '¿Puedo visitar el local antes de reservar?',
    answer:
      '¡Claro que sí! Puedes agendar una visita para conocer el espacio. Contáctanos por teléfono o WhatsApp para coordinar un horario conveniente.',
    category: 'general',
  },
  {
    id: '9',
    question: '¿Qué tipos de eventos pueden realizarse?',
    answer:
      'Nuestro salón es versátil y se adapta a bodas íntimas, cumpleaños, quinceañeras, baby showers, graduaciones, reuniones familiares, despedidas y cualquier celebración social de hasta 80 personas.',
    category: 'servicios',
  },
  {
    id: '10',
    question: '¿Cuál es la política de cancelación?',
    answer:
      'Las cancelaciones con 15 días o más de anticipación tienen reembolso del 80% del anticipo. Entre 7-14 días, reembolso del 50%. Menos de 7 días, no hay reembolso. Los cambios de fecha están sujetos a disponibilidad.',
    category: 'pagos',
  },
]
