import type { Metadata } from 'next';
import { Noto_Serif, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-headline',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Royal Grain Interior & Furniture | The Curated Manuscript',
  description: 'Crafting bespoke interiors that resonate with the soul of the material and the spirit of the space.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${notoSerif.variable} ${manrope.variable} bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
