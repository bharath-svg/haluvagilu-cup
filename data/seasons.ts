export type Team = {
  name: string;
  captain?: string;
  image?: string;
};

export type Season = {
  number: number;
  completed: boolean;
  year: string;
  description: string;
  image: string;
  winner: Team | null;
  runnerUp: Team | null;
  bestBatsman: string;
  bestBowler: string;
  gallery: string[];
};

export const seasons: Season[] = [
  // SEASON 1
  {
    number: 1,
    completed: true,
    year: "16-Feb-2026",
    description: "The beginning of the Haluvagilu Cup legacy",
    image: "/images/seasons/season-1/image1.jpeg",
    winner: { name: "Team C", image: "/images/seasons/season-1/image1.jpeg", captain: "MADHU" },
    runnerUp: { name: "Team A", image: "/images/seasons/season-1/runner.jpeg", captain: "KISHAN" },
    bestBatsman: "",
    bestBowler: "",
    gallery: [
      "/images/seasons/season-1/gallery/image1.jpeg",
      "/images/seasons/season-1/gallery/image2.jpeg",
      "/images/seasons/season-1/gallery/image3.jpeg",
      "/images/seasons/season-1/gallery/image4.jpeg",
      "/images/seasons/season-1/gallery/win1.jpeg",
      "/images/seasons/season-1/gallery/runner.jpeg",
    ],
  },

  // SEASON 2
  {
    number: 2,
    completed: true,
    year: "MARCH-19-2026",
    description: "Season 2: Fierce battles, epic rivalries, and unforgettable cricket glory!",
    image: "/images/seasons/season-2/gallery/img1.jpeg",
    winner: { name: "Team A", image: "/images/seasons/season-2/gallery/img1.jpeg", captain: "GOWTHU" },
    runnerUp: { name: "Team C", image: "/images/seasons/season-2/gallery/imgrun.jpeg", captain: "SHIVA" },
    bestBatsman: "BHARATH",
    bestBowler: "SHIVA SHANKER",
    gallery: [
      "/images/seasons/season-2/gallery/img1.jpeg",
      "/images/seasons/season-2/gallery/img2.jpeg",
      "/images/seasons/season-2/gallery/imgrun.jpeg",
      "/images/seasons/season-2/gallery/imgrun2.jpeg",
      "/images/seasons/season-2/gallery/imgh.jpeg",
      "/images/seasons/season-2/gallery/img6.jpeg",
      "/images/seasons/season-2/gallery/img5.jpeg",
    ],
  },

  // SEASON 3
  {
    number: 3,
    completed: true,
    year: "MAY-01-2026",
    description: "Bigger battles, stronger rivalries, and legendary moments that took the HVL Cup legacy to new heights!",
    image: "/images/seasons/season-3/gallery/img2.jpeg",
    winner: { name: "Team A", image: "/images/seasons/season-3/gallery/img1.jpeg", captain: "NUTHAN" },
    runnerUp: { name: "Team C", image: "/images/seasons/season-3/gallery/img3.jpeg", captain: "KIRAN(VANNA)" },
    bestBatsman: "",
    bestBowler: "",
    gallery: [
      "/images/seasons/season-3/gallery/img1.jpeg",
      "/images/seasons/season-3/gallery/img2.jpeg",
      "/images/seasons/season-3/gallery/img3.jpeg",
      "/images/seasons/season-3/gallery/img4.jpeg",

    ],
  },

  // SEASON 4
  {
    number: 4,
    completed: true,
    year: "21-JUNE-2026",
    description: "Epic clashes, unstoppable passion, and thrilling victories that made HVL Cup history!",
    image: "/images/seasons/season-4/gallery/img1.jpeg",
    winner: { name: "Team A", image: "/images/seasons/season-4/gallery/img1.jpeg", captain: "RANGA ANNA" },
    runnerUp: { name: "Team B", image: "/images/seasons/season-3/galler", captain: "BHARATH" },
    bestBatsman: "Suhas",
    bestBowler: "Vanna",
    gallery: [
      "/images/seasons/season-4/gallery/img1.jpeg",
      "/images/seasons/season-4/gallery/img2.jpeg",
      "/images/seasons/season-4/gallery/img3.jpeg",
      "/images/seasons/season-4/gallery/img4.jpeg",
      "/images/seasons/season-4/gallery/img5.jpeg",
      "/images/seasons/season-4/gallery/img6.jpeg",
      "/images/seasons/season-4/gallery/img7.jpeg",
      "/images/seasons/season-4/gallery/img8.jpeg",

    ],
  },

  // SEASON 5
  {
    number: 5,
    completed: true,
    year: "13-SEPTEMBER-2026",
    description: "Ganesh Festival vibes, fierce cricket battles, and unforgettable moments of celebration and glory!",
    image: "/images/seasons/season-5/gallery/img1.jpeg",
    winner: { name: "Team A", image: "/images/seasons/season-5/gallery/img1.jpeg", captain: "MADHU" },
    runnerUp: { name: "Team C", image: "/images/seasons/season-5/gallery/img2.jpeg", captain: "Suhas" },
    bestBatsman: "SHARATH",
    bestBowler: "VANNA",
    gallery: [
      "/images/seasons/season-5/gallery/img1.jpeg",
      "/images/seasons/season-5/gallery/img2.jpeg",
      "/images/seasons/season-5/gallery/img3.jpeg",
      "/images/seasons/season-5/gallery/img4.jpeg",
      "/images/seasons/season-5/gallery/img5.jpeg",
      "/images/seasons/season-5/gallery/img6.jpeg",
      "/images/seasons/season-5/gallery/img7.jpeg",
      "/images/seasons/season-5/gallery/img8.jpeg",
      "/images/seasons/season-5/gallery/img9.jpeg",
      "/images/seasons/season-5/gallery/img10.jpeg",
      "/images/seasons/season-5/gallery/img11.jpeg",
      "/images/seasons/season-5/gallery/img12.jpeg",

    ],
  },

  // SEASON 6
  {
    number: 6,
    completed: true,
    year: "NOVEMBER-07-2026",
    description: "Diwali fireworks, electrifying cricket battles, and explosive moments that lit up the HVL Cup legacy!",
    image: "/images/seasons/season-6/gallery/img1.jpeg",
    winner: { name: "Team B", image: "/images/seasons/season-6/gallery/img1.jpeg", captain: "KISHAN" },
    runnerUp: { name: "Team A", image: "/images/seasons/season-6/gallery/img3.jpeg", captain: "SAGAR" },
    bestBatsman: "RAKSHITH(Nepal)",
    bestBowler: "VANNA",
    gallery: ["/images/seasons/season-6/gallery/img1.jpeg",
      "/images/seasons/season-6/gallery/img2.jpeg",
      "/images/seasons/season-6/gallery/img3.jpeg",
      "/images/seasons/season-6/gallery/img4.jpeg",
      "/images/seasons/season-6/gallery/img5.jpeg",],
  },

  // SEASON 7 — NOT YET HELD
  {
    number: 7,
    completed: false,
    year: "",
    description: "The next chapter of Haluvagilu Cup awaits.",
    image: "",
    winner: null,
    runnerUp: null,
    bestBatsman: "",
    bestBowler: "",
    gallery: [



    ],
  },
];