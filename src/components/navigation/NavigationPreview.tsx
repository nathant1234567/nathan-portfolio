import { AnimatePresence, motion } from "framer-motion";

import type { PageLinkEntry } from "@/data/pagelinks";

interface NavigationPreviewProps {
    link: PageLinkEntry;
}

export default function NavigationPreview({ link }: NavigationPreviewProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/70"
            >
                <p className="font-semibold text-white">{link.label}</p>
                <p className="mt-2 leading-relaxed">{link.description}</p>
            </motion.div>
        </AnimatePresence>
    );
}