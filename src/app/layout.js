import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layouts/NavBar';
import Footer from '@/components/layouts/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
});

export const metadata = {
  title: 'Lysaris Florería | Arreglos Florales y Detalles',
  description: 'Página oficial de Lysaris Florería. Compra de arreglos florales, detalles y detalles personalizados.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">  
      <body className={poppins.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}