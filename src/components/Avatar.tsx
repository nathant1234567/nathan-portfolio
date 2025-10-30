'use client';

import Image from "next/image";

interface AvatarProps {
    src: string;
    size?: number;     // default size if not specified
    border?: boolean;  // optional border
    alt?: string;
}

export default function Avatar({ src, size = 80, border = false, alt = "Avatar" }: AvatarProps) {
    return (
        <div
            className={`relative rounded-full overflow-hidden flex-shrink-0 ${
                border ? "p-[3px] bg-gradient-to-tr from-gray-400 to-white" : ""
            }`}
            style={{ width: size, height: size }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover rounded-full"
                sizes={`${size}px`}
                priority
            />
        </div>
    );
}
