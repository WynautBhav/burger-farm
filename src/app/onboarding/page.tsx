"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

// Food SVGs for the marquee
const icons = {
  burger: <svg viewBox="0 0 40 40" className="w-12 h-12"><path d="M6 24Q6 14 20 14Q34 14 34 24L34 26Q34 28 32 28L8 28Q6 28 6 26Z" fill="#F5A623"/><path d="M5 28Q15 24 25 28Q35 24 40 28" stroke="#5A9A1F" strokeWidth="3" fill="none" strokeLinecap="round"/><rect x="4" y="32" width="32" height="6" rx="2" fill="#6B2500"/><rect x="6" y="40" width="28" height="6" rx="2" fill="#F5A623"/></svg>,
  fries: <svg viewBox="0 0 40 40" className="w-12 h-12"><path d="M12 20L8 42L32 42L28 20Z" fill="#E8560A"/><rect x="14" y="8" width="4" height="20" rx="1" fill="#FFC107"/><rect x="22" y="6" width="4" height="20" rx="1" fill="#FFC107"/><rect x="18" y="10" width="4" height="18" rx="1" fill="#F5A623"/><rect x="26" y="12" width="4" height="16" rx="1" fill="#F5A623"/><rect x="10" y="14" width="4" height="14" rx="1" fill="#F5A623"/><path d="M12 24Q20 28 28 24" fill="none" stroke="#C94208" strokeWidth="2"/></svg>,
  drink: <svg viewBox="0 0 40 40" className="w-12 h-12"><path d="M14 16L16 42L24 42L26 16Z" fill="#fff" stroke="#EBE1D6" strokeWidth="2"/><path d="M12 14L28 14" stroke="#fff" strokeWidth="4" strokeLinecap="round"/><path d="M22 12L24 4" stroke="#E8560A" strokeWidth="3" strokeLinecap="round"/><rect x="16" y="24" width="8" height="10" rx="4" fill="#E8560A"/></svg>,
  wrap: <svg viewBox="0 0 40 40" className="w-12 h-12"><path d="M10 30Q10 10 30 10Q34 20 30 34Q20 34 10 30Z" fill="#FBF7F2" stroke="#EBE1D6" strokeWidth="2"/><path d="M14 26Q14 14 26 14" stroke="#5A9A1F" strokeWidth="4" strokeLinecap="round"/><path d="M18 30Q18 18 28 18" stroke="#E8560A" strokeWidth="3" strokeLinecap="round"/></svg>,
  box: <svg viewBox="0 0 40 40" className="w-12 h-12"><rect x="10" y="20" width="20" height="20" rx="2" fill="#E8560A"/><path d="M6 20L20 8L34 20Z" fill="#F5A623"/></svg>,
  shake: <svg viewBox="0 0 40 40" className="w-12 h-12"><path d="M14 24L16 42L24 42L26 24Z" fill="#FFB085"/><path d="M12 24L28 24" stroke="#E8560A" strokeWidth="3" strokeLinecap="round"/><path d="M14 22Q20 10 26 22" fill="#fff"/></svg>
};

const row1 = [icons.burger, icons.fries, icons.drink, icons.wrap, icons.box, icons.shake, icons.burger, icons.fries];
const row2 = [icons.box, icons.drink, icons.burger, icons.shake, icons.fries, icons.wrap, icons.box, icons.drink];

