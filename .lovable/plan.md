# Deluxe Dawakhana — rebuilt from scratch

A single cinematic page for MBBS / medical students: 20 rotating hand-painted scenes behind a smaller, ever-changing masthead, a mock '90s radio player, plus curated song and medical-movie suggestion sections ready to be wired to AI later.

## 1. Imagery — 20 scenes, all medical

- Best of both archives, merged: the strongest illustrated compositions from the barber-shop set are reused only where they can be re-shot as medical scenes; the MBBS set's best scenes carry over directly.
- The 5 illustrations uploaded in chat (rooftop chai + laptop pair, kite-sunset rooftop, book-and-lightbulb duo, hanging white coat with slippers, desk with stethoscope and orchid) are used directly as scenes — their aesthetic sets the visual language for everything else.
- The remaining scenes are generated in that same style so the set feels like one artist: dissection hall, 2 AM hostel skeleton, ward round, lecture theatre, histology lab, casualty at night, OT gowning corner, library night shift, mess dinner, college facade at dusk, physiology practical, convocation steps, notes-and-coffee desk, chai stall at the gate, rooftop dusk.
- Exactly 20 scenes. Each has a soft vignette so text stays readable.

## 2. Rotation and motion

- 8 seconds per scene, looping.
- Slow Ken Burns drift on the active image plus a ~1.2s cross-dissolve, so scenes glide rather than snap.
- Clickable scene dots jump instantly; `prefers-reduced-motion` falls back to a plain fade.

## 3. Masthead — smaller and alive

- Headline size cut roughly in half (from the current oversized clamp down to a moderate display size) so the artwork dominates the frame.
- The masthead is no longer static. Each scene carries its own header name, its own sub-caption line, and its own type treatment, cycling with the image:
  - Rotating names, e.g. डीलक्स दवाखाना, नाइट ड्यूटी रेडियो, चाय और सिलेबस, वार्ड 7, एनाटॉमी आवर्स, हॉस्टल छत, केज़ुअल्टी नाइट्स, कॉन्वो '99 — each paired to a fitting scene.
- Per-scene styling variation: alignment (centre / lower-left / lower-right), Devanagari vs Latin display face, one-line vs stacked, letter-spacing, and an occasional thin rule or small tag chip above the title. Defined as a small set of named "title treatments" mapped per scene, so it never reads as one fixed block.
- Text placement always avoids the busy side of its own image.

## 4. Page sections (one scrolling page)

1. **Hero** — rotating scenes, live masthead, IST clock, listeners-online pill, scene dots, mock player bar docked at the bottom.
2. **Tonight's Rotation** — curated '90s Hindi track list as cards with mood tags (Night Duty, Exam Week, Anatomy Hours, Post-Ward Chai). Clicking loads the track into the player bar; play/pause and skip are simulated, no audio.
3. **Medical Movie Reel** — curated medical-themed film cards (title, year, one-line why-it-hits, tag). Horizontal reel with a filmstrip feel.
4. **The Prescription** — a "pick your mood" panel: choose a mood chip and it prescribes one song + one movie from the curated data, presented as a pharmacy prescription slip. Suggestion logic lives in one small module with a single function so an AI backend can replace it without touching UI.
5. **Footer** — short about line, credits, Spotify link out.

## 5. Extra touches I'd add

- Vinyl/film grain overlay and subtle scanline for the retro feel.
- "Now on air" ticker strip that reads out the current scene's caption line.
- Album art in the player = the current scene, so it changes with the imagery.
- Keyboard shortcut: space toggles play, arrow keys move scenes.
- Prescription slip is shareable (copies a formatted text snippet).

## Technical notes

- Single route `src/routes/index.tsx` composing components under `src/components/dawakhana/`.
- 20 images in `src/assets/`; uploaded illustrations brought in via CDN asset pointers, generated ones as normal image imports.
- Data files: `src/data/scenes.ts` (image, header name, treatment id, caption, alt), `src/data/tracks.ts`, `src/data/movies.ts`, `src/lib/prescribe.ts` (the AI-replaceable suggestion function).
- Retro palette, display fonts and grain defined as tokens in `src/styles.css`; no hardcoded colour utilities in components.
- Ken Burns + dissolve are pure CSS; no new animation dependency.
- No backend in this build — mock player and curated lists only, structured for a later AI hook-up.
- Full head metadata on the route (title, description, og, twitter).
