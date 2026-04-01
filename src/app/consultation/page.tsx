import { Metadata } from 'next';
import Link from 'next/link';
import ClientBookingForm from './ClientBookingForm';

export const metadata: Metadata = {
  title: 'Consultation',
  description: 'Book a bespoke luxury interior design consultation with our master designers in Mokola, Ibadan.',
};

export default function Consultation() {
  return (
    <main className="pt-24 bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-90"
            src="/consultation_hero.png"
            alt="Interior design consultation office"
          />
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl bg-surface/80 glass-effect p-8 md:p-12 rounded-xl border border-outline-variant/20">
            <span className="font-label text-primary-container tracking-[0.2em] uppercase text-xs mb-4 block">
              The Bespoke Experience
            </span>
            <h1 className="text-4xl md:text-6xl font-headline text-primary mb-6 leading-tight">
              Your Vision, <br />
              <span className="italic font-normal">Our Masterpiece</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 font-body">
              Connect with our senior designers to transform your space into a curated manuscript of your life. Every detail hand-turned, every grain intentional.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20">
          {/* Left: Booking Form */}
          <ClientBookingForm />

          {/* Right: Information & Testimonials */}
          <div className="lg:col-span-5 space-y-12">
            {/* What to Expect */}
            <div className="bg-surface-container-low p-6 md:p-10 rounded-xl space-y-8">
              <h3 className="text-2xl font-headline text-primary">The Consultation Journey</h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center border border-outline-variant/30">
                    <span className="material-symbols-outlined text-primary">history</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg text-primary">60-Minute Discovery</h4>
                    <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                      A focused one-on-one session with a lead interior architect to discuss your lifestyle, needs, and aesthetic preferences.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center border border-outline-variant/30">
                    <span className="material-symbols-outlined text-primary">palette</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg text-primary">Personalized Mood Board</h4>
                    <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                      Receive a curated digital board showcasing color palettes, textures, and lighting concepts tailored to your home.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center border border-outline-variant/30">
                    <span className="material-symbols-outlined text-primary">foundation</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg text-primary">Material Library Access</h4>
                    <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                      Experience our tactile library of sustainable woods, handcrafted Aso-Oke textiles, and hand-forged metals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Material Chip */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0S4QzQq15l_GQiQia4mCR_4e-d4EyCquBkvqgpICXdcMhtmn0m9gAmWBQD7h02GXSSkpNeniFKwjgJTCwFd4GhffvNjk0X31U2pb97TAN6XRJ2hWw71lADWkOgRbicJwPpnWgkQzaC3sTHjrNLMx4GQiSyd-fQh1l1NWf9wbj1ZvWop--E2JaaiIfzzmZMx9Kc5O56ygkL814lgWZfvRD34qZjh9sjjfsGsXndpbdZtR8kIlQZjJIZ6PaibzXfbSP8sapK5syAlk"
                  alt="Walnut wood grain"
                />
              </div>
              <div>
                <span className="text-xs font-label uppercase tracking-widest text-outline">Featured Material</span>
                <p className="font-headline text-primary">Reclaimed Artisan Iroko</p>
              </div>
            </div>

            {/* Testimonial Slider Mockup */}
            <div className="pt-8 border-t border-outline-variant/30">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-headline italic text-xl text-primary leading-relaxed mb-6">
                "The consultation felt more like a masterclass in living. Royal Grain didn't just design a room; they understood how my family breathes in a space."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-outline-variant/30 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcfmzm8YHbFVvFK2U89IZLCQxJwKsdvknYeok3I6RUYfDooa9OyJ0m_H3M7DDZ8k1GB7SsZzwh2erSrc7CyIY5_E9VVp0XJTfuByXofPKhPX5b08Afri61MxdbTu-Xu22SHcGzGwzWIoCgkbBc-c-QTvOk0mcqYn7arYLipOcW3BY2BDGjpRT8BLbSON6TWn3jynn3kOh96wnl3h1_jrBB-h7xj5luRHE2LTg63zkWPWwPGDCep2j8YyK1Wje9hytKzob8OHV5i-w"
                    alt="Portrait"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-primary">Elena Richardson</h5>
                  <p className="text-xs text-on-surface-variant">Ibadan Luxury Estate Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 md:py-24 bg-surface-container-low mt-16 md:mt-20">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-6">Can't Find a Suitable Time?</h2>
          <p className="text-on-surface-variant text-lg mb-10 font-body">
            Our concierge team is available to assist with custom scheduling or urgent project requests. Let us tailor the experience to your timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+2349019597944" className="px-10 py-4 border border-primary text-primary rounded-xl font-headline hover:bg-primary hover:text-on-primary transition-all inline-block">
              Call Our Concierge (+234 901 959 7944)
            </a>
            <a href="https://wa.me/2349019597944" target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-primary font-headline flex items-center justify-center gap-2 group">
              WhatsApp Our Designers
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
