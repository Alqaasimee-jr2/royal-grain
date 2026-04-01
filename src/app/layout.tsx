import type { Metadata, Viewport } from 'next';
import { Noto_Serif, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingStatus from '@/components/FloatingStatus';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  variable: '--font-headline',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-body',
});

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Royal Grain Interior & Furniture',
    default: 'Royal Grain | Luxury Interior & Furniture in Ibadan, Nigeria',
  },
  description: 'Crafting bespoke luxury interiors and heirloom furniture in Mokola, Ibadan. Royal Grain merges African heritage with precision architectural design.',
  keywords: ['Luxury Furniture Nigeria', 'Interior Design Ibadan', 'Bespoke Furniture', 'Iroko Wood Furniture', 'Modern African Luxury'],
  openGraph: {
    title: 'Royal Grain | The Curated Manuscript of Interior Excellence',
    description: 'Bespoke interiors crafted in Ibadan for the global stage. High-end woodworks and architectural spaces.',
    url: 'https://royalgrain.ng', // Hypothetical URL
    siteName: 'Royal Grain Interior',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Grain Interior',
    description: 'Crafting bespoke luxury interiors in Ibadan.',
  },
  authors: [{ name: 'Royal Grain Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#fbf9f5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
        <FloatingStatus />
      </body>
    </html>
  );
}
