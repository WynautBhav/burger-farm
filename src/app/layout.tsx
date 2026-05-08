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
      <body className="min-h-full flex justify-center bg-warm sm:p-8 antialiased font-sans text-brown">
        {children}
      </body>
    </html>
  );
}
