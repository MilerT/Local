import Link from "next/link"
import { branding } from "@/config/branding"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">{branding.name}</h3>
            <p className="text-sm text-muted-foreground">{branding.description}</p>
            <div className="flex space-x-4">
              {branding.social.facebook && (
                <Link href={branding.social.facebook} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              )}
              {branding.social.instagram && (
                <Link href={branding.social.instagram} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              )}
              {branding.social.twitter && (
                <Link href={branding.social.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/nosotros" className="hover:text-foreground">Nosotros</Link></li>
              <li><Link href="/servicios" className="hover:text-foreground">Servicios</Link></li>
              <li><Link href="/galeria" className="hover:text-foreground">Galería</Link></li>
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>{branding.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{branding.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{branding.contact.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horarios de Atención</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{branding.hours.weekdays}</li>
              <li>{branding.hours.saturday}</li>
              <li>{branding.hours.sunday}</li>
            </ul>
          </div>

        </div>
        
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {branding.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
