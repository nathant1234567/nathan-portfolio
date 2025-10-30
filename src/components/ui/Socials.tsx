'use client';
import SectionWrapper from "@/components/layout/SectionWrapper";
import SocialBox from "@/components/ui/SocialBox";

export default function SocialsSection() {
    return (
        <SectionWrapper className="w-full max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Socials</h1>
            <SocialBox />
        </SectionWrapper>
    );
}