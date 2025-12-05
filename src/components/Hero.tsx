import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type HeroProps = {
  title: string;
  subtitle: string;
  ctas?: { label: string; to: string; variant?: "primary" | "secondary" }[];
  aside?: ReactNode;
};

export default function Hero({ title, subtitle, ctas = [], aside }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-graysBlue via-graysDark to-graysRed text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-graysWhite/70">
            Gate City Grays
          </p>
          <h1 className="mt-3 font-heading text-4xl font-black leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-graysWhite/90">{subtitle}</p>
          {ctas.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
                  to={cta.to}
                  className={`rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide transition ${
                    cta.variant === "secondary"
                      ? "border border-white/30 bg-white/10 hover:bg-white/20"
                      : "bg-graysRed text-white shadow-lg shadow-red-800/30 hover:bg-red-800"
                  }`}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        {aside && <div className="w-full md:w-1/3">{aside}</div>}
      </div>
    </section>
  );
}
