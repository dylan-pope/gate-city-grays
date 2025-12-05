import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import { siteInfo } from "../data/siteInfo";

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 pb-12">
      <PageHeader
        badge="Contact"
        title="Reach the Gate City Grays"
        description="Get in touch about tickets, partnerships, or community events."
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <SectionHeader title="Contact information" />
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Phone:</span> {siteInfo.phone}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {siteInfo.email ? (
                  <a className="text-graysBlue underline" href={`mailto:${siteInfo.email}`}>
                    {siteInfo.email}
                  </a>
                ) : (
                  <span className="text-slate-600">
                    (TODO: add official team email once provided)
                  </span>
                )}
              </p>
              <p>
                <span className="font-semibold">Ballpark:</span> {siteInfo.ballpark},{" "}
                {siteInfo.ballparkAddress}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {siteInfo.socials.facebook && (
                  <a
                    href={siteInfo.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-graysBlue px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white hover:bg-graysDark"
                  >
                    Facebook
                  </a>
                )}
                {siteInfo.socials.twitter && (
                  <a
                    href={siteInfo.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-graysBlue px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white hover:bg-graysDark"
                  >
                    X / Twitter
                  </a>
                )}
                {siteInfo.socials.instagram && (
                  <a
                    href={siteInfo.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-graysBlue px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white hover:bg-graysDark"
                  >
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <SectionHeader title="Tickets" />
            <p className="mt-2 text-sm text-slate-700">
              {siteInfo.tickets.retailLocation}
            </p>
            <p className="text-sm text-slate-700">{siteInfo.tickets.stadium}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <SectionHeader title="Send a message" />
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-graysDark">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-graysBlue focus:outline-none focus:ring-2 focus:ring-graysBlue/20"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-graysDark">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-graysBlue focus:outline-none focus:ring-2 focus:ring-graysBlue/20"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-graysDark">Reason</label>
              <select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-graysBlue focus:outline-none focus:ring-2 focus:ring-graysBlue/20">
                <option>General Question</option>
                <option>Tickets</option>
                <option>Partnerships</option>
                <option>Media</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-graysDark">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help?"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-graysBlue focus:outline-none focus:ring-2 focus:ring-graysBlue/20"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-graysRed px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-red-800"
            >
              Submit (static)
            </button>
            <p className="text-xs text-slate-500">
              This form is currently static and ready for future CMS or email integration.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
