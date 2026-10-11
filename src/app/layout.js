import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layouts/NavBar';
import Footer from '@/components/layouts/Footer';
import WhatsAppButton from '@/components/layouts/WhatsappButton';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
});


export const metadata = {
  metadataBase: new URL('https://florerialysaris.web.app'),

  title: 'Lysaris | Florería en Lima y Ramos de Flores',

  description:
  'Descubre ramos de flores, girasoles y arreglos florales de Lysaris. Encuentra regalos especiales para cumpleaños, aniversarios y otras ocasiones en Lima.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Lysaris Florería',
    description:
      'Descubre ramos de flores y arreglos florales para regalar con Lysaris.',
    url: 'https://florerialysaris.web.app/',
    siteName: 'Lysaris Florería',
    locale: 'es_PE',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">  
      <body className={poppins.className}>
        {/* Datos estructurados para el nombre del sitio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Lysaris Florería",
              alternateName: "Lysaris",
              url: "https://florerialysaris.web.app/",
            }),
          }}
        />

        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}