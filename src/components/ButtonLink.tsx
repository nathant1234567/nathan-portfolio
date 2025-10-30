import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ButtonLink({ href, children, className = "" }: ButtonLinkProps) {
  return (
      <SectionWrapper>
    <Link
      href={href}
      className={`inline-block px-20 py-2 rounded-lg border border-gray-500 hover:bg-white/10 transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
      </SectionWrapper>
  );
}
