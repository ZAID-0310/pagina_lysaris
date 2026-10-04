"use client";
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Image from 'next/image'


export default function ProductCard({ image, name, price, description, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group bg-paper rounded-3xl overflow-hidden border border-olive/20 hover:shadow-xl hover:shadow-ink/10 transition-shadow duration-300"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream2">
        <Image
          src={image}
          alt={name}
          fill
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        <span className="absolute top-4 right-4 bg-olive text-paper text-sm font-semibold rounded-full px-3 py-1 shadow-md">
          {price}
        </span>
        <Heart
          size={20}
          className="absolute top-4 left-4 text-paper/90 drop-shadow"
          strokeWidth={1.8}
        />
      </div>
      <div className="p-5">
        <h3 className="font-script text-2xl text-coral">{name}</h3>
        <p className="text-sm text-ink/80 mt-1 leading-relaxed">{description}</p>
        <p className="text-xs text-olive mt-2">Incluye envoltura + dedicatoria + nutriente</p>
      </div>
    </motion.article>
  )
}