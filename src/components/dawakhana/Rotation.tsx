import { Music4 } from "lucide-react";

import { TRACKS, type Track } from "@/data/tracks";

export function Rotation({
  currentId,
  onSelect,
}: {
  currentId: string;
  onSelect: (t: Track) => void;
}) {
  return (
    <section id="rotation" className="mx-auto w-full max-w-6xl px-6 py-20">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary">
            side a
          </p>
          <h2 className="mt-2 font-deva text-3xl text-cream sm:text-4xl">आज की रोटेशन</h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Twelve songs sorted by what your day did to you. Tap one to load it into the radio.
        </p>
      </header>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TRACKS.map((t, i) => {
          const active = t.id === currentId;
          return (
            <li key={t.id}>
              <button
                onClick={() => onSelect(t)}
                className={`group flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-colors ${
                  active
                    ? "border-primary bg-secondary/70"
                    : "border-border bg-card/50 hover:border-primary/60 hover:bg-secondary/50"
                }`}
              >
                <span className="mt-0.5 font-display text-lg text-primary tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="truncate font-medium text-cream">{t.title}</span>
                    {active && <Music4 className="h-3.5 w-3.5 flex-none text-primary" />}
                  </span>
                  <span className="mt-1 block truncate text-xs text-muted-foreground">
                    {t.artist} · {t.film}
                  </span>
                  <span className="mt-3 inline-block rounded-full border border-primary/40 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-primary">
                    {t.mood}
                  </span>
                </span>
                <span className="text-xs text-muted-foreground tabular-nums">{t.duration}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
