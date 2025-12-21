import type { MediaItem } from "../types";

const base = import.meta.env.BASE_URL;

export const media: MediaItem[] = [
  {
    src: `${base}images/2025-Gray-Team.jpg`,
    alt: "Gate City Grays team photo on the field",
    caption: "2025 Gate City Grays team gathered at Halliwell Park.",
  },
  {
    src: `${base}images/Kids-Running-Bases.jpg`,
    alt: "Kids running the bases at Halliwell Park",
    caption: "Community night letting young fans circle the bases.",
  },
  {
    src: `${base}images/Players-by-dugout.jpg`,
    alt: "Players by the dugout preparing for the game",
    caption: "Pre-game focus along the dugout rail.",
  },
  {
    src: `${base}images/Team-Celebration.jpg`,
    alt: "Gate City Grays celebrating a win",
    caption: "Postgame celebrations after a big win.",
  },
];
