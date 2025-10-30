// A custom React hook that returns true if the user has scrolled down more than a specified threshold.

'use client';
import { useEffect, useState } from 'react';

export function useScrolled(threshold: number = 50) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return scrolled;
}