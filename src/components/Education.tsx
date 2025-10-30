'use client';
import EducationCard from "@/components/EducationCard";
import SectionWrapper from "@/components/SectionWrapper";
import { educationData } from '@/data/education';


export default function Education() {

    return (
        <SectionWrapper>
        <section className="flex flex-col justify-center items-start w-full max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Education</h2>

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
        </section>
        </SectionWrapper>
    );
}
