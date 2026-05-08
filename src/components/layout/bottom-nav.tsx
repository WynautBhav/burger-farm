"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Home",
    href: "/home",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke={active ? "none" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
  },
  {
    label: "Offers",
    href: "#",
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
  },
  {
    label: "Orders",
    href: "#",
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    label: "Profile",
    href: "/",
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="absolute bottom-0 inset-x-0 h-[84px] bg-white/90 backdrop-blur-xl shadow-float border-t border-white/60 rounded-t-[32px] flex justify-around items-center px-6 z-30 pb-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <button
            key={item.label}
            onClick={() => item.href !== "#" && router.push(item.href)}
            className={cn(
              "flex flex-col items-center gap-1.5 cursor-pointer relative group transition-colors",
              isActive ? "text-brand" : "text-brown-muted hover:text-brown"
            )}
          >
            {isActive && (
              <div className="absolute -inset-2 bg-brand/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            <span className="relative z-10 drop-shadow-sm">{item.icon(isActive)}</span>
            <span className={cn(
              "text-[11px] relative z-10",
              isActive ? "font-black tracking-wide" : "font-bold text-[10px]"
            )}>
              {item.label}
            </span>
            {isActive && (
              <div className="absolute -bottom-2 w-1.5 h-1.5 bg-brand rounded-full shadow-glow" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
