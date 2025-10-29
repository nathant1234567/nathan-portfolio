'use client';
import { BlackBackground } from '@/components/BlackBackground';
import { useEffect } from "react";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export default function SimpleHome() {
    useGSAP(() => {
        gsap.from('.fade', { opacity: 0 , y : 30, duration: 1, stagger: 0.2});
    }, []);

    return (
        <BlackBackground>
            <main className="h-screen flex flex-col justify-center items-center text-center">
                <h1 className="fade text-5xl font-bold>">Nathan Thompson</h1>
                <p className="fade text-3xl mt-7 text-grey-600">Hi, I&#39;m Nathan</p>
                <p className="fade  mt-3 text-2xl">Proficient in Java, Springboot, React, SQL</p>

                <div className="fade mt-8">
                    <p>Enter my full portfolio!</p>
                </div>
            </main>
        </BlackBackground>
    )
}