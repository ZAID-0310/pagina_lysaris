"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation'

const links = [
  { href: "/#info", label: "Información" },
  { href: "/#xpress", label: "Ramos Xpress" },
  { href: "/#girasoles", label: "Girasoles" },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/catalogo', label: 'Catalogo' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const isHome = usePathname() === '/'
  const [open, setOpen] = useState(false);
  const overPhoto = isHome && !open;

  // Fondo, sombra y desenfoque aparecen entre 0 y 80px de scroll.
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.92)"]
  );
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 8px 24px rgba(155,47,98,0.14)"]
  );
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(12px)"]);

  // El texto pasa de claro (sobre la foto) a oscuro (sobre el fondo)
  // entre 30 y 60px, cuando el fondo ya es lo bastante claro.
  const linkColor = useTransform(
    scrollY,
    [30, 60],
    ["rgba(255,255,255,0.92)", "rgba(46,31,36,0.8)"]
  );
  const logoColor = useTransform(
    scrollY,
    [30, 60],
    ["rgba(255,255,255,1)", "rgba(125,44,82,1)"]
  );

  return (
    <motion.header
      style={{
        backgroundColor: overPhoto ? bg : 'rgba(255,255,255,0.92)',
        boxShadow: overPhoto ? shadow : '0 8px 24px rgba(155,47,98,0.12)',
        backdropFilter: overPhoto ? blur : 'blur(12px)',
        WebkitBackdropFilter: overPhoto ? blur : 'blur(12px)',
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <motion.a
          href="/"
          style={{ color: overPhoto ? logoColor : 'rgba(125,44,82,1)' }}
          className="font-script text-2xl inline-flex items-center gap-2"
        >
        <Image 
            alt="icono de empresa" 
            src="/icono.jpg"
            width={48}
            height={48} 
            className="rounded-2xl object-cover" 
        ></Image>
          Lysaris
        </motion.a>

        <motion.ul
          style={{ color: overPhoto ? linkColor : 'rgba(46,31,36,0.8)' }}
          className="hidden items-center gap-8 text-sm font-medium min-[890px]:flex"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-coral">
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
        <div className="flex items-center gap-2">
          <a
          href="https://wa.me/51937111149"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escríbenos por WhatsApp"
          className="inline-flex items-center gap-2 rounded-full bg-honey px-4 py-2 text-sm font-semibold text-paper transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honeyDeep"
        >
          <MessageCircle size={16} aria-hidden="true" />
          <span className="hidden sm:inline">Escríbenos</span>
        </a>
        <motion.button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            style={{ color: overPhoto ? linkColor : "rgba(46,31,36,0.8)" }}
            className="p-2 min-[890px]:hidden"
        >
            {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </motion.button>
        </div>
        
      </nav>
          
      <AnimatePresence>
  {open && (
    <motion.ul
      id="menu-movil"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="border-t border-ink/10 px-6 py-3 min-[890px]:hidden"
    >
      {links.map((l) => (
        <li key={l.href}>
        <a
            href={l.href}
            onClick={() => setOpen(false)}
            className="block py-3 font-medium text-ink transition-colors hover:text-coral"
        >
            {l.label}
        </a>
        </li>
      ))}
    </motion.ul>
  )}
</AnimatePresence>
      
    </motion.header>
  );
}