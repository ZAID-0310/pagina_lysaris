
import Hero from '../components/landing/Hero'
import InfoSection from '../components/landing/InfoSection';
import ProductsSection from '../components/landing/ProductsSection';
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
