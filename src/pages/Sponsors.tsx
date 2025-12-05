import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import SponsorGrid from "../components/SponsorGrid";
import { sponsors } from "../data/sponsors";

export default function Sponsors() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 pb-12">
      <PageHeader
        badge="Sponsors"
        title="Partners in Gate City baseball"
        description="Local businesses and supporters who keep the Grays on the field."
      />

      <section>
        <SectionHeader
          eyebrow="Supporters"
          title="Thank you to our partners"
          description="Sponsor list will be updated with verified partners and logos from the club."
        />
        <div className="mt-4">
          <SponsorGrid sponsors={sponsors} />
        </div>
      </section>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-4 text-sm text-slate-600">
        TODO: Replace placeholder sponsors with official Gate City Grays partners and artwork.
      </div>
    </div>
  );
}
