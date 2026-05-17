"use client";

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-serif font-bold text-primary/20">404</h1>
        <h2 className="text-3xl font-bold mt-4 mb-6">Página no encontrada</h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
