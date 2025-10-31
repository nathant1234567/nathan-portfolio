import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConditionalPageWrapper from "@/components/wrappers/ConditionalPageWrapper";
import {BlackBackground} from "@/components/layout/BlackBackground";


const noto = localFont({
    src: "../assets/fonts/NotoSans-VariableFont_wdth,wght.ttf",
    variable: "--font-noto-sans",
    weight: "100 900",
    style: "normal",
});

const bitcount = localFont({
    src: "../assets/fonts/BitcountGridSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf",
    variable: "--font-bitcount",
    weight: "100 900",
    style: "normal",
});

const bitter = localFont({
    src: "../assets/fonts/Bitter-VariableFont_wght.ttf",
    variable: "--font-bitter",
    weight: "100 900",
    style: "normal",
});

export const metadata: Metadata = {
  title: "Nathan Thompson Portfolio",
  description: "My personal portfolio site",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={bitter.variable}>
        <body className="font-[var(--font-bitter)] bg-black text-white">
        <BlackBackground>{children}</BlackBackground>
        </body>
        </html>
    );
}
