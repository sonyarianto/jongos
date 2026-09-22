import { ArrowRight, BatteryMedium, Signal, Wifi } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[330px]">
      <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-br from-violet-500/40 via-fuchsia-400/30 to-amber-300/50 blur-2xl" />
      {/* side buttons */}
      <div className="absolute -left-[2px] top-28 z-10 h-8 w-[3px] rounded-l-md bg-zinc-700" />
      <div className="absolute -left-[2px] top-40 z-10 h-12 w-[3px] rounded-l-md bg-zinc-700" />
      <div className="absolute -left-[2px] top-56 z-10 h-12 w-[3px] rounded-l-md bg-zinc-700" />
      <div className="absolute -right-[2px] top-44 z-10 h-16 w-[3px] rounded-r-md bg-zinc-700" />
      {/* frame */}
      <div className="relative rounded-[3rem] bg-zinc-950 p-2.5 shadow-2xl">
        {/* screen */}
        <div className="relative flex h-[600px] flex-col overflow-hidden rounded-[2.4rem] bg-white">
          {/* notch */}
          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-zinc-950" />
          {/* status bar */}
          <div className="flex items-center justify-between bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-600 px-7 pb-1 pt-3 text-[11px] font-semibold text-white">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <BatteryMedium className="h-3.5 w-3.5" />
            </span>
          </div>
          {/* chat header */}
          <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-600 px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-300 text-lg">
                ✨
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">Jongos • Meta AI</p>
                <p className="text-[11px] text-violet-100">online • replies instantly</p>
              </div>
            </div>
          </div>
          <div className="chat-bg flex flex-1 flex-col gap-2 overflow-hidden p-3 text-[13px] leading-snug">
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
            <div className="mt-auto flex items-center gap-2 rounded-full bg-white p-1.5 pl-4 text-zinc-400 shadow">
              <span className="flex-1 text-[12px]">Message…</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white">
                ➤
              </span>
            </div>
          </div>
          {/* home indicator */}
          <div className="flex justify-center bg-white pb-2 pt-1">
            <div className="h-1 w-28 rounded-full bg-zinc-900" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(168,85,247,0.18),transparent),radial-gradient(40%_35%_at_80%_10%,rgba(240,171,252,0.25),transparent),radial-gradient(40%_35%_at_15%_15%,rgba(252,211,77,0.2),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:pt-20">
        <div>
          <div className="flex flex-wrap gap-3">
            <Badge className="-rotate-2 border-2 border-zinc-900 text-sm shadow-[3px_3px_0_#18181b]">
              ✨ Powered by Meta AI
            </Badge>
            <Badge
              variant="secondary"
              className="rotate-1 border-2 border-zinc-900 text-sm shadow-[3px_3px_0_#18181b]"
            >
              No app to install
            </Badge>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Your everyday helper,{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
              right inside WhatsApp
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{site.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" variant="whatsapp" asChild>
              <a href={waLink()} target="_blank" rel="noreferrer">
                Chat on WhatsApp <ArrowRight />
              </a>
            </Button>
          </div>
          <p className="mt-4 -rotate-1 font-hand text-3xl text-fuchsia-600">
            free, no install, just chat! ✌️
          </p>
        </div>
        <PhoneMockup />
      </div>
    </section>
  );
}