export default function OnboardingPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto">
      {/* Left: Current Onboarding */}
      <PhoneShell bg="bg-white">
      {/* Top Header */}
      <div className="pt-8 pb-8 flex flex-col items-center z-10 bg-white relative">
        <BlurFade delay={0.1} duration={0.5}>
          <div className="flex items-center justify-center mb-6">
            <img src="/logo.png" alt="Burger Farm" className="w-24 h-24 object-contain" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.5} className="text-center px-4">
          <h1 className="font-display text-[32px] leading-tight font-black text-brown mb-3 tracking-tight">Welcome to the official Burger Farm app</h1>
          <p className="text-[16px] font-medium text-brown-muted">Farm-fresh cravings, delivered fast.</p>
        </BlurFade>
      </div>

      {/* Marquee Area */}
      <div className="flex-1 relative flex flex-col justify-center overflow-hidden py-4 -mt-4 bg-white z-0">
        {/* Row 1 - Left */}
        <BlurFade delay={0.3} duration={0.5} className="mb-6">
          <div className="flex w-[200%] animate-marquee-left gap-6 pl-6">
            {row1.map((icon, i) => (
              <div key={i} className="w-24 h-24 rounded-full bg-secondary shrink-0 flex items-center justify-center shadow-soft border border-line/40">
                {icon}
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Row 2 - Right */}
        <BlurFade delay={0.4} duration={0.5}>
          <div className="flex w-[200%] animate-marquee-right gap-6 pl-6">
            {row2.map((icon, i) => (
              <div key={i} className="w-24 h-24 rounded-full bg-secondary shrink-0 flex items-center justify-center shadow-soft border border-line/40">
                {icon}
              </div>
            ))}
          </div>
        </BlurFade>
        
        {/* Edge Gradients */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* Bottom Auth CTAs */}
      <div className="px-8 pb-12 pt-6 bg-white z-20 flex flex-col gap-4 relative">
        <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-transparent to-white -translate-y-full pointer-events-none" />

        <BlurFade delay={0.5} duration={0.5} direction="up">
          <ShimmerButton
            className="w-full h-14 text-[16px] font-bold shadow-brand-glow"
            shimmerColor="rgba(255,255,255,0.4)"
            background="rgba(232,86,10,1)"
            borderRadius="20px"
            onClick={() => router.push("/preferences")}
          >
            <span className="flex items-center gap-2 text-white font-bold">
              Continue with Phone
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </span>
          </ShimmerButton>
        </BlurFade>

        <BlurFade delay={0.6} duration={0.5} direction="up">
          <div className="flex items-center gap-4 py-1">
            <Separator className="flex-1 bg-line" />
            <span className="text-[11px] font-bold text-brown-muted/60 uppercase tracking-widest">or</span>
            <Separator className="flex-1 bg-line" />
          </div>
        </BlurFade>

        <BlurFade delay={0.7} duration={0.5} direction="up">
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 h-14 rounded-[20px] text-[15px] font-bold gap-3 border-line hover:border-brand/30 hover:shadow-soft"
              onClick={() => router.push("/preferences")}
            >
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" /><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" /><path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" /><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" /></svg>
              Google
            </Button>
            <Button
              className="flex-1 h-14 rounded-[20px] text-[15px] font-bold gap-3 bg-brown text-white hover:bg-brown/90 shadow-[0_4px_16px_rgba(39,18,0,0.15)]"
              onClick={() => router.push("/preferences")}
            >
              <svg width="17" height="20" viewBox="0 0 14 17" fill="currentColor"><path d="M11.07 8.76c0-2.28 1.87-3.38 1.96-3.44-1.07-1.55-2.72-1.77-3.31-1.79-1.41-.14-2.75.82-3.46.82-.71 0-1.81-.8-2.98-.78C1.85 3.59.39 4.31-.3 5.79c-1.44 2.49-.37 6.18 1.03 8.2.69.99 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.82-1.01 2.5-2 .79-1.14 1.11-2.25 1.13-2.31-.03-.01-2.17-.86-2.22-3.24zM8.95 1.86C9.53 1.16 9.92.19 9.8 0c-.85.04-1.88.57-2.48 1.26-.55.63-1.02 1.63-.89 2.6.95.07 1.91-.48 2.52-2z" /></svg>
              Apple
            </Button>
          </div>
        </BlurFade>
        
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-brown/10 rounded-full" />
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
         <source src="/onboarding.mp4" type="video/mp4" />
      </video>
    </PhoneShell>
    </div>
  );
}
