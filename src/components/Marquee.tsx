const items = [
  "ASK ANYTHING",
  "NO APP NEEDED",
  "FREE TO START",
  "REPLIES IN SECONDS",
  "BAHASA & ENGLISH OK",
];

export function Marquee() {
  return (
    <div className="overflow-clip py-3">
      <div className="-rotate-1 border-y-4 border-zinc-950 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 py-3">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...items, ...items].map((t, i) => (
            <span
              key={i}
              className="mx-6 font-display text-sm tracking-wider text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.35)]"
            >
              ✦ {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
