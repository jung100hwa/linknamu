export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "gilyang heo",
  bio: "사람이 힘들어",
  avatarUrl: "/avatar.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
