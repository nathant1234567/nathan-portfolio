'use client';
import SectionWrapper from "@/components/layout/SectionWrapper";
import {CITY} from "@/lib/constants";

export default function About() {
    return (
        <SectionWrapper className="w-full max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">About me</h1>
            <div
                className={`rounded-2xl border border-gray-500 bg-black/10 p-3 flex flex-col items-start gap-4 `}
            >
                <div className="flex flex-wrap gap-4 pt-2 pl-2 pb-2">
                    <p>I am a second year Computer Science student based in the South of England, and currently living in {CITY}. Throughout my</p>
                    <p>Along with Computer Science, I have been playing drums and piano for over 10 years now, and enjoy practicing whenever I get the opportunity. I specifically like playing along to </p>
                    <p>The socials that I use the most are linked below; feel free to contact me at any time!</p>
                    <p>I am constantly improving my website over time, any feedback will be greatly appreciated :) </p>
                </div>
            </div>
        </SectionWrapper>
    );
}