import type { PageLinkEntry } from "@/data/pagelinks";
import NavigationLinkItem from "@/components/navigation/NavigationLinkItem";

interface NavigationLinkListProps {
  links: PageLinkEntry[];
  activeHref: string;
  onHover: (link: PageLinkEntry) => void;
  onResetHover: () => void;
}

export default function NavigationLinkList({
  links,
  activeHref,
  onHover,
  onResetHover,
}: NavigationLinkListProps) {
  return (
    <ul className="mt-6 space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <NavigationLinkItem
            link={link}
            isActive={link.href === activeHref}
            onHover={onHover}
            onResetHover={onResetHover}
          />
        </li>
      ))}
    </ul>
  );
}