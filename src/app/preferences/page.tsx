"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const cravings = [
  { emoji: "🍔", label: "Burgers", defaultChecked: true },
  { emoji: "🍟", label: "Sides" },
  { emoji: "🥤", label: "Drinks" },
  { emoji: "🌶️", label: "Spicy" },
  { emoji: "🥗", label: "Light" },
];

export default function PreferencesPage() {
  return (
    <PhoneShell bg="bg-white">
      {/* Top Brand Area */}
      <div className="relative h-[25%] bg-brand flex flex-col items-center justify-center pt-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(39,18,0,0.15)_0%,transparent_60%)]" />
        <BlurFade delay={0.1} duration={0.5}>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-3 shadow-glow">
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
                <rect x="12" y="26" width="24" height="8" rx="4" fill="#fff" opacity="0.95" />
                <rect x="10" y="22" width="28" height="5" rx="2.5" fill="#fff" opacity="0.6" />
                <rect x="13" y="19" width="22" height="4" rx="2" fill="#fff" opacity="0.85" />
              </svg>
            </div>
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
              Almost Done
            </Badge>
          </div>
        </BlurFade>
      </div>

      {/* Form Card — shadcn Card */}
      <Card className="flex-1 rounded-t-[40px] rounded-b-none border-0 shadow-float z-10 flex flex-col overflow-hidden relative -mt-4">
        <CardContent className="flex-1 flex flex-col px-8 pt-8 pb-8 overflow-y-auto">
          {/* Progress Bar — shadcn Progress */}
          <BlurFade delay={0.2} duration={0.4}>
            <Progress value={100} className="h-2 mb-2 [&>[data-slot=indicator]]:bg-brand" />
            <p className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-6">Step 3 of 3</p>
          </BlurFade>

          {/* Name Input — shadcn Label + Input */}
          <BlurFade delay={0.3} duration={0.4}>
            <div className="mb-7">
              <Label className="text-[15px] font-semibold text-brown mb-3 block">What do we call you?</Label>
              <div className="flex items-center gap-3 bg-secondary border-[1.5px] border-input rounded-2xl px-4 shadow-inset-soft focus-within:border-ring focus-within:bg-white focus-within:shadow-[0_8px_24px_rgba(232,86,10,0.15)] transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#E8560A"><path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" /></svg>
                <Input
                  type="text"
                  placeholder="Your first name"
                  className="flex-1 bg-transparent border-none shadow-none text-[16px] font-bold text-brown placeholder:text-brown-muted/50 h-14 focus-visible:ring-0 p-0"
                />
              </div>
            </div>
          </BlurFade>

          {/* Diet — shadcn RadioGroup */}
          <BlurFade delay={0.4} duration={0.4}>
            <div className="mb-7">
              <Label className="text-[15px] font-semibold text-brown mb-3 block">Food preference?</Label>
              <RadioGroup defaultValue="veg" className="grid grid-cols-2 gap-3">
                <Label className="cursor-pointer [&:has([data-state=checked])]:border-success [&:has([data-state=checked])]:bg-success/5 [&:has([data-state=checked])]:shadow-soft flex items-center justify-center gap-2 border-[1.5px] border-line rounded-2xl py-4 transition-all duration-300 hover:border-success/40">
                  <RadioGroupItem value="veg" className="sr-only" />
                  <svg width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" rx="3" fill="none" stroke="#1A7A38" strokeWidth="1.5" /><circle cx="8" cy="8" r="3.5" fill="#1A7A38" /></svg>
                  <span className="text-sm font-bold text-brown">Pure Veg</span>
                </Label>
                <Label className="cursor-pointer [&:has([data-state=checked])]:border-danger [&:has([data-state=checked])]:bg-danger/5 [&:has([data-state=checked])]:shadow-soft flex items-center justify-center gap-2 border-[1.5px] border-line rounded-2xl py-4 transition-all duration-300 hover:border-danger/40">
                  <RadioGroupItem value="non-veg" className="sr-only" />
                  <svg width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" rx="3" fill="none" stroke="#C0001A" strokeWidth="1.5" /><polygon points="8,3 13,12 3,12" fill="#C0001A" /></svg>
                  <span className="text-sm font-bold text-brown">Non-Veg</span>
                </Label>
              </RadioGroup>
            </div>
          </BlurFade>

          {/* Cravings — Badge chips with toggle */}
          <BlurFade delay={0.5} duration={0.4}>
            <div className="mb-4">
              <Label className="text-[15px] font-semibold text-brown mb-3 block">Usually craving?</Label>
              <div className="flex flex-wrap gap-3">
                {cravings.map((c) => (
                  <label key={c.label} className="cursor-pointer active:scale-[0.96] transition-transform duration-300">
                    <input type="checkbox" defaultChecked={c.defaultChecked} className="peer hidden" />
                    <Badge
                      variant="outline"
                      className="px-5 py-3 border-[1.5px] border-line rounded-full transition-all duration-300 peer-checked:border-brand peer-checked:bg-brand-light/80 peer-checked:shadow-soft hover:border-brand/40 gap-2 text-[14px] font-bold text-brown cursor-pointer"
                    >
                      <span>{c.emoji}</span>
                      {c.label}
                    </Badge>
                  </label>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* CTA — ShimmerButton */}
          <div className="mt-auto pt-6">
            <BlurFade delay={0.7} duration={0.5} direction="up">
              <ShimmerButton
                className="w-full h-14 text-[16px] font-bold shadow-brand-glow"
                shimmerColor="rgba(255,255,255,0.4)"
                background="rgba(232,86,10,1)"
                borderRadius="20px"
                onClick={() => window.location.href = "/location"}
              >
                <span className="flex items-center gap-2 text-white font-bold">
                  Let&apos;s Eat
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </span>
              </ShimmerButton>
            </BlurFade>
          </div>
        </CardContent>
      </Card>
    </PhoneShell>
  );
}
