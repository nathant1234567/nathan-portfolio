'use client';
import { BlackBackground } from '@/components/BlackBackground';
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SectionWrapper from "@/components/SectionWrapper";
import Avatar from "@/components/Avatar";

export default function Heading() {
    useGSAP(() => {
        gsap.from('.fade', { opacity: 0 , y : 30, duration: 1, stagger: 0.2});
    }, []);
    const headingRef = useRef<HTMLHeadingElement>(null)

    const handleMouseEnter = () => {
        const colorDuration = 0.1;

        gsap.to(headingRef.current, {
            keyframes: [
                { color: "#F1E6E4", duration: colorDuration },
                { color: "#EADAD7", duration: colorDuration },
                { color: "#E3CDCA", duration: colorDuration },
                { color: "#DCC0BC", duration: colorDuration }
            ],
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        gsap.killTweensOf(headingRef.current);
        gsap.to(headingRef.current, { color: "#F1E6E4", duration: 0.5 });
    };

    return (
            <SectionWrapper className="pt-40">
                <div className="flex items-center gap-13">
                    <h1 className="fade text-5xl font-bold cursor-pointer">
                        Hey, I’m <span onMouseEnter={handleMouseEnter}
                                       onMouseLeave={handleMouseLeave} ref={headingRef} className="inline-block">Nathan</span>
                    </h1>
                    <Avatar src="/TempAvatar.png" size={100} border={true} />
                </div>
                <p className="fade text-3xl mt-7 text-grey-600">Second year student at the University of Kent</p>
                <p className="fade  mt-3 text-2xl">Proficient in Java, Springboot, React, SQL</p>
            </SectionWrapper>

    )
}