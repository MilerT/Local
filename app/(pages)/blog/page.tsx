"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { blogPosts } from "@/constants/blog"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, UserIcon } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="container py-24">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-6"
        >
          Novedades y Consejos
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg max-w-2xl mx-auto text-muted-foreground"
        >
          Encuentra inspiración, tendencias y consejos útiles para planificar el evento perfecto.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-full">
                  {post.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="font-serif line-clamp-2 text-xl hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground line-clamp-3 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <UserIcon className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 border-t mt-4 border-dashed py-4">
                <span className="text-sm text-primary font-medium w-full text-center cursor-pointer hover:underline">
                  Leer Artículo Completo
                </span>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
