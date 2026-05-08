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
    <PhoneShell bg="bg-white" className="overflow-hidden">
      {/* Background gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,86,10,0.05)_0%,transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,86,10,0.08)_0%,transparent_60%)] z-0" />

      {/* Header Area */}
      <div className="pt-8 pb-6 px-8 z-20 flex flex-col items-center relative">
        <BlurFade delay={0.1} duration={0.5}>
          <div className="flex items-center justify-center mb-6">
            <img src="/logo.png" alt="Burger Farm" className="w-24 h-24 object-contain" />
          </div>
        </BlurFade>

        <BlurFade delay={0.15} duration={0.5}>
          <p className="text-[#5A9A1F] font-medium text-[15px] text-center mb-3">
            Welcome to Burger Farm
          </p>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.5}>
          <h1 className="font-display font-light text-brown text-[32px] leading-none mb-5 text-center drop-shadow-sm">
            Farm. Fresh.<br />Delicious.
          </h1>
        </BlurFade>

        <BlurFade delay={0.3} duration={0.5}>
          <p className="text-brown-muted font-medium text-[15px] text-center">
            Tell us a bit about you to get started.
          </p>
        </BlurFade>
      </div>

      {/* Form Area */}
      <div className="flex-1 px-8 pt-4 z-20 flex flex-col gap-6 relative">

        {/* Name Input */}
        <BlurFade delay={0.4} duration={0.5}>
          <div className="space-y-2.5">
            <label className="text-[12px] font-bold text-brand uppercase tracking-widest pl-1">What should we call you?</label>
            <div className="relative">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full h-[56px] bg-secondary border-line/50 text-brown placeholder:text-brown-muted/50 rounded-[20px] px-5 font-bold text-[16px] focus:bg-white focus:border-brand/40 focus:ring-0 transition-all backdrop-blur-sm shadow-inset-soft"
              />
            </div>
          </div>
        </BlurFade>

        {/* Diet Preference */}
        <BlurFade delay={0.5} duration={0.5}>
          <div className="space-y-3">
            <label className="text-[12px] font-bold text-brand uppercase tracking-widest pl-1">Dietary Preference</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setDiet("veg")}
                className={`h-[56px] rounded-[20px] font-bold text-[15px] border-2 transition-all flex items-center justify-center gap-2 ${diet === "veg"
                    ? "bg-white border-brand text-brand shadow-glow"
                    : "bg-secondary border-line/50 text-brown hover:bg-white hover:border-brand/20 backdrop-blur-sm shadow-inset-soft"
                  }`}
              >
                <div className={`w-3 h-3 rounded-sm border ${diet === "veg" ? "border-brand" : "border-brown-muted/40"} flex items-center justify-center`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${diet === "veg" ? "bg-brand" : "bg-transparent"}`} />
                </div>
                Veg
              </button>
              <button
                onClick={() => setDiet("non-veg")}
                className={`h-[56px] rounded-[20px] font-bold text-[15px] border-2 transition-all flex items-center justify-center gap-2 ${diet === "non-veg"
                    ? "bg-brown border-brown text-white shadow-premium"
                    : "bg-secondary border-line/50 text-brown hover:bg-white hover:border-brand/20 backdrop-blur-sm shadow-inset-soft"
                  }`}
              >
                <div className={`w-3 h-3 rounded-sm border ${diet === "non-veg" ? "border-white" : "border-brown-muted/40"} flex items-center justify-center`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${diet === "non-veg" ? "bg-white" : "bg-transparent"}`} />
                </div>
                Non-Veg
              </button>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.6} duration={0.5}>
          <div className="flex items-center gap-3 mt-2 pl-1 cursor-pointer group">
            <div className="w-5 h-5 rounded border-2 border-brand/40 flex items-center justify-center bg-brand/5 group-hover:border-brand transition-colors">
              <svg className="w-3 h-3 text-brand opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-[12px] font-medium text-brown-muted">I agree to the <span className="underline decoration-brand/30 underline-offset-2 text-brand">Terms</span> & <span className="underline decoration-brand/30 underline-offset-2 text-brand">Privacy Policy</span></span>
          </div>
        </BlurFade>
      </div>

      {/* Animated Farm Vector Landscape (Bottom) */}
      <div className="absolute bottom-0 inset-x-0 h-64 z-10 pointer-events-none overflow-hidden opacity-30">
        {/* Sun / Clouds */}
        <div className="absolute top-4 right-10 w-12 h-12 rounded-full bg-brand/20 blur-sm" />
        <div className="absolute top-8 left-1/4 w-20 h-6 rounded-full bg-brand/10 animate-marquee-left opacity-60" style={{ animationDuration: '40s' }} />
        <div className="absolute top-12 left-3/4 w-16 h-5 rounded-full bg-brand/10 animate-marquee-right opacity-40" style={{ animationDuration: '30s' }} />

        {/* Distant Hills */}
        <svg viewBox="0 0 400 150" className="absolute bottom-0 w-[200%] -left-[50%] h-[120px] text-brand/5" preserveAspectRatio="none">
          <path d="M0,150 L0,50 Q100,0 200,60 T400,40 L400,150 Z" fill="currentColor" />
        </svg>

        {/* Middle Ground Hills */}
        <svg viewBox="0 0 400 150" className="absolute bottom-0 w-[150%] -left-[10%] h-[90px] text-brand/10" preserveAspectRatio="none">
          <path d="M0,150 L0,80 Q150,20 250,70 T400,50 L400,150 Z" fill="currentColor" />
        </svg>

        {/* Foreground Vectors (Windmill, Tractor, Plants) */}
        <div className="absolute bottom-0 w-full h-[60px] flex items-end justify-between px-6 opacity-90 pb-2">
          {/* Wheat 1 */}
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="origin-bottom animate-[pulse-ring_3s_infinite_alternate]">
            <path d="M12 40 Q12 20 8 0 M8 10 L14 5 M10 20 L16 15 M11 30 L17 25" stroke="rgba(232,86,10,0.4)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {/* Windmill */}
          <div className="relative w-12 h-20 flex flex-col items-center justify-end -mb-2">
            <div className="absolute top-0 w-10 h-10 animate-[spin_10s_linear_infinite]">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-brand/30 rounded-full -translate-y-1/2" />
              <div className="absolute left-1/2 top-0 h-full w-1 bg-brand/30 rounded-full -translate-x-1/2" />
            </div>
            <div className="w-1.5 h-14 bg-brand/20 rounded-t-sm" />
          </div>
          {/* Tractor */}
          <svg width="40" height="28" viewBox="0 0 40 28" fill="none" className="mb-1 opacity-60 text-brand">
            <path d="M8 24 A 6 6 0 1 0 8 12 A 6 6 0 1 0 8 24 Z" fill="currentColor" />
            <path d="M30 24 A 4 4 0 1 0 30 16 A 4 4 0 1 0 30 24 Z" fill="currentColor" />
            <rect x="12" y="8" width="16" height="12" rx="2" fill="currentColor" />
            <rect x="20" y="2" width="6" height="6" fill="currentColor" />
            <path d="M14 14 L34 14 L34 18" stroke="currentColor" strokeWidth="2" />
          </svg>
          {/* Wheat 2 */}
          <svg width="20" height="30" viewBox="0 0 24 40" fill="none" className="origin-bottom animate-[pulse-ring_4s_infinite_alternate-reverse]">
            <path d="M12 40 Q12 20 16 0 M16 10 L10 5 M14 20 L8 15 M13 30 L7 25" stroke="rgba(232,86,10,0.5)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-0 inset-x-0 p-8 z-30">
        <BlurFade delay={0.8} duration={0.5} direction="up">
          <ShimmerButton
            className="w-full h-14 text-[16px] font-bold shadow-brand-glow border-none"
            shimmerColor="rgba(255,255,255,0.4)"
            background="rgba(232,86,10,1)"
            borderRadius="20px"
            onClick={() => router.push("/home")}
          >
            <span className="flex items-center gap-2 text-white font-bold">
              Let&apos;s Go
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </ShimmerButton>
        </BlurFade>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-brown/10 rounded-full" />
      </div>
    </PhoneShell>
  );
}
