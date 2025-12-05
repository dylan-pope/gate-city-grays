import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import { coaches } from "../data/coaches";

export default function Staff() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 pb-12">
      <PageHeader
        badge="Coaching Staff"
        title="Leaders of the Gate City Grays"
        description="Head coach, assistants, and front office leaders guiding the Grays at Halliwell Park."
      />

      <section>
        <SectionHeader
          eyebrow="Staff"
          title="Coaches & leadership"
          description="Additions can be made easily as new coaches join the club."
        />
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {coaches.map((coach) => (
            <article
              key={coach.name}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur"
            >
              <div className="flex gap-4">
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-graysMuted/70 text-sm font-semibold text-slate-600">
                  {coach.image ? (
                    <img
                      src={coach.image}
                      alt={`${coach.name} headshot`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "Photo coming soon"
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graysBlue">
                    {coach.role}
                  </p>
                  <h2 className="font-heading text-xl font-bold text-graysDark">{coach.name}</h2>
                  {coach.birthdate && (
                    <p className="text-sm text-slate-600">Birthdate: {coach.birthdate}</p>
                  )}
                  {coach.hometown && (
                    <p className="text-sm text-slate-600">Hometown: {coach.hometown}</p>
                  )}
                  {coach.currentCity && (
                    <p className="text-sm text-slate-600">Current City: {coach.currentCity}</p>
                  )}
                  {coach.favoriteTeam && (
                    <p className="text-sm text-slate-600">Favorite MLB Team: {coach.favoriteTeam}</p>
                  )}
                  {coach.favoriteHobby && (
                    <p className="text-sm text-slate-600">Favorite Hobby: {coach.favoriteHobby}</p>
                  )}
                </div>
              </div>
              <div className="mt-3 space-y-1 text-sm text-slate-700">
                {coach.playingExperience && (
                  <p>
                    <span className="font-semibold text-graysDark">Playing Experience:</span>{" "}
                    {coach.playingExperience}
                  </p>
                )}
                {coach.coachingExperience && (
                  <p>
                    <span className="font-semibold text-graysDark">Coaching Experience:</span>{" "}
                    {coach.coachingExperience}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
