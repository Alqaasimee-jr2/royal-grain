"use client";

import { useState, useEffect } from 'react';

export default function FloatingStatus() {
  const [timeStr, setTimeStr] = useState<string>('');
  
  useEffect(() => {
    // Function to calculate and format Nigerian Time
    const updateTime = () => {
      // 1 hour offset for West Africa Time (WAT / UTC+1)
      // Actually, we can use the browser's Intl formatting specifying the timezone 'Africa/Lagos'
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Lagos',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      setTimeStr(formatter.format(new Date()));
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (!timeStr) return null; // Avoid hydration mismatch by waiting for client render

  return (
    <div className="fixed bottom-6 right-6 z-[60] animate-in fade-in slide-in-from-bottom-5 duration-700 hidden md:flex items-center gap-3 bg-surface/80 backdrop-blur-md border border-outline-variant/30 py-2.5 px-5 rounded-full shadow-lg shadow-black/5">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </div>
      <div className="flex flex-col">
        <span className="font-label text-primary uppercase tracking-[0.2em] text-[8px] leading-tight">Ibadan Atelier</span>
        <span className="font-headline text-on-surface-variant text-xs tracking-tight">Active • {timeStr} WAT</span>
      </div>
    </div>
  );
}
