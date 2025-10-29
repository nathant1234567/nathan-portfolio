'use client';
import React from 'react';

export const BlackBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            {children}
        </div>
    );
};