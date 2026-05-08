"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const features = [
  { icon: "🌿", title: "Farm Fresh", desc: "100% real ingredients" },
  { icon: "⚡", title: "18 Min Avg", desc: "Lightning fast delivery" },
  { icon: "🎁", title: "Free ₹199+", desc: "Free delivery on orders" },
];

export default function OnboardingPage() {
  const router = useRouter();

  return (
    <PhoneShell bg="bg-brand">
      {/* Top Brand Area */}
      <div className="relative h-[42%] flex flex-col items-center justify-center overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,176,133,0.2)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(39,18,0,0.15)_0%,transparent_60%)]" />

        {/* Skip Button — shadcn Button ghost variant */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-12 right-6 z-20 text-[11px] font-bold tracking-widest text-white/90 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:text-white uppercase rounded-full px-5 h-9"
          onClick={() => router.push("/login")}
        >
          Skip
        </Button>

        {/* Logo */}
        <BlurFade delay={0.1} duration={0.5}>
          <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl mb-4">
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
              <rect x="12" y="26" width="24" height="8" rx="4" fill="#fff" opacity=".9" />
              <rect x="10" y="22" width="28" height="5" rx="2.5" fill="rgba(255,255,255,0.6)" />
              <rect x="13" y="19" width="22" height="4" rx="2" fill="#fff" opacity=".85" />
              <rect x="11" y="16" width="26" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
            </svg>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.5}>
          <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm font-bold tracking-[0.2em] text-[10px] uppercase mb-2">
            EST. 2024
          </Badge>
        </BlurFade>

        <BlurFade delay={0.3} duration={0.5}>
          <h1 className="font-display text-white text-[22px] font-black tracking-[0.2em] drop-shadow-md">BURGER FARM</h1>
        </BlurFade>
      </div>

      {/* Bottom Sheet — uses shadcn Card */}
      <Card className="flex-1 rounded-t-[40px] rounded-b-none border-0 shadow-float z-10 flex flex-col overflow-hidden">
        <CardContent className="flex-1 flex flex-col p-8 pb-10">
          {/* Progress Dots */}
          <BlurFade delay={0.4} duration={0.4}>
            <div className="flex gap-1.5 mb-8">
              <div className="w-6 h-1.5 rounded-full bg-brand" />
              <div className="w-1.5 h-1.5 rounded-full bg-line" />
              <div className="w-1.5 h-1.5 rounded-full bg-line" />
            </div>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.5} duration={0.5}>
            <h2 className="font-display text-[38px] font-black text-brown leading-[1.05] tracking-tight mb-4">
              Real Burgers.<br />
              <span className="text-brand relative">
                Real Fast.
                <div className="absolute -bottom-1 left-0 w-full h-2 bg-brand/10 rounded-full -z-10" />
              </span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.6} duration={0.4}>
            <p className="text-[15px] font-medium text-brown-muted leading-relaxed mb-8">
              Farm-fresh ingredients. Made to order.<br />Delivered while it&apos;s still sizzling.
            </p>
          </BlurFade>

          <Separator className="bg-line/40 mb-6" />

          {/* Feature Cards — each is a shadcn Card */}
          <div className="flex items-stretch gap-3 mb-auto">
            {features.map((f, i) => (
              <BlurFade key={f.title} delay={0.7 + i * 0.1} duration={0.4}>
                <Card className="flex-1 border-line/50 shadow-sm bg-cream/40 hover:shadow-premium hover:border-brand/30 transition-all duration-300 cursor-pointer group">
                  <CardContent className="flex flex-col items-center p-3.5 pt-4">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center mb-2.5 shadow-[0_2px_8px_rgba(39,18,0,0.06)] border border-line/30 group-hover:bg-brand group-hover:text-white transition-colors text-lg">
                      {f.icon}
                    </div>
                    <span className="text-[10px] font-black text-brown uppercase tracking-widest text-center">{f.title}</span>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>

          {/* CTA — Magic UI ShimmerButton with brand color */}
          <BlurFade delay={1.0} duration={0.5} direction="up">
            <ShimmerButton
              className="w-full h-14 mt-6 text-[16px] font-bold shadow-brand-glow"
              shimmerColor="rgba(255,255,255,0.4)"
              shimmerSize="0.06em"
              background="rgba(232,86,10,1)"
              borderRadius="20px"
              onClick={() => router.push("/login")}
            >
              <span className="flex items-center gap-2 text-white font-bold">
                Grab Your Meal
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </span>
            </ShimmerButton>
          </BlurFade>
        </CardContent>
      </Card>
    </PhoneShell>
  );
}
