'use client';
import SectionWrapper from "@/components/SectionWrapper";
import SocialBox from "@/components/SocialBox";

export default function SocialsSection() {
    return (
        <SectionWrapper className="w-full max-w-4xl">
            <h1 className="text-4xl font-bold">Socials</h1>
            <SocialBox />
        </SectionWrapper>
    );
}