"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pageLinkData } from "@/data/pagelinks";

const links = pageLinkData;

export default function NavigationPane() {
    const pathname = usePathname();

    // what link is active by default
    const defaultActive = useMemo(() => {
        return (
            links.find((link) =>
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)) ?? links[0]);
    }, [pathname]);

    // what is currently hovered
    const [hovered, setHovered] = useState(defaultActive);

    // update hovered when pathname changes
    useEffect(() => {
        setHovered(defaultActive);
    }, [defaultActive]);

    return (
        <aside className="hidden h-fit w-full max-w-sm flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur md:sticky md:top-38 md:flex">
            <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-white/60">
                    Navigation :)
                </p>
                <ul className="mt-6 space-y-3">
                    {links.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`group relative flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                                        isActive ? "border-white/30 bg-white/10" : "border-white/10 bg-black/20 hover:border-white/30 hover:bg-white/5"
                                    }`}
                                    onMouseEnter={() => setHovered(link)}
                                    onFocus={() => setHovered(link)}
                                    onMouseLeave={() => setHovered(defaultActive)}
                                >
                  <span className="text-sm font-semibold tracking-wide">
                    {link.label}
                  </span>
                                    <span className="text-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    →
                  </span>
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-glow"
                                            className="absolute inset-0 -z-10"
                                            transition={{ type: "spring", stiffness: 250, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={hovered.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/70"
                >
                    <p className="font-semibold text-white">{hovered.label}</p>
                    <p className="mt-2 leading-relaxed">{hovered.description}</p>
                </motion.div>
            </AnimatePresence>
        </aside>
    );
}
