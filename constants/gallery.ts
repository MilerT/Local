import { GalleryItem, EventType } from '@/types'

/**
 * Datos mock de galería
 * Usando imágenes de Unsplash para demostración
 */
export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    alt: 'Boda íntima en el salón',
    category: 'wedding',
    title: 'Boda Íntima',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
    alt: 'Decoración floral para boda',
    category: 'wedding',
    title: 'Decoración Floral',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
    alt: 'Quinceañera elegante',
    category: 'quinceanera',
    title: 'Quinceañera Elegante',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
    alt: 'Fiesta de cumpleaños',
    category: 'birthday',
    title: 'Cumpleaños Especial',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    alt: 'Evento social',
    category: 'corporate',
    title: 'Reunión Familiar',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
    alt: 'Celebración de graduación',
    category: 'graduation',
    title: 'Graduación',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop',
    alt: 'Evento personalizado',
    category: 'custom',
    title: 'Aniversario de Bodas',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
    alt: 'Salón decorado',
    category: 'wedding',
    title: 'Salón Decorado',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?q=80&w=800&auto=format&fit=crop',
    alt: 'Mesa de dulces',
    category: 'birthday',
    title: 'Mesa de Dulces',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=800&auto=format&fit=crop',
    alt: 'Baby shower decoración',
    category: 'custom',
    title: 'Baby Shower',
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=800&auto=format&fit=crop',
    alt: 'Iluminación ambiental',
    category: 'wedding',
    title: 'Iluminación Ambiental',
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=800&auto=format&fit=crop',
    alt: 'Fiesta nocturna',
    category: 'birthday',
    title: 'Celebración Nocturna',
  },
]

export const getGalleryByCategory = (category: EventType): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === category)
}
