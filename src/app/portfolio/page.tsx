import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse our signature interior design projects across Nigeria, highlighting architectural timber, travertine, and polished metals.',
};

export default function Portfolio() {
  return (
    <main className="pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Hero Section / Title */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-12 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-tertiary-container font-label uppercase tracking-widest text-xs mb-4 block">
              The Curated Manuscript
            </span>
            <h1 className="text-4xl md:text-7xl font-headline text-primary leading-tight">
              Mastering the Art of <span className="italic">Atmospheric</span> Living
            </h1>
          </div>
          <div className="md:text-right">
            <p className="text-on-surface-variant max-w-xs md:ml-auto leading-relaxed italic text-lg font-headline">
              "Every grain tells a story of heritage, precision, and the silent language of luxury."
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Bento Grid */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Feature Project */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low aspect-[16/10] cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/portfolio_hero.png"
              alt="Walnut Sanctuary"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12 translate-y-4 group-hover:translate-y-0">
              <div className="bg-surface-container-lowest/90 p-8 rounded-xl max-w-md shadow-2xl">
                <h3 className="text-3xl font-headline text-primary mb-2">The Walnut Sanctuary</h3>
                <p className="text-on-surface-variant font-body mb-6 text-sm leading-relaxed">
                  A residential masterpiece in Lagos focusing on the seamless integration of raw timber and polished brass accents.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-surface-container text-xs font-label uppercase tracking-tighter text-on-surface-variant">Residential</span>
                  <span className="px-4 py-1.5 rounded-full bg-surface-container text-xs font-label uppercase tracking-tighter text-on-surface-variant">2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary High Project */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low aspect-[4/5] cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ARpUUf2Z3ySto8s-V8lgYhYtjPc6GEIFhiqDoaVA08GvE24rOOY9g9az8Xk14naIOPb9VEzp3Qy-rubsL2kW7fbwtlZLzuKliltoMCkI2KNit0-QhQ3sx_8WOENPwKYHqUKK72sX48yplEnl8j6wjvD8BYH5N5djJv5zsZkmEgyswpktbf7hEPGoZwSCmJDDP03WvmKVsZh9urMz7AxJVyhPaza9cS9LYpBzZ8PahGqiZlHUksetvxQvnXPCSdTVMlea7ydiwxM"
              alt="Monolith Kitchen"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
              <div className="bg-surface-container-lowest/90 p-6 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-headline text-primary mb-1">Monolith Kitchen</h3>
                <p className="text-on-surface-variant font-body text-xs mb-4">Sculptural marble and fluted textures.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container text-[10px] font-label uppercase text-on-surface-variant">Bespoke</span>
                </div>
              </div>
            </div>
          </div>

          {/* Triple Grid - Organic Layout */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low aspect-square cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtpW7se9vAjh7NQNCLGU4My7SYgIu6MlCCNus5FpaI2G7jgJAXg349w0U02htQ8rVWyaa7FYd0jJBdhJwuAGW9xP1MvZZgGd21KMgNLmPpHm1W9Zu0XjUI5vA45nI6Y0WxC30ycDRizZNyncnMf5kp43I2_ambdNjtHYpHdXKwohe5LcPYWUpBT7Os1eO0fL9NjxdCaHJFzVgkUadBITqQe2NpEuboOR-3of6Mxn8LQHR2ObVUKeFKFD4K-hJ-4bC5yzSzQDpEnSE"
              alt="Linen & Grain"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-4 group-hover:translate-y-0">
              <div className="text-center p-6">
                <h3 className="text-2xl font-headline text-white mb-2">Linen & Grain</h3>
                <span className="text-on-primary-container text-[10px] font-label uppercase tracking-[0.2em] block mb-1">Lagos</span>
                <span className="text-on-primary-container text-[10px] font-label uppercase tracking-widest opacity-70">View Project</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low aspect-square cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2LPgwP5jwnEFxBG1fRxmlym_t_X7-4fOZethS49hCKLkKxGA0mMtQ1BYRrCJ3Js9UltMqz3SNNVITUmn3Ma7SmdLTM93jQNNg-GbMpEwVNI1yfbenSF6Qz0l-maYQrhtjZxVJ5mBShgqb-UQrsoZ_SpiyzApnXUMkTAGn2u9aeoTVfVPmRjjiawywcxmVUdQnHWWf0y8SHCPoWzLIRwGYj5vBL-d2E-mxQzMr92jvZixoQw6o9kAXLDMD7jM03WvuVdn5pfRUd0A"
              alt="The Archive Suite"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-4 group-hover:translate-y-0">
              <div className="text-center p-6">
                <h3 className="text-2xl font-headline text-white mb-2">The Archive Suite</h3>
                <span className="text-on-primary-container text-[10px] font-label uppercase tracking-[0.2em] block mb-1">Ibadan</span>
                <span className="text-on-primary-container text-[10px] font-label uppercase tracking-widest opacity-70">View Project</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low aspect-square cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCsIP-Pm9LZx6b9TWeH4ESiJJ5wDIEcalj32lopsQRoBUK_jp8f5IutG7prZN5uIzVIlxrN8-jex4Ar0cVgT57HD5Wu9utVzVFs6Ypf28ZEr2qcgRlSP3xcK1pIUIUZzV8twR8NFMaZsJnHruzDplAKUnqnDPq2hByZr7TGnp4tznnKvJL9OwiG0caCv3yg3jbYP8VHlMUWQw9U70YbMs-TbRIaKV1UehR82e-c4l2gudwO7ms-1IL29D_qx_BLaw5U4xNHLhnYBE"
              alt="Travertine Spa"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-4 group-hover:translate-y-0">
              <div className="text-center p-6">
                <h3 className="text-2xl font-headline text-white mb-2">Travertine Spa</h3>
                <span className="text-on-primary-container text-xs font-label uppercase tracking-widest">View Project</span>
              </div>
            </div>
          </div>

          {/* Final Large Callout */}
          <div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-surface-container aspect-square md:aspect-[21/9] mt-8 flex items-center px-6 md:px-24">
            <div className="relative z-20 max-w-2xl bg-surface/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-xl">
              <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">Let's craft your manuscript.</h2>
              <p className="text-on-surface-variant font-body mb-8 text-lg">
                Our design atelier at Mokola, Ibadan is currently the primary hub for all project inquiries. We are accepting commissions for late 2024. Every space we touch becomes a legacy.
              </p>
              <Link href="/consultation">
                <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-label tracking-widest text-sm transition-all hover:bg-primary-container flex items-center gap-3">
                  START A DIALOGUE
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </Link>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 md:opacity-100">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPxfC3hzntq38FeUyrA4jV7OKf3KefihMHOEW3LzKS2OnZMGuwPGSMBgifZhFajXkEkSNIDNtKORRZ-CcDmGpinZjmmIST2-bMZGHwBfv1UE-ePcM1SQUX8qMQu4sWTUS5JdzYUUbNFhLqRoSeWy-L3jbmx3T2c3Z4qGSnNJDlyoMSLgymYmEbSblVn0_UjoZtpY3LsxKajjO9ds9-uN8EDyXY7mtrnEXy8V-gYzyHITCO7PIbPZRohdDCjGq4_aEVsJGJ7Pvb-wk"
                alt="Artisanal woodworker's workshop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Selection (Signature Component) */}
      <section className="mt-20 md:mt-32 bg-surface-container-low py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-headline text-primary mb-2">The Material Edit</h2>
            <p className="text-on-surface-variant font-body">Only the finest grains and stones make the cut.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-4 bg-surface-container-lowest px-6 py-3 rounded-full shadow-sm border border-outline-variant/10">
              <div className="w-10 h-10 rounded-full bg-stone-800 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWrgjlNANQmOQcWWS1r58pUvTFhos87RhuWUAmzir5NQ1iw9M7x6hrJ_uTHRy6mIRY27qL6-7DjuCaIPOEYM4ymY-uY4iapBKH2mpITip034cwwKpQrJfbZgeo7T3tW4j2Rxp8blJQxU2gipHAuyoj4CJhr_MJ00Pl7fIv2Ect6kruiUNAz_fvoqb67Dm0GBFpxSxg6F1qehJVE4sYHhFWErkfE9MAhh0ddyJzlCAlrYRfwTJeAKSGDFt8tYmAHn5PdW1tnIJYyh0"
                  alt="Aged Walnut"
                />
              </div>
              <span className="font-label text-sm uppercase tracking-wider">Aged Walnut</span>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-lowest px-6 py-3 rounded-full shadow-sm border border-outline-variant/10">
              <div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkS8V8FPTtZze5T0Ikf7-zauC-st3HzV7L0BfYlPRrcnsOpQoDyCpXOXjuFkDluGZWD8HE9iDxyuTi_Lbz0yjIb5nHTRabtbQKS0aW8G-x2sctX4AVA8UXNet8fra0aA96YGFMM8b-ZUhyyEkdQQ88oG8PjQCdbCM-mXouXuv2L131uR6rlqva865cqTQuMIBdMwbx5yCHJC69PyM2kyltDIr9n0BtJHBRE8FZnE6K1cPHlT_0lwUwm0WWPNKaF0jH6DypWYiJt-o"
                  alt="Carrara Marble"
                />
              </div>
              <span className="font-label text-sm uppercase tracking-wider">Carrara Marble</span>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-lowest px-6 py-3 rounded-full shadow-sm border border-outline-variant/10">
              <div className="w-10 h-10 rounded-full bg-yellow-800 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuX330tNTeCkUxtjX6T6VVRgVfWKLabJ8MNLNzBiPwYLSwesbGyHpcy1QHq0gWPdEo7Z1IibHajnR-To5DRH_VP1iwPGDSwh_Wep5uCKtBOq9Lb7PQbQtJpJJeYKQHMaFpMmfGs6f_u8fYfscQu5S4VZaVuDphNcWKMlQwKm-0JXH4_E-RjxjADzxQdPLXHnk3vtUzHLrmor5GwLIXbSVmIZx6ahUz48bwST_m6alzu522A95pCocOufiPQS-U0BtpO9bpDDkJ8Fs"
                  alt="Brushed Brass"
                />
              </div>
              <span className="font-label text-sm uppercase tracking-wider">Brushed Brass</span>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-lowest px-6 py-3 rounded-full shadow-sm border border-outline-variant/10">
              <div className="w-10 h-10 rounded-full bg-stone-500 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmATruz3ij5Kk5vbUR0BXyL3uwv-Dr63B8S6kTKsbPv8d7ZjD6rQcL41xrwmBuzFs3yOpSFLjyn189b_fpLc9WTvU2AF-Y6SxFx-oU78jPF5bpWR1ykJl-dnn2tYuZHEz3rhmlBTHBM-9euPbwsHB7Y8lP1rYtjP76HHcx_j55vOipyJW_62LuMiApmyy6Z1dN9Q1K9DgbZi8tBQOK9DK6r5ogwNMhSAe9CJKYpiWZLMY0COuWGrzIyPHkfWyWqp3FTfpcRiyLRZc"
                  alt="Raw Linen"
                />
              </div>
              <span className="font-label text-sm uppercase tracking-wider">Raw Linen</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
