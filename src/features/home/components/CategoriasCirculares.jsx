"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categorias } from "@/data/products";

export default function CategoriasCirculares() {
  return (
    <section id="categorias" className="bg-cream2 px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-2xl font-bold text-coral md:text-3xl">
          Elige tu flor favorita
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-12">
          {categorias.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <Link
                href={`/catalogo/${c.slug}/`}
                className="group flex flex-col items-center gap-3"
              >
                <span className="block h-24 w-24 overflow-hidden rounded-full border-2 border-honey/40 p-1 transition-colors group-hover:border-honey sm:h-32 sm:w-32">
                  <img
                    src={c.imagen}
                    alt={c.nombre}
                    loading="lazy"
                    className="h-full w-full rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </span>
                <span className="text-sm font-semibold text-ink transition-colors group-hover:text-coral">
                  {c.nombre}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}