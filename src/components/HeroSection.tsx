"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.fromTo(textRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" });
    }, []);

    return (
        <section className="h-screen flex items-center justify-center bg-amber-200 text-white">
            <h1 className="text-5xl" ref={textRef}>hello_world()</h1>
        </section>
    );
}