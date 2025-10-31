import {ProjectEntry} from "@/data/projects";
import {ExternalLink} from "lucide-react";

interface HomeProjectCardProps {
    project: ProjectEntry;
}

export default function HomeProjectCard({project}: HomeProjectCardProps) {
    return (
        <article className="rounded-2xl border border-gray-600 bg-black/20 p-6 transition hover:border-l-nice-black-300/80 hover:bg-black/20">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-gray-300">{project.summary}</p>

            {project.links && project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                    {project.links.slice(0, 1).map((link) => (
                        <a
                            key={`${project.title}-${link.href}`}
                            href={link.href}
                            className="inline-flex items-center gap-2 text-sm font-medium text-teal-200 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>{link.label}</span>
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                    ))}
                </div>
            )}
        </article>
    );
}