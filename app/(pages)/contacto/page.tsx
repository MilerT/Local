"use client";

import { motion } from "framer-motion"
import { branding } from "@/config/branding"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container py-24">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-6"
        >
          Contáctanos
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg max-w-2xl mx-auto text-muted-foreground"
        >
          ¿Tienes un evento en mente? Comunícate con nosotros para conocer disponibilidad y detalles de nuestro local.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Teléfono</h3>
                  <p className="text-muted-foreground mt-1">{branding.contact.phone}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Correo Electrónico</h3>
                  <p className="text-muted-foreground mt-1">{branding.contact.email}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Dirección</h3>
                  <p className="text-muted-foreground mt-1">{branding.contact.address}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 bg-muted/30">
              <CardContent className="pt-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center text-primary shadow-sm">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Horarios de Atención</h3>
                    <p className="text-sm text-muted-foreground mt-1">{branding.hours.weekdays}</p>
                    <p className="text-sm text-muted-foreground">{branding.hours.saturday}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href={branding.social.facebook} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={branding.social.instagram} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={branding.social.twitter} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp CTA */}
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="h-14 w-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg">¿Prefieres WhatsApp?</h3>
                <p className="text-muted-foreground mt-1 mb-4">Escríbenos directamente para consultar disponibilidad y precios.</p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href={`https://wa.me/${branding.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank">
                    Escribir por WhatsApp
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="h-[500px] bg-muted rounded-2xl overflow-hidden relative shadow-lg"
        >
          {/* Mock Google Map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.957639016922!2d-77.0366!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzQ3LjAiUyA3N8KwMDInMTEuOCJX!5e0!3m2!1ses!2s!4v1620000000000!5m2!1ses!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Ubicación del Local"
          ></iframe>
        </motion.div>
      </div>
    </div>
  )
}
