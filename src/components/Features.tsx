import { Bell, Languages, ListChecks, MessagesSquare, ScanText, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: MessagesSquare,
    title: "Ask anything",
    desc: "Everyday questions, ideas, explanations — in plain language, right in chat.",
  },
  {
    icon: Bell,
    title: "Reminders & routines",
    desc: "Morning plans, habits, nudges. Tell HelpMe once, it remembers the rhythm.",
  },
  {
    icon: ScanText,
    title: "Summarize anything",
    desc: "Paste a link or long text, get 5 sharp bullets back in seconds.",
  },
  {
    icon: Languages,
    title: "Translate instantly",
    desc: "Travel, work, family — 20+ languages with natural phrasing.",
  },
  {
    icon: ListChecks,
    title: "Lists & to-dos",
    desc: "Messy brain-dump in, tidy checklist out. Shopping, packing, planning.",
  },
  {
    icon: Sparkles,
    title: "Meta AI inside",
    desc: "Built as an anchor for WhatsApp + Meta AI flows — ready for Cloud API next.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-green-700">Features</p>
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
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
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
