import type { Scene, Treatment } from "@/data/scenes";

type Layout = {
  wrap: string;
  align: string;
  title: string;
  rule: boolean;
  chip: boolean;
};

const LAYOUTS: Record<Treatment, Layout> = {
  "center-stack": {
    wrap: "inset-x-0 top-[18%] items-center",
    align: "text-center items-center",
    title: "font-deva text-[clamp(2.4rem,6vw,5rem)] leading-[1.05]",
    rule: false,
    chip: false,
  },
  "center-line": {
    wrap: "inset-x-0 top-[22%] items-center",
    align: "text-center items-center",
    title: "font-deva text-[clamp(2rem,5vw,4rem)] leading-tight",
    rule: true,
    chip: false,
  },
  "lower-left": {
    wrap: "inset-x-0 bottom-[30%] items-start",
    align: "text-left items-start",
    title: "font-deva text-[clamp(2rem,5.2vw,4.2rem)] leading-[1.1]",
    rule: false,
    chip: false,
  },
  "lower-right": {
    wrap: "inset-x-0 bottom-[30%] items-end",
    align: "text-right items-end",
    title: "font-deva text-[clamp(2rem,5.2vw,4.2rem)] leading-[1.1]",
    rule: true,
    chip: false,
  },
  "upper-left-rule": {
    wrap: "inset-x-0 top-[16%] items-start",
    align: "text-left items-start",
    title: "font-display text-[clamp(1.9rem,4.6vw,3.6rem)] uppercase leading-tight",
    rule: true,
    chip: false,
  },
  "chip-center": {
    wrap: "inset-x-0 top-[20%] items-center",
    align: "text-center items-center",
    title: "font-deva text-[clamp(2rem,5vw,4rem)] leading-tight",
    rule: false,
    chip: true,
  },
  "wide-tracked": {
    wrap: "inset-x-0 top-[21%] items-center",
    align: "text-center items-center",
    title:
      "font-display text-[clamp(1.5rem,3.4vw,2.6rem)] uppercase tracking-[0.28em] leading-snug",
    rule: false,
    chip: false,
  },
  "left-serif": {
    wrap: "inset-x-0 bottom-[34%] items-start",
    align: "text-left items-start",
    title: "font-deva italic text-[clamp(2rem,4.8vw,3.8rem)] leading-tight",
    rule: false,
    chip: true,
  },
};

export function Masthead({ scene, index }: { scene: Scene; index: number }) {
  const l = LAYOUTS[scene.treatment];

  return (
    <div className={`pointer-events-none absolute z-10 flex px-6 sm:px-14 ${l.wrap}`}>
      <div key={index} className={`flex max-w-2xl animate-fade-in flex-col gap-3 ${l.align}`}>
        {l.chip ? (
          <span className="pointer-events-auto rounded-full border border-primary/50 bg-background/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
            {scene.kicker}
          </span>
        ) : (
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            {scene.kicker}
          </span>
        )}

        {l.rule && <span className="h-px w-16 bg-primary/70" />}

        <h1
          className={`text-cream drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)] ${l.title}`}
        >
          {scene.title}
        </h1>

        <p className="max-w-md text-sm text-cream/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-base">
          {scene.line}
        </p>
      </div>
    </div>
  );
}
