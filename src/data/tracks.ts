export type Mood =
  | "Night Duty"
  | "Exam Week"
  | "Anatomy Hours"
  | "Post-Ward Chai"
  | "Hostel Rooftop";

export const MOODS: Mood[] = [
  "Night Duty",
  "Exam Week",
  "Anatomy Hours",
  "Post-Ward Chai",
  "Hostel Rooftop",
];

export type Track = {
  id: string;
  title: string;
  artist: string;
  film: string;
  year: number;
  mood: Mood;
  /** Runtime shown in the mock player. */
  duration: string;
};

export const TRACKS: Track[] = [
  {
    id: "t1",
    title: "Mujhse Mohabbat Ka Izhaar",
    artist: "Kumar Sanu, Alka Yagnik",
    film: "Hum Hain Rahi Pyar Ke",
    year: 1993,
    mood: "Hostel Rooftop",
    duration: "5:12",
  },
  {
    id: "t2",
    title: "Ek Ladki Ko Dekha",
    artist: "Kumar Sanu",
    film: "1942: A Love Story",
    year: 1994,
    mood: "Post-Ward Chai",
    duration: "4:39",
  },
  {
    id: "t3",
    title: "Tu Mile Dil Khile",
    artist: "Kumar Sanu, Alka Yagnik",
    film: "Criminal",
    year: 1995,
    mood: "Night Duty",
    duration: "5:26",
  },
  {
    id: "t4",
    title: "Chura Ke Dil Mera",
    artist: "Kumar Sanu, Alka Yagnik",
    film: "Main Khiladi Tu Anari",
    year: 1994,
    mood: "Exam Week",
    duration: "5:03",
  },
  {
    id: "t5",
    title: "Pehla Nasha",
    artist: "Udit Narayan, Sadhana Sargam",
    film: "Jo Jeeta Wohi Sikandar",
    year: 1992,
    mood: "Hostel Rooftop",
    duration: "5:31",
  },
  {
    id: "t6",
    title: "Kuch Na Kaho",
    artist: "Kumar Sanu",
    film: "1942: A Love Story",
    year: 1994,
    mood: "Night Duty",
    duration: "5:44",
  },
  {
    id: "t7",
    title: "Yeh Kaali Kaali Aankhen",
    artist: "Kumar Sanu, Anuradha Paudwal",
    film: "Baazigar",
    year: 1993,
    mood: "Anatomy Hours",
    duration: "6:14",
  },
  {
    id: "t8",
    title: "Aati Kya Khandala",
    artist: "Alka Yagnik, Aamir Khan",
    film: "Ghulam",
    year: 1998,
    mood: "Post-Ward Chai",
    duration: "4:02",
  },
  {
    id: "t9",
    title: "Tadap Tadap Ke",
    artist: "K. K.",
    film: "Hum Dil De Chuke Sanam",
    year: 1999,
    mood: "Exam Week",
    duration: "6:55",
  },
  {
    id: "t10",
    title: "Zara Sa Jhoom Loon Main",
    artist: "Asha Bhosle, Abhijeet",
    film: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    mood: "Hostel Rooftop",
    duration: "5:10",
  },
  {
    id: "t11",
    title: "Kya Hua Tera Wada",
    artist: "Mohammed Rafi",
    film: "Hum Kisise Kum Naheen",
    year: 1977,
    mood: "Night Duty",
    duration: "4:26",
  },
  {
    id: "t12",
    title: "Suraj Hua Maddham",
    artist: "Sonu Nigam, Alka Yagnik",
    film: "Kabhi Khushi Kabhie Gham",
    year: 2001,
    mood: "Anatomy Hours",
    duration: "7:12",
  },
];
