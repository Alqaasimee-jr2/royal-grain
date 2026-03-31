import Link from 'next/link';

export default function Craft() {
  return (
    <main className="pt-24">
      {/* Hero: The Soul of the Timber */}
      <section className="relative h-[921px] overflow-hidden flex items-center px-8 md:px-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1ECpFdgKUmjPLqqgrpwr8DrXuG_-iobB6j16rr00RUseumJ0dVm6DyI3eMPF_j4IxkCAl38UIVqtnIfUI_S8CXGfcMUF9MtMesCFqDymG51J8qFHQGeLLnLq1PX_1NgXI_r6RwS9NYYyrZCjfOu5jMPOo_PNJ67BivHFm34vY2CnHkbXeUzXx4-OlF98D7JpmC32sdQ58W65zHk_ng4vursOXS42duqC-LjEfRDUP0NMZmJkYTcnoPruWWNhxsQR0EgSYJNsnxOw"
            alt="Premium raw walnut wood slabs"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block font-label text-tertiary-container bg-tertiary-fixed px-4 py-1 rounded-full text-xs uppercase tracking-[0.2em] mb-6">
            Established 1984
          </span>
          <h1 className="font-headline text-5xl md:text-8xl text-primary leading-[1.1] mb-8 tracking-tighter">
            The Curated Manuscript of <span className="italic">Wood.</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Every piece of furniture we create begins as a silent story within the Nigerian timberlands. From the lush forests to our master workshop in Mokola, Ibadan, we translate the language of nature into timeless heirlooms.
          </p>
        </div>
      </section>

      {/* Chapter 1: The Selection */}
      <section className="py-32 px-8 md:px-20 bg-surface-container-low overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 relative">
            {/* Asymmetric Image Layout */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeGYO8qXGqkZMjHiWWUtaYUeu41OXxr9IHyLVyKGiGvLiuVcH1Udi9A0k3Ulj8vhmevBY0p8VwqHKvQw2Z3QGxPYNexf2NQlJ9Q_WHPS0wkTekqwt3sX-W0VfTTPcNjPAyHnXpqfrDLon0lYoT6jLuxWNTHVB69XdAp84-ykTbwqpVc_efmx_SXVurzHpx8XcvJGS5UA4QS7RGYklrBuRsvsy-d05wnpN6WjRDnFXZHnCBaRqdA7J2aRruaVai3OtEpiPThD7OMkE"
                alt="Sustainable forestry"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-primary-container p-8 flex-col justify-center items-center text-center text-on-primary-container border-8 border-surface-container-low hidden lg:flex">
              <span className="material-symbols-outlined text-4xl mb-2">forest</span>
              <p className="text-sm font-label leading-tight italic">Ethically Sourced & FSC Certified</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">I. Regional Selection</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Our journey starts in the heart of West Africa. Our master timber scouts traverse the ancient tropical rainforests of Nigeria, seeking out fallen giants or responsibly thinned timber. We look for 'character'—the knots, the flares, and the ripples that tell a century of regional history.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 bg-surface-container-lowest px-6 py-3 rounded-full border border-outline-variant/20 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[url('https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=100')] bg-cover"></div>
                <span className="font-label text-sm text-primary">African Mahogany</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-lowest px-6 py-3 rounded-full border border-outline-variant/20 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[url('https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=100')] bg-cover"></div>
                <span className="font-label text-sm text-primary">Iroko Teak</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Studio */}
      <section className="py-32 px-8 md:px-20 bg-surface">
        <div className="max-w-screen-xl mx-auto text-center mb-24">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6 italic">II. The Mokola Studio</h2>
          <div className="w-24 h-1 bg-tertiary mx-auto mb-10"></div>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto leading-relaxed">
            Located in the vibrant heart of Mokola, Ibadan, our drafting table is where organic inspiration meets architectural precision. Every joint is sketched by hand before the first cut is ever made.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-screen-2xl mx-auto">
          <div className="md:col-span-8 aspect-video rounded-xl overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwWQz3x6e5wB79-jhElhhHdA3xRJxRtunBCQYdO3SVpWj1GPDMgnxO62b0kmvQjW-17eXERU5g5VVplDhjvE2PBdswTXzbUTZYl5OqTXimTOzmRHG8MMvCNqFuNI1ns5RrNpfhMw-6YdIfkmQadNsQph-OkhvtLWTRXmQZMn7wGvzGOrktLZ8Sv39zVoKa2JmGVWugxbb71rcz9YjYWA4ynFCDSDxnvZvSx7M86bH-5Y_jGO_YjGlU3jX6zDSw9cmQws33T9Os-UQ"
              alt="Detailed architectural sketch"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-4 bg-primary-container rounded-xl p-12 text-on-primary-container flex flex-col justify-between">
            <span className="material-symbols-outlined text-5xl">architecture</span>
            <div>
              <h3 className="font-headline text-3xl mb-4">Bespoke Blueprints</h3>
              <p className="font-body opacity-80 leading-relaxed">
                No two pieces are identical. We tailor the dimensions and the joinery to the specific grain orientation of your chosen timber slab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Metamorphosis */}
      <section className="py-32 px-8 md:px-20 bg-surface-container">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">III. The Ibadan Craft</h2>
            <div className="space-y-6">
              <div className="group flex gap-8 items-start p-6 rounded-xl transition-all hover:bg-surface-container-high">
                <div className="text-tertiary font-headline text-3xl italic">01.</div>
                <div>
                  <h4 className="font-headline text-xl text-primary mb-2">The Mortise & Tenon</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Traditional joinery executed by Ibadan's finest hands. A dialogue of interlocking wood that requires no screws or metal, strengthening with every season.
                  </p>
                </div>
              </div>
              <div className="group flex gap-8 items-start p-6 rounded-xl transition-all hover:bg-surface-container-high">
                <div className="text-tertiary font-headline text-3xl italic">02.</div>
                <div>
                  <h4 className="font-headline text-xl text-primary mb-2">The Hand Finish</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    We use natural oils and beeswax, applied over seven days to saturate the fibers and reveal the wood's inner glow.
                  </p>
                </div>
              </div>
              <div className="group flex gap-8 items-start p-6 rounded-xl transition-all hover:bg-surface-container-high">
                <div className="text-tertiary font-headline text-3xl italic">03.</div>
                <div>
                  <h4 className="font-headline text-xl text-primary mb-2">The Final Polish</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Every edge is hand-sanded to a 'silk-touch' finish, ensuring every interaction with the piece is tactile poetry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-xl overflow-hidden aspect-square">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXsQLs4JXMuAGyjiIZ5nK_skmM2-SZJT16gU08YmCmB_8PQB_aYFu2cVHDfaJpzJHJBRW_ylHzeQdAh8zUdcZIMpdby2n95sjoE-727rhFRFyQauYYrysr1iV6Mpdbpk3tVOocWB6-PViFbaH7eKKDw_8uXiN-_XeZzxTcAiKkMf4XJpptdS1rSVCGGqHz8H1QlSF7K8cDpkDC82-noGJkoU3bCSvdKXRLqPlqsQiiN4Ij_vWBUKz08UjSWc1S9Z4N-5M2KeofWU0"
                alt="Artisan hands"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-12 -left-12 w-48 h-48 border border-primary/20 rounded-full animate-pulse opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-32 px-8 md:px-20 bg-surface">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-2xl mx-auto pt-20">
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxTS-gg4W7Fyd1yjq2qRKGm3g7O6tN5wpLD_5LSaHKbHrzuIjcMr7Ki5yyAIJOe-FE4e23WDL9hoEwiAM2A2qC5bgH-sw7fWhBy-FbVSsRKSnlBt6F9RDUhK2gt17w_xYinzCGktRE0xn_zUWj90aV4d098CS1Ed4YM8X0Vk23geMP7hZ0Rtbk5G6kxFeAMHunmqOMtqwhGjNalgW7xV_btSoewxmNCnOJn1NquvpVyD0AOPpcxowJ4Xq9tir968BACJ_5z7xzawU"
              alt="Polished wood grain"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[3/4] translate-y-8">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQt_31QqHxQJLm02Oo6SAWQyH4rtB1edlf5HpoHdZj7TR9OqUZXKmKarqx71eNF_qN0D92cTPi9-DsdycpU2HcJG39IFsf5Xo7axUwo_9yfVwkDqFVHZRKtBANf93cc7DQQD7JdWURy_-wAfQ_LPvJF2WUjq9oER6nxoYpHyyxoNCgi7pjdtHHcKAHvLZI3BxtSHuo7KrnFaEJqIuhzxqX7qY9jxlAwPHq9KWw9uARx8heEfuqA0QY97czjtvBIhuQZFDsPngWIcw"
              alt="Tools"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj4iC82F_P3fNtDMsfqGmxlKxw7CVP9xOOjR81ZMwRKo4_GKj3cxnMi8PvIzsKIaKPmtVgCmrirLdA6KcN1YOY3JtV4Nnuh9x7nHj9DjQROs9IlBgEq6S2Do-eTiRIE3mALWUC-cB2FJzaJg_MoC-GSkA0zllfhw6IawmlpP_DPNYdvxg2rWoCyVkitTRFI-9RkXdj_TOFAU7cGxeam7DMteoJT0cmy_i980IPrlefNf3jA4qzWE-kUwn8uD0qURmLFGqoLtdcS6M"
              alt="Timber planks"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[3/4] translate-y-8">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8bvEP2uY2q7lxgRLbVXRJTQQaRdfXLYf0C6kLYL1mIn2Y-dS7_XsHoCXMx-rfETSURhlgwFSJ_yBxIAO2FUApCFfIZ4rG1G-M_l_-d95YjAYRQCDY4V7OmGorpAZRmVsiAK_SfxvKH9g7czWiBfuNOOaRnig8Dkl0nYL9f-MX9HnG0wOY6_4WeUPZbSluPZgs71-iLVgOXdVLb_e4UoWH1khPuMVzCrHlrqZDZSONwusoZzErzb9OhvAWxftc6V3QyfV1wZaFG4k"
              alt="Minimalist chair"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-screen-xl mx-auto px-8 flex flex-col items-center text-center">
          <h2 className="font-headline text-4xl md:text-5xl mb-8">Visit our Mokola Workshop</h2>
          <p className="text-on-primary-container text-lg max-w-xl mb-12 opacity-90">
            Collaborate with our designers in our Ibadan studio to create a piece that reflects your story and our heritage.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <Link href="/consultation">
              <button className="bg-surface text-primary px-12 py-4 rounded-full font-label tracking-wide hover:bg-surface-container-highest transition-colors">
                Book a Consultation
              </button>
            </Link>
            <Link href="/showroom">
              <button className="border border-on-primary/30 text-on-primary px-12 py-4 rounded-full font-label tracking-wide hover:bg-white/10 transition-colors">
                View Collections
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
