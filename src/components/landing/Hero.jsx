"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "51937111149";
const WHATSAPP_MESSAGE =
  "Hola, quiero hacer un pedido del catálogo Día de las Flores Amarillas 2026 🌻";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// Una sola secuencia de entrada: título → texto → bloque de acción.
const sequence = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Sombra suave para que el texto se lea sobre fotos claras.
const SHADOW = "[text-shadow:0_2px_24px_rgba(0,0,0,0.4)]";

export default function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative h-[100svh] min-h-[640px] overflow-hidden"
    >
      <motion.div
        style={{ y: reduceMotion ? 0 : parallaxY }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="/fondo2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Legibilidad: degradado que se mantiene oscuro hasta el 60% y recién
          después se funde al fondo, más una viñeta detrás del texto. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 via-60% to-cream" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,31,36,0.35),transparent_65%)]" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          variants={sequence}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            id="hero-title"
            variants={rise}
            className={`max-w-3xl font-display text-4xl font-bold leading-[1.05] text-paper sm:text-6xl md:text-7xl ${SHADOW}`}
          >
            Un ramo para cada ocasión
          </motion.h1>

          <motion.div
            variants={rise}
            className="mt-6 flex w-full max-w-sm flex-col items-center sm:max-w-none"
          >
            <p className={`max-w-xl text-base text-paper/95 sm:text-lg ${SHADOW}`}>
              Elige tu ramo, nosotros lo armamos
            </p>

            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-honey px-8 py-4 font-semibold text-paper shadow-lg shadow-honeyDeep/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper sm:w-auto"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Pedir por WhatsApp
              </motion.a>

              <a
                href="#xpress"
                className="inline-flex w-full items-center justify-center rounded-full border border-paper/70 px-8 py-4 font-medium text-paper backdrop-blur-sm transition-colors hover:bg-paper/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper sm:w-auto"
              >
                Ver catálogo
              </a>
            </div>

            <p className={`mt-4 text-sm text-paper/90 ${SHADOW}`}>
              Flores que alegran el día
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Flecha: en el borde inferior el fondo ya es crema, por eso va en ink */}
      <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center">
        <motion.a
          href="#xpress"
          aria-label="Ir al catálogo de productos"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 text-ink/70 transition-colors hover:text-honeyDeep focus-visible:outline-2 focus-visible:outline-honeyDeep"
        >
          <ChevronDown size={28} aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
