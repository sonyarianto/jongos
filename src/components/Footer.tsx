import { MessageCircle } from "lucide-react";
import { site, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 text-white">
            <MessageCircle className="h-4 w-4" />
          </span>
          {site.name}
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            — anchor for WhatsApp + Meta AI
          </span>
        </div>
        <nav className="flex gap-5 text-sm text-muted-foreground">
          <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-foreground">
            WhatsApp
          </a>
        </nav>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {site.name}. Demo landing page.</p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 text-white shadow-xl shadow-fuchsia-600/30 transition-transform hover:scale-105 hover:rotate-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
