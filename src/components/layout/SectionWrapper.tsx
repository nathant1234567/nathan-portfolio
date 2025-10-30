import { ReactNode } from "react";

export default function SectionWrapper({ children, full = false, className = "" }: {
    children: ReactNode;
    full?: boolean;
    className?: string;
}) {
    return (
        <section
            className={`${full ? "min-h-screen" : "py-7"} flex flex-col justify-center items-start pl-20 ${className}`}
        >
            {children}
        </section>
    );
}