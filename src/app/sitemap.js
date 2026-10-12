import { categorias } from '@/data/products'

export const dynamic = 'force-static'

const base = 'https://florerialysaris.web.app'

export default function sitemap() {
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/catalogo/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...categorias.map((c) => ({
      url: `${base}/catalogo/${c.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
  ]
}