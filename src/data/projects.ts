export interface ProjectLink {
    label: string;
    href: string;
}

export interface ProjectEntry {
    title: string;
    summary: string;
    description: string;
    techStack: string[];
    featured?: boolean;
    links?: ProjectLink[];
}

export const projects: ProjectEntry[] = [
    {
        title: "Example project",
        summary: "A brief summary of the example project.",
        description:
            "This is a more detailed description of the example project, explaining its features, purpose, and technologies used.",
        techStack: ["TypeScript", "React", "Node.js"],
        featured: true,
        links: [
            { label: "Test link", href: "https://example.com/" },
        ],
    },
];