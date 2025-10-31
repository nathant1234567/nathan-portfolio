'use client';
import EducationCard from "@/components/ui/EducationCard";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { educationData } from '@/data/education';
import { MdSchool } from "react-icons/md";
import {SectionTitle} from "@/components/layout/SectionTitle";


export default function Education() {

    return (
        <SectionWrapper className="w-full max-w-4xl">

            <SectionTitle as="h1" title="Education" icon={<MdSchool color={"A4BAB7"} />} />

            <div className="flex flex-col gap-4 w-full">
                {educationData.map((item, index) => (
                    <EducationCard
                        key={index}
                        school={item.institution}
                        degree={item.degree}
                        period={item.period}
                        description={item.description}
                    />
                ))}
            </div>

        </SectionWrapper>
    );
}
