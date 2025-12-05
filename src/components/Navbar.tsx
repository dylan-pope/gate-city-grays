import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteInfo } from "../data/siteInfo";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/staff", label: "Coaches" },
  { path: "/roster", label: "Roster" },
  { path: "/schedule", label: "Schedule" },
  { path: "/news", label: "News" },
  { path: "/media", label: "Media" },
  { path: "/sponsors", label: "Sponsors" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-graysDark text-white shadow-lg sticky top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-graysRed text-lg font-bold uppercase shadow-md">
            G
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-graysMuted">
              {siteInfo.city}
            </p>
            <p className="font-heading text-xl font-bold">{siteInfo.name}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wide transition hover:text-graysRed ${
                  isActive ? "text-graysRed" : "text-graysWhite"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-graysRed px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-red-800"
          >
            Tickets
          </Link>
        </nav>
        <button
          className="block rounded-md border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="bg-graysDark md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition hover:bg-white/10 ${
                    isActive ? "text-graysRed" : "text-graysWhite"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-graysRed px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-red-800"
            >
              Tickets
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
