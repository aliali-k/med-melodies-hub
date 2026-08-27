import { MOVIES, type Movie } from "@/data/movies";
import { TRACKS, type Mood, type Track } from "@/data/tracks";

export type Prescription = {
  mood: Mood;
  track: Track;
  movie: Movie;
  dose: string;
};

const DOSES: Record<Mood, string> = {
  "Night Duty": "One track on loop, one film after the shift. Do not skip meals.",
  "Exam Week": "Play twice before revision, watch once after the paper.",
  "Anatomy Hours": "Best taken with strong chai and an open atlas.",
  "Post-Ward Chai": "Half an hour, phone face down, chappals off.",
  "Hostel Rooftop": "To be consumed on a terrace, after sunset, with company.",
};

function pick<T>(items: T[], seed: number): T | undefined {
  if (items.length === 0) return undefined;
  return items[seed % items.length];
}

/**
 * Curated, deterministic-ish suggestion engine.
 * Swap the body for an AI call later — the signature stays the same.
 */
export function prescribe(mood: Mood, seed = Math.floor(Math.random() * 997)): Prescription {
  const moodTracks = TRACKS.filter((t) => t.mood === mood);
  const moodMovies = MOVIES.filter((m) => m.mood === mood);
  const track = pick(moodTracks, seed) ?? TRACKS[0]!;
  const movie = pick(moodMovies, seed + 1) ?? MOVIES[0]!;
  return { mood, track, movie, dose: DOSES[mood] };
}

export function prescriptionText(p: Prescription): string {
  return [
    "डीलक्स दवाखाना — Prescription",
    `Mood: ${p.mood}`,
    `Song: ${p.track.title} — ${p.track.artist} (${p.track.film}, ${p.track.year})`,
    `Film: ${p.movie.title} (${p.movie.year})`,
    `Dose: ${p.dose}`,
  ].join("\n");
}
