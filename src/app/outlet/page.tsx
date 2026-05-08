"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { useRouter } from "next/navigation";

const outlets = [
  { name: "Burger Farm — CP", address: "Shop 12, Block B, Connaught Place, New Delhi", distance: "1.2 km", eta: "18–22 min", status: "open" as const, selected: true },
  { name: "Burger Farm — Rajouri", address: "J-14, Main Market Road, New Delhi", distance: "2.8 km", eta: "28–32 min", status: "closing-soon" as const },
  { name: "Burger Farm — Saket", address: "Select Citywalk, Ground Floor, New Delhi", distance: "4.5 km", eta: "Opens 11 AM", status: "closed" as const },
];

const statusConfig = {
  open: { label: "Open", variant: "default" as const, className: "bg-success/10 text-success border-success/20 hover:bg-success/15" },
  "closing-soon": { label: "Closing Soon", variant: "default" as const, className: "bg-amber-500/10 text-amber-700 border-amber-500/20 hover:bg-amber-500/15" },
  closed: { label: "Closed", variant: "default" as const, className: "bg-danger/10 text-danger border-danger/20" },
};

export default function OutletPage() {
  const router = useRouter();

  return (
    <PhoneShell>
      {/* Map Area */}
      <div className="relative h-[38%] bg-[#F0F0F0] flex flex-col z-0" style={{ backgroundColor: "#F5F1EB", backgroundImage: "radial-gradient(#D5CFC6 2px, transparent 2px), radial-gradient(#D5CFC6 2px, transparent 2px)", backgroundSize: "32px 32px", backgroundPosition: "0 0, 16px 16px" }}>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/90 to-transparent z-10 pointer-events-none" />

        <header className="px-6 pt-12 pb-4 flex flex-col gap-4 z-20">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full border-line shadow-sm bg-white hover:bg-cream" onClick={() => router.back()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
            </Button>
            <h1 className="font-display text-xl font-black text-brown">Select Outlet</h1>
          </div>

          {/* Segmented Control — styled shadcn Button group */}
          <div className="bg-secondary p-1.5 rounded-full border border-input shadow-inset-soft flex items-center w-full relative">
            <div className="absolute left-1.5 top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-brand rounded-full shadow-brand-glow z-0 transition-transform duration-500" />
            <Button variant="ghost" className="flex-1 relative z-10 text-[13px] font-bold h-10 text-white hover:text-white hover:bg-transparent gap-1.5 rounded-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4z" /></svg>
              Delivery
            </Button>
            <Button variant="ghost" className="flex-1 relative z-10 text-[13px] font-bold h-10 text-brown-muted hover:text-brown hover:bg-transparent gap-1.5 rounded-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4m0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z" /></svg>
              Pickup
            </Button>
          </div>
        </header>

        {/* Map Pin — floating */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center pt-20">
          <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shadow-[0_8px_24px_rgba(232,86,10,0.4)] border-[2.5px] border-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
          </div>
        </div>
      </div>

      {/* Outlet List — shadcn Card for each */}
      <Card className="flex-1 rounded-t-[32px] rounded-b-none border-0 shadow-float z-20 flex flex-col overflow-hidden relative -mt-4">
        <CardContent className="flex-1 flex flex-col p-6 overflow-y-auto">
          <h2 className="font-display text-[18px] font-black text-brown mb-4">Nearest Outlets</h2>
          <div className="flex flex-col gap-3">
            {outlets.map((outlet, i) => {
              const statusInfo = statusConfig[outlet.status];
              return (
                <BlurFade key={outlet.name} delay={0.2 + i * 0.15} duration={0.4}>
                  <Card
                    className={`relative overflow-hidden cursor-pointer transition-all duration-300 group active:scale-[0.97] ${
                      outlet.selected
                        ? "border-brand bg-accent shadow-[0_8px_24px_rgba(232,86,10,0.15)]"
                        : outlet.status === "closed"
                          ? "opacity-50 pointer-events-none border-line"
                          : "border-line hover:border-brand/40 hover:shadow-premium"
                    }`}
                    onClick={() => outlet.status !== "closed" && router.push("/home")}
                  >
                    {outlet.selected && <BorderBeam size={80} duration={6} colorFrom="#E8560A" colorTo="#FFB085" />}
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-[16px] text-brown mb-0.5 group-hover:text-brand transition-colors">{outlet.name}</h3>
                          <p className="text-[12px] text-brown-muted font-medium pr-4 leading-tight">{outlet.address}</p>
                        </div>
                        <Badge variant="outline" className={`text-[10px] font-bold uppercase tracking-wider shrink-0 ${statusInfo.className}`}>
                          {statusInfo.label}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 border-t border-line pt-3">
                        <div className="flex items-center gap-1.5 text-brown font-semibold text-[13px]">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill={outlet.selected ? "#E8560A" : "currentColor"}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /></svg>
                          {outlet.distance}
                        </div>
                        <div className="flex items-center gap-1.5 text-brown font-semibold text-[13px]">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill={outlet.selected ? "#E8560A" : "currentColor"}><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L11 14.5V7h1.5v6.86l4.73 2.79-1 1.35z" /></svg>
                          {outlet.eta}
                        </div>
                        {outlet.selected && (
                          <span className="ml-auto flex items-center gap-1 text-brand font-bold text-[13px]">
                            Select
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </PhoneShell>
  );
}
