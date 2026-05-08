"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { Ripple } from "@/components/ui/ripple";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { useRouter } from "next/navigation";

export default function LocationPage() {
  const router = useRouter();

  return (
    <PhoneShell bg="bg-brand" className="bg-[radial-gradient(rgba(255,255,255,0.08)_2px,transparent_2px)] bg-[length:32px_32px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none" />

      {/* Magic UI Ripple — location radar effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center [--foreground:rgba(255,255,255,0.5)]" style={{ top: "-10%" }}>
        <Ripple mainCircleSize={100} mainCircleOpacity={0.12} numCircles={7} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 z-10 pb-52">
        {/* Location Pin */}
        <BlurFade delay={0.2} duration={0.6}>
          <div className="relative mb-10">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-glow">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.4} duration={0.6}>
          <h2 className="font-display text-[36px] font-black text-white leading-tight tracking-tight text-center mb-4 drop-shadow-md">
            Find your nearest<br />Burger Farm
          </h2>
        </BlurFade>

        <BlurFade delay={0.6} duration={0.5}>
          <p className="text-[15px] font-medium text-white/80 text-center leading-relaxed max-w-[280px]">
            We&apos;ll show you the closest outlet and estimated delivery time.
          </p>
        </BlurFade>
      </div>

      {/* Bottom CTAs */}
      <div className="absolute bottom-0 inset-x-0 p-6 pb-10 flex flex-col gap-4 z-20 bg-gradient-to-t from-brand via-brand/95 to-transparent pt-16">
        <BlurFade delay={0.8} duration={0.5} direction="up">
          <PulsatingButton
            className="w-full h-14 text-[16px] font-bold rounded-[20px] bg-white text-brand"
            pulseColor="rgba(255,255,255,0.5)"
            duration="2s"
            onClick={() => router.push("/outlet")}
          >
            <span className="flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
              Allow Location
            </span>
          </PulsatingButton>
        </BlurFade>

        <BlurFade delay={1.0} duration={0.4} direction="up">
          <ShimmerButton
            className="w-full h-14 text-[16px] font-bold"
            shimmerColor="rgba(255,255,255,0.2)"
            background="rgba(255,255,255,0.1)"
            borderRadius="20px"
            onClick={() => router.push("/address")}
          >
            <span className="text-white font-bold">Enter manually</span>
          </ShimmerButton>
        </BlurFade>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-20" />
    </PhoneShell>
  );
}
