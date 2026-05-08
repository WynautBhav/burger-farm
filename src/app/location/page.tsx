"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useRouter } from "next/navigation";

export default function LocationPage() {
  const router = useRouter();

  return (
    <PhoneShell bg="bg-brand" className="overflow-hidden">
      {/* Background gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_60%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(39,18,0,0.15)_0%,transparent_60%)] z-0" />

      {/* Top Header */}
      <div className="pt-16 pb-8 px-8 z-20 flex flex-col items-center relative text-center">
        <BlurFade delay={0.1} duration={0.5}>
          <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.5}>
          <h1 className="font-display font-black text-white text-[32px] tracking-tight leading-[1.1] mb-4 drop-shadow-sm">
            Find Your nearest<br />Burger Farm.
          </h1>
        </BlurFade>
        
        <BlurFade delay={0.3} duration={0.5}>
          <p className="text-white/90 font-medium text-[15px] leading-relaxed max-w-[260px]">
            We need your location to show you the closest sizzling hot meals.
          </p>
        </BlurFade>
      </div>

      {/* Radar Animation Area */}
      <div className="flex-1 relative flex items-center justify-center z-10 -mt-10 pointer-events-none">
        
        {/* Radar Rings */}
        <div className="absolute w-[300px] h-[300px] border border-white/20 rounded-full animate-pulse-ring opacity-50" style={{ animationDelay: '0s' }} />
        <div className="absolute w-[200px] h-[200px] border border-white/30 rounded-full animate-pulse-ring opacity-60" style={{ animationDelay: '0.5s' }} />
        <div className="absolute w-[100px] h-[100px] border border-white/40 rounded-full animate-pulse-ring opacity-80" style={{ animationDelay: '1s' }} />
        
        {/* Center Target */}
        <div className="absolute w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
               <div className="w-3 h-3 bg-brand rounded-full" />
            </div>
        </div>

        {/* Floating elements (representing stores found) */}
        <BlurFade delay={1.0} duration={0.5} className="absolute -top-10 left-10">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg border border-line/20 transform -rotate-12">🍔</div>
        </BlurFade>
        <BlurFade delay={1.4} duration={0.5} className="absolute top-20 right-8">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg border border-line/20 transform rotate-12">🍟</div>
        </BlurFade>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 inset-x-0 p-8 pt-12 z-30 bg-gradient-to-t from-brand via-brand to-transparent">
        <BlurFade delay={0.6} duration={0.5} direction="up">
          <ShimmerButton
            className="w-full h-14 text-[16px] font-bold shadow-[0_12px_32px_rgba(39,18,0,0.3)] border border-white/20 mb-4"
            shimmerColor="rgba(255,255,255,0.4)"
            background="rgba(255,255,255,1)"
            borderRadius="20px"
            onClick={() => router.push("/outlet")}
          >
            <span className="flex items-center gap-2 text-brand font-bold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
              Share Location
            </span>
          </ShimmerButton>
        </BlurFade>
        
        <BlurFade delay={0.7} duration={0.5} direction="up">
           <button 
             onClick={() => router.push("/outlet")}
             className="w-full py-2 text-[14px] font-bold text-white/80 hover:text-white transition-colors"
           >
             Enter manually instead
           </button>
        </BlurFade>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-20" />
    </PhoneShell>
  );
}
