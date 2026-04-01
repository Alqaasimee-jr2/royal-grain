import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Experience authentic Nigerian modern luxury with hand-turned Iroko and Mahogany furniture. Designed in Mokola, Ibadan.',
};

export default function Home() {
  return (
    <main>
      {/* Hero Section with Curved Motif */}
      <section className="relative h-[972px] w-full overflow-hidden hero-curve bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.85]"
            src="/hero_living_space.png"
            alt="Luxurious high-ceiling living room"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto pt-20">
          <span className="font-label text-xs uppercase tracking-[0.4em] text-white/80 mb-6 drop-shadow-md">
            Heritage in every fiber
          </span>
          <h1 className="font-headline text-5xl md:text-8xl text-white leading-tight mb-8 tracking-tighter drop-shadow-lg">
            Where Raw <br />
            <span className="italic font-normal text-surface-container-low">Elegance</span> Meets Art
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mb-12 font-light leading-relaxed drop-shadow-md">
            Crafting bespoke interiors that resonate with the soul of the material and the spirit of the space.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/showroom">
              <button className="bg-primary text-on-primary px-12 py-5 rounded-full font-label text-sm tracking-widest uppercase hover:bg-primary-container transition-all duration-400 shadow-xl shadow-primary/20">
                Experience Our Collections
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="border border-outline-variant/30 bg-surface/80 backdrop-blur-sm text-primary px-12 py-5 rounded-full font-label text-sm tracking-widest uppercase hover:bg-surface-container-lowest transition-all duration-400">
                View Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Artisanal Approach Section */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="/artisan_workshop_hands.png"
                alt="Master carpenter hands sanding a custom wood joint"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-tertiary-container rounded-full flex items-center justify-center p-12 text-on-tertiary-container shadow-xl">
              <p className="font-headline italic text-center leading-snug">
                "The grain tells a story that we only listen to."
              </p>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="font-label text-primary-container font-semibold tracking-widest text-sm uppercase">
                The Artisanal Philosophy
              </span>
              <h2 className="font-headline text-4xl md:text-6xl text-primary leading-tight">
                Mastery in <br /> Modern Craft
              </h2>
            </div>
            <p className="font-body text-on-surface-variant text-lg leading-loose font-light">
              At Royal Grain, we believe furniture isn't just an object—it's a manuscript written in wood, stone, and leather. Every piece is hand-turned by master artisans who respect the organic imperfections that make each creation unique.
            </p>
            <div className="grid grid-cols-2 gap-8 py-4">
              <div className="space-y-2">
                <span className="material-symbols-outlined text-tertiary text-3xl">nature</span>
                <h4 className="font-headline text-xl">Ethical Sourcing</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Sustainably harvested hardwoods from managed forests.
                </p>
              </div>
              <div className="space-y-2">
                <span className="material-symbols-outlined text-tertiary text-3xl">precision_manufacturing</span>
                <h4 className="font-headline text-xl">Precision Joinery</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Time-honored techniques meeting surgical precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Bento Grid */}
      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="font-headline text-4xl md:text-6xl text-primary mb-6">Curated Narratives</h2>
              <p className="text-on-surface-variant font-light text-lg">
                A glimpse into the private sanctuaries we've crafted for discerning clients across Nigeria and beyond.
              </p>
            </div>
            <Link href="/portfolio" className="font-label text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all duration-300">
              View All Projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* Large Feature */}
            <div className="md:col-span-7 relative group overflow-hidden rounded-xl bg-surface">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAhmf8Lu2WXrAUmYMSdUrjFS9ARXf-uDueSkPJ6c4uPiKb2txetp8eqPQReC5OK8N8gE6ol6v66o8yfgCM7XCzHyhw1mvBLqYHZdIE-5BqueC7QT89eCQ98P1Tgdsd4cbeaOq8NWW4XdTMXP7oBva_7LBy4aN_RZOrTQfv6W5i5yPwse9h_l4Wx6LSPJtrYQGcGEvj_TXYW-MCeMKsLyhQjhLJMofAXvlRKQ_SLv-km9oU_1Q1ARsoWsXa1BpfIWHSVwNTFU0YbII"
                alt="Spacious modern living room"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-8 left-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="font-headline text-2xl">The Nordic Retreat</h3>
                <p className="font-label text-sm opacity-80 uppercase tracking-widest mt-2">Interior & Furniture Architecture</p>
              </div>
            </div>
            {/* Right Column Split */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="h-1/2 relative group overflow-hidden rounded-xl bg-surface">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJX03DcJuGYqtUTXcHrop3chpO2lRtmnUWpG70crxHKC7_ikY0Dfhi_0OKTTpDgsFvQc0L9r-48cA5pU8IekXV7xTWBGl7urTKUYbJRuOY6wfOfENpI3HZNVtPNlElK9Djn4G2OKYXi9JGA7xdo66RTHv1YkxOQ97uK9ltUitFNxyLQZJWZbWQ6WgfPyRQOY_pUxGjxY-N5gLsFHIyhg3w_BfPqGSAdq_KHGL61woT1TGL_M3zGnj2FaiNrxrOjgnS1KNfiQru3QM"
                  alt="Contemporary dining area"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="font-headline text-xl">Urban Harvest</h3>
                  <p className="font-label text-xs opacity-80 uppercase tracking-widest mt-1">Dining Collection</p>
                </div>
              </div>
              <div className="h-1/2 relative group overflow-hidden rounded-xl bg-surface">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHQbmJ6mpdKXK514KKmPbjesVxoZjwEB_S241C9QWy_y-4Eit_nS4xd2JAihB2XCR9vvRa7yYe2E022KVsVoteQJ4rZWP0VOrI5RXZmyvyjE5tipAPEO_rE8q-59Zr_NJrqx-vAvCu3YwQIDQs0vfhY44Z_8iSLXg63HXCMIM9ztYcjpGkwIPWsoZ6_GIl3Go2OlRDXeBPkdXtSmLecHTZ7sfhvGORGXQ9iRxhxuqQae-cDZGhpTM09C5S-Op1_wZNIM4ldfZee94"
                  alt="Serene bedroom design"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="font-headline text-xl">Silent Chambers</h3>
                  <p className="font-label text-xs opacity-80 uppercase tracking-widest mt-1">Bedroom Concept</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Selection / Soft CTA */}
      <section className="py-32 bg-surface">
        <div className="max-w-4xl mx-auto text-center px-8">
          <span className="material-symbols-outlined text-primary text-5xl mb-8">rebase_edit</span>
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-10 leading-tight">Begin Your Manuscript</h2>
          <p className="font-body text-on-surface-variant text-lg mb-12 font-light">
            Every space has a story waiting to be told. Whether you're seeking a single heirloom piece or a complete interior transformation, our artisans are ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-3 px-6 py-3 bg-surface-container rounded-full border border-outline-variant/20">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-primary">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD95YAApwUtgOVtXX9ReT_aHhMWF0CZQn17XCsFhvIFkksZU56WgujhSwdoSX86XyXIo8FMYlGqYF7q9D_Vx22rK8GC4Of5LR9kgRgo7sjH4TbW5J7IeuIfsYiMV3XbY3h0r6oqZEBnHfbTahimUVy1BUCWDtSCiPeZiAR1-GuluNsiCipxNHdXewx95Jlpp1QV9S08r3JSFvrQ3h9e8aSDszyhV8D6sArEKyA9psAVN_8SDoxhjN0B5ZN67iudIunlKvh7MI7Hw_M" alt="Wood texture" />
              </div>
              <span className="font-label text-xs tracking-wider uppercase">African Mahogany</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-surface-container rounded-full border border-outline-variant/20">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-primary">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQi7VEjnZ8xFCIr_gHdR3hdz4-G6ap-l1_Uohd_h0IAjw3i_h385LufW5QLyf-RSbkcMpd_PIj8IMvvsRMg83N4Ko4C8zeus7nncDCQW1gfBkjqG3KVLd_HXGlANrZfrEzagNNnckbfEU4Dw1tjp3EO-CcNwZrNKNFZ4xZMc-5SR_06S4lRibGCmEs0-Usi1-0vDgIMPVyuSqJpmAUskQiIuhQltOyJpqwX9wWb3VZlWKBfkQnNGaZrDv3kQ__4ZbvpsLbvMZpcao" alt="Marble texture" />
              </div>
              <span className="font-label text-xs tracking-wider uppercase">Zuma Granite</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-surface-container rounded-full border border-outline-variant/20">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-primary">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1piY7s6aBykVOdKbMl00zQo-hc0GIEG2FjwGl15B3nH36AHmBJOOKubdl-IDcBU2XDJN1F4vKvnR_MnWiaZtrVpiKAo4HhYFyNnh_oTWFNB6vb_fxOGgod0rK8_YH9YeakYHLbG6iaA8AXAVLBMJby1xwWsNV7b7xxoEfl6zJ77a_hqh_5D-sDjQo3UY8-NMDleAwEx5Uly8Afepp83YLcpbcV7J-y9Ym9nyrK2RDjVJnuQO4xUs9cDzNlCfEJiFIcdA2T4MLnt0" alt="Leather texture" />
              </div>
              <span className="font-label text-xs tracking-wider uppercase">Full-Grain Leather</span>
            </div>
          </div>
          <Link href="/consultation">
            <button className="inline-block bg-primary text-on-primary px-16 py-6 rounded-full font-label text-sm tracking-widest uppercase hover:bg-primary-container transition-all duration-400">
              Book a Private Viewing
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Contact Details Section */}
      <section className="py-24 bg-surface-container-low px-8 border-t border-outline-variant/10" id="contact">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
            <h3 className="font-headline text-2xl text-primary">The Atelier</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              42 Heritage Heights, Mokola Hill<br />
              Ibadan, Oyo State<br />
              Nigeria
            </p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-3xl">call</span>
            <h3 className="font-headline text-2xl text-primary">Direct Inquiries</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              +234 (0) 803 000 0000<br />
              +234 (0) 701 000 0000
            </p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-3xl">mail</span>
            <h3 className="font-headline text-2xl text-primary">Digital Correspondence</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              curate@royalgrain.ng<br />
              bespoke@royalgrain.ng
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
