import { ArrowRight, QrCode, Send, Smartphone } from "lucide-react";
import { waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Smartphone,
    step: "1",
    title: "Tap a button",
    desc: "Every CTA opens WhatsApp with a prefilled message — no typing needed.",
  },
  {
    icon: Send,
    step: "2",
    title: "Say hi",
    desc: "Hit send. HelpMe (Meta AI) replies instantly and learns your style.",
  },
  {
    icon: QrCode,
    step: "3",
    title: "Build from there",
    desc: "Next: connect Cloud API webhooks, broadcasts, payments — this page stays the anchor.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">How it works</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          From landing page → WhatsApp in 3 taps
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-4xl font-extrabold text-muted">0{s.step}</span>
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button variant="whatsapp" asChild>
            <a href={waLink("Hi! 👋 Show me what you can do.")} target="_blank" rel="noreferrer">
              Try the first message <ArrowRight />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Developer? Point <code className="rounded bg-muted px-1.5 py-0.5">waLink()</code> at
            your Cloud API number when ready.
          </p>
        </div>
      </div>
    </section>
  );
}
