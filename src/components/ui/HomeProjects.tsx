import {SectionTitle} from "@/components/layout/SectionTitle";
import HomeProjectCard from "@/components/ui/HomeProjectCard";
import SectionWrapper from "@/components/layout/SectionWrapper";
import {projects} from "@/data/projects";
import { MdOutlineDraw } from "react-icons/md";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function HomeProjects() {
    return (
        <SectionWrapper className="w-full max-w-4xl">
            <SectionTitle title="Featured Projects" icon={<MdOutlineDraw color="#A4BAB7" />} />
            <div className="grid gap-6 md:grid-cols-2">
                {featuredProjects.map((project) => (
                    <HomeProjectCard key={project.title} project={project} />
                ))}
            </div>
        </SectionWrapper>
    )
}