import { Pause, Play, SkipBack, SkipForward, Radio } from "lucide-react";

import type { Track } from "@/data/tracks";

type Props = {
  track: Track;
  art: string;
  playing: boolean;
  onToggle: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function PlayerBar({ track, art, playing, onToggle, onPrev, onNext }: Props) {
  return (
    <div className="flex w-full max-w-2xl items-center gap-4 rounded-2xl border border-border bg-background/55 px-4 py-3 text-cream shadow-2xl backdrop-blur-xl sm:px-5">
      <img
        src={art}
        alt=""
        aria-hidden="true"
        className={`h-12 w-12 flex-none rounded-full border border-primary/50 object-cover ${
          playing ? "spin-slow" : ""
        }`}
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{track.title}</p>
        <p className="truncate text-xs text-muted-foreground">
          {track.artist} · {track.film} ({track.year})
        </p>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          onClick={onPrev}
          aria-label="Previous track"
          className="rounded-full p-2 text-cream/80 transition-colors hover:bg-secondary/60 hover:text-cream"
        >
          <SkipBack className="h-4 w-4" />
        </button>
        <button
          onClick={onToggle}
          aria-label={playing ? "Pause" : "Play"}
          className="rounded-full bg-primary p-2.5 text-primary-foreground transition-transform hover:scale-105"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button
          onClick={onNext}
          aria-label="Next track"
          className="rounded-full p-2 text-cream/80 transition-colors hover:bg-secondary/60 hover:text-cream"
        >
          <SkipForward className="h-4 w-4" />
        </button>
      </div>
      <div className="hidden items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-primary sm:flex">
        <Radio className="h-3.5 w-3.5" />
        {track.duration}
      </div>
    </div>
  );
}
