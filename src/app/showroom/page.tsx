import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Showroom',
  description: 'Explore our digital gallery of hand-turned walnut and bespoke Ibadan craftsmanship at Royal Grain.',
};

export default function Showroom() {
  return (
    <main className="pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Hero Section: Curated Manuscript Style */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-12 md:mb-20">
        <div className="relative grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <h1 className="text-5xl md:text-8xl font-headline font-bold text-primary tracking-tighter leading-none mb-6 md:mb-8">
              The Curated <br />
              <span className="italic font-normal">Manuscript.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-md leading-relaxed font-body">
              A digital gallery of hand-turned walnut, polished brass, and the silent language of bespoke craftsmanship.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl shadow-sm">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                src="/showroom_hero.png"
                alt="High-end walnut dining table showroom"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
              <span className="text-xs uppercase tracking-widest text-outline block mb-2">Featured Material</span>
              <h3 className="text-lg font-headline font-bold mb-2">Sustainably Sourced African Mahogany</h3>
              <p className="text-sm text-on-surface-variant">
                Each piece begins with timber selected for its unique narrative and structural integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation: Material Chips */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-16 md:mb-32 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-4 pb-4">
        <button className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-on-primary rounded-full transition-all flex-shrink-0">
          <span className="w-6 h-6 rounded-full overflow-hidden bg-stone-300">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfLqRlhi1XwUCWBzHydORE4nGkbv5YV9BYEY9tUbNfxNsekbOcc2RJjeO_8CpFsXcfgQrxnGY7wns9gAiKrzgQsVU8-inNTE6bOQhE5ZQEyyrbh-2NRuu2-YUCWuL1--4Gz51RvvzbtNGepvMytI72zLZ5ebW4Y6o-AKZJMIyEDUAoifGij9UcaGzVyQjcFVEOvliOyvQRO7hUM1Riu2RfF90fO8H-3NQCUNhcy_GN0kiQVLTw1W486YtHqVVagLiq2yWrIw8DSyk" alt="Walnut wood grain" />
          </span>
          <span className="font-medium">All Collections</span>
        </button>
        <button className="inline-flex items-center gap-3 px-6 py-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-full transition-all">
          <span className="w-6 h-6 rounded-full overflow-hidden bg-stone-300">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmqTp7tt9tKNXi_mwOf9QTH2-3Rwx2ERfp8lXkh9aca7NHvGHA6-FGh-9rZ2uWVenXLRzuVj8dT-oNfJqzcTNstJYAr4TMPDZi-wJ-UwpWJkxSzyYJQ7CavqSwr-zrSPijUFsx5CgiTgvduiUwIqx-hayT4u_MoQkiRAyKXX5TRY1U5YTECBBwYVeyyR7QgA1idOqKEY2G64e2Y4qWJfHR2TRXCiCD_VtHilULlPZE5XrQ_D2MEBPwLWqNoXP9VRLP_1GjYb4r-F4" alt="White marble" />
          </span>
          <span className="font-medium">Dining Tables</span>
        </button>
        <button className="inline-flex items-center gap-3 px-6 py-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-full transition-all">
          <span className="w-6 h-6 rounded-full overflow-hidden bg-stone-300">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnmFAw-zuQQebH50INezmw_aG-axPz6hD8a68MZ6oPBEsgjWdW69EchygHRMQz3P0plgwjEsmpw99IahYGX9pkEjBbZ9TymrODUh-joPdF4AaaaJVJuZuu4LtFoucu_En_gC9xnKboSQw_Mjy9xiN_Wn0kZKt-W-ONIlSAyxdw9JCScCXZWrqTzNqckp2tjbWgJOtS269AdKfz1u9pzkSF5u3yIAfw-Qjyllcn5herRpzilf7Bi_9NVI1RIIcDSwnpSsdukDvxy14" alt="Cognac leather" />
          </span>
          <span className="font-medium">Occasional Seating</span>
        </button>
        <button className="inline-flex items-center gap-3 px-6 py-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-full transition-all">
          <span className="w-6 h-6 rounded-full overflow-hidden bg-stone-300">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApxxEhJxyDx2A5fDqHNONOepewoafl6iOOuHnrpvzJTRDhYTOM3OGqQWgD4LYpqPGqrM7hXjP_sYGUQYBMudac7Z3BirS6ASw6rh4fEAkhd4cDVDA5Tr6UM4-fX5Bs2ZT7TUy-iLtNnqQsh7RoT3LFO41wYuNKz9t70mIVvB50c3HfU4vczDlMJADxw4vhN_NP8GCiDx_5Qvy1i9cvmjYFcBawwUilQBgTM73GFbINiqG13n4ZM5cFRwJ4H3zmYAouhQokUyiCLb4" alt="Brushed gold brass" />
          </span>
          <span className="font-medium">Cabinetry</span>
        </button>
      </section>

      {/* Showroom Grid: Bento Style */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Highlight */}
          <div className="md:col-span-8 group">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/heritage_refectory_table.png"
                alt="Highlight product The Heritage Refectory Table"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Limited Edition
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-2">The Heritage Refectory Table</h2>
                <p className="text-on-surface-variant max-w-md italic font-serif text-sm md:text-base">
                  Solid Aged Iroko Wood with brushed brass inlay and hand-carved joinery.
                </p>
              </div>
              <div className="text-left md:text-right">
                <span className="text-xl md:text-2xl font-headline font-bold text-primary block">₦12,500,000</span>
                <span className="text-[10px] md:text-xs text-outline uppercase tracking-widest">Available for Order</span>
              </div>
            </div>
          </div>

          {/* Secondary Small */}
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-8">
            <div className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-low mb-4">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuIgymQifwtexeaGMGrD0ooQiVwAGuvEoQjQqSjWGcZmtyuC9pdHtdRHqcIGcyzwuxoObJ0e9lWgl72ydsFfwadd9HdNnqZEd2QKRuqqtH2KKZ8wZ9MSAePTTZzX4NdcBRk58VXABgYT-P9_VrWtSp3DJ5Ps1r-ofJ-_uwK6BOpjHWgWd1P1pQIFbanVOJvOTQRQqzCFH_HPpBg8JiQPzq5RMNGzNCGh0bQaJgSoyTw99UBHXMG3vp6xS90rYDt06-D2X5Lxb6U4s"
                  alt="Lounge chair"
                />
              </div>
              <div className="flex justify-between items-start md:items-center">
                <h3 className="text-lg md:text-xl font-headline font-bold">Loom Lounge Chair</h3>
                <span className="text-base md:text-lg font-headline font-bold text-primary">₦3,500,000</span>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-low mb-4">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-OFXmxblHVmspErSzktGKkCGJCEq03Fw9SivLjToHgRSnHaV_72SjsRTpssymU-YXiIS5z6zX32p6DNI8QAGlPi9aUhhYrK0275CWwweTboLPIMGv2_qK9fshQL5bJHZS0Yn00i6yk8h2LkO10MEWQiIGXioAx-gSzY2amb1RL4zofJEG1da5p87W_dDVDksPRRZZ9AWsab_xPHFbx3TRsG3g3PuO9x1VBkG18nOWiMegdEFJCVuQPI09TV1LR9MvbqVQWDI5U6U"
                  alt="Bedside cabinet"
                />
              </div>
              <div className="flex justify-between items-start md:items-center">
                <h3 className="text-lg md:text-xl font-headline font-bold">Arc Bedside Cabinet</h3>
                <span className="text-base md:text-lg font-headline font-bold text-primary">₦1,850,000</span>
              </div>
            </div>
          </div>

          {/* Tonal Block Transition */}
          <div className="col-span-1 md:col-span-12 py-16 px-6 md:py-24 md:px-12 bg-surface-container-low rounded-xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 mt-12 md:mt-24">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-outline block mb-4">The Artisan's Promise</span>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary leading-tight mb-4 md:mb-6">
                Built not for the season, but for the legacy.
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg">
                Every Royal Grain piece comes with a certificate of authenticity and a lifetime guarantee on structural joinery. We believe in furniture that ages as gracefully as the stories it holds.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto place-items-center">
              <div className="aspect-square w-full max-w-[140px] md:w-40 rounded-full overflow-hidden bg-white flex items-center justify-center p-6 md:p-8 text-center shadow-sm">
                <span className="text-[10px] md:text-xs font-bold leading-tight">HAND TURNED</span>
              </div>
              <div className="aspect-square w-full max-w-[140px] md:w-40 rounded-full overflow-hidden bg-primary text-on-primary flex items-center justify-center p-6 md:p-8 text-center shadow-sm">
                <span className="text-[10px] md:text-xs font-bold leading-tight">SOLVENT FREE</span>
              </div>
            </div>
          </div>

          {/* Three Column Detailed Row */}
          <div className="md:col-span-4 group mt-16 md:mt-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBEI8HeVQtBM0jJy2Erb0hvfOq1TZ8S2SwTFTsPKQOyqW4SiYGAEhbv7TO2OlD7dXvDruyEPD8fqS6JqKiBmkkbW2xQDDR70eFTdPod30mDoGXHxGtWB5y2FZvyDZ3PU2qfTZ5IDAe30RDn-tskx4JrCiP7O8iE32Bz8F_vB1LkedwD7DReCXS2oow-BJi_MsvHHoya82wQTqWnzQLf99Tqz89kL7un38hAqQBgPK1nDjkyC4qzxbWyH9-kdrQMqJq5QwqkV5TUeY"
                alt="The Sculpt Chair"
              />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-headline font-bold">The Sculpt Chair</h3>
                <span className="text-xl font-headline font-bold text-primary">₦1,200,000</span>
              </div>
              <p className="text-on-surface-variant line-clamp-2">
                A masterclass in ergonomics and sculptural form. Crafted from a single piece of steam-bent Mansonia wood.
              </p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                Explore Details
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-4 group mt-16 md:mt-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtzZu5FLDZpqax-5hsx2B0BeYr4OB5lq8zQXH_LXOpnqxJR1vKFBR173s2rOhTtdnmeR8Rx08L8Ry7g_ihI2HG5sQpWJU_wvFb3jTtzek144lEcaKhRQFRdjJWeiRfo7Pf8kE1cP1i3unVurnjLea3cAj3JncbL1qKuo2lXs7Y-PCXeWYwTfVaFN5hNUIY8HqOthfxe3TiCoxmMR0HBJEoRGtwSaz2zYHQxXZstrwcc82s9SvlOaCIF9KHDue7M40yFvnkrFLoe0A"
                alt="Horizon Sideboard"
              />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-headline font-bold">Horizon Sideboard</h3>
                <span className="text-xl font-headline font-bold text-primary">₦7,500,000</span>
              </div>
              <p className="text-on-surface-variant line-clamp-2">
                A long-form storage solution featuring hand-lathed handles and a floating stone top option.
              </p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                Explore Details
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-4 group mt-16 md:mt-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGMgKn8Ju8TZVvkDhFeeK7QeElwM3DXheIp6UH5x1lIpJuQdeg5l2ZoLk2pVmsyij6eiGE6pIU1q80XnaE4I8T0NwCfN_SlurDsJ5pj7CIqhc5kVhCdWDXCIp6HJKtfrKWnLD1IgHb95krw0mlqUjknCU6zCGuMnAdC-pinnI6R6plIzg0yqnbIzcRWk6pa-63kUD4WZKSNYhhxtzfIbhPQSF66x3ow4rpvTlAUO1y5g073vDXbWVthv6zn3D3r4DWOI2b72gb8j4"
                alt="Scribe Work Desk"
              />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-headline font-bold">Scribe Work Desk</h3>
                <span className="text-xl font-headline font-bold text-primary">₦4,800,000</span>
              </div>
              <p className="text-on-surface-variant line-clamp-2">
                The ultimate professional anchor. Built-in cable management with zero aesthetic compromise.
              </p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                Explore Details
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Quote */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-surface-container-lowest text-center">
        <div className="max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-8">format_quote</span>
          <p className="text-3xl md:text-5xl font-headline italic text-primary leading-loose md:leading-tight mb-10 md:mb-12">
            "Design is not for the eyes alone, but for the hands that touch and the life that happens around it."
          </p>
          <div className="flex flex-col items-center">
            <span className="font-bold tracking-widest text-xs uppercase">Julian Thorne</span>
            <span className="text-outline text-xs">Master Craftsman</span>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-20 md:mb-32">
        <div className="relative rounded-xl overflow-hidden bg-primary p-8 md:p-24 text-on-primary">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">Begin your bespoke journey.</h2>
            <p className="text-on-primary-container text-lg mb-12">
              Receive our seasonal lookbook and invitations to private showroom viewings.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                className="flex-grow bg-white/10 border-b border-white/30 text-white placeholder:text-white/50 py-4 px-0 focus:ring-0 focus:border-white transition-all outline-none"
                placeholder="Email Address"
                type="email"
              />
              <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-400">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
