"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AddressPage() {
  const router = useRouter();

  return (
    <PhoneShell bg="bg-white">
      {/* Header */}
      <header className="pt-12 pb-6 px-6 bg-white z-20 shadow-soft relative rounded-b-[32px] border-b border-line/30">
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" size="icon" className="w-10 h-10 rounded-full border-line/50 bg-secondary hover:bg-line/20" onClick={() => router.back()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </Button>
          <h1 className="font-display font-black tracking-widest text-[16px] text-brown uppercase">Delivery Address</h1>
          <div className="w-10" />
        </div>

        {/* Search — shadcn Input */}
        <BlurFade delay={0.1} duration={0.4}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8560A" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
            <Input
              type="text"
              placeholder="Search area, street, landmark..."
              className="w-full bg-secondary border-[1.5px] border-input focus:border-ring focus:bg-white rounded-[20px] h-14 pl-12 pr-14 text-[14px] font-bold text-brown shadow-inset-soft focus:shadow-[0_8px_24px_rgba(232,86,10,0.12)] focus-visible:ring-0 transition-all duration-300"
            />
            <Button size="icon" className="absolute inset-y-2 right-2 w-10 h-10 bg-brand rounded-xl text-white hover:bg-brand-hover shadow-glow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-3.86 0-7 3.14-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
            </Button>
          </div>
        </BlurFade>
      </header>

      {/* Map Area */}
      <div className="flex-1 relative -mt-8 z-10 overflow-hidden" style={{ backgroundColor: "#F0EAE1", backgroundImage: "radial-gradient(#D5CFC6 2px, transparent 2px), radial-gradient(#D5CFC6 2px, transparent 2px)", backgroundSize: "32px 32px", backgroundPosition: "0 0, 16px 16px" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-brand rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>

        {/* Location card overlay */}
        <BlurFade delay={0.3} duration={0.5} direction="up">
          <div className="absolute bottom-6 inset-x-6">
            <Card className="border-white/50 bg-white/90 backdrop-blur-md shadow-soft">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8560A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand tracking-widest uppercase mb-1">Selected Location</p>
                  <p className="text-sm font-medium leading-snug text-brown">42, Golf Link Road, near Metro Station</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </BlurFade>
      </div>

      {/* Address List — shadcn Card for each */}
      <Card className="rounded-t-[32px] rounded-b-none border-0 shadow-float pt-6 px-6 pb-28 z-30 relative -mt-5">
        <div className="w-12 h-1.5 bg-line rounded-full mx-auto mb-6" />
        <CardContent className="p-0">
          <BlurFade delay={0.4} duration={0.4}>
            <h3 className="text-[10px] font-black text-brown-muted uppercase tracking-[0.2em] mb-4 ml-1">Recent</h3>
            <Card className="border-line/40 hover:border-brand/30 hover:bg-secondary shadow-sm hover:shadow-premium transition-all duration-300 cursor-pointer group active:scale-[0.97]" onClick={() => router.push("/address/detail")}>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="w-11 h-11 rounded-full bg-cream border border-line/50 flex items-center justify-center group-hover:bg-brand group-hover:text-white text-brown transition-colors flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-bold text-brown mb-0.5 group-hover:text-brand transition-colors">Home <span className="font-medium text-brown-muted/70">— C-12, Greater Kailash</span></p>
                  <p className="text-[11px] text-brown-muted/60 font-bold uppercase tracking-wider">Yesterday, 7:30 PM • 5 orders</p>
                </div>
              </CardContent>
            </Card>
          </BlurFade>

          <BlurFade delay={0.5} duration={0.4}>
            <h3 className="text-[10px] font-black text-brown-muted uppercase tracking-[0.2em] mb-4 ml-1 mt-6">Saved</h3>
            <Card className="border-line/40 hover:border-brand/30 hover:bg-secondary shadow-sm hover:shadow-premium transition-all duration-300 cursor-pointer group active:scale-[0.97]" onClick={() => router.push("/address/detail")}>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="w-11 h-11 rounded-full bg-cream border border-line/50 flex items-center justify-center group-hover:bg-brand group-hover:text-white text-brown transition-colors flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /></svg>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-bold text-brown mb-0.5 group-hover:text-brand transition-colors">Work <span className="font-medium text-brown-muted/70">— Cyber City, Phase 2</span></p>
                  <p className="text-[11px] text-brown-muted/60 font-bold uppercase tracking-wider">Office address • 12 orders</p>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </CardContent>
      </Card>

      {/* Sticky CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-8 bg-gradient-to-t from-white via-white/95 to-transparent z-40">
        <BlurFade delay={0.7} duration={0.4} direction="up">
          <ShimmerButton
            className="w-full h-14 text-[16px] font-bold shadow-brand-glow"
            shimmerColor="rgba(255,255,255,0.4)"
            background="rgba(232,86,10,1)"
            borderRadius="20px"
            onClick={() => router.push("/address/detail")}
          >
            <span className="flex items-center gap-2 text-white font-bold">
              Confirm Location
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </ShimmerButton>
        </BlurFade>
      </div>
    </PhoneShell>
  );
}
