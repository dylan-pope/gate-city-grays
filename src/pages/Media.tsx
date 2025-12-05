import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";
import SectionHeader from "../components/SectionHeader";
import { media } from "../data/media";

export default function Media() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 pb-12">
      <PageHeader
        badge="Media"
        title="Game-day moments"
        description="A look at the atmosphere around Halliwell Park and Gate City baseball."
      />

      <section>
        <SectionHeader
          eyebrow="Photos"
          title="Gallery"
          description="Images will be replaced with official Gate City Grays media assets."
        />
        <div className="mt-4">
          <Gallery items={media} />
        </div>
      </section>
    </div>
  );
}
