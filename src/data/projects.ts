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
        summary: "Java Warehouse Management System using SQLite for managing customers, orders, deliveries, and inventory.",
        description:
            "Excerpt from github: This project implements a simple Warehouse Management System for my second COMP5000 assessment. It is a Java application that uses SQLite databases to manage and visualize key business entities including customers, orders, deliveries, and inventory parts. The project demonstrates database integration, object-oriented design, and automated reporting through HTML interfaces..",
        techStack: ["Java", "SQLite", "InteliJ"],
        featured: true,
        links: [
            { label: "Github repo", href: "https://github.com/nathant1234567/warehouse-system-uni" },
        ],
    },
    {
        title: "Simple Spring CRUD App",
        summary: "Spring Boot and React CRUD app demonstrating RESTful APIs, JPA database integration, and entity relationships for Groups, Events, and Users.",
        description:
            "Excerpt from github: This is a CRUD application I built using Spring Boot (Java) for the backend and React for the frontend. It demonstrates RESTful API design, database integration using Spring Data JPA, and entity relationships between Groups, Events, and Users.\n" +
            "\n" +
            "I did this project to practice Springboot and see how it is used to build scalable, maintainable web applications with clear folder structures.",
        techStack: ["Java", "SpringBoot", "Data Structures", "JPA"],
        featured: true,
        links: [
            { label: "Github repo", href: "https://github.com/nathant1234567/spring-school-api-app" },
        ],
    },
];