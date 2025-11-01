import { ReactNode } from "react";

export default function SectionWrapper({ children, full = false, className = "" }: {
    children: ReactNode;
    full?: boolean;
    className?: string;
}) {
    return (
        <section
            className={`${full ? "min-h-screen" : "py-7"} flex flex-col items-start justify-center px-4 sm:px-10 md:px-12 lg:px-0 lg:pl-20 ${className}`}
        >
            {children}
        </section>
    );
}