import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import {Toaster} from 'react-hot-toast';

export const metadata = {
  title: 'Pritom',
  description: 'A passionate developer.',
  icons: './favicon.ico',
};

export default function RootLayout({children}) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col">
        <Toaster position="top-right" />

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
