type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
      </div>
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{name}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </div>
  );
}
