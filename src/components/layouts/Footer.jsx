import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-16 md:py-20 px-6 text-center">
      <span className="font-script text-4xl text-honey">Lysaris</span>
      <p className="mt-2 text-sm text-cream/70">Florería · Lima, Perú</p>

      <div className="flex items-center justify-center gap-4 mt-8">
        <a
          href="https://wa.me/51937111149"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-cream/25 hover:border-honey hover:text-honey transition-colors font-medium px-6 py-3 rounded-full"
        >
          <FaWhatsapp size={18} />
          WhatsApp
        </a>
        <a
          href="https://www.instagram.com/?hl=es-la9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-cream/25 hover:border-honey hover:text-honey transition-colors font-medium px-6 py-3 rounded-full"
        >
          <FaInstagram size={18} />
          Instagram
        </a>
      </div>

      {/* --- SECCIÓN INFERIOR RESPONSIVA --- */}
      <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
        <p>
          Cerramos pedidos el 19 de septiembre · Agenda con anticipación
        </p>
        <p>
          Todos los derechos reservados © Lysaris
        </p>
      </div>
    </footer>
  )
}