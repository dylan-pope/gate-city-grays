import { Link } from "react-router-dom";
import { siteInfo } from "../data/siteInfo";

const links = [
  { label: "Home", path: "/" },
  { label: "Roster", path: "/roster" },
  { label: "Coaches", path: "/staff" },
  { label: "Schedule", path: "/schedule" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-graysDark text-graysWhite">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-bold uppercase tracking-wide">
            {siteInfo.name}
          </p>
          <p className="mt-2 text-sm text-graysMuted">
            {siteInfo.ballpark} · {siteInfo.ballparkAddress}
          </p>
          <p className="mt-1 text-sm text-graysMuted">Phone: {siteInfo.phone}</p>
        </div>
        <div>
          <p className="font-heading text-lg font-semibold uppercase tracking-wide">
            Quick Links
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="transition hover:text-graysRed"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-heading text-lg font-semibold uppercase tracking-wide">
            Connect
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            {siteInfo.socials.facebook && (
              <a
                href={siteInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-3 py-1 transition hover:bg-graysRed"
              >
                Facebook
              </a>
            )}
            {siteInfo.socials.twitter && (
              <a
                href={siteInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-3 py-1 transition hover:bg-graysRed"
              >
                X / Twitter
              </a>
            )}
            {siteInfo.socials.instagram && (
              <a
                href={siteInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-3 py-1 transition hover:bg-graysRed"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-xs text-graysMuted">
          © {new Date().getFullYear()} {siteInfo.name}. Northern Utah League · Pocatello,
          Idaho.
        </p>
      </div>
    </footer>
  );
}
