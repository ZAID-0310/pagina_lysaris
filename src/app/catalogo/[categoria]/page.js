import CatalogoPage from '@/features/catalogo/CatalogoPage'
import { categorias } from '@/data/products'

// Con output: 'export', solo existen las categorías listadas aquí
export const dynamicParams = false

export function generateStaticParams() {
  return categorias.map((c) => ({ categoria: c.slug }))
}

export async function generateMetadata({ params }) {
  const { categoria: slug } = await params
  const categoria = categorias.find((c) => c.slug === slug)

  return {
    title: `${categoria.nombre} | Lysaris Florería en Lima`,
    description: `Ramos de ${categoria.nombre.toLowerCase()} en Lima. Elige tu arreglo y pídelo por WhatsApp con Lysaris Florería.`,
    alternates: { canonical: `/catalogo/${slug}/` },
  }
}

export default async function CatalogoCategoria({ params }) {
  const { categoria } = await params
  return <CatalogoPage categoriaSlug={categoria} />
}