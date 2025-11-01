'use client';
import SectionWrapper from "@/components/layout/SectionWrapper";
import SocialBox from "@/components/ui/SocialBox";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import {SectionTitle} from "@/components/layout/SectionTitle";

export default function SocialsSection() {
    return (
        <SectionWrapper className="w-full max-w-4xl">
            <SectionTitle as="h1" title="Socials" icon={<MdOutlinePhoneAndroid color={"A4BAB7"} />} />
            <SocialBox />
        </SectionWrapper>
    );
}