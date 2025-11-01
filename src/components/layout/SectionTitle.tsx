import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4';

interface SectionTitleProps {
    title: string;
    icon: ReactNode;
    as?: HeadingTag;
    className?: string;
    iconClassName?: string;
}

export function SectionTitle({title, icon, as = 'h2', className, iconClassName,}: SectionTitleProps) {
    const Component = as;

    return (
        <Component className={cn('mb-8 flex items-center gap-4 text-4xl font-bold', className)}>
            <span>{title}</span>
            <span className={cn('text-3xl', iconClassName)} aria-hidden>
                {icon}
            </span>
        </Component>
    );
}