import { Clapperboard } from "lucide-react";

import { MOVIES } from "@/data/movies";

export function MovieReel() {
  return (
    <section id="reel" className="w-full border-y border-border bg-card/40 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary">
              side b
            </p>
            <h2 className="mt-2 font-deva text-3xl text-cream sm:text-4xl">दवाखाना फ़िल्म रील</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Medicine on screen — the ones worth a night off from the syllabus.
          </p>
        </header>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:px-[max(1.5rem,calc(50%-36rem))]">
        {MOVIES.map((m) => (
          <article
            key={m.id}
            className="flex w-72 flex-none snap-start flex-col justify-between rounded-xl border border-border bg-background/60 p-5"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <Clapperboard className="h-4 w-4 text-primary" />
                <span className="font-display text-sm text-primary tabular-nums">{m.year}</span>
              </div>
              <h3 className="font-display text-xl leading-snug text-cream">{m.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{m.note}</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.2em]">
              <span className="text-cream/60">{m.tag}</span>
              <span className="rounded-full border border-primary/40 px-2 py-0.5 text-primary">
                {m.mood}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
