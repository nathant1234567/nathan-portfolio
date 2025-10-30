'use client';

import type { CSSProperties, ReactNode } from 'react';

interface BorderFrameProps {
    children: ReactNode;
    className?: string;
    innerClassName?: string;
    gradientClassName?: string;
    radiusClassName?: string;
    padding?: number | string;
    style?: CSSProperties;
}

export function BorderFrame({
                                children,
                                className = '',
                                innerClassName = 'bg-nice-black inline-flex items-center justify-center',
                                gradientClassName = 'bg-gradient-to-tr from-gray-500 via-gray-300 to-white',
                                radiusClassName = 'rounded-xl',
                                padding = 3,
                                style,
                            }: BorderFrameProps) {
    const resolvedPadding =
        padding === undefined ? undefined : typeof padding === 'number' ? `${padding}px` : padding;

    const containerStyle: CSSProperties = {
        ...(resolvedPadding ? { padding: resolvedPadding } : {}),
        ...style,
    };

    return (
        <div
            className={`inline-flex items-center justify-center ${radiusClassName} ${gradientClassName} ${className}`}
            style={containerStyle}
        >
            <div className={`relative ${radiusClassName} ${innerClassName}`}>
                {children}
            </div>
        </div>
    );
}