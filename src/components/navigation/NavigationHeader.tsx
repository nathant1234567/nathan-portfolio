interface NavigationHeaderProps {
    title?: string;
    subtitle?: string;
}

export default function NavigationHeader({
                                             title = "Navigation :)",
                                             subtitle,
                                         }: NavigationHeaderProps) {
    return (
        <p className="text-xs font-semibold tracking-[0.3em] text-white/60">
            {title}
            {subtitle ? (
                <span className="block text-[0.7rem] tracking-[0.2em] text-white/50">
          {subtitle}
        </span>
            ) : null}
        </p>
    );
}