"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import NavigationHeader from "@/components/NavigationHeader";
import NavigationLinkList from "@/components/NavigationLinkList";
import NavigationPreview from "@/components/NavigationPreview";
import { pageLinkData, type PageLinkEntry } from "@/data/pagelinks";

const links = pageLinkData;

export default function NavigationPane() {
    const pathname = usePathname();

    const defaultActive = useMemo<PageLinkEntry>(() => {
        return (
            links.find((link) =>
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href),
            ) ?? links[0]
        );
    }, [pathname]);

    const [hovered, setHovered] = useState<PageLinkEntry>(defaultActive);

    useEffect(() => {
        setHovered(defaultActive);
    }, [defaultActive]);

    return (
        <aside className="hidden h-fit w-full max-w-sm flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur md:sticky md:top-38 md:flex">
            <div>
                <NavigationHeader />
                <NavigationLinkList
                    links={links}
                    activeHref={defaultActive.href}
                    onHover={setHovered}
                    onResetHover={() => setHovered(defaultActive)}
                />
            </div>

            <NavigationPreview link={hovered} />
        </aside>
    );
}