'use client';
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    const path = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={path} // re-triggers animation on route change
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}

            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
