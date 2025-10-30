'use client';

import { usePathname } from 'next/navigation';
import PageWrapper from "@/components/PageWrapper";

export default function ConditionalPageWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // detect if we're on the home page (root route)
    const isHome = pathname === '/';

    // For home page: render content directly
    // For other pages: wrap content in a bordered container
    if (isHome) {
        return <>{children}</>;
    }

    return <PageWrapper>{children}</PageWrapper>;
}
