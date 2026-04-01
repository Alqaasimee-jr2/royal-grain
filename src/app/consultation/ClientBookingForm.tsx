"use client";

import { useState, useEffect } from 'react';

export default function ClientBookingForm() {
  const [projectType, setProjectType] = useState('Full Home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    date: 'Thu, 15th',
    time: '02:00 PM',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*New Royal Grain Consultation Request* 🏛️\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Location:* ${formData.location}\n*Project Type:* ${projectType}\n*Preferred Session:* ${formData.date} at ${formData.time}\n\n*Project Vision:*\n${formData.description}`;
    
    // Phone Number: 09019597944 (Wait, +2349019597944)
    const phoneNumber = "2349019597944";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(waUrl, '_blank');
  };

  const projectTypes = ['Full Home', 'Single Room', 'Custom Furniture', 'Commercial Space'];
  const [dates, setDates] = useState<{ day: string; num: string; active: boolean; fullDateStr: string }[]>([]);

  useEffect(() => {
    const generatedDates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const dateNum = d.getDate().toString();
      
      const j = d.getDate() % 10;
      const k = d.getDate() % 100;
      let suffix = "th";
      if (j == 1 && k != 11) suffix = "st";
      else if (j == 2 && k != 12) suffix = "nd";
      else if (j == 3 && k != 13) suffix = "rd";
      
      const fullDateStr = `${dayName}, ${dateNum}${suffix}`;
      
      // Exclude weekends and next 48 hours for luxury premium waitlist
      const isWeekend = d.getDay() === 0 || d.getDay() === 6;
      const isTooSoon = i < 2; 
      
      generatedDates.push({
        day: dayName,
        num: dateNum,
        active: !isTooSoon && !isWeekend,
        fullDateStr
      });
    }
    setDates(generatedDates);
    
    const firstActive = generatedDates.find(d => d.active);
    if (firstActive) setFormData(prev => ({ ...prev, date: firstActive.fullDateStr }));
  }, []);

  const times = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  return (
    <div className="lg:col-span-7 space-y-16">
      <div>
        <h2 className="text-3xl font-headline text-primary mb-2">Reserve Your Session</h2>
        <p className="text-on-surface-variant font-body">
          Select your preferences below to begin your design journey. Our concierge via WhatsApp will confirm scheduling immediately.
        </p>
      </div>
      <form className="space-y-10" onSubmit={handleSubmit}>
        {/* Project Type Chips */}
        <div>
          <label className="block font-label text-sm text-primary mb-6 uppercase tracking-wider">Project Type</label>
          <div className="flex flex-wrap gap-4">
            {projectTypes.map(type => (
              <button 
                key={type}
                onClick={() => setProjectType(type)}
                className={`px-6 py-3 rounded-full font-body text-sm flex items-center gap-3 transition-all ${projectType === type ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high'}`} 
                type="button"
              >
                <span className={`w-2 h-2 rounded-full ${projectType === type ? 'bg-on-tertiary-container' : 'bg-outline-variant'}`}></span>
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Form Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <input
              required
              className="peer w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors placeholder-transparent"
              id="name"
              placeholder=" "
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label className="absolute left-0 top-4 text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="name">
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              required
              className="peer w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors placeholder-transparent"
              id="email"
              placeholder=" "
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label className="absolute left-0 top-4 text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="email">
              Email Address
            </label>
          </div>
          <div className="relative">
            <input
              required
              className="peer w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors placeholder-transparent"
              id="phone"
              placeholder=" "
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <label className="absolute left-0 top-4 text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="phone">
              Phone Number
            </label>
          </div>
          <div className="relative">
            <select 
              required
              className="peer w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors appearance-none" 
              id="location" 
              value={formData.location}
              onChange={handleInputChange}
            >
              <option disabled value="">Showroom Location</option>
              <option value="Mokola, Ibadan">Mokola, Ibadan</option>
              <option value="Lekki, Lagos">Lekki, Lagos</option>
              <option value="Maitama, Abuja">Maitama, Abuja</option>
            </select>
            <span className="material-symbols-outlined absolute right-0 top-4 text-outline pointer-events-none">expand_more</span>
          </div>
        </div>

        {/* Premium Date/Time Picker */}
        <div className="space-y-6">
          <label className="block font-label text-sm text-primary uppercase tracking-wider">Preferred Consultation Date</label>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
            {dates.map((d) => {
              const fullDateStr = d.fullDateStr;
              const isSelected = formData.date === fullDateStr;
              return (
                <div 
                  key={d.num} 
                  onClick={() => d.active && setFormData(prev => ({...prev, date: fullDateStr}))}
                  className={`p-3 text-center rounded-xl ${!d.active ? 'bg-surface-container-low text-on-surface-variant opacity-40 cursor-not-allowed' : isSelected ? 'bg-primary text-on-primary cursor-pointer shadow-lg shadow-primary/20' : 'bg-surface-container border border-outline-variant cursor-pointer hover:border-primary'}`}
                >
                  <span className="block text-[10px] uppercase">{d.day}</span>
                  <span className="text-sm font-semibold">{d.num}</span>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {times.map(t => (
              <button 
                key={t}
                onClick={() => setFormData(prev => ({...prev, time: t}))}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-body transition-all ${formData.time === t ? 'bg-primary-container text-on-primary-container' : 'border border-outline-variant hover:bg-primary hover:text-on-primary'}`} 
                type="button"
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <textarea
            required
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full bg-surface-container-low border-none rounded-xl p-6 focus:ring-1 focus:ring-primary font-body text-on-surface-variant"
            placeholder="Tell us about your project vision..."
            rows={4}
          ></textarea>
        </div>

        <button className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-headline text-lg tracking-wide hover:opacity-95 transition-all shadow-xl shadow-primary/10 flex justify-center items-center gap-2" type="submit">
          Confirm via WhatsApp
          <span className="material-symbols-outlined">send</span>
        </button>
      </form>
    </div>
  );
}
