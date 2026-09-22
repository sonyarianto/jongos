import { ArrowRight, BadgeCheck, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#25D366]/30 via-emerald-100 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border-8 border-zinc-900 bg-white shadow-2xl">
        <div className="bg-[#075E54] px-4 py-3 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-lg">
              ✨
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">Jongos • Meta AI</p>
              <p className="text-[11px] text-emerald-100">online • replies instantly</p>
            </div>
          </div>
        </div>
        <div className="chat-bg flex flex-col gap-2 p-3 text-[13px] leading-snug">
          <div className="max-w-[80%] rounded-xl rounded-tl-sm bg-white p-2.5 shadow">
            Hi! I'm Jongos 👋 Ask me anything — planning, summaries, reminders.
          </div>
          <div className="max-w-[80%] self-end rounded-xl rounded-tr-sm bg-[#DCF8C6] p-2.5 shadow">
            Plan my day: gym, deep work, dinner idea?
          </div>
          <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white p-2.5 shadow">
            <p className="font-semibold">☀️ Your day:</p>
            <p>• 7:00 Gym — legs + 10 min walk</p>
            <p>• 9–12 Deep work (phone on DND)</p>
            <p>• 19:30 Dinner: shakshuka 🍳</p>
            <p className="mt-1 text-[11px] text-zinc-500">Want me to remind you at 7am?</p>
          </div>
          <div className="max-w-[70%] self-end rounded-xl rounded-tr-sm bg-[#DCF8C6] p-2.5 shadow">
            Yes please 🙏
          </div>
          <div className="max-w-[80%] rounded-xl rounded-tl-sm bg-white p-2.5 shadow">
            Done ✅ I'll ping you at 7:00am.
          </div>
          <div className="mt-1 flex items-center gap-2 rounded-full bg-white p-1.5 pl-4 text-zinc-400 shadow">
            <span className="flex-1 text-[12px]">Message…</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
              ➤
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(37,211,102,0.15),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:pt-20">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge>✨ Powered by Meta AI</Badge>
            <Badge variant="secondary">No app to install</Badge>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{site.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" variant="whatsapp" asChild>
              <a href={waLink()} target="_blank" rel="noreferrer">
                Start chatting <ArrowRight />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
          <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-green-600" /> Replies in seconds
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-green-600" /> Private by design
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-green-600" /> Free to start
            </div>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4" /> This page is your anchor — every button deep-links
            into WhatsApp with a prefilled prompt.
          </p>
        </div>
        <PhoneMockup />
      </div>
    </section>
  );
}
