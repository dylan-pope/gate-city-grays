import type { Sponsor } from "../types";

type SponsorGridProps = {
  sponsors: Sponsor[];
};

const tierOrder: Record<Sponsor["tier"], number> = {
  Title: 1,
  Gold: 2,
  Silver: 3,
  Community: 4,
};

export default function SponsorGrid({ sponsors }: SponsorGridProps) {
  const grouped = sponsors.reduce<Record<string, Sponsor[]>>((acc, sponsor) => {
    if (!acc[sponsor.tier]) acc[sponsor.tier] = [];
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(grouped)
        .sort((a, b) => tierOrder[a[0] as Sponsor["tier"]] - tierOrder[b[0] as Sponsor["tier"]])
        .map(([tier, list]) => (
          <div key={tier} className="rounded-2xl border border-slate-200 bg-white/80 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-heading text-lg font-bold text-graysDark">{tier} Partners</p>
              <span className="rounded-full bg-graysBlue px-3 py-1 text-xs font-semibold uppercase text-white">
                {list.length} sponsor{list.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-white/70 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="h-12 w-12 rounded-md bg-graysMuted/60" />
                    {sponsor.website && (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold uppercase text-graysBlue underline-offset-4 hover:underline"
                      >
                        Visit site
                      </a>
                    )}
                  </div>
                  <p className="font-heading text-lg font-semibold text-graysDark">
                    {sponsor.name}
                  </p>
                  {sponsor.description && (
                    <p className="text-sm text-slate-600">{sponsor.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
