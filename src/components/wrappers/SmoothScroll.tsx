// components/wrappers/SmoothScroll.tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";      // <-- register this too
import ScrollSmoother from "gsap/ScrollSmoother";    // <-- default import

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // bail out on server just in case
        if (typeof window === "undefined") return;
        if (!wrapperRef.current || !contentRef.current) return;

        // kill previous instance (hot reload safety)
        ScrollSmoother.get()?.kill();

        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 1.2,
            effects: true,
            normalizeScroll: true,
        });

        return () => {
            smoother.kill();
        };
    }, []);

    return (
        <div id="smooth-wrapper" ref={wrapperRef}>
            <div id="smooth-content" ref={contentRef}>
                {children}
            </div>
        </div>
    );
}
