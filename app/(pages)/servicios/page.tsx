"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { services } from "@/constants/services"
import { branding } from "@/config/branding"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users } from "lucide-react"

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-primary text-primary-foreground py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-6"
        >
          Nuestros Servicios
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg max-w-2xl mx-auto text-primary-foreground/80"
        >
          Un espacio versátil para todo tipo de celebraciones de hasta {branding.maxCapacity} personas. Conoce todo lo que podemos ofrecerte.
        </motion.p>
      </div>

      <div className="container py-24 space-y-24">
        {services.map((service, index) => (
          <section key={service.id} id={service.type} className="scroll-mt-32">
            <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.images[0] || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold">{service.title}</h2>
                <div className="flex items-center gap-2 text-primary bg-primary/10 w-fit px-4 py-2 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Capacidad hasta {service.capacity} personas
                </div>
                <p className="text-lg text-muted-foreground">
                  {service.description}
                </p>
                
                <Card className="bg-muted/30 border-none shadow-none mt-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">¿Qué incluye?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-muted-foreground text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
