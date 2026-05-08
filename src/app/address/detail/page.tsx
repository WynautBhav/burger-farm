"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const fields = [
  { id: "flat", label: "Flat / House No.", required: true, placeholder: "e.g., 12A, Floor 2", iconPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" },
  { id: "building", label: "Building / Society", placeholder: "e.g., Green Valley Apartments", iconPath: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" },
  { id: "landmark", label: "Landmark", optional: true, placeholder: "e.g., Near the park", iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" },
];

const saveTags = [
  { value: "home", label: "Home", iconPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" },
  { value: "work", label: "Work", iconPath: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" },
  { value: "other", label: "Other", iconPath: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" },
];

export default function AddressDetailPage() {
  const router = useRouter();

  return (
    <PhoneShell bg="bg-white">
      {/* Map Snapshot */}
      <div className="relative h-[22%] bg-secondary flex flex-col overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#D5CFC6 2px, transparent 2px)", backgroundSize: "24px 24px" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-white z-10" />
        <header className="px-6 pt-12 pb-4 flex z-20 relative">
          <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border-line/50 shadow-sm hover:bg-white" onClick={() => router.back()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
          </Button>
        </header>
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none pt-4">
          <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-glow border-2 border-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <Card className="flex-1 rounded-t-3xl rounded-b-none border-0 border-t border-line/50 z-20 flex flex-col overflow-hidden relative -mt-4">
        {/* Location summary */}
        <CardContent className="px-6 pt-6 pb-6 border-b border-line flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
          </div>
          <div>
            <h2 className="font-display text-[18px] font-black text-brown mb-0.5 leading-tight">Delivery Location</h2>
            <p className="text-[13px] font-medium text-brown-muted leading-tight">42, Golf Link Road<br /><span className="text-[12px]">Near Metro Station</span></p>
          </div>
        </CardContent>

        {/* Form Fields — shadcn Label + Input */}
        <CardContent className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
          {fields.map((field, i) => (
            <BlurFade key={field.id} delay={0.2 + i * 0.1} duration={0.4}>
              <div>
                <Label className="text-[12px] font-bold text-brown-muted uppercase tracking-[0.1em] mb-2.5 block ml-1">
                  {field.label} {field.required && <span className="text-brand">*</span>}
                  {field.optional && <span className="text-[10px] lowercase font-medium tracking-normal opacity-60 ml-1">(Optional)</span>}
                </Label>
                <div className="flex items-center gap-3 bg-secondary border-[1.5px] border-input rounded-2xl px-4 shadow-inset-soft focus-within:border-ring focus-within:bg-white focus-within:shadow-[0_8px_24px_rgba(232,86,10,0.15)] transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={field.required ? "#E8560A" : "currentColor"} className={field.required ? "" : "text-brown-muted/60"}><path d={field.iconPath} /></svg>
                  <Input
                    type="text"
                    placeholder={field.placeholder}
                    className="flex-1 bg-transparent border-none shadow-none text-[16px] font-bold text-brown placeholder:text-brown-muted/40 h-14 focus-visible:ring-0 p-0"
                  />
                </div>
              </div>
            </BlurFade>
          ))}

          {/* Save As Tags — shadcn RadioGroup */}
          <BlurFade delay={0.5} duration={0.4}>
            <Label className="text-[12px] font-bold text-brown-muted uppercase tracking-[0.1em] mb-3 block ml-1">Save As</Label>
            <RadioGroup defaultValue="home" className="flex gap-4">
              {saveTags.map((tag) => (
                <Label
                  key={tag.value}
                  className="cursor-pointer flex-1 [&:has([data-state=checked])]:border-brand [&:has([data-state=checked])]:bg-brand/5 [&:has([data-state=checked])]:shadow-soft [&:has([data-state=checked])_svg]:text-brand [&:has([data-state=checked])_span]:text-brand flex flex-col items-center justify-center gap-2 border-[1.5px] border-line rounded-2xl py-4 transition-all duration-300 hover:border-brand/40 active:scale-[0.96]"
                >
                  <RadioGroupItem value={tag.value} className="sr-only" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-brown-muted/60 transition-colors"><path d={tag.iconPath} /></svg>
                  <span className="text-[12px] font-bold text-brown-muted/60 transition-colors">{tag.label}</span>
                </Label>
              ))}
            </RadioGroup>
          </BlurFade>
        </CardContent>

        {/* Footer CTA */}
        <CardContent className="mt-auto px-6 pb-8 pt-4 bg-white border-t border-line/40 shadow-float">
          <BlurFade delay={0.7} duration={0.4} direction="up">
            <ShimmerButton
              className="w-full h-14 text-[16px] font-bold shadow-brand-glow mb-3"
              shimmerColor="rgba(255,255,255,0.4)"
              background="rgba(232,86,10,1)"
              borderRadius="20px"
              onClick={() => router.push("/home")}
            >
              <span className="text-white font-bold">Save & Continue</span>
            </ShimmerButton>
            <p className="text-center text-[12px] font-medium text-brown-muted/60">Your address will be saved for future orders.</p>
          </BlurFade>
        </CardContent>
      </Card>
    </PhoneShell>
  );
}
