"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url }: LinkItem) {
  const handleClick = () => {
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
      className="block w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-center font-medium text-gray-900 dark:text-gray-100 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
    >
      {title}
    </a>
  );
}
