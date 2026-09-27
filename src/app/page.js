
import Hero from './components/Hero'
import InfoSection from './components/InfoSection';
import ProductsSection from './components/ProductsSection';
import {ramosXpress,girasoles} from '@/data/products'
export default function Home() {
  return (
    <>
    <Hero></Hero>
    <InfoSection></InfoSection>    
    <ProductsSection id="xpress" title="Ramos Xpress" products={ramosXpress}></ProductsSection>
    <ProductsSection id="girasoles" title="Girasoles" products={girasoles}></ProductsSection>
    </>
  );
}
