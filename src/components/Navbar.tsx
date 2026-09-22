import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function Navbar() {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-bold text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 text-white">
            <MessageCircle className="h-5 w-5" />
          </span>
          {site.name}
        </a>
      </div>
    </header>
  );
}
