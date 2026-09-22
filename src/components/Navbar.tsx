import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { site, waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Try it", href: "#try-it" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-bold text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 text-white">
            <MessageCircle className="h-5 w-5" />
          </span>
          {site.name}
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="whatsapp" asChild>
            <a href={waLink()} target="_blank" rel="noreferrer">
              <MessageCircle /> Chat on WhatsApp
            </a>
          </Button>
        </div>
        <button
          className="md:hidden rounded-lg border px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>
      <div className={cn("md:hidden border-t bg-background px-4", open ? "block" : "hidden")}>
        <nav className="flex flex-col gap-1 py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-xl bg-[#25D366] px-3 py-2.5 text-center text-sm font-semibold text-white"
          >
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
