import s01 from "@/assets/scene-01.jpg.asset.json";
import s02 from "@/assets/scene-02.jpg.asset.json";
import s03 from "@/assets/scene-03.jpg.asset.json";
import s04 from "@/assets/scene-04.jpg.asset.json";
import s05 from "@/assets/scene-05.jpg.asset.json";
import s06 from "@/assets/scene-06.jpg.asset.json";
import s07 from "@/assets/scene-07.jpg.asset.json";
import s08 from "@/assets/scene-08.jpg.asset.json";
import s09 from "@/assets/scene-09.jpg.asset.json";
import s10 from "@/assets/scene-10.jpg.asset.json";
import s11 from "@/assets/scene-11.jpg.asset.json";
import s12 from "@/assets/scene-12.jpg.asset.json";
import s13 from "@/assets/scene-13.jpg.asset.json";
import s14 from "@/assets/scene-14.jpg.asset.json";
import s15 from "@/assets/scene-15.png.asset.json";
import s16 from "@/assets/scene-16.png.asset.json";
import s17 from "@/assets/scene-17.png.asset.json";
import s18 from "@/assets/scene-18.png.asset.json";
import s19 from "@/assets/scene-19.png.asset.json";
import s20 from "@/assets/scene-20.png.asset.json";

/** How the masthead is typeset over a given scene. */
export type Treatment =
  | "center-stack"
  | "center-line"
  | "lower-left"
  | "lower-right"
  | "upper-left-rule"
  | "chip-center"
  | "wide-tracked"
  | "left-serif";

export type Scene = {
  src: string;
  /** Devanagari or Latin header shown over this scene. */
  title: string;
  /** Small kicker above the header. */
  kicker: string;
  /** One-liner tied to the image. */
  line: string;
  treatment: Treatment;
  alt: string;
};

export const SCENES: Scene[] = [
  {
    src: s01.url,
    title: "डीलक्स दवाखाना",
    kicker: "on air · since '94",
    line: "Second year, first cadaver, same old song on the radio",
    treatment: "center-stack",
    alt: "Anatomy dissection hall with students in white coats",
  },
  {
    src: s02.url,
    title: "नाइट ड्यूटी रेडियो",
    kicker: "shift 02:00 — 06:00",
    line: "3 AM, Gray's Anatomy open, no regrets",
    treatment: "lower-left",
    alt: "Hostel room at night with a skeleton model and a study lamp",
  },
  {
    src: s03.url,
    title: "Corridor FM",
    kicker: "block b · first floor",
    line: "Stethoscopes on, corridor full, class already started",
    treatment: "wide-tracked",
    alt: "Medical college corridor with students walking to class",
  },
  {
    src: s04.url,
    title: "वार्ड 7",
    kicker: "rounds in progress",
    line: "Ward rounds and hand-me-down stethoscopes",
    treatment: "lower-right",
    alt: "Professor taking a ward round with medical students",
  },
  {
    src: s05.url,
    title: "चाय और सिलेबस",
    kicker: "gate no. 2",
    line: "Chai break between Physio and Biochem",
    treatment: "chip-center",
    alt: "Chai stall outside a medical college gate",
  },
  {
    src: s06.url,
    title: "Last Bench Sessions",
    kicker: "lecture theatre i",
    line: "Last bench, first row of doubts",
    treatment: "upper-left-rule",
    alt: "Lecture theatre with a chalkboard heart diagram",
  },
  {
    src: s07.url,
    title: "लाइब्रेरी नाइट्स",
    kicker: "closing time · never",
    line: "The library closes; we don't",
    treatment: "center-line",
    alt: "Medical college library late at night",
  },
  {
    src: s08.url,
    title: "मेस की थाली",
    kicker: "dinner · 8:30 pm",
    line: "Mess ki thali, ward ki kahaniyan",
    treatment: "left-serif",
    alt: "Medical hostel mess hall at dinner",
  },
  {
    src: s09.url,
    title: "एनाटॉमी आवर्स",
    kicker: "slide 40x",
    line: "Every slide looks the same until it suddenly doesn't",
    treatment: "lower-left",
    alt: "Histology lab with a row of microscopes",
  },
  {
    src: s10.url,
    title: "डीलक्स दवाखाना",
    kicker: "the batch always meets here",
    line: "Old red brick, string lights, and everyone's favourite bench",
    treatment: "center-stack",
    alt: "Old red-brick medical college facade at dusk with string lights",
  },
  {
    src: s11.url,
    title: "120 / 80",
    kicker: "physiology practical",
    line: "120 over 80, and a heart that won't sit still",
    treatment: "chip-center",
    alt: "Physiology practical measuring blood pressure",
  },
  {
    src: s12.url,
    title: "केज़ुअल्टी नाइट्स",
    kicker: "emergency · gate open",
    line: "Casualty at 2 AM — the shift that teaches everything",
    treatment: "lower-right",
    alt: "Hospital casualty entrance at night with an ambulance",
  },
  {
    src: s13.url,
    title: "Scrubbed In",
    kicker: "ot · gowning corner",
    line: "Gowned up, gloves on, holding your breath",
    treatment: "wide-tracked",
    alt: "Operation theatre gowning area with green scrubs",
  },
  {
    src: s14.url,
    title: "फ्लैशकार्ड्स",
    kicker: "one more chapter",
    line: "Flashcards, filter coffee and one more chapter",
    treatment: "left-serif",
    alt: "Medical student's study table with textbooks and a stethoscope",
  },
  {
    src: s15.url,
    title: "हॉस्टल छत",
    kicker: "rooftop · sunset",
    line: "Rooftop, dusk, syllabus can wait ten minutes",
    treatment: "upper-left-rule",
    alt: "Two students on a rooftop at sunset with chai and a laptop",
  },
  {
    src: s16.url,
    title: "शाम की शिफ्ट",
    kicker: "chai no. 3",
    line: "Half a heart diagram, half a conversation",
    treatment: "lower-left",
    alt: "Medical student and a friend studying on a rooftop at dusk",
  },
  {
    src: s17.url,
    title: "मंज़िल",
    kicker: "kite season",
    line: "Laughing at the syllabus before it laughs at us",
    treatment: "center-line",
    alt: "Student in a white coat laughing on a rooftop at sunset with kites",
  },
  {
    src: s18.url,
    title: "इंतज़ार",
    kicker: "notes exchange",
    line: "One book, one lightbulb, two people who get it",
    treatment: "lower-right",
    alt: "Two students passing a glowing book on a rooftop at dusk",
  },
  {
    src: s19.url,
    title: "तत्त्व",
    kicker: "after hours",
    line: "The idea always arrives after midnight",
    treatment: "wide-tracked",
    alt: "Two students on a rooftop at night sharing an idea over a book",
  },
  {
    src: s20.url,
    title: "सफ़ेद कोट",
    kicker: "off duty",
    line: "Coat on the hook, chappals at the door, day done",
    treatment: "chip-center",
    alt: "A white coat with a stethoscope hanging on a hook above slippers",
  },
];

export const ROTATE_MS = 8000;
