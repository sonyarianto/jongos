import { ArrowRight } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-6 py-14 text-center text-white sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_0%,rgba(192,38,211,0.4),transparent),radial-gradient(40%_60%_at_15%_100%,rgba(124,58,237,0.35),transparent),radial-gradient(40%_60%_at_85%_100%,rgba(251,191,36,0.2),transparent)]" />
        <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
          Ready? Your helper is{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
            one tap away
          </span>{" "}
          💬
        </h2>
        <p className="relative mx-auto mt-3 max-w-xl text-zinc-300">
          {site.name} lives inside WhatsApp. Start free, no install — and come back here anytime
          for new prompts and features.
        </p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="whatsapp" asChild>
            <a href={waLink()} target="_blank" rel="noreferrer">
              Chat with {site.name} <ArrowRight />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
            <a href="#try-it">Browse prompts</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
