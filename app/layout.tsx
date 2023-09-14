import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

const font = Urbanist({ subsets: ['latin'] });

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ModalProvider from '@/providers/modal-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store website e-commerce ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
