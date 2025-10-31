'use client';
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SectionWrapper from "@/components/layout/SectionWrapper";
import Avatar from "@/components/ui/Avatar";
import SkillRotator from "@/components/ui/SkillsRotator";

export default function Heading() {
    useGSAP(() => {
        gsap.from('.fade', { opacity: 0 , y : 30, duration: 1, stagger: 0.2});
    }, []);
    const headingRef = useRef<HTMLHeadingElement>(null)
    const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [showWave, setShowWave] = useState(false)

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

    const handleHeyMouseEnter = () => {
        if (hoverTimer.current || showWave) {
            return
        }

        hoverTimer.current = setTimeout(() => {
            setShowWave(true)
            hoverTimer.current = null
        }, 3000)
    }

    const handleHeyMouseLeave = () => {
        if (hoverTimer.current) {
            clearTimeout(hoverTimer.current)
        }
        hoverTimer.current = null
        setShowWave(false)
    }

    useEffect(() => {
        return () => {
            if (hoverTimer.current) {
                clearTimeout(hoverTimer.current)
            }
        }
    }, [])

    return (
            <SectionWrapper className="pt-40">
                <div className="flex items-baseline gap-13">
                    <h1 className="fade text-5xl font-bold">
                        <span onMouseEnter={handleHeyMouseEnter}
                              onMouseLeave={handleHeyMouseLeave}
                              className="inline-block cursor-help">{showWave ? '👋' : 'Hey'}</span>, I’m <span onMouseEnter={handleMouseEnter}
                                       onMouseLeave={handleMouseLeave} ref={headingRef} className="inline-block">Nathan</span>
                    </h1>
                    <Avatar src="/TempAvatar.png" size={100} border={true} />
                </div>
                <p className="fade text-3xl mt-7 text-grey-600">Second year student at the <b>University of Kent</b></p>
                <SkillRotator/>
            </SectionWrapper>

    )
}