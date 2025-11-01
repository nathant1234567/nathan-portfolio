'use client';
import SectionWrapper from "@/components/layout/SectionWrapper";
import {SectionTitle} from "@/components/layout/SectionTitle";
import {CITY} from "@/lib/constants";
import { FaLaptopCode } from "react-icons/fa";

export default function About() {
    return (
        <SectionWrapper className="w-full max-w-4xl">
            <SectionTitle as="h1" title="About me" icon={<FaLaptopCode color={"A4BAB7"} />} />
            <div
                className={`rounded-2xl border border-gray-500 bg-black/10 p-3 flex flex-col items-start gap-4 `}
            >
                <div className="flex flex-wrap gap-4 pt-2 pl-2 pb-2">
                    <p>I am a second year BSc Computer Science student based in the South of England, and currently living in {CITY}.</p>
                    <p>Along with Computer Science, I have been playing drums and piano for over 10 years now, and enjoy practicing whenever I get the opportunity. I especially like playing along to 70s rock and funk tracks.</p>
                    <p>The socials that I use the most are linked below; feel free to contact me at any time!</p>
                    <p>I am constantly improving my site over time, any feedback will be greatly appreciated :) </p>
                </div>
            </div>
        </SectionWrapper>
    );
}