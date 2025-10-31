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
        title: "Java SQL Warehouse System",
        summary: "Simple Java Warehouse Management System using SQLite for managing customers, orders, deliveries, and inventory.",
        description:
            "Excerpt from github: This project implements a simple Warehouse Management System for my second COMP5000 assessment. It is a Java application that uses SQLite databases to manage and visualize key business entities including customers, orders, deliveries, and inventory parts. The project demonstrates database integration, object-oriented design, and automated reporting through HTML interfaces..",
        techStack: ["Java", "SQLite", "InteliJ"],
        featured: true,
        links: [
            { label: "Github repo", href: "https://github.com/nathant1234567/warehouse-system-uni" },
        ],
    },

];