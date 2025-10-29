'use client';
import { useEffect } from "react";
import Link from "next/link";
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

export default function SimpleHome() {
    useGSAP(() => {
        gsap.from('.fade', { opacity: 0 , y : 30, duration: 1, stagger: 0.2});
    }, []);

    return (
        <main className="h-screen flex flex-col justify-center items-center text-center">
            <h1 className="fade text-4xl font-bold>">Nathan Thompson</h1>
            <p className="fade mt-3 text-grey-600">Hi, I&#39;m Nathan</p>
            <p className="fade mt-1 text-sm">Proficient in Java, Springboot, React, SQL</p>

            <div className="fade mt-8">
                <p>Enter my full portfolio!</p>
            </div>
        </main>
    )
}