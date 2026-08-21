export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarUrl: "/avatar.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
