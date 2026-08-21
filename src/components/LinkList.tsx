import type { LinkItem } from "@/data/profile";
import LinkCard from "@/components/LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <div className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard key={link.id} {...link} />
      ))}
    </div>
  );
}
