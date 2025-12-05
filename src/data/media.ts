import type { MediaItem } from "../types";
import { assetPath } from "../utils/assetPath";

export const media: MediaItem[] = [
  {
    src: assetPath("2025-Gray-Team.jpg"),
    alt: "Gate City Grays team photo on the field",
    caption: "2025 Gate City Grays team gathered at Halliwell Park.",
  },
  {
    src: assetPath("Kids-Running-Bases.jpg"),
    alt: "Kids running the bases at Halliwell Park",
    caption: "Community night letting young fans circle the bases.",
  },
  {
    src: assetPath("Players-by-dugout.jpg"),
    alt: "Players by the dugout preparing for the game",
    caption: "Pre-game focus along the dugout rail.",
  },
  {
    src: assetPath("Team-Celebration.jpg"),
    alt: "Gate City Grays celebrating a win",
    caption: "Postgame celebrations after a big win.",
  },
];
