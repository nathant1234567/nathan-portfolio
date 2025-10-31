'use client';

import { usePathname } from 'next/navigation';
import PageWrapper from "@/components/layout/PageWrapper";

export default function ConditionalPageWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isHome = pathname === '/';

    if (isHome) {
        return <>{children}</>;
    }

    return <PageWrapper>{children}</PageWrapper>;
}
