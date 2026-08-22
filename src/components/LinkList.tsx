"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "@/components/LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/click")
      .then((res) => res.json())
      .then((data: { counts: Record<string, number> }) => {
        setCounts(data.counts ?? {});
      })
      .catch(() => {});
  }, []);

  const handleClickLink = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          count={counts[link.id] ?? 0}
          onClickLink={handleClickLink}
        />
      ))}
    </div>
  );
}
