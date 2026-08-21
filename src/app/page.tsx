import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import DarkModeToggle from "@/components/DarkModeToggle";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-6 py-12">
      <div className="flex w-full justify-end">
        <DarkModeToggle />
      </div>
      <Profile {...profile} />
      <LinkList links={links} />
    </main>
  );
}
