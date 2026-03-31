import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 gap-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-serif text-stone-900 dark:text-stone-50 font-headline">Royal Grain</div>
          <p className="font-sans text-sm tracking-wide text-stone-600 dark:text-stone-400 max-w-xs text-center md:text-left">
            The Curated Manuscript of Interior & Furniture Excellence. Crafted in Ibadan for the global stage.
          </p>
          <p className="font-sans text-[10px] uppercase tracking-widest text-stone-500 mt-2">Mokola Hill, Ibadan, NG</p>
        </div>
        <div className="flex gap-10">
          <Link href="#" className="font-sans text-sm tracking-wide text-stone-600 dark:text-stone-400 hover:underline decoration-stone-400 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">
            Privacy Policy
          </Link>
          <Link href="#" className="font-sans text-sm tracking-wide text-stone-600 dark:text-stone-400 hover:underline decoration-stone-400 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">
            Terms of Service
          </Link>
          <Link href="#" className="font-sans text-sm tracking-wide text-stone-600 dark:text-stone-400 hover:underline decoration-stone-400 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">
            Sustainability
          </Link>
          <Link href="#" className="font-sans text-sm tracking-wide text-stone-600 dark:text-stone-400 hover:underline decoration-stone-400 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">
            Press
          </Link>
        </div>
        <div className="font-sans text-sm tracking-wide text-stone-600 dark:text-stone-400 text-center md:text-right">
          © {new Date().getFullYear()} Royal Grain Interior & Furniture. The Curated Manuscript.
        </div>
      </div>
    </footer>
  );
}
