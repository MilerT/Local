"use client";

import { motion } from "framer-motion"
import { useState } from "react"
import { faqs } from "@/constants/faq"
import { FAQ } from "@/types"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="container py-24 max-w-4xl">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-6"
        >
          Preguntas Frecuentes
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          Resolvemos tus dudas principales para que puedas planificar tu evento con total tranquilidad.
        </motion.p>
      </div>

      <div className="space-y-4">
        {faqs.map((item: FAQ, index: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="border rounded-lg overflow-hidden bg-card"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center bg-transparent hover:bg-muted/50 transition-colors text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
              />
            </button>
            <div 
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: openIndex === index ? "500px" : "0", opacity: openIndex === index ? 1 : 0 }}
            >
              <div className="px-6 pb-4 pt-2 text-muted-foreground border-t">
                {item.answer}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
