import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import { siteInfo } from "../data/siteInfo";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-12">
      <PageHeader
        badge="About"
        title="Gate City Grays story"
        description="Semi-professional baseball rooted in Pocatello, Idaho, competing in the Northern Utah League and calling Halliwell Park home."
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <SectionHeader
            eyebrow="Our Story"
            title="Built on early success and community pride"
            description="Founded in 2014, the Grays entered the Northern Utah League and never looked back."
          />
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>
              • Formed in 2014 as part of the Northern Utah League and finished the inaugural
              regular season undefeated.
            </li>
            <li>• Captured the league championship in each of the first three seasons.</li>
            <li>
              • Continues to anchor semi-professional baseball in Pocatello—also known as Gate
              City.
            </li>
          </ul>
          <p className="mt-3 text-sm text-slate-700">
            The Grays lean on a mix of local talent and regional standouts, creating a team that
            feels accessible to fans while competing at a high level.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <SectionHeader
            eyebrow="Halliwell Park"
            title="A historic home field"
            description={`${siteInfo.ballpark} is a Pocatello landmark that welcomes multiple local teams and generations of fans.`}
          />
          <p className="mt-3 text-sm text-slate-700">
            Located at {siteInfo.ballparkAddress}, Halliwell Park—also known as Halliwell
            Field—comes alive for night games with the smell of concessions and the sound of
            wood bats. The park doubles as a community hub, hosting youth baseball, regional
            tournaments, and the Grays’ biggest rivalries.
          </p>
          <p className="mt-3 text-sm text-slate-700">
            Game nights typically open the gates an hour before first pitch, giving fans time to
            settle in, visit with neighbors, and enjoy a classic small-town baseball atmosphere.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
        <SectionHeader
          eyebrow="Mission & Values"
          title="Community-first baseball"
          description="Growing the game in Pocatello by developing players, connecting fans, and honoring the traditions of Halliwell Park."
        />
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-graysMuted/60 p-4">
            <p className="font-heading text-lg font-semibold text-graysDark">Player growth</p>
            <p className="mt-2 text-sm text-slate-700">
              Create a platform for semi-pro athletes to sharpen their skills and earn looks from
              higher levels.
            </p>
          </div>
          <div className="rounded-xl bg-graysMuted/60 p-4">
            <p className="font-heading text-lg font-semibold text-graysDark">Community</p>
            <p className="mt-2 text-sm text-slate-700">
              Engage fans with approachable players, youth clinics, and game-day experiences that
              feel uniquely Pocatello.
            </p>
          </div>
          <div className="rounded-xl bg-graysMuted/60 p-4">
            <p className="font-heading text-lg font-semibold text-graysDark">Competition</p>
            <p className="mt-2 text-sm text-slate-700">
              Uphold the winning standards set by early undefeated seasons and multiple league
              titles.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6 text-sm text-slate-700">
        <SectionHeader
          eyebrow="Coaching Staff"
          title="Leadership"
          description="Coaches and staff information will be pulled from the official team site once available."
        />
        <p className="mt-3 text-sm text-slate-600">
          TODO: Replace this placeholder with verified coaching staff names and bios from the
          Gate City Grays official source.
        </p>
      </section>
    </div>
  );
}
