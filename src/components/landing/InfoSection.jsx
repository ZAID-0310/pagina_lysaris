"use client";

import { motion } from 'framer-motion'
import { CalendarClock, CreditCard, Truck } from 'lucide-react'

const cards = [
  {
    icon: CalendarClock,
    title: 'Cómo agendar',
    text: 'Se requiere un anticipo del 50%, sin excepción. El saldo se liquida el 19 de septiembre o un día antes de la entrega. Por temporada alta no se aceptan pedidos personalizados.',
  },
  {
    icon: CreditCard,
    title: 'Métodos de pago',
    text: 'Aceptamos Yape, Plin y transferencias. Pago con tarjeta vía Mercado Pago. No manejamos reembolsos. Yape/Plin: +51 936 716 909 · Bruno Salazar.',
  },
  {
    icon: Truck,
    title: 'Envíos',
    text: 'Enviamos a Lima norte, centro, sur y Callao. Tolerancia de 10 minutos; pasado ese tiempo se cobra mora y, tras 15 min, el motorizado cancela la entrega (se vuelve a cobrar el envío).',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function InfoSection() {
  return (
    <section id="info" className="bg-cream2 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl text-coral"
        >
          Información importante
        </motion.h2>
        <p className="mt-3 text-ink/80">
          Cerramos pedidos el <strong>19 de septiembre</strong>. Agenda con anticipación.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-12">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="group relative bg-paper rounded-2xl p-7 border border-olive/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
          >
            <span className="absolute inset-x-0 top-0 h-[3px] bg-honey scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <c.icon className="text-olive mb-4" size={28} strokeWidth={1.6} />
            <h3 className="font-display font-semibold text-lg text-coral mb-2">{c.title}</h3>
            <p className="text-sm leading-relaxed text-ink/80">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}