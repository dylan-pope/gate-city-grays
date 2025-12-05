import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import NewsList from "../components/NewsList";
import { news } from "../data/news";

export default function News() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 pb-12">
      <PageHeader
        badge="News"
        title="Latest from the Grays"
        description="Game recaps, announcements, and community spotlights."
      />

      <section>
        <SectionHeader
          eyebrow="Headlines"
          title="Club updates"
          description="Stories will be updated with official posts from gatecitygrays.com."
        />
        <div className="mt-4">
          <NewsList items={news} />
        </div>
      </section>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-4 text-sm text-slate-600">
        TODO: Replace placeholder stories with verified Gate City Grays news and recaps.
      </div>
    </div>
  );
}
