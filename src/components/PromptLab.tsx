import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { promptExamples, waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PromptLab() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      setCopied(null);
    }
  }

  return (
    <section id="try-it" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-green-700">Try it</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Tap a prompt → lands in WhatsApp
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        These are starter intents for your Meta AI bot. Click to open WhatsApp prefilled, or copy
        to tweak. Add your own intents in <code className="rounded bg-muted px-1.5 py-0.5">src/lib/site.ts</code>.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {promptExamples.map((p) => (
          <Card key={p.label} className="transition-shadow hover:shadow-md">
            <CardContent className="p-5">
              <p className="text-2xl">{p.icon}</p>
              <h3 className="mt-2 font-semibold">{p.label}</h3>
              <p className="mt-1 min-h-[3.5rem] text-sm text-muted-foreground">“{p.prompt}”</p>
              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="whatsapp" asChild className="flex-1">
                  <a href={waLink(p.prompt)} target="_blank" rel="noreferrer">
                    Open <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" onClick={() => copy(p.prompt)}>
                  {copied === p.prompt ? <Check className="text-green-600" /> : <Copy />}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
