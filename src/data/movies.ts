import type { Mood } from "./tracks";

export type Movie = {
  id: string;
  title: string;
  year: number;
  note: string;
  tag: string;
  mood: Mood;
};

export const MOVIES: Movie[] = [
  {
    id: "m1",
    title: "Munna Bhai M.B.B.S.",
    year: 2003,
    note: "The jaadu ki jhappi that every anatomy batch quotes at least once a week.",
    tag: "Hindi · comedy",
    mood: "Post-Ward Chai",
  },
  {
    id: "m2",
    title: "3 Idiots",
    year: 2009,
    note: "Not medicine, but every exam-week panic attack lives inside this film.",
    tag: "Hindi · campus",
    mood: "Exam Week",
  },
  {
    id: "m3",
    title: "Anand",
    year: 1971,
    note: "The reason half of us still cry in the doctors' room.",
    tag: "Hindi · classic",
    mood: "Night Duty",
  },
  {
    id: "m4",
    title: "Ek Doctor Ki Maut",
    year: 1990,
    note: "Research, ego, and what the system does to a good clinician.",
    tag: "Hindi · drama",
    mood: "Anatomy Hours",
  },
  {
    id: "m5",
    title: "Patch Adams",
    year: 1998,
    note: "Bedside manner as a whole personality. Watch before your first ward posting.",
    tag: "English · drama",
    mood: "Post-Ward Chai",
  },
  {
    id: "m6",
    title: "The Doctor",
    year: 1991,
    note: "A surgeon becomes the patient. The empathy lecture nobody skips.",
    tag: "English · drama",
    mood: "Night Duty",
  },
  {
    id: "m7",
    title: "Awakenings",
    year: 1990,
    note: "Neurology as heartbreak. Robin Williams, again, unfortunately.",
    tag: "English · neuro",
    mood: "Anatomy Hours",
  },
  {
    id: "m8",
    title: "Gifted Hands",
    year: 2009,
    note: "For the 3 AM version of you that wants to be a neurosurgeon.",
    tag: "English · biopic",
    mood: "Exam Week",
  },
  {
    id: "m9",
    title: "Contagion",
    year: 2011,
    note: "Micro syllabus, but with a soundtrack and a body count.",
    tag: "English · epidemic",
    mood: "Anatomy Hours",
  },
  {
    id: "m10",
    title: "Dear Zindagi",
    year: 2016,
    note: "Therapy, boundaries, and permission to not be fine during posting.",
    tag: "Hindi · slice of life",
    mood: "Hostel Rooftop",
  },
  {
    id: "m11",
    title: "Wit",
    year: 2001,
    note: "Palliative care taught better than any lecture on the topic.",
    tag: "English · drama",
    mood: "Night Duty",
  },
  {
    id: "m12",
    title: "Guzaarish",
    year: 2010,
    note: "Ethics viva in film form: autonomy versus everything else.",
    tag: "Hindi · ethics",
    mood: "Hostel Rooftop",
  },
];
