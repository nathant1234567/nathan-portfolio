'use client';
import React from 'react';

export const BlackBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-nice-black text-white ">
            {children}
        </div>
    );
};