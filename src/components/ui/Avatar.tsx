'use client';

import Image from "next/image";
import { BorderFrame } from "@/components/layout/BorderFrame";

interface AvatarProps {
    src: string;
    size?: number;
    border?: boolean;
    alt?: string;
}

export default function Avatar({ src, size = 80, border = false, alt = "Avatar" }: AvatarProps) {
    const avatarImage = (
        <div
            className="relative rounded-full overflow-hidden"
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

    if (border) {
        return (
            <BorderFrame
                className="flex-shrink-0"
                radiusClassName="rounded-full"
                padding={3}
            >
                {avatarImage}
            </BorderFrame>
        );
    }

    return <div className="flex-shrink-0">{avatarImage}</div>;
}
