// pagelinks.ts
export interface PageLinkEntry {
  label: string;
  href: string;
  description: string;
}

export const pageLinkData: PageLinkEntry[] = [
  {
    label: "Home",
    href: "/",
    description: "Return to home.",
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Browse a selection of recent projects I have worked on.",
  },
  {
    label: "Get in touch",
    href: "mailto:nathantomp@gmail.com",
    description: "Drop a message if you'd like to collaborate or just say hello.",
  },
];
