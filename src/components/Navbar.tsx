import { site } from "@/lib/site";

export function Navbar() {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-2xl text-zinc-950 sm:text-3xl">
          <span className="inline-block -rotate-1 font-semibold">{site.name}</span>
        </a>
      </div>
    </header>
  );
}
