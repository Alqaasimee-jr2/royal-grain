"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar shading
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = [
    { name: 'Collections', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Showroom', href: '/showroom' },
    { name: 'Our Craft', href: '/craft' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled || isOpen ? 'bg-surface/90 backdrop-blur-xl shadow-sm border-b border-surface-container-highest/20' : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <nav className="flex justify-between items-center w-full px-6 md:px-12 py-5 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-serif italic text-primary font-headline tracking-tight relative z-50 flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-semibold text-tertiary">Royal</span> Grain
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const isActive = pathname === link.href || (pathname === '/' && link.name === 'Collections');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-serif tracking-tight text-[15px] transition-all duration-400 relative group ${
                    isActive
                      ? 'text-primary font-medium'
                      : 'text-primary/70 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {/* Subtle hover underline animation */}
                  <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-primary/40 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link href="/consultation" className="hidden md:block">
            <button 
              id="nav-consultation-btn"
              className="bg-primary text-on-primary px-8 py-2.5 rounded-full font-label text-sm font-semibold tracking-wide scale-95 transition-transform duration-400 ease-in-out hover:scale-100 active:scale-95 shadow-lg shadow-primary/10 hover:bg-primary-container"
            >
              Consultation
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            id="mobile-menu-toggle"
            className="md:hidden relative z-50 text-primary p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl transition-transform duration-300">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-surface flex flex-col justify-center items-center px-8 md:hidden h-screen"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              {links.map((link, i) => {
                const isActive = pathname === link.href || (pathname === '/' && link.name === 'Collections');
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-headline text-4xl tracking-tight ${
                        isActive ? 'text-primary italic font-semibold border-b border-primary/30 pb-2' : 'text-on-surface-variant hover:text-primary transition-colors'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-8 w-full max-w-xs"
              >
                <Link href="/consultation" onClick={() => setIsOpen(false)} className="w-full">
                  <button 
                    id="mobile-nav-consultation-btn"
                    className="w-full bg-primary text-on-primary py-4 rounded-xl font-label text-base font-semibold tracking-widest uppercase hover:bg-primary-container transition-colors shadow-xl shadow-primary/20"
                  >
                    Book Consultation
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
