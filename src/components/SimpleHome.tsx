'use client';
import { BlackBackground } from '@/components/BlackBackground';
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export default function SimpleHome() {
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
        <BlackBackground>
            <main className="h-screen flex flex-col justify-center items-center text-center">
                <h1 ref={headingRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="fade text-5xl font-bold cursor-pointer"
                >
                    Hey, I’m Nathan
                </h1>
                <p className="fade text-3xl mt-7 text-grey-600">Second year student at the University of Kent</p>
                <p className="fade  mt-3 text-2xl">Proficient in Java, Springboot, React, SQL</p>

                <div className="fade mt-8">
                    <p>Enter my full portfolio!</p>
                </div>
            </main>
        </BlackBackground>
    )
}