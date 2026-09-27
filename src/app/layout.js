import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
});

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