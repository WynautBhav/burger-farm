import type { Metadata } from "next";
import { recoleta, montreux } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Burger Farm — Farm-Fresh. Always.",
  description: "Order premium farm-fresh burgers delivered to your door. Experience the finest burgers with real ingredients, made to order.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${recoleta.variable} ${montreux.variable} h-full`}
    >
      <body className="min-h-full flex justify-center bg-warm sm:p-8 antialiased font-sans text-brown relative">
        {/* Restart Flow Button (Desktop Only) */}
        <a 
          href="/"
          className="fixed top-8 left-8 hidden sm:flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md text-sm font-bold text-brand hover:scale-105 transition-transform z-50 border border-line/50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          Restart Flow
        </a>
        
        {children}
      </body>
    </html>
  );
}
