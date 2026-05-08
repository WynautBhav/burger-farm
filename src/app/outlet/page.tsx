"use client";

import { useState } from "react";
import { PhoneShell } from "@/components/layout/phone-shell";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const stores = [
  { id: 1, name: "Vaishali Nagar", address: "Queens Road, Jaipur", distance: "0.5 mi", status: "Closed", lat: 50, lng: 50 },
  { id: 2, name: "C Scheme Jaipur", address: "5A Sardar Patel Marg, Jaipur", distance: "2.7 mi", status: "Closed", lat: 30, lng: 70 },
  { id: 3, name: "Raja Park", address: "3 Motidungri Marg, Adarsh Nagar", distance: "4.2 mi", status: "Closed", lat: 70, lng: 30 },
  { id: 4, name: "Malviya Nagar", address: "Service Road, Jaipur", distance: "4.7 mi", status: "Closed", lat: 80, lng: 80 },
  { id: 5, name: "Jaipur Arrivals", address: "Airport Road, Jaipur", distance: "6.2 mi", status: "Open", lat: 90, lng: 40 },
];

export default function OutletPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"pickup" | "delivery">("pickup");
  const [selectedStore, setSelectedStore] = useState<number | null>(5);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto">
      {/* Left: Current Outlet Selection */}
      <PhoneShell bg="bg-white">
      {/* Top Header */}
      <header className="pt-12 pb-4 px-4 bg-white z-20 flex flex-col gap-4 border-b border-line/30">
        <div className="flex items-center justify-between">
          {/* Search Icon */}
          <Button variant="ghost" size="icon" className="w-10 h-10 text-brown hover:bg-secondary rounded-full" onClick={() => router.back()}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </Button>

          {/* Toggle Pill */}
          <div className="flex bg-white rounded-full border border-line/50 p-1 shadow-sm w-[200px]">
            <button
              className={`flex-1 rounded-full py-1.5 text-[13px] font-bold transition-colors ${mode === "pickup" ? "bg-brand text-white" : "text-brown-muted hover:bg-secondary"}`}
              onClick={() => setMode("pickup")}
            >
              Pickup
            </button>
            <button
              className={`flex-1 rounded-full py-1.5 text-[13px] font-bold transition-colors ${mode === "delivery" ? "bg-brand text-white" : "text-brown-muted hover:bg-secondary"}`}
              onClick={() => setMode("delivery")}
            >
              Delivery
            </button>
          </div>

          {/* Skip */}
          <button className="text-[14px] font-bold text-brand px-2" onClick={() => router.push("/home")}>
            Skip
          </button>
        </div>
      </header>

      {/* Map Area (~40% height) */}
      <div className="relative h-[40%] bg-[#E5E3DF] overflow-hidden z-0 border-b border-line/40">
        {/* Fake Map Background Pattern */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMjBMNDAgMjBNMjAgMEwyMCA0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')", backgroundSize: '60px 60px' }} />
        
        {/* Fake Map Features (Roads, Parks) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
           <path d="M-50 100 Q 150 50 450 150 M-50 200 Q 200 300 450 200" fill="none" stroke="white" strokeWidth="8" />
           <path d="M100 -50 L 150 450 M 300 -50 L 250 450" fill="none" stroke="white" strokeWidth="6" />
           <path d="M 50 50 Q 100 100 50 150 Z" fill="#D4E3C9" opacity="0.6" />
           <path d="M 300 200 Q 350 250 400 150 Z" fill="#D4E3C9" opacity="0.6" />
        </svg>

        {/* Store Pins */}
        {stores.map(store => (
          <div key={store.id} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer" style={{ left: `${store.lng}%`, top: `${store.lat}%` }} onClick={() => setSelectedStore(store.id)}>
             {selectedStore === store.id ? (
                // Selected Pin (Orange with white center)
                <div className="w-6 h-6 bg-brand rounded-full border-2 border-white shadow-md flex items-center justify-center z-10 scale-125 transition-transform">
                   <div className="w-2 h-2 bg-white rounded-full" />
                </div>
             ) : (
                // Unselected Pin (Black dot)
                <div className="w-3.5 h-3.5 bg-black/80 rounded-full border border-white shadow-sm transition-transform hover:scale-110" />
             )}
          </div>
        ))}

        {/* User Location Dot */}
        <div className="absolute left-[45%] top-[55%] w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full bg-blue-500 animate-ping opacity-50" />
        </div>

        {/* Map Controls */}
        <div className="absolute right-4 bottom-20 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-brown hover:bg-secondary">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-brown hover:bg-secondary">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
            </button>
        </div>

        {/* Filter Chip */}
        <div className="absolute right-4 bottom-6">
            <button className="px-5 py-2.5 bg-white rounded-full shadow-md text-[14px] font-bold text-brand flex items-center gap-2">
               Filter
            </button>
        </div>
      </div>

      {/* Store List (~60% height) */}
      <div className="flex-1 bg-white overflow-y-auto z-10 relative">
        <div className="flex flex-col">
          {stores.map((store, i) => {
            const isSelected = selectedStore === store.id;
            return (
              <BlurFade key={store.id} delay={0.1 + i * 0.05} duration={0.4}>
                <div 
                  className={`border-b border-line/40 cursor-pointer transition-colors ${isSelected ? 'bg-secondary/40 border-brand border-x-2 border-y-0' : 'hover:bg-secondary/20'} px-6 py-5`}
                  onClick={() => setSelectedStore(store.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      {/* Status Badge */}
                      <div className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold mb-2 ${store.status === "Closed" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"}`}>
                        {store.status}
                      </div>
                      <h3 className="text-[15px] font-bold text-brown mb-1">{store.name}</h3>
                      <p className="text-[13px] text-brown-muted/80">{store.address}</p>
                      <p className="text-[12px] font-medium text-brown-muted mt-1">{store.distance} ·</p>
                    </div>
                    {/* Info Icon */}
                    <button className="text-brown-muted/50 hover:text-brown-muted p-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    </button>
                  </div>

                  {/* Selected State Order CTA */}
                  {isSelected && (
                    <div className="mt-4 flex justify-end">
                      <button 
                         className="bg-brand text-white font-bold text-[14px] px-6 py-2.5 rounded-full shadow-md hover:bg-brand-hover transition-colors flex items-center gap-2"
                         onClick={(e) => { e.stopPropagation(); router.push("/home"); }}
                      >
                         Order here
                      </button>
                    </div>
                  )}
                </div>
              </BlurFade>
            );
          })}
          {/* Bottom Padding */}
          <div className="h-24" />
        </div>
      </div>
    </PhoneShell>

    {/* Right: New Video Screen */}
    <PhoneShell bg="bg-black" className="relative overflow-hidden shadow-2xl">
      <video 
         className="absolute inset-0 w-full h-full object-cover" 
         autoPlay 
         muted 
         loop 
         playsInline
      >
         <source src="/store.mp4" type="video/mp4" />
      </video>
    </PhoneShell>
    </div>
  );
}
