import Link from "next/link";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <SectionWrapper>
        <footer className="mt-3 w-full pb-5">
            <div className="relative overflow-hidden rounded-3xl border border-gray-600 bg-black/10 px-8 py-4 backdrop-blur">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,_rgba(55,119,113,0.25),_transparent_100%)]" />
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-sm space-y-2">
                        <p className="text-sm text-white/70">
                            Built by me using React, Next.js and Tailwind CSS (pretty much).
                        </p>
                    </div>

                </div>
                <div className="mt-1 flex flex-col gap-3 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
                    <p>© {year} Nathan Thompson</p>
                    <p className="font-mono text-white/50">nathanthompson256@outlook.com</p>
                </div>
            </div>
        </footer>
        </SectionWrapper>
    );
}