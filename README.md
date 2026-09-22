# HelpMe — WhatsApp + Meta AI landing page

Simple, nice landing page built with **Vite + React + TypeScript + Tailwind CSS + shadcn/ui-style components + TanStack Router / Query**.

The page is an **anchor** for a WhatsApp / Meta AI bot: every CTA deep-links into WhatsApp with a prefilled message.

## Stack
- Vite 8, React 19, TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- shadcn-style `Button / Badge / Card` in `src/components/ui/`
- TanStack Router (code-based route) + TanStack Query provider

## Run
```bash
npm install
npm run dev
npm run build
```

## Point it at your real bot
Edit `src/lib/site.ts`:

```ts
export const site = {
  whatsappNumber: "15551234567", // your WhatsApp Business number, country code + number, no +
  ...
}
```

All buttons use `waLink(message)` → `https://wa.me/<number>?text=...`.

## Next steps with Meta AI / WhatsApp Cloud API
1. Create a WhatsApp Business app in Meta Developers, get a test number.
2. Replace `whatsappNumber` with your number.
3. Add a webhook endpoint for inbound messages (Cloud API) — keep this page as the stable public entry.
4. Extend `promptExamples` in `src/lib/site.ts` with your real bot intents.
5. Later: templates/broadcasts, reminders, RAG over your docs.

## Structure
- `src/lib/site.ts` — number, default message, prompt intents
- `src/components/` — Navbar, Hero (phone mockup), Features, HowItWorks, PromptLab, Faq, FinalCta, Footer
- `src/pages/Landing.tsx` — page composition
- `src/router.tsx` — TanStack Router + Query setup
