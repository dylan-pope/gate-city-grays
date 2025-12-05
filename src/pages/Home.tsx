import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import FeatureCarousel from "../components/FeatureCarousel";
import GameList from "../components/GameList";
import NewsList from "../components/NewsList";
import SponsorGrid from "../components/SponsorGrid";
import { siteInfo } from "../data/siteInfo";
import { schedule } from "../data/schedule";
import { news } from "../data/news";
import { sponsors } from "../data/sponsors";
import { featureSlides } from "../data/featureSlides";

export default function Home() {
  return (
    <div className="pb-12">
      <Hero
        title="Home of the Gate City Grays"
        subtitle={siteInfo.heroSubtext}
        ctas={[
          { label: "View Schedule", to: "/schedule" },
          { label: "Meet the Team", to: "/roster", variant: "secondary" },
          { label: "Get Tickets", to: "/contact", variant: "secondary" },
        ]}
        aside={
          <div className="rounded-2xl bg-white/10 p-4 text-sm backdrop-blur">
            <p className="font-heading text-lg font-semibold uppercase tracking-wide">
              {siteInfo.ballpark}
            </p>
            <p className="mt-1 text-graysWhite/80">{siteInfo.ballparkAddress}</p>
            <div className="mt-3 space-y-2 text-white">
              <p>
                <span className="font-semibold">League:</span> {siteInfo.league}
              </p>
              <p>
                <span className="font-semibold">Founded:</span> 2014 (semi-pro era)
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {siteInfo.phone}
              </p>
            </div>
          </div>
        }
      />

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-12 px-4">
        <section>
          <SectionHeader
            eyebrow="Spotlight"
            title="Scenes from Gate City"
            description="Rotating highlights: the ballpark atmosphere, sponsor invites, and upcoming player opportunities."
          />
          <div className="mt-4">
            <FeatureCarousel slides={featureSlides} />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr,1.1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg backdrop-blur">
            <SectionHeader
              eyebrow="About the Grays"
              title="Semi-pro grit with a local heartbeat"
              description="Undefeated in their first regular season, the Grays set a tone for what semi-pro baseball can feel like in Pocatello: competitive, welcoming, and loud under the Halliwell Park lights."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-100 bg-graysMuted/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-graysBlue">Northern Utah League</p>
                <p className="mt-1 font-heading text-xl font-semibold text-graysDark">
                  Top regional talent
                </p>
                <p className="text-sm text-slate-700">
                  Semi-professional baseball with rivalries stretching across Idaho and Utah.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-graysMuted/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-graysBlue">Community nights</p>
                <p className="mt-1 font-heading text-xl font-semibold text-graysDark">
                  Ballpark energy
                </p>
                <p className="text-sm text-slate-700">
                  Food trucks, youth clinics, and throwback jerseys celebrate Pocatello’s “Gate City” spirit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-graysMuted/80 p-6 shadow-lg backdrop-blur">
              <p className="font-heading text-lg font-bold text-graysDark">Tickets</p>
              <p className="mt-2 text-sm text-slate-700">{siteInfo.tickets.retailLocation}</p>
              <p className="text-sm text-slate-700">{siteInfo.tickets.stadium}</p>
              <a
                href="/contact"
                className="mt-4 inline-flex w-max rounded-full bg-graysRed px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-red-800"
              >
                Plan your visit
              </a>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-graysDark/90 p-6 shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">Ballpark vibe</p>
                <p className="mt-2 font-heading text-2xl font-bold text-white">
                  “Lights on, music up, and the town gathers at Halliwell.”
                </p>
                <p className="mt-3 text-sm text-white/80">
                  Grab a seat along the baselines or drift to the outfield berm—either way you’ll feel the Gate City roar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeader
              eyebrow="Schedule"
              title="On deck at Halliwell Park"
              description="Check out the upcoming slate and grab seats early. Times are local to Pocatello, ID."
            />
            <div className="mt-4">
              <GameList games={schedule} limit={3} />
            </div>
          </div>
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="Latest"
              title="Club updates"
              description="Highlights and announcements from the Grays clubhouse."
            />
            <div className="mt-4">
              <NewsList items={news} limit={3} />
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Partners"
            title="Thank you to our supporters"
            description="Local businesses keep Gate City baseball thriving."
          />
          <div className="mt-4">
            <SponsorGrid sponsors={sponsors.slice(0, 2)} />
          </div>
        </section>
      </div>
    </div>
  );
}
