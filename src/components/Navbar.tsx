"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Collections', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Showroom', href: '/showroom' },
    { name: 'Our Craft', href: '/craft' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md"
    >
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-serif italic text-stone-900 dark:text-stone-50 font-headline tracking-tight">
          Royal Grain
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href || (pathname === '/' && link.name === 'Collections'); // Simple active state logic
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-serif tracking-tight transition-colors duration-400 ${
                  isActive
                    ? 'text-stone-900 dark:text-white border-b border-stone-800 dark:border-stone-100 pb-1'
                    : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <Link href="/consultation">
          <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-medium tracking-wide scale-95 transition-transform duration-400 ease-in-out hover:scale-100 active:scale-95 shadow-lg shadow-primary/10">
            Consultation
          </button>
        </Link>
      </nav>
    </motion.header>
  );
}
