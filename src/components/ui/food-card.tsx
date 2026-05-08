"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FoodCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  href?: string;
  className?: string;
}

export function FoodCard({ name, description, price, image, isVeg, href, className }: FoodCardProps) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-sm border-[1.5px] border-line rounded-[24px] p-3 flex gap-4 shadow-premium cursor-pointer hover:border-brand/40 active:scale-[0.97] transition-all duration-300 group",
        className
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      onClick={() => href && router.push(href)}
    >
      <div className="w-28 h-28 rounded-2xl bg-cream flex items-center justify-center overflow-hidden shrink-0 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col justify-center flex-1 py-1 pr-2">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className={cn(
            "w-3.5 h-3.5 border-[1.5px] rounded-[3px] flex items-center justify-center",
            isVeg ? "border-green-600" : "border-red-600"
          )}>
            {isVeg ? (
              <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
            )}
          </div>
          <span className={cn(
            "text-[10px] font-bold uppercase tracking-wider",
            isVeg ? "text-green-600" : "text-red-600"
          )}>
            {isVeg ? "Veg" : "Non-Veg"}
          </span>
        </div>
        <h5 className="font-bold text-[16px] text-brown leading-tight mb-1.5 group-hover:text-brand transition-colors">{name}</h5>
        <p className="text-[12px] text-brown-muted font-medium mb-3 line-clamp-1">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display font-black text-[18px] text-brown">₹{price}</span>
          <button className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center shadow-[0_4px_12px_rgba(232,86,10,0.3)] active:scale-95 transition-transform">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 5v14"/>
              <path d="M5 12h14"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
