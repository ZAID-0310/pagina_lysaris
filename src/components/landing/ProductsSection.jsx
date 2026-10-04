"use client";

import { motion } from 'framer-motion'
import ProductCard from './ProductCard.jsx'

export default function ProductsSection({ id, title, products = [], alt }) {
  return (
    <section id={id} className={`py-24 px-6 ${alt ? 'bg-cream2' : 'bg-cream'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:text-left"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-coral">
            {title}
          </h2>
          <span className="mt-3 block h-px w-16 bg-honey mx-auto sm:mx-0" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            /* se usa p.id para llamar a los productos */
            <ProductCard key={p.id ?? `${p.name}-${i}`} index={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}