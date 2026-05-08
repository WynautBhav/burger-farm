"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface BrandButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "white" | "ghost" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export function BrandButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  icon,
}: BrandButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    if (href) router.push(href);
  };

  const variants = {
    primary:
      "bg-brand text-white shadow-brand-glow hover:brightness-110",
    white:
      "bg-white text-brand shadow-[0_12px_32px_rgba(255,255,255,0.25)] hover:bg-white/95",
    ghost:
      "bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10",
    outline:
      "bg-white border-[1.5px] border-line text-brown hover:border-brand/40 hover:shadow-soft",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "w-full relative overflow-hidden font-bold text-[16px] py-4 rounded-[20px] active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2 group h-14",
        variants[variant],
        className
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700" />
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
    </button>
  );
}
