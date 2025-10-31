import {ProjectEntry} from "@/data/projects";
import {ExternalLink} from "lucide-react";

interface HomeProjectCardProps {
    project: ProjectEntry;
}

export default function HomeProjectCard({project}: HomeProjectCardProps) {
    return (
        <article className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:border-l-nice-black-300/80 hover:bg-black/20">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </article>
    );
}