import type { Player } from "../types";

type PlayerCardProps = {
  player: Player;
};

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
      <div className="flex items-start gap-4">
        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-graysMuted/60 text-xs font-semibold text-slate-600">
          {player.image ? (
            <img src={player.image} alt={`${player.name} portrait`} className="h-full w-full object-cover" />
          ) : (
            "Photo coming soon"
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graysBlue">
                {player.positions?.join(" • ") ?? player.position}
              </p>
              <h3 className="mt-1 font-heading text-xl font-bold text-graysDark">{player.name}</h3>
              {player.batsThrows && (
                <p className="text-sm text-slate-600">B/T: {player.batsThrows}</p>
              )}
              {player.hometown && <p className="text-sm text-slate-500">From {player.hometown}</p>}
            </div>
            {player.number !== undefined && (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-graysRed text-lg font-bold text-white shadow-md">
                #{player.number}
              </div>
            )}
          </div>
          {player.bio && <p className="mt-3 text-sm text-slate-600">{player.bio}</p>}
        </div>
      </div>
    </div>
  );
}
