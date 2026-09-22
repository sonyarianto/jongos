/**
 * Central site config — edit this to anchor the landing page
 * to your WhatsApp / Meta AI bot.
 *
 * NEXT STEPS with Meta AI / WhatsApp Cloud API:
 * 1. Put your WhatsApp Business number in WHATSAPP_NUMBER (country code, no +)
 * 2. Every CTA on the page uses waLink() so it deep-links with prefilled text
 * 3. Later: swap waLink() for your Meta AI bot webhook / Cloud API endpoint
 */

export const site = {
  name: "Jongos",
  tagline: "Your everyday helper, right inside WhatsApp",
  description:
    "Jongos is your personal assistant with the skills to help you get things done and keep your life well organized.",
  // Official Meta AI WhatsApp number (+1 313 555 0002)
  whatsappNumber: "13135550002",
  defaultMessage: "Hi! 👋 I found you via Jongos — show me what you can do.",
} as const;

export function waLink(message: string = site.defaultMessage): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export const promptExamples = [
  {
    label: "Morning plan",
    icon: "☀️",
    prompt: "Plan my day: 3 priorities, 1 workout, dinner idea.",
  },
  {
    label: "Summarize",
    icon: "📝",
    prompt: "Summarize this article in 5 bullets: [paste link]",
  },
  {
    label: "Translate",
    icon: "🌍",
    prompt: "Translate to Spanish: 'Where is the nearest pharmacy?'",
  },
  {
    label: "Remind me",
    icon: "⏰",
    prompt: "Remind me every weekday at 8am to drink water.",
  },
  {
    label: "Shopping list",
    icon: "🛒",
    prompt: "Turn this into a tidy shopping list: milk eggs bread cheese",
  },
  {
    label: "Ask anything",
    icon: "💡",
    prompt: "Explain Meta AI on WhatsApp in one sentence.",
  },
] as const;
