export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "gilyang heo",
  bio: "사람이 힘들어",
  avatarUrl: "/profile.png",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "http://github.com/jung100hwa" },
  { id: "homepage", title: "홈페이지", url: "http://hershey-is.com/" },
  { id: "mail", title: "메일주소", url: "mailto:jung100hwa@gmail.com" },
];
