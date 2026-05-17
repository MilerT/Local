"use client";

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { branding } from "@/config/branding"
import { getFeaturedServices } from "@/constants/services"
import { testimonials } from "@/constants/testimonials"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Calendar, Star, CheckCircle } from "lucide-react"

export default function Home() {
  const featuredServices = getFeaturedServices()
  const topTestimonials = testimonials.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
            alt="Local de Eventos"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6"
          >
            {branding.tagline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
          >
            {branding.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 h-14" asChild>
              <Link href="/servicios">Conoce Nuestros Servicios</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 bg-white/10 hover:bg-white/20 text-white border-white/20" asChild>
              <Link href="/galeria">Ver Galería</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Características Breves */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-serif">Ambiente Íntimo</h3>
              <p className="text-muted-foreground">Un espacio acogedor para hasta {branding.maxCapacity} personas, donde cada detalle importa y cada momento se siente especial.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-serif">Atención Personal</h3>
              <p className="text-muted-foreground">Trato cercano y personalizado para que tu evento sea exactamente como lo imaginaste.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-serif">Espacio Versátil</h3>
              <p className="text-muted-foreground">Nuestro salón se adapta a bodas, cumpleaños, reuniones, baby showers y todo tipo de celebración.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Un espacio versátil que se adapta a cada celebración. Conoce lo que podemos ofrecerte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col group cursor-pointer border-border/50 hover:border-primary/50 transition-colors">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                    <Image
                      src={service.images[0] || "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground line-clamp-3">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary" asChild>
                      <Link href={`/servicios#${service.type}`}>
                        Ver más detalles
                        <span className="ml-2">→</span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/servicios">Ver Todos los Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA / Interstitial */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">¿Listo para celebrar?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-10">
            Visita nuestras instalaciones y descubre un espacio acogedor pensado para hacer de tu celebración un momento inolvidable. ¡Te esperamos!
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 h-14" asChild>
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Lo que dicen de nosotros</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Historias reales de momentos inolvidables celebrados en nuestro salón.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border rounded-2xl p-8 shadow-sm flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground flex-1 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
