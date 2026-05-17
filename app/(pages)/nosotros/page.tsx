"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { branding } from "@/config/branding"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div>
      <div className="bg-primary text-primary-foreground py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-6"
        >
          Nuestra Historia
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg max-w-2xl mx-auto text-primary-foreground/80"
        >
          Conoce el espacio donde los momentos especiales cobran vida.
        </motion.p>
      </div>

      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-6">Un espacio creado con el corazón</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                {branding.name} nació con una idea simple pero poderosa: ofrecer un lugar cálido, acogedor e íntimo donde las familias puedan celebrar sus momentos más importantes sin complicaciones.
              </p>
              <p>
                Con capacidad para hasta {branding.maxCapacity} personas, nuestro salón es el escenario perfecto para celebraciones donde lo que importa es la cercanía, la emoción y los detalles que hacen la diferencia.
              </p>
              <p>
                Cada evento que organizamos lo hacemos con dedicación y cariño, porque sabemos que detrás de cada celebración hay una historia especial que merece ser vivida al máximo.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop"
              alt="Nuestro local"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Lo que nos define</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Calidez", desc: "Creemos que un espacio íntimo hace que las celebraciones sean más especiales. Nuestro ambiente acogedor permite que cada invitado se sienta como en casa." },
            { title: "Cercanía", desc: "Ofrecemos un trato personal y directo. Nos involucramos en cada evento para asegurarnos de que todo salga exactamente como lo soñaste." },
            { title: "Flexibilidad", desc: "Nuestro espacio se adapta a ti. Desde la disposición del mobiliario hasta la decoración, todo se personaliza según tu celebración." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold font-serif mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Números del local */}
        <div className="bg-muted/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-10">Nuestro Local en Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: `${branding.maxCapacity}`, label: "Capacidad máxima" },
              { number: "100+", label: "Eventos realizados" },
              { number: "5★", label: "Calificación promedio" },
              { number: "100%", label: "Clientes satisfechos" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="text-4xl font-bold text-primary font-serif">{stat.number}</p>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
