'use client';
import React from 'react';

export const BlackBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#06090a] text-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(88,154,183,0.12),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(181,131,255,0.08),transparent_60%),radial-gradient(circle_at_50%_85%,rgba(88,166,151,0.1),transparent_65%)] opacity-60"
            />
            <div className="relative">
                {children}
            </div>
        </div>
    );
};

// <div className="min-h-screen bg-nice-black text-white ">
//     {children}
// className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(88,154,183,0.12),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(181,131,255,0.2),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(88,166,151,0.8),transparent_65%)] opacity-60"