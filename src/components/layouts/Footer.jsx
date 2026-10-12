import Link from 'next/link'
import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import { MapPin, Phone, Clock } from 'lucide-react'
import { categorias } from '@/data/products'

// ✏️ EDITA AQUÍ TUS DATOS
const DIRECCION = 'Av. Ejemplo 123, Lima, Perú'
const TELEFONO_VISIBLE = '+51 937 111 149'
const TELEFONO_LINK = '+51937111149' // sin espacios
const HORARIO = 'Lunes a sábado · 9:00 a. m. a 7:00 p. m.'
const WHATSAPP_URL = 'https://wa.me/51937111149'
const INSTAGRAM_URL = 'https://www.instagram.com/tu_usuario'
const TIKTOK_URL = 'https://www.tiktok.com/@tu_usuario'

// Abre Google Maps buscando la dirección (puedes reemplazarlo por tu link de "Compartir" de Maps)
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`

const redes = [
  { nombre: 'WhatsApp', url: WHATSAPP_URL, icono: FaWhatsapp },
  { nombre: 'Instagram', url: INSTAGRAM_URL, icono: FaInstagram },
  { nombre: 'TikTok', url: TIKTOK_URL, icono: FaTiktok },
]

const linkClase = 'transition-colors hover:text-honey'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          {/* Marca y redes */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-script text-4xl text-honey">Lysaris</span>
            <p className="mt-2 text-sm text-cream/70">Florería · Lima, Perú</p>

            <div className="mt-6 flex items-center gap-3">
              {redes.map(({ nombre, url, icono: Icono }) => (
                <a
                  key={nombre}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={nombre}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-honey hover:text-honey"
                >
                  <Icono size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explora */}
          <div>
            <h3 className="font-display text-lg font-bold text-honey">Explora</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li><Link href="/" className={linkClase}>Inicio</Link></li>
              <li><Link href="/catalogo/" className={linkClase}>Catálogo</Link></li>
              {categorias.map((c) => (
                <li key={c.slug}>
                  <Link href={`/catalogo/${c.slug}/`} className={linkClase}>
                    {c.nombre}
                  </Link>
                </li>
              ))}
              <li><Link href="/nosotros/" className={linkClase}>Nosotros</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-lg font-bold text-honey">Contáctanos</h3>
            <ul className="mt-4 space-y-4 text-sm text-cream/80">
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start justify-center gap-3 md:justify-start ${linkClase}`}
                >
                  <MapPin size={18} className="mt-0.5 shrink-0 text-honey" aria-hidden="true" />
                  <span>{DIRECCION}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${TELEFONO_LINK}`}
                  className={`flex items-center justify-center gap-3 md:justify-start ${linkClase}`}
                >
                  <Phone size={18} className="shrink-0 text-honey" aria-hidden="true" />
                  <span>{TELEFONO_VISIBLE}</span>
                </a>
              </li>
              <li className="flex items-start justify-center gap-3 md:justify-start">
                <Clock size={18} className="mt-0.5 shrink-0 text-honey" aria-hidden="true" />
                <span>{HORARIO}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- SECCIÓN INFERIOR RESPONSIVA --- */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row">
          <p>Nos importa tu confianza y cariño en cada pedido.</p>
          <p>Todos los derechos reservados © Lysaris</p>
        </div>
      </div>
    </footer>
  )
}