import { useState } from "react";
import type { MediaItem } from "../types";

type GalleryProps = {
  items: MediaItem[];
};

export default function Gallery({ items }: GalleryProps) {
  const [active, setActive] = useState<MediaItem | null>(null);

  return (
    <div className="relative">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.src}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            onClick={() => setActive(item)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70" />
            <p className="absolute bottom-3 left-3 text-sm font-semibold text-white drop-shadow">
              {item.caption}
            </p>
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur">
          <div className="relative max-w-4xl">
            <button
              className="absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase text-graysDark hover:bg-white"
              onClick={() => setActive(null)}
              aria-label="Close image"
            >
              Close
            </button>
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />
            <p className="mt-2 text-center text-sm text-white">{active.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
