import CatalogoPage from '@/features/catalogo/CatalogoPage'

export const metadata = {
  title: 'Catálogo de ramos de flores | Lysaris Florería en Lima',
  description: 'Mira todos nuestros ramos de flores, girasoles y rosas. Pídelos por WhatsApp con Lysaris Florería en Lima.',
  alternates: { canonical: '/catalogo/' },
}

export default function Catalogo() {
  return <CatalogoPage />
}