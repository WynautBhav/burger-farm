"use client";

import { useEffect } from "react";
import { PhoneShell } from "@/components/layout/phone-shell";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    // Auto-advance to onboarding after animation completes
    const t = setTimeout(() => router.push("/onboarding"), 4000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <PhoneShell bg="bg-white" className="items-center justify-center cursor-pointer" onClick={() => router.push("/onboarding")}>

      {/* Centered container */}
      <div className="relative flex flex-col items-center justify-center select-none w-full h-full">

        <div className="absolute w-[220px] h-[180px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10">
          
          {/* BOTTOM HALF (Shifts DOWN) */}
          <div className="absolute inset-0 z-10" style={{ animation: "bottom-half-shift 0.6s cubic-bezier(0.16,1,0.3,1) 1.5s both" }}>
            {/* LAYER 4: Bottom bun — drops first */}
            <div className="absolute w-full" style={{ animation: "fall-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both", top: 116, zIndex: 10 }}>
              <svg viewBox="0 0 220 52" fill="none" xmlns="http://www.w3.org/2000/svg" width="220">
                <rect x="12" y="2" width="196" height="36" rx="8" fill="#F5A623" />
                <rect x="12" y="34" width="196" height="10" rx="5" fill="#C94208" />
              </svg>
            </div>

            {/* LAYER 3: Patty — drops second (solid stack) */}
            <div className="absolute w-full" style={{ animation: "fall-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both", top: 90, zIndex: 20 }}>
              <svg viewBox="0 0 220 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="220">
                <rect x="10" y="4" width="200" height="28" rx="14" fill="#6B2500" />
                <rect x="10" y="4" width="200" height="14" rx="14" fill="#7D2E00" />
                {[40,75,110,145,180].map((x,i) => (
                  <line key={i} x1={x} y1="8" x2={x-8} y2="28" stroke="rgba(0,0,0,0.18)" strokeWidth="3" strokeLinecap="round" />
                ))}
              </svg>
            </div>
          </div>

          {/* CHEESE SLICE — slides in at the end (positions relative to bottom half shifted) */}
          <div className="absolute z-[25]" style={{ animation: "cheese-slide 0.6s cubic-bezier(0.16,1,0.3,1) 2.5s both", top: 147, right: 30 }}>
            <svg viewBox="0 0 35 25" fill="none" width="35">
              <polygon points="0,0 35,0 20,25" fill="#FFC107" />
            </svg>
          </div>

          {/* BURGER FARM TEXT — reveals between the split halves */}
          <div className="absolute w-full flex flex-col items-center justify-center z-[40]" style={{ animation: "text-reveal 0.5s cubic-bezier(0.16,1,0.3,1) 1.6s both", top: 48 }}>
            <div className="flex flex-col w-[190px] mx-auto">
               <div className="font-display font-black text-[46px] leading-[0.8] text-[#8E2112] flex justify-between w-full">
                 <span>B</span><span>U</span><span>R</span><span>G</span><span>E</span><span>R</span>
               </div>
               <div className="font-display font-black text-[58px] leading-[0.85] text-[#F5821F] flex justify-between w-full -mt-1.5">
                 <span>F</span><span>A</span><span>R</span><span>M</span>
               </div>
            </div>
          </div>

          {/* TOP HALF (Shifts UP to make room for text) */}
          <div className="absolute inset-0 z-[30]" style={{ animation: "top-half-shift 0.6s cubic-bezier(0.16,1,0.3,1) 1.5s both" }}>
            {/* LAYER 2: Lettuce — drops third (solid stack) */}
            <div className="absolute w-full" style={{ animation: "fall-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.5s both", top: 74, zIndex: 30 }}>
              <svg viewBox="0 0 220 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="220">
                <path d="M10 14 Q30 2 55 14 Q75 24 100 10 Q125 0 150 12 Q175 22 210 10 L210 20 Q175 30 150 20 Q125 10 100 22 Q75 32 55 22 Q30 12 10 22 Z" fill="#5A9A1F" />
              </svg>
            </div>

            {/* LAYER 1: Top bun — drops last (solid stack) */}
            <div className="absolute w-full" style={{ animation: "fall-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.7s both", top: 0, zIndex: 40 }}>
              <svg viewBox="0 0 220 95" fill="none" xmlns="http://www.w3.org/2000/svg" width="220">
                <path d="M12 72 Q12 18 110 18 Q208 18 208 72 L208 80 Q208 88 200 88 L20 88 Q12 88 12 80 Z" fill="#F5A623" />
                <path d="M40 30 Q80 22 140 28" stroke="rgba(255,255,255,0.45)" strokeWidth="6" strokeLinecap="round" fill="none" />
                {[[68,38],[95,30],[122,28],[148,32],[170,42],[80,52],[110,46],[138,50]].map(([cx,cy],i) => (
                  <ellipse key={i} cx={cx} cy={cy} rx="6" ry="3.5" fill="white" opacity="0.9" transform={`rotate(-15 ${cx} ${cy})`} />
                ))}
              </svg>
              
              {/* REGISTERED MARK */}
              <div className="absolute" style={{ top: 55, right: -15 }}>
                <div className="w-5 h-5 rounded-full border-[1.5px] border-[#271200] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#271200]">R</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </PhoneShell>
  );
}
