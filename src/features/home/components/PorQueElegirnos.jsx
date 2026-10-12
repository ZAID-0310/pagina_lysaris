"use client";

import { motion } from "framer-motion";
import { Flower2, Truck, Gift, MessageCircle } from "lucide-react";

// Edita aquí los motivos: icono, título y texto
const motivos = [
  {
    icono: Flower2,
    titulo: "Flores frescas",
    texto: "Seleccionamos cada flor a mano para que tu arreglo llegue en su mejor momento.",
  },
  {
    icono: Gift,
    titulo: "Listo para regalar",
    texto: "Todos nuestros ramos incluyen envoltura, dedicatoria y nutriente.",
  },
  {
    icono: Truck,
    titulo: "Entrega a domicilio",
    texto: "Llevamos tu regalo hasta la puerta de esa persona especial en Lima.",
  },
  {
    icono: MessageCircle,
    titulo: "Pedido fácil",
    texto: "Elige tu ramo y haz tu pedido en minutos por WhatsApp.",
  },
];

export default function PorQueElegirnos({ id = "por-que-elegirnos" }) {
  return (
    <section id={id} className="bg-cream2 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-coral md:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <span className="mx-auto mt-3 block h-px w-16 bg-honey" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {motivos.map((m, i) => {
            const Icono = m.icono;
            return (
              <motion.div
                key={m.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="rounded-3xl border border-olive/20 bg-paper p-8 text-center transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-honey/20 text-coral">
                  <Icono size={28} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-script text-2xl text-coral">{m.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{m.texto}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}