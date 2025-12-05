import { useEffect, useRef, useState } from "react";
import type { FeatureSlide } from "../types";
import { Link } from "react-router-dom";

type FeatureCarouselProps = {
  slides: FeatureSlide[];
  intervalMs?: number;
};

export default function FeatureCarousel({ slides, intervalMs = 5000 }: FeatureCarouselProps) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Autoplay with reset on any interaction
  useEffect(() => {
    clearTimer();
    timeoutRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearTimer();
  }, [index, intervalMs, slides.length]);

  const goTo = (i: number) => {
    clearTimer();
    const total = slides.length;
    const next = ((i % total) + total) % total;
    setIndex(next);
  };

  const goNext = () => goTo(index + 1);
  const goPrev = () => goTo(index - 1);
  const current = slides[index];

  return (
    <div className="relative h-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-graysDark text-white shadow-2xl md:h-[420px]">
      <div className="grid h-full items-stretch gap-0 md:grid-cols-2">
        <div className="relative h-full w-full">
          {slides.map((slide, i) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          {current.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {current.tag}
            </span>
          )}
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2 text-graysDark transition hover:bg-white"
          >
            ‹
          </button>
        </div>
        <div className="relative flex h-full flex-col justify-center overflow-hidden">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={`absolute inset-0 flex flex-col justify-between gap-4 p-6 transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Gate City Stories</p>
                <h3 className="font-heading text-3xl font-bold">{slide.title}</h3>
                {slide.subtitle && <p className="text-sm text-white/80">{slide.subtitle}</p>}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {slides.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      aria-label={`Go to slide ${dotIndex + 1}`}
                      onClick={() => goTo(dotIndex)}
                      className={`h-2 w-2 rounded-full transition ${
                        dotIndex === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
                {slide.ctaHref && slide.ctaLabel && (
                  <Link
                    to={slide.ctaHref}
                    className="rounded-full bg-graysRed px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-red-900/30 transition hover:bg-red-800"
                  >
                    {slide.ctaLabel}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-3 text-graysDark shadow-lg transition hover:bg-white"
      >
        ›
      </button>
    </div>
  );
}
