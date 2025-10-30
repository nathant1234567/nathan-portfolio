import Link from "next/link";
import { motion } from "framer-motion";

import type { PageLinkEntry } from "@/data/pagelinks";

interface NavigationLinkItemProps {
    link: PageLinkEntry;
    isActive: boolean;
    onHover: (link: PageLinkEntry) => void;
    onResetHover: () => void;
}

export default function NavigationLinkItem({link, isActive, onHover, onResetHover,}: NavigationLinkItemProps) {
    return (
        <Link
            href={link.href}
            className={`group relative flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                isActive
                    ? "border-white/30 bg-white/10"
                    : "border-white/10 bg-black/20 hover:border-white/30 hover:bg-white/5"
            }`}
            onMouseEnter={() => onHover(link)}
            onFocus={() => onHover(link)}
            onMouseLeave={onResetHover}
        >
            <span className="text-sm font-semibold tracking-wide">{link.label}</span>
            <span className="text-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100">→</span>
            {isActive && (
                <motion.span
                    layoutId="active-glow"
                    className="absolute inset-0 -z-10"
                    transition={{ type: "spring", stiffness: 250, damping: 30 }}
                />
            )}
        </Link>
    );
}