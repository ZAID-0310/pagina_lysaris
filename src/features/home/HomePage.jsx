import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import ProductsSection from './components/ProductsSection'
import MasVendidos from './components/masVendidos'
import CategoriasCirculares from './components/CategoriasCirculares'
import { ramosXpress, masVendidos, girasolesHome } from '@/data/products'
import PorQueElegirnos from './components/PorQueElegirnos'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriasCirculares />
      <MasVendidos products={masVendidos} />
      <ProductsSection id="xpress" title="Ramos Xpress" products={ramosXpress} />
      <ProductsSection id="girasoles" title="Girasoles" products={girasolesHome} />
      <PorQueElegirnos />
    </>
  )
}