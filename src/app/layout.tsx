import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConditionalPageWrapper from "@/components/ConditionalPageWrapper";
import {BlackBackground} from "@/components/BlackBackground";


const noto = localFont({
    src: "../assets/fonts/NotoSans-VariableFont_wdth,wght.ttf",
    variable: "--font-noto-sans",
    weight: "100 900",
    style: "normal",
});

export const metadata: Metadata = {
  title: "Nathan Thompson Portfolio",
  description: "My personal portfolio site",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {

  return (
      <html lang="en" className={noto.variable}>
      <body className="font-[var(--font-noto-sans)] bg-black text-white">
      <BlackBackground><ConditionalPageWrapper>{children}</ConditionalPageWrapper></BlackBackground>
      </body>
    </html>
  );
}
