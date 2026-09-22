import { site } from "@/lib/site";

export function Navbar() {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
          <span className="inline-block -rotate-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
            {site.name}
          </span>
        </a>
      </div>
    </header>
  );
}
