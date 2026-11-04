import Section from "@/components/section";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About me" wide>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-base leading-8 text-muted-foreground sm:text-lg">
          <p>{profile.about}</p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-card/70 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
          {profile.videoId ? (
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${profile.videoId}`}
                title={`${profile.name} — intro video`}
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-card to-foreground/5 p-8 text-center">
              <div className="absolute -right-10 -top-14 size-48 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -bottom-16 -left-10 size-48 rounded-full bg-foreground/5 blur-3xl" />
              <div className="relative">
                <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                  Intro video
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Add your YouTube video ID to <code>profile.videoId</code> in
                  <code> src/data/portfolio.ts</code>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
