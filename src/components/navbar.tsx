import Link from "next/link";

const links = ["about", "skills", "projects", "education", "contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/15 bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-14"
      >
        <Link
          href="/"
          aria-label="Sahed Ahmed — Home"
          className="group inline-flex shrink-0 items-center rounded-full text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="relative flex size-12 items-center justify-center rounded-full text-primary">
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-spin rounded-full border-2 border-[#F5F3EF]/80 border-t-transparent"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 64 42"
              fill="none"
              className="relative h-7 w-9 transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M22 8C18 2 7 4 7 11c0 8 15 4 15 12 0 9-14 14-20 7m20-1c7-4 12-12 15-21 2-6 3-5 2 1l-5 19c-1 4 2 4 5-1l7-10c2-3 3-2 2 1l-2 7c-1 4 2 4 5 1l8-8M17 35c10-3 22-4 39-3"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>

        <div className="flex max-w-full flex-wrap items-center justify-end gap-2">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="inline-flex min-h-10 items-center rounded-full border border-border/80 bg-card/70 px-4 text-sm font-semibold capitalize text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_18px_rgba(255,201,0,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-5 sm:text-base"
            >
              {l}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
