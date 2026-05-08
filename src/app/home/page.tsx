"use client";

import { PhoneShell } from "@/components/layout/phone-shell";
import { BottomNav } from "@/components/layout/bottom-nav";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShineBorder } from "@/components/ui/shine-border";
import { BorderBeam } from "@/components/ui/border-beam";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  { label: "Burgers", active: true, emoji: "🍔" },
  { label: "Sides", emoji: "🍟" },
  { label: "Drinks", emoji: "🥤" },
  { label: "Desserts", emoji: "🍦" },
  { label: "Combos", emoji: "🎁" },
];

const menuItems = [
  { name: "Farmhouse Special", desc: "Crispy patty, fresh veggies, secret sauce.", price: 149, image: "/images/veg_burger.png", isVeg: true },
  { name: "Double Chicken XL", desc: "Two grilled patties, smoked cheese, pickles.", price: 229, image: "/images/nonveg_burger.png", isVeg: false },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <PhoneShell>
      {/* Header — shadcn Avatar + Button */}
      <header className="px-6 pt-12 pb-4 bg-white shadow-sm flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 bg-brand shadow-glow border-2 border-brand-light">
            <AvatarFallback className="bg-brand text-white font-display font-bold text-sm">V</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[11px] font-bold text-brown-muted uppercase tracking-widest mb-0.5">Pickup from</p>
            <Button variant="link" className="p-0 h-auto text-[14px] font-bold text-brown gap-1" onClick={() => router.push("/outlet")}>
              Select Store
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#E8560A"><path d="M7 10l5 5 5-5z" /></svg>
            </Button>
          </div>
        </div>
        <Button variant="outline" size="icon" className="relative w-10 h-10 rounded-full border-line bg-cream hover:bg-line">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brown"><path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" /><path d="M20 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          <span className="absolute top-0 right-0 w-3 h-3 bg-brand rounded-full border-2 border-white" />
        </Button>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Search — shadcn Input */}
        <BlurFade delay={0.1} duration={0.4}>
          <div className="px-6 py-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brown-muted"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              </div>
              <Input
                type="text"
                placeholder="Search burgers, sides..."
                className="w-full bg-white border-[1.5px] border-line rounded-full h-12 pl-12 text-[14px] font-bold text-brown shadow-soft focus:border-ring focus:shadow-[0_0_0_4px_rgba(232,86,10,0.1)] focus-visible:ring-0 transition-all"
              />
            </div>
          </div>
        </BlurFade>

        {/* Hero Banner — shadcn Card with ShineBorder */}
        <BlurFade delay={0.2} duration={0.5}>
          <div className="px-6 mb-8">
            <Card className="relative w-full h-44 overflow-hidden shadow-brand-glow cursor-pointer group active:scale-[0.98] transition-all duration-300 border-0 bg-brand rounded-[28px]">
              <ShineBorder shineColor={["#FFB085", "#E8560A", "#C94208"]} borderWidth={1} duration={8} />
              <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand to-transparent z-10" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-[#FF7A33]/80 rounded-full blur-[40px] z-0 animate-pulse" style={{ animationDuration: "4s" }} />
              <div className="absolute right-0 -top-20 w-56 h-56 bg-[#C94208]/60 rounded-full blur-[50px] z-0" />
              <CardContent className="relative z-20 h-full flex flex-col justify-center p-6">
                <Badge variant="outline" className="bg-white/20 text-white border-white/30 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] w-fit mb-2 hover:bg-white/30">
                  New Release
                </Badge>
                <h3 className="font-display text-[26px] font-black text-white leading-[1.1] mb-1 drop-shadow-md">Truffle<br />Mushroom</h3>
                <div className="flex items-center gap-1.5 text-white font-bold text-[15px]">
                  ₹249 <span className="text-white/60 line-through text-[12px] font-medium ml-1">₹299</span>
                </div>
              </CardContent>
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-48 h-48 z-10" style={{ filter: "drop-shadow(-10px 10px 20px rgba(0,0,0,0.3))" }}>
                <Image src="/images/veg_burger.png" alt="Truffle Mushroom Burger" fill className="object-cover" />
              </div>
            </Card>
          </div>
        </BlurFade>

        {/* Categories — horizontally scrollable badges */}
        <BlurFade delay={0.3} duration={0.4}>
          <div className="mb-6">
            <div className="px-6 flex items-center justify-between mb-4">
              <h4 className="font-display text-[18px] font-black text-brown">Categories</h4>
            </div>
            <div className="flex gap-4 px-6 overflow-x-auto pb-4 pt-1 -mt-1 hide-scrollbar">
              {categories.map((cat) => (
                <div key={cat.label} className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
                  <Card className={`w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-active:scale-95 border-0 ${
                    cat.active
                      ? "bg-brand shadow-brand-glow"
                      : "bg-white border border-line/60 shadow-premium group-hover:border-brand/40"
                  }`}>
                    <CardContent className="p-0 text-2xl">{cat.emoji}</CardContent>
                  </Card>
                  <span className={`text-[12px] font-bold ${cat.active ? "text-brown" : "text-brown-muted"}`}>{cat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        <Separator className="mx-6 bg-line/40 mb-6" />

        {/* Popular Items — shadcn Card for each */}
        <div className="px-6">
          <BlurFade delay={0.4} duration={0.4}>
            <h4 className="font-display text-[18px] font-black text-brown mb-4">Popular Now</h4>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {menuItems.map((item, i) => (
              <BlurFade key={item.name} delay={0.5 + i * 0.15} duration={0.4}>
                <Card className="overflow-hidden border-line hover:border-brand/40 shadow-premium hover:shadow-[0_20px_40px_-10px_rgba(232,86,10,0.15)] transition-all duration-300 cursor-pointer group active:scale-[0.97] relative">
                  {i === 0 && <BorderBeam size={60} duration={8} colorFrom="#E8560A" colorTo="#FFB085" />}
                  <CardContent className="p-3 flex gap-4">
                    <div className="w-28 h-28 rounded-2xl bg-cream flex items-center justify-center overflow-hidden shrink-0 relative">
                      <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center flex-1 py-1 pr-2">
                      <Badge variant="outline" className={`w-fit mb-1.5 text-[10px] font-bold uppercase tracking-wider gap-1 px-2 py-0.5 ${
                        item.isVeg ? "text-success border-success/20 bg-success/5" : "text-danger border-danger/20 bg-danger/5"
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? "bg-success" : "bg-danger"}`} />
                        {item.isVeg ? "Veg" : "Non-Veg"}
                      </Badge>
                      <h5 className="font-bold text-[16px] text-brown leading-tight mb-1.5 group-hover:text-brand transition-colors">{item.name}</h5>
                      <p className="text-[12px] text-brown-muted font-medium mb-3 line-clamp-1">{item.desc}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-display font-black text-[18px] text-brown">₹{item.price}</span>
                        <Button size="icon" className="w-8 h-8 rounded-full bg-brand text-white shadow-[0_4px_12px_rgba(232,86,10,0.3)] hover:bg-brand-hover">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </PhoneShell>
  );
}
