import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is this an official Meta / WhatsApp product?",
    a: "No — Jongos is a demo anchor page that deep-links into WhatsApp (wa.me) with prefilled prompts. When you're ready, connect it to the WhatsApp Cloud API + Meta AI backend.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. Users just need WhatsApp. Tap any button, hit send, and the assistant replies in chat.",
  },
  {
    q: "How do I point it at my real bot number?",
    a: "Edit src/lib/site.ts and set whatsappNumber to your WhatsApp Business number (country code, no +). All CTAs update automatically via waLink().",
  },
  {
    q: "What can I build next with Meta AI?",
    a: "Webhooks for inbound messages, quick-reply buttons, templates/broadcasts, reminders via scheduled messages, and RAG over your own docs. This landing page stays the stable entry point.",
  },
  {
    q: "Is it free?",
    a: "Starting a chat is free. WhatsApp Cloud API pricing applies once you wire a production bot (per-conversation pricing by Meta).",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight">Questions, answered</h2>
      <div className="mt-8 divide-y rounded-2xl border bg-card">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium cursor-pointer"
              >
                {f.q}
                <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", isOpen && "rotate-180")} />
              </button>
              {isOpen && <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
