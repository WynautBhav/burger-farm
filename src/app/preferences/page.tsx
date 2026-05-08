"use client";

import { useState } from "react";
import { PhoneShell } from "@/components/layout/phone-shell";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function PreferencesPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [diet, setDiet] = useState<"veg" | "non-veg" | null>(null);

  return (
    <PhoneShell bg="bg-brand" className="overflow-hidden">
      {/* Background gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(39,18,0,0.15)_0%,transparent_60%)] z-0" />

      {/* Header Area */}
      <div className="pt-16 pb-6 px-8 z-20 flex flex-col items-center relative">
        <BlurFade delay={0.1} duration={0.5}>
          <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg mb-4">
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
              <rect x="12" y="26" width="24" height="8" rx="4" fill="#fff" opacity=".95" />
              <rect x="10" y="22" width="28" height="5" rx="2.5" fill="rgba(255,255,255,0.7)" />
              <rect x="13" y="19" width="22" height="4" rx="2" fill="#fff" opacity=".9" />
              <rect x="11" y="16" width="26" height="4" rx="2" fill="rgba(255,255,255,0.5)" />
            </svg>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.5}>
          <h1 className="font-display font-black text-white text-[32px] tracking-tight leading-none mb-2 text-center drop-shadow-sm">
            Farm. Fresh.<br />Delicious.
          </h1>
        </BlurFade>
        
        <BlurFade delay={0.3} duration={0.5}>
          <p className="text-white/80 font-medium text-[15px] text-center">
            Tell us a bit about you to get started.
          </p>
        </BlurFade>
      </div>

      {/* Form Area */}
      <div className="flex-1 px-8 pt-4 z-20 flex flex-col gap-6 relative">
        
        {/* Name Input */}
        <BlurFade delay={0.4} duration={0.5}>
          <div className="space-y-2.5">
            <label className="text-[12px] font-bold text-white/90 uppercase tracking-widest pl-1">What should we call you?</label>
            <div className="relative">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full h-[56px] bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-[20px] px-5 font-bold text-[16px] focus:bg-white/20 focus:border-white/40 focus:ring-0 transition-all backdrop-blur-sm"
              />
            </div>
          </div>
        </BlurFade>

        {/* Diet Preference */}
        <BlurFade delay={0.5} duration={0.5}>
          <div className="space-y-3">
            <label className="text-[12px] font-bold text-white/90 uppercase tracking-widest pl-1">Dietary Preference</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setDiet("veg")}
                className={`h-[56px] rounded-[20px] font-bold text-[15px] border-2 transition-all flex items-center justify-center gap-2 ${
                  diet === "veg"
                    ? "bg-white border-white text-brand shadow-[0_4px_16px_rgba(39,18,0,0.15)]"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/15 backdrop-blur-sm"
                }`}
              >
                <div className={`w-3 h-3 rounded-sm border ${diet === "veg" ? "border-brand" : "border-white/60"} flex items-center justify-center`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${diet === "veg" ? "bg-brand" : "bg-transparent"}`} />
                </div>
                Veg
              </button>
              <button
                onClick={() => setDiet("non-veg")}
                className={`h-[56px] rounded-[20px] font-bold text-[15px] border-2 transition-all flex items-center justify-center gap-2 ${
                  diet === "non-veg"
                    ? "bg-brown border-brown text-white shadow-[0_4px_16px_rgba(39,18,0,0.25)]"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/15 backdrop-blur-sm"
                }`}
              >
                <div className={`w-3 h-3 rounded-sm border ${diet === "non-veg" ? "border-white" : "border-white/60"} flex items-center justify-center`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${diet === "non-veg" ? "bg-white" : "bg-transparent"}`} />
                </div>
                Non-Veg
              </button>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.6} duration={0.5}>
           <div className="flex items-center gap-3 mt-2 pl-1 cursor-pointer group">
              <div className="w-5 h-5 rounded border-2 border-white/40 flex items-center justify-center bg-white/10 group-hover:border-white transition-colors">
                <svg className="w-3 h-3 text-white opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-[12px] font-medium text-white/80">I agree to the <span className="underline decoration-white/30 underline-offset-2">Terms</span> & <span className="underline decoration-white/30 underline-offset-2">Privacy Policy</span></span>
           </div>
        </BlurFade>
      </div>

      {/* Animated Farm Vector Landscape (Bottom) */}
      <div className="absolute bottom-0 inset-x-0 h-64 z-10 pointer-events-none overflow-hidden">
        {/* Sun / Clouds */}
        <div className="absolute top-4 right-10 w-12 h-12 rounded-full bg-white/20 blur-sm" />
        <div className="absolute top-8 left-1/4 w-20 h-6 rounded-full bg-white/10 animate-marquee-left opacity-60" style={{ animationDuration: '40s' }} />
        <div className="absolute top-12 left-3/4 w-16 h-5 rounded-full bg-white/10 animate-marquee-right opacity-40" style={{ animationDuration: '30s' }} />

        {/* Distant Hills */}
        <svg viewBox="0 0 400 150" className="absolute bottom-0 w-[200%] -left-[50%] h-[120px] text-white/5" preserveAspectRatio="none">
           <path d="M0,150 L0,50 Q100,0 200,60 T400,40 L400,150 Z" fill="currentColor" />
        </svg>

        {/* Middle Ground Hills */}
        <svg viewBox="0 0 400 150" className="absolute bottom-0 w-[150%] -left-[10%] h-[90px] text-white/10" preserveAspectRatio="none">
           <path d="M0,150 L0,80 Q150,20 250,70 T400,50 L400,150 Z" fill="currentColor" />
        </svg>

        {/* Foreground Vectors (Windmill, Tractor, Plants) */}
        <div className="absolute bottom-0 w-full h-[60px] flex items-end justify-between px-6 opacity-90 pb-2">
            {/* Wheat 1 */}
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="origin-bottom animate-[pulse-ring_3s_infinite_alternate]">
              <path d="M12 40 Q12 20 8 0 M8 10 L14 5 M10 20 L16 15 M11 30 L17 25" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {/* Windmill */}
            <div className="relative w-12 h-20 flex flex-col items-center justify-end -mb-2">
              <div className="absolute top-0 w-10 h-10 animate-[spin_10s_linear_infinite]">
                 <div className="absolute top-1/2 left-0 w-full h-1 bg-white/30 rounded-full -translate-y-1/2" />
                 <div className="absolute left-1/2 top-0 h-full w-1 bg-white/30 rounded-full -translate-x-1/2" />
              </div>
              <div className="w-1.5 h-14 bg-white/20 rounded-t-sm" />
            </div>
            {/* Tractor */}
            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" className="mb-1 opacity-60">
              <path d="M8 24 A 6 6 0 1 0 8 12 A 6 6 0 1 0 8 24 Z" fill="currentColor" />
              <path d="M30 24 A 4 4 0 1 0 30 16 A 4 4 0 1 0 30 24 Z" fill="currentColor" />
              <rect x="12" y="8" width="16" height="12" rx="2" fill="currentColor" />
              <rect x="20" y="2" width="6" height="6" fill="currentColor" />
              <path d="M14 14 L34 14 L34 18" stroke="currentColor" strokeWidth="2" />
            </svg>
            {/* Wheat 2 */}
            <svg width="20" height="30" viewBox="0 0 24 40" fill="none" className="origin-bottom animate-[pulse-ring_4s_infinite_alternate-reverse]">
              <path d="M12 40 Q12 20 16 0 M16 10 L10 5 M14 20 L8 15 M13 30 L7 25" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-0 inset-x-0 p-8 z-30">
        <BlurFade delay={0.8} duration={0.5} direction="up">
          <ShimmerButton
            className="w-full h-14 text-[16px] font-bold shadow-[0_12px_32px_rgba(39,18,0,0.3)] border border-white/20"
            shimmerColor="rgba(255,255,255,0.4)"
            background="rgba(255,255,255,1)"
            borderRadius="20px"
            onClick={() => router.push("/location")}
          >
            <span className="flex items-center gap-2 text-brand font-bold">
              Let&apos;s Go
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </ShimmerButton>
        </BlurFade>
        
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
      </div>
    </PhoneShell>
  );
}
