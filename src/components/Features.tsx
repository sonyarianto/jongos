import { Bell, Languages, ListChecks, MessagesSquare, ScanText, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: MessagesSquare,
    tile: "bg-violet-100 text-violet-700",
    title: "Ask anything",
    desc: "Everyday questions, ideas, explanations — in plain language, right in chat.",
  },
  {
    icon: Bell,
    tile: "bg-pink-100 text-pink-700",
    title: "Reminders & routines",
    desc: "Morning plans, habits, nudges. Tell Jongos once, it remembers the rhythm.",
  },
  {
    icon: ScanText,
    tile: "bg-amber-100 text-amber-700",
    title: "Summarize anything",
    desc: "Paste a link or long text, get 5 sharp bullets back in seconds.",
  },
  {
    icon: Languages,
    tile: "bg-sky-100 text-sky-700",
    title: "Translate instantly",
    desc: "Travel, work, family — 20+ languages with natural phrasing.",
  },
  {
    icon: ListChecks,
    tile: "bg-rose-100 text-rose-700",
    title: "Lists & to-dos",
    desc: "Messy brain-dump in, tidy checklist out. Shopping, packing, planning.",
  },
  {
    icon: Sparkles,
    tile: "bg-emerald-100 text-emerald-700",
    title: "Meta AI inside",
    desc: "Built as an anchor for WhatsApp + Meta AI flows — ready for Cloud API next.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600">Features</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        One chat for all the little things
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        No new app. No login. Just WhatsApp — supercharged with a helpful AI that meets you where
        you already are.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${f.tile}`}>
                <f.icon className="h-5 w-5" />
              </span>
              <CardTitle className="pt-2">{f.title}</CardTitle>
              <CardDescription>{f.desc}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  );
}
