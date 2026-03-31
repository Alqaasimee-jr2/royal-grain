import Link from 'next/link';

export default function Consultation() {
  return (
    <main className="pt-24 bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-90"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Mg25SOHxsYPjOD5qZKparhZI_VkdtyrXTCeCy8DDdTABu8M7dqDxedkOZgAQS-5j_F5Hr3WTseT6K1TLiQxj1W4DN5h8nE-Jh32nZvs6UOBDJv0wBf8_hAjUIcLJn6_6n614a8taWQwrPUNCx91Pl464Zc6ESEO2UcfcK0UF0HsQS6saAr4nGk7y-oCDV_VBPKIFGrldDkhPEbcqNBSt70iveIBM7ettQW5LtF3enC8j1vmLRp4Y5nuun2fhBLXRz8FJyILkcVs"
            alt="Interior office"
          />
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl bg-surface/80 glass-effect p-12 rounded-xl border border-outline-variant/20">
            <span className="font-label text-primary-container tracking-[0.2em] uppercase text-xs mb-4 block">
              The Bespoke Experience
            </span>
            <h1 className="text-5xl md:text-6xl font-headline text-primary mb-6 leading-tight">
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
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Booking Form */}
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h2 className="text-3xl font-headline text-primary mb-2">Reserve Your Session</h2>
              <p className="text-on-surface-variant font-body">
                Select your preferences below to begin your design journey.
              </p>
            </div>
            <form className="space-y-10">
              {/* Project Type Chips */}
              <div>
                <label className="block font-label text-sm text-primary mb-6 uppercase tracking-wider">Project Type</label>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-full bg-primary text-on-primary font-body text-sm flex items-center gap-3 transition-all" type="button">
                    <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                    Full Home
                  </button>
                  <button className="px-6 py-3 rounded-full bg-surface-container text-on-surface-variant font-body text-sm flex items-center gap-3 border border-outline-variant/20 hover:bg-surface-container-high transition-all" type="button">
                    <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                    Single Room
                  </button>
                  <button className="px-6 py-3 rounded-full bg-surface-container text-on-surface-variant font-body text-sm flex items-center gap-3 border border-outline-variant/20 hover:bg-surface-container-high transition-all" type="button">
                    <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                    Custom Furniture
                  </button>
                  <button className="px-6 py-3 rounded-full bg-surface-container text-on-surface-variant font-body text-sm flex items-center gap-3 border border-outline-variant/20 hover:bg-surface-container-high transition-all" type="button">
                    <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                    Commercial Space
                  </button>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    className="peer w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                    id="name"
                    placeholder=" "
                    type="text"
                  />
                  <label className="absolute left-0 top-4 text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="name">
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="peer w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                    id="email"
                    placeholder=" "
                    type="email"
                  />
                  <label className="absolute left-0 top-4 text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="email">
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="peer w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                    id="phone"
                    placeholder=" "
                    type="tel"
                  />
                  <label className="absolute left-0 top-4 text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="phone">
                    Phone Number
                  </label>
                </div>
                <div className="relative">
                  <select className="peer w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors appearance-none" id="location" defaultValue="">
                    <option disabled value="">Showroom Location</option>
                    <option value="ibadan">Mokola, Ibadan</option>
                    <option value="lagos">Lekki, Lagos</option>
                    <option value="abuja">Maitama, Abuja</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 top-4 text-outline pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Premium Date/Time Picker */}
              <div className="space-y-6">
                <label className="block font-label text-sm text-primary uppercase tracking-wider">Preferred Consultation Date</label>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                  {/* Calendar Mockup */}
                  <div className="p-3 text-center rounded-xl bg-surface-container-low text-on-surface-variant opacity-40 cursor-not-allowed">
                    <span className="block text-[10px] uppercase">Mon</span>
                    <span className="text-sm font-semibold">12</span>
                  </div>
                  <div className="p-3 text-center rounded-xl bg-surface-container-low text-on-surface-variant opacity-40 cursor-not-allowed">
                    <span className="block text-[10px] uppercase">Tue</span>
                    <span className="text-sm font-semibold">13</span>
                  </div>
                  <div className="p-3 text-center rounded-xl bg-surface-container border border-outline-variant cursor-pointer hover:border-primary">
                    <span className="block text-[10px] uppercase">Wed</span>
                    <span className="text-sm font-semibold">14</span>
                  </div>
                  <div className="p-3 text-center rounded-xl bg-primary text-on-primary cursor-pointer shadow-lg shadow-primary/20">
                    <span className="block text-[10px] uppercase">Thu</span>
                    <span className="text-sm font-semibold">15</span>
                  </div>
                  <div className="p-3 text-center rounded-xl bg-surface-container border border-outline-variant cursor-pointer hover:border-primary">
                    <span className="block text-[10px] uppercase">Fri</span>
                    <span className="text-sm font-semibold">16</span>
                  </div>
                  <div className="p-3 text-center rounded-xl bg-surface-container border border-outline-variant cursor-pointer hover:border-primary">
                    <span className="block text-[10px] uppercase">Sat</span>
                    <span className="text-sm font-semibold">17</span>
                  </div>
                  <div className="p-3 text-center rounded-xl bg-surface-container border border-outline-variant cursor-pointer hover:border-primary">
                    <span className="block text-[10px] uppercase">Sun</span>
                    <span className="text-sm font-semibold">18</span>
                  </div>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  <button className="whitespace-nowrap px-6 py-2 border border-outline-variant rounded-full text-xs font-body hover:bg-primary hover:text-on-primary transition-all" type="button">09:00 AM</button>
                  <button className="whitespace-nowrap px-6 py-2 border border-outline-variant rounded-full text-xs font-body hover:bg-primary hover:text-on-primary transition-all" type="button">11:30 AM</button>
                  <button className="whitespace-nowrap px-6 py-2 bg-primary-container text-on-primary-container rounded-full text-xs font-body" type="button">02:00 PM</button>
                  <button className="whitespace-nowrap px-6 py-2 border border-outline-variant rounded-full text-xs font-body hover:bg-primary hover:text-on-primary transition-all" type="button">04:30 PM</button>
                </div>
              </div>

              <div>
                <textarea
                  className="w-full bg-surface-container-low border-none rounded-xl p-6 focus:ring-1 focus:ring-primary font-body text-on-surface-variant"
                  placeholder="Tell us about your project vision..."
                  rows={4}
                ></textarea>
              </div>

              <button className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-headline text-lg tracking-wide hover:opacity-95 transition-all shadow-xl shadow-primary/10" type="submit">
                Confirm Consultation Request
              </button>
            </form>
          </div>

          {/* Right: Information & Testimonials */}
          <div className="lg:col-span-5 space-y-12">
            {/* What to Expect */}
            <div className="bg-surface-container-low p-10 rounded-xl space-y-8">
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
                      Experience our tactile library of sustainable woods, Italian linens, and hand-forged metals.
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
                <p className="font-headline text-primary">Reclaimed Artisan Walnut</p>
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
      <section className="py-24 bg-surface-container-low mt-20">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-headline text-primary mb-6">Can't Find a Suitable Time?</h2>
          <p className="text-on-surface-variant text-lg mb-10 font-body">
            Our concierge team is available to assist with custom scheduling or urgent project requests. Let us tailor the experience to your timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-4 border border-primary text-primary rounded-xl font-headline hover:bg-primary hover:text-on-primary transition-all">
              Call Our Concierge (+234 800 ROYAL)
            </button>
            <button className="px-10 py-4 text-primary font-headline flex items-center justify-center gap-2 group">
              Live Chat with a Designer
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
