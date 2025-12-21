import type { FeatureSlide } from "../types";

const base = import.meta.env.BASE_URL;

export const featureSlides: FeatureSlide[] = [
  {
    title: "Halliwell Park under the lights",
    subtitle: "Gate City crowds pack the baselines all summer long.",
    image: `${base}images/2025-Gray-Team.jpg`,
    tag: "Ballpark",
  },
  {
    title: "Become a partner",
    subtitle: "Sponsor the Grays and get your brand on banners, jerseys, and game-day reads.",
    image: `${base}images/Players-by-dugout.jpg`,
    tag: "Sponsors",
    ctaLabel: "Sponsor Inquiry",
    ctaHref: "/sponsors",
  },
  {
    title: "Tryout announcements",
    subtitle: "Stay tuned for open tryouts and player showcases at Halliwell Park.",
    image: `${base}images/Helicopter-On-Field.jpg`,
    tag: "Player Info",
    ctaLabel: "Contact staff",
    ctaHref: "/contact",
  },
  {
    title: "Gate City rivalries",
    subtitle: "Northern Utah League matchups bring out the best in Pocatello.",
    image: `${base}images/Pledge-Of-Alligence.jpg`,
    tag: "Schedule",
    ctaLabel: "View schedule",
    ctaHref: "/schedule",
  },
];
