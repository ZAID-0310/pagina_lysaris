"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Flower2, Gift, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "51937111149";
const WHATSAPP_MESSAGE =
  "Hola, quiero hacer un pedido del catálogo Día de las Flores Amarillas 2026 🌻";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// ✏️ Imágenes del carrusel (deben estar en la carpeta public/)
const slides = [
  { src: "/fondo2.jpg", alt: "Arreglo floral de Lysaris" },
  { src: "/flores_campo.jpg", alt: "Flores frescas de Lysaris" },
  // { src: "/hero_3.jpg", alt: "Ramo de rosas de Lysaris" },
];

// ✏️ Datos pequeños bajo los botones (icono + texto)
const detalles = [
  { icono: Flower2, texto: "Flores frescas del día" },
  { icono: Gift, texto: "Envoltura y dedicatoria incluidas" },
  { icono: MessageCircle, texto: "Pedidos por WhatsApp" },
];

const sequence = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const touchX = useRef(null);

  const siguiente = () => setActual((i) => (i + 1) % slides.length);
  const anterior = () => setActual((i) => (i - 1 + slides.length) % slides.length);

  // Cambia sola cada 5 segundos (se pausa con el mouse encima)
  useEffect(() => {
    if (reduceMotion || pausado || slides.length < 2) return;
    const t = setInterval(siguiente, 5000);
    return () => clearInterval(t);
  }, [actual, pausado, reduceMotion]);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-cream"
    >
      {/* Círculo rosado decorativo de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-cream2/70 lg:-right-40 lg:h-[46rem] lg:w-[46rem]"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-2 lg:gap-8 lg:pb-12">
        {/* ----- Texto ----- */}
        <motion.div
          variants={sequence}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.p
            variants={rise}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-honey"
          >
            Flores que alegran el día
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={rise}
            className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
          >
            Un ramo para cada <span className="text-honey">ocasión</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-5 max-w-md text-base text-ink/75 sm:text-lg"
          >
            Elige tu ramo, nosotros lo armamos
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-honey px-8 py-4 font-semibold text-paper shadow-lg shadow-honeyDeep/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honeyDeep"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Pedir por WhatsApp
            </motion.a>

            <Link
              href="/catalogo/"
              className="inline-flex items-center justify-center rounded-full border border-coral/40 px-8 py-4 font-medium text-coral transition-colors hover:bg-coral/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honeyDeep"
            >
              Ver catálogo
            </Link>
          </motion.div>

          <motion.ul
            variants={rise}
            className="mt-10 grid w-full gap-4 border-t border-ink/10 pt-6 sm:grid-cols-3"
          >
            {detalles.map(({ icono: Icono, texto }) => (
              <li key={texto} className="flex items-center gap-2 text-sm text-ink/70">
                <Icono size={18} className="shrink-0 text-honey" aria-hidden="true" />
                {texto}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ----- Imagen grande (carrusel) ----- */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-[34rem] lg:mr-0 xl:max-w-[38rem]"
        >
          {/* Círculo pequeño decorativo */}
          <div
            aria-hidden="true"
            className="absolute -left-4 top-6 h-20 w-20 rounded-full bg-honey/20 sm:-left-8 sm:h-24 sm:w-24"
          />

          <div
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const diff = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(diff) > 50) (diff < 0 ? siguiente : anterior)();
              touchX.current = null;
            }}
            className="absolute inset-0 overflow-hidden rounded-full shadow-2xl shadow-honey/25 ring-8 ring-white"
          >
            {slides.map((s, i) => (
              <div
                key={s.src}
                aria-hidden={i !== actual}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  i === actual ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-center"
                />
              </div>
            ))}

            {slides.length > 1 && (
              <div className="absolute inset-x-0 bottom-10 z-10 flex justify-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setActual(i)}
                    aria-label={`Ir a la imagen ${i + 1}`}
                    aria-current={i === actual}
                    className={`h-2.5 rounded-full transition-all ${
                      i === actual ? "w-8 bg-honey" : "w-2.5 bg-paper/70 hover:bg-paper"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Tarjeta rosada flotante */}
          <motion.a
            href="#xpress"
            animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 right-0 z-10 rounded-2xl bg-honey px-5 py-4 text-paper shadow-xl shadow-honeyDeep/30 transition hover:brightness-110 sm:-right-2"
          >
            <span className="block text-xs uppercase tracking-widest text-paper/80">
              Ramos Xpress
            </span>
            <span className="block text-sm font-semibold">Listos para regalar →</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Flecha hacia abajo */}
      <div className="absolute inset-x-0 bottom-6 z-10 hidden justify-center lg:flex">
        <motion.a
          href="#xpress"
          aria-label="Ir al catálogo de productos"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 text-ink/60 transition-colors hover:text-honeyDeep focus-visible:outline-2 focus-visible:outline-honeyDeep"
        >
          <ChevronDown size={28} aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}