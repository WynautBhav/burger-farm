import localFont from "next/font/local";

export const recoleta = localFont({
  src: [
    { path: "../../public/fonts/recoleta-regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/recoleta-medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/recoleta-semibold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/recoleta-bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/recoleta-black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-recoleta",
  display: "swap",
});

export const montreux = localFont({
  src: [
    { path: "../../public/fonts/montreux.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/montreux.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-montreux",
  display: "swap",
});
