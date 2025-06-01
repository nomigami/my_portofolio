// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer'; // pastikan path-nya sesuai
import Navbar from '../components/Navbar'; // jika punya navbar global

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Personal website portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white flex flex-col min-h-screen`}>
        {/* Navbar global jika ada */}
        <Navbar />

        {/* Konten halaman */}
        <main className="flex-grow">{children}</main>

        {/* Footer di bagian bawah */}
        <Footer />
      </body>
    </html>
  );
}
