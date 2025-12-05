import type { Game } from "../types";

type GameListProps = {
  games: Game[];
  limit?: number;
  showHeader?: boolean;
};

function formatDate(value: string) {
  const date = new Date(value);
  return isNaN(date.getTime())
    ? value
    : date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function GameList({ games, limit, showHeader = true }: GameListProps) {
  const now = new Date();
  const sorted = [...games].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  const filtered = limit ? sorted.slice(0, limit) : sorted;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur">
      {showHeader && (
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <p className="font-heading text-lg font-semibold text-graysDark">Upcoming Games</p>
          <span className="rounded-full bg-graysBlue px-3 py-1 text-xs font-semibold uppercase text-white">
            Northern Utah League
          </span>
        </div>
      )}
      <div className="divide-y divide-slate-100">
        {filtered.map((game) => {
          const isPast = new Date(game.date) < now;
          return (
            <div
              key={`${game.date}-${game.opponent}-${game.venue}`}
              className="flex flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-graysBlue">
                  {game.homeOrAway}
                </p>
                <p className="font-heading text-xl font-bold text-graysDark">
                  vs {game.opponent}
                </p>
                <p className="text-sm text-slate-600">
                  {formatDate(game.date)} · {game.time} · {game.venue}
                </p>
                {game.note && <p className="text-xs text-slate-500">{game.note}</p>}
              </div>
              <div className="flex items-center gap-2 md:min-w-[140px] md:justify-end">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                    isPast
                      ? "bg-slate-100 text-slate-600"
                      : "bg-graysRed text-white shadow-md shadow-red-800/20"
                  }`}
                >
                  {isPast ? game.result ?? "Final" : "On Deck"}
                </span>
                {!isPast && (
                  <a
                    href="/contact"
                    className="rounded-full border border-graysBlue px-3 py-1 text-xs font-semibold uppercase text-graysBlue transition hover:bg-graysBlue hover:text-white"
                  >
                    Tickets
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
