"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const PHONE_NUMBER = "51937111149"; // Número de WhatsApp de la tienda

export default function MasVendidos({ id = "mas-vendidos", title = "Más vendidos", products = [] }) {
  return (
    <section id={id} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-coral md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-ink/80">Los arreglos favoritos de nuestros clientes.</p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((ramo, i) => {
            const mensaje = encodeURIComponent(
              `¡Hola! Me interesa comprar el arreglo "${ramo.nombre}" (${ramo.precio}). ¿Tienen disponibilidad?`
            );
            const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${mensaje}`;

            return (
              <motion.article
                key={ramo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex w-full flex-col rounded-xl border border-olive/20 bg-white text-gray-700 shadow-md"
              >
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white">
                  <img
                    src={ramo.imagen}
                    alt={ramo.nombre}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-honey px-3 py-1 text-xs font-semibold text-paper shadow-md">
                    <Flame size={14} aria-hidden="true" />
                    Más vendido
                  </span>
                </div>

                <div className="p-6 text-left">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-sans text-base font-semibold text-gray-900">
                      {ramo.nombre}
                    </p>
                    <p className="font-sans text-base font-bold text-coral">
                      {ramo.precio}
                    </p>
                  </div>
                  <p className="font-sans text-sm font-normal text-gray-600 opacity-80">
                    {ramo.descripcion}
                  </p>
                </div>

                <div className="mt-auto p-6 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-green-500 px-6 py-3 text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:scale-105 hover:bg-green-600 active:opacity-[0.85]"
                  >
                    Comprar por WhatsApp
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}