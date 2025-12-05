import PageHeader from "../components/PageHeader";
import PlayerCard from "../components/PlayerCard";
import SectionHeader from "../components/SectionHeader";
import { roster } from "../data/roster";

export default function Roster() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-12">
      <PageHeader
        badge="Roster"
        title="Meet the Grays"
        description="Player list will be updated with the official roster when released."
      />

      <section>
        <SectionHeader
          eyebrow="Players"
          title="Full squad"
          description="Gallery view — add, remove, or reorder players easily."
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roster.map((player) => (
            <PlayerCard key={player.name} player={player} />
          ))}
        </div>
      </section>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-4 text-sm text-slate-600">
        TODO: Replace placeholder players with the official Gate City Grays roster from
        gatecitygrays.com.
      </div>
    </div>
  );
}
