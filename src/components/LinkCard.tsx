"use client";

import type { LinkItem } from "@/data/profile";

type LinkCardProps = LinkItem & {
  count: number;
  onClickLink: (id: string) => void;
};

export default function LinkCard({ id, title, url, count, onClickLink }: LinkCardProps) {
  const handleClick = () => {
    onClickLink(id);
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="relative block w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-center font-medium text-gray-900 dark:text-gray-100 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
    >
      {title}
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-normal text-gray-400 dark:text-gray-500">
        {count}회
      </span>
    </a>
  );
}
