"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { galleryItems } from "@/constants/gallery"
import { GalleryItem } from "@/types"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all")
  
  const categories = ["all", ...Array.from(new Set(galleryItems.map((item: GalleryItem) => item.category)))]
  
  const filteredGallery = filter === "all" 
    ? galleryItems 
    : galleryItems.filter((item: GalleryItem) => item.category === filter)

  const categoryLabels: Record<string, string> = {
    all: "Todos",
    wedding: "Bodas",
    quinceanera: "Quinceañeras",
    birthday: "Cumpleaños",
    corporate: "Eventos Sociales",
    graduation: "Graduaciones",
    custom: "Otros",
  }

  return (
    <div className="container py-24">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-6"
        >
          Nuestra Galería
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg max-w-2xl mx-auto text-muted-foreground mb-8"
        >
          Explora los momentos especiales que hemos vivido en nuestro salón. Cada imagen cuenta una historia de felicidad y celebración.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat: string) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className="capitalize rounded-full px-6"
            >
              {categoryLabels[cat] || cat}
            </Button>
          ))}
        </motion.div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {filteredGallery.map((item: GalleryItem) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            key={item.id}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.title ?? item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium text-lg capitalize">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredGallery.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No hay imágenes disponibles para esta categoría.
        </div>
      )}
    </div>
  )
}
