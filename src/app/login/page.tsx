"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShineBorder } from "@/components/ui/shine-border";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <PhoneShell>
      {/* Top Pattern Area */}
      <div className="relative h-[28%] bg-white flex flex-col items-center justify-center pt-8" style={{ backgroundImage: "radial-gradient(#FFF0E5 2px, transparent 2px)", backgroundSize: "24px 24px" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <BlurFade delay={0.1} duration={0.5}>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-[24px] bg-brand/10 backdrop-blur-md border border-brand/20 flex items-center justify-center mb-5 shadow-[0_8px_32px_rgba(232,86,10,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent" />
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="relative z-10">
                <rect x="12" y="26" width="24" height="8" rx="4" fill="#E8560A" />
                <rect x="10" y="22" width="28" height="5" rx="2.5" fill="#C94208" opacity="0.6" />
                <rect x="13" y="19" width="22" height="4" rx="2" fill="#E8560A" opacity="0.85" />
              </svg>
            </div>
            <h1 className="font-display text-2xl font-black text-brown tracking-widest uppercase mb-1">Burger Farm</h1>
            <p className="text-sm font-medium text-brown-muted italic">Welcome to the Farm</p>
          </div>
        </BlurFade>
      </div>

      {/* Login Card — shadcn Card with ShineBorder */}
      <Card className="flex-1 rounded-t-[40px] rounded-b-none border-0 shadow-float z-10 flex flex-col overflow-hidden relative">
        <ShineBorder shineColor={["#E8560A", "#FFB085", "#E8560A"]} borderWidth={1} duration={10} />
        <CardContent className="flex-1 flex flex-col px-8 pt-10 pb-8 overflow-y-auto">
          <BlurFade delay={0.2} duration={0.5}>
            <h2 className="font-display text-[34px] font-black text-brown leading-tight mb-2 tracking-tight">
              Let&apos;s get you in.
            </h2>
            <p className="text-[15px] text-brown-muted font-medium mb-8">
              Enter your number — we&apos;ll send an OTP.
            </p>
          </BlurFade>

          {/* Phone Input — shadcn Input styled */}
          <BlurFade delay={0.3} duration={0.4}>
            <div className="flex items-center gap-3 bg-secondary border-[1.5px] border-input rounded-2xl p-2.5 shadow-inset-soft focus-within:border-ring focus-within:bg-white focus-within:shadow-[0_8px_24px_rgba(232,86,10,0.15)] transition-all duration-300 mb-5">
              <div className="flex items-center gap-2 pl-3 py-2 pr-4 border-r-2 border-line/60">
                <svg width="24" height="16" viewBox="0 0 20 14" className="rounded-[2px]">
                  <rect width="20" height="14" rx="2" fill="#fff" /><rect width="20" height="4.67" fill="#FF9933" /><rect y="4.67" width="20" height="4.66" fill="#fff" /><rect y="9.33" width="20" height="4.67" fill="#138808" /><circle cx="10" cy="7" r="1.5" fill="#000080" />
                </svg>
                <span className="text-[16px] font-bold text-brown">+91</span>
              </div>
              <Input
                type="tel"
                placeholder="00000 00000"
                className="flex-1 bg-transparent border-none shadow-none outline-none text-[20px] font-bold text-brown font-display tracking-wider placeholder:text-brown-muted/50 h-12 focus-visible:ring-0 p-0"
              />
            </div>
          </BlurFade>

          {/* Trust Badge — shadcn Badge */}
          <BlurFade delay={0.4} duration={0.4}>
            <Badge variant="outline" className="bg-success/5 text-success border-success/10 font-medium text-[13px] w-fit px-3 py-1.5 rounded-full mb-8 gap-2">
              <svg width="14" height="16" viewBox="0 0 11 13" fill="currentColor"><path d="M5.5 0 1 2v4c0 3.31 1.92 6.12 4.5 7C8.08 12.12 10 9.31 10 6V2L5.5 0zm-.5 8.5L3 6.5l.7-.7L5 7.09l2.8-2.79.7.71L5 8.5z" /></svg>
              Secure login. No spam, ever.
            </Badge>
          </BlurFade>

          {/* Send OTP — ShimmerButton */}
          <BlurFade delay={0.5} duration={0.4}>
            <ShimmerButton
              className="w-full h-14 text-[16px] font-bold shadow-brand-glow mb-8"
              shimmerColor="rgba(255,255,255,0.4)"
              background="rgba(232,86,10,1)"
              borderRadius="20px"
              onClick={() => router.push("/preferences")}
            >
              <span className="text-white font-bold">Send OTP</span>
            </ShimmerButton>
          </BlurFade>

          {/* Divider — shadcn Separator */}
          <BlurFade delay={0.6} duration={0.3}>
            <div className="flex items-center gap-4 mb-8">
              <Separator className="flex-1 bg-gradient-to-r from-transparent to-line" />
              <span className="text-[11px] font-bold text-brown-muted/60 uppercase tracking-widest">or</span>
              <Separator className="flex-1 bg-gradient-to-l from-transparent to-line" />
            </div>
          </BlurFade>

          {/* Social Login — shadcn Button variants */}
          <BlurFade delay={0.7} duration={0.4}>
            <div className="flex flex-col gap-3.5 mb-8">
              <Button
                variant="outline"
                className="w-full h-14 rounded-[20px] text-[15px] font-bold gap-3 border-line hover:border-brand/30 hover:shadow-soft"
              >
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" /><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" /><path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" /><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" /></svg>
                Continue with Google
              </Button>
              <Button
                className="w-full h-14 rounded-[20px] text-[15px] font-bold gap-3 bg-brown text-white hover:bg-brown/90 shadow-[0_4px_16px_rgba(39,18,0,0.15)]"
              >
                <svg width="17" height="20" viewBox="0 0 14 17" fill="currentColor"><path d="M11.07 8.76c0-2.28 1.87-3.38 1.96-3.44-1.07-1.55-2.72-1.77-3.31-1.79-1.41-.14-2.75.82-3.46.82-.71 0-1.81-.8-2.98-.78C1.85 3.59.39 4.31-.3 5.79c-1.44 2.49-.37 6.18 1.03 8.2.69.99 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.82-1.01 2.5-2 .79-1.14 1.11-2.25 1.13-2.31-.03-.01-2.17-.86-2.22-3.24zM8.95 1.86C9.53 1.16 9.92.19 9.8 0c-.85.04-1.88.57-2.48 1.26-.55.63-1.02 1.63-.89 2.6.95.07 1.91-.48 2.52-2z" /></svg>
                Continue with Apple
              </Button>
            </div>
          </BlurFade>

          {/* Footer */}
          <div className="mt-auto flex flex-col items-center gap-4 pb-2">
            <Button
              variant="link"
              className="text-[15px] font-bold text-brand hover:text-brand-hover gap-1.5"
              onClick={() => router.push("/preferences")}
            >
              Continue as Guest
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Button>
            <p className="text-[11px] font-medium text-brown-muted/70 text-center max-w-[280px]">
              By continuing you agree to our <span className="text-brown font-bold">Terms</span> & <span className="text-brown font-bold">Privacy</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </PhoneShell>
  );
}
