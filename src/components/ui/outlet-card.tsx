"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface OutletCardProps {
  name: string;
  address: string;
  distance: string;
  eta: string;
  status: "open" | "closing-soon" | "closed";
  selected?: boolean;
  href?: string;
  className?: string;
}

const statusConfig = {
  open: { label: "Open", bg: "bg-success/10 text-success border-success/20" },
  "closing-soon": { label: "Closing Soon", bg: "bg-amber-500/10 text-amber-700" },
  closed: { label: "Closed", bg: "bg-danger/10 text-danger" },
};

export function OutletCard({ name, address, distance, eta, status, selected, href, className }: OutletCardProps) {
  const router = useRouter();
  const statusInfo = statusConfig[status];

  return (
    <div
      className={cn(
        "rounded-[24px] p-4 cursor-pointer transition-all duration-300 group active:scale-[0.97]",
        selected
          ? "border-[1.5px] border-brand bg-[#FAFAFA] shadow-[0_8px_24px_rgba(232,86,10,0.15)]"
          : "border-[1.5px] border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-premium",
        status === "closed" && "opacity-60 pointer-events-none",
        className
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      onClick={() => href && router.push(href)}
    >
      {selected && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent z-0 pointer-events-none rounded-[24px]" />
      )}
      <div className="flex justify-between items-start mb-3 relative z-10">
        <div>
          <h3 className="font-bold text-[16px] text-brown mb-0.5 group-hover:text-brand transition-colors">{name}</h3>
          <p className="text-[12px] text-brown-muted font-medium pr-4 leading-tight">{address}</p>
        </div>
        <div className={cn(
          "px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shrink-0",
          statusInfo.bg
        )}>
          {statusInfo.label}
        </div>
      </div>
      <div className={cn(
        "flex items-center gap-4 border-t pt-3 relative z-10",
        selected ? "border-brand/20" : "border-line"
      )}>
        <div className="flex items-center gap-1.5 text-brown font-semibold text-[13px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill={selected ? "#E8560A" : "currentColor"}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
          {distance}
        </div>
        <div className="flex items-center gap-1.5 text-brown font-semibold text-[13px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill={selected ? "#E8560A" : "currentColor"}>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L11 14.5V7h1.5v6.86l4.73 2.79-1 1.35z"/>
          </svg>
          {eta}
        </div>
        {selected && (
          <div className="ml-auto flex items-center gap-1 text-brand font-bold text-[13px]">
            Select
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
