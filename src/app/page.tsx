"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { Ripple } from "@/components/ui/ripple";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  return (
    <PhoneShell bg="bg-brand" className="items-center justify-center">
      {/* Mesh Gradient Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,176,133,0.25)_0%,transparent_60%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(39,18,0,0.2)_0%,transparent_60%)] z-0" />

      {/* Magic UI Ripple – animated concentric rings behind logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center [--foreground:rgba(255,255,255,0.6)]">
        <Ripple mainCircleSize={120} mainCircleOpacity={0.15} numCircles={6} />
      </div>

      {/* Center Content — staggered BlurFade entrance */}
      <div className="relative z-10 flex flex-col items-center">
        <BlurFade delay={0.1} duration={0.6}>
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border-t border-white/30 flex items-center justify-center shadow-[0_12px_40px_rgba(39,18,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.2)] mb-8">
            <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
              <rect x="10" y="27" width="28" height="9" rx="4.5" fill="#fff" opacity=".95" />
              <rect x="8" y="22" width="32" height="6" rx="3" fill="rgba(255,255,255,0.7)" />
              <rect x="11" y="18" width="26" height="5" rx="2.5" fill="#fff" opacity=".9" />
              <rect x="9" y="14" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.5)" />
            </svg>
          </div>
        </BlurFade>

        <BlurFade delay={0.3} duration={0.7}>
          <h1 className="font-display text-[64px] font-black text-white leading-[0.85] tracking-tighter text-center drop-shadow-[0_4px_16px_rgba(39,18,0,0.2)]">
            BURGER<br />FARM
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} duration={0.6}>
          <svg className="mt-6 mb-4 opacity-80 w-24 h-3" viewBox="0 0 100 10">
            <path d="M0 5 Q12 0 25 5 T50 5 T75 5 T100 5" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </BlurFade>

        <BlurFade delay={0.7} duration={0.5}>
          <p className="font-display italic text-white/95 text-xl tracking-wide">
            Farm-Fresh. Always.
          </p>
        </BlurFade>
      </div>

      {/* Bottom CTA — Magic UI ShimmerButton */}
      <div className="absolute bottom-20 inset-x-8 z-20">
        <BlurFade delay={1.0} duration={0.6} direction="up">
          <ShimmerButton
            className="w-full h-14 text-[16px] font-bold shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
            shimmerColor="rgba(255,255,255,0.3)"
            shimmerSize="0.08em"
            background="rgba(255,255,255,0.15)"
            borderRadius="20px"
            onClick={() => router.push("/onboarding")}
          >
            <span className="text-white font-bold tracking-wide">Tap to Continue</span>
          </ShimmerButton>
        </BlurFade>
      </div>

      {/* Bottom home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-white/30 rounded-full z-20" />
    </PhoneShell>
  );
}
