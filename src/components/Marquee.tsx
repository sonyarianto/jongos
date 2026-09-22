const items = [
  "ASK ANYTHING",
  "NO APP NEEDED",
  "FREE TO START",
  "REPLIES IN SECONDS",
];

// One half of the loop — repeated enough times to always stay
// wider than the viewport, so the -50% loop point is seamless.
const half = [...items, ...items, ...items, ...items];

export function Marquee() {
  return (
    <div className="overflow-clip py-5">
      <div className="-mx-4 -rotate-1 border-y-4 border-zinc-950 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 py-3">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {half.map((t, i) => (
                <span
                  key={i}
                  className="mx-6 font-display text-sm font-semibold tracking-wider text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.35)]"
                >
                  ✦ {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
