"use client";

import { motion, useReducedMotion } from "framer-motion";

const desplazamiento = {
  up: { y: 40 },
  left: { x: -60 },
  right: { x: 60 },
  none: {},
};

export default function Reveal({ children, direction = "up", delay = 0, className = "" }) {
  const reducir = useReducedMotion();

  return (
    <motion.div
      initial={reducir ? false : { opacity: 0, ...desplazamiento[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}