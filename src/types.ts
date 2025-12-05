export type SiteInfo = {
  name: string;
  city: string;
  league: string;
  ballpark: string;
  ballparkAddress: string;
  phone: string;
  tagline: string;
  heroSubtext: string;
  tickets: {
    retailLocation: string;
    stadium: string;
  };
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  email?: string;
};

export type Player = {
  name: string;
  number?: number;
  position: string;
  positions?: string[];
  batsThrows?: string;
  hometown?: string;
  bio?: string;
  image?: string;
};

export type Game = {
  date: string;
  time: string;
  opponent: string;
  homeOrAway: "Home" | "Away";
  venue: string;
  result?: string;
  note?: string;
};

export type NewsItem = {
  title: string;
  date: string;
  slug: string;
  summary: string;
  content: string;
};

export type Sponsor = {
  name: string;
  tier: "Title" | "Gold" | "Silver" | "Community";
  logo?: string;
  website?: string;
  description?: string;
};

export type MediaItem = {
  src: string;
  alt: string;
  caption: string;
};

export type Coach = {
  name: string;
  role: string;
  birthdate?: string;
  hometown?: string;
  currentCity?: string;
  favoriteTeam?: string;
  favoriteHobby?: string;
  playingExperience?: string;
  coachingExperience?: string;
  image?: string;
};

export type FeatureSlide = {
  title: string;
  subtitle?: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
  tag?: string;
};
