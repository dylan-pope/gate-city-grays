import PageHeader from "../components/PageHeader";
import GameList from "../components/GameList";
import SectionHeader from "../components/SectionHeader";
import { schedule } from "../data/schedule";

export default function Schedule() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 pb-12">
      <PageHeader
        badge="Schedule"
        title="Season slate"
        description="Northern Utah League matchups. All times are local to Halliwell Park unless noted."
      />

      <section>
        <SectionHeader
          eyebrow="Games"
          title="Upcoming & completed"
          description="Schedule will be replaced with official fixtures once posted by the club."
        />
        <div className="mt-4">
          <GameList games={schedule} showHeader={false} />
        </div>
      </section>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-4 text-sm text-slate-600">
        TODO: Replace sample schedule with official Gate City Grays fixtures and results from the
        team site.
      </div>
    </div>
  );
}
