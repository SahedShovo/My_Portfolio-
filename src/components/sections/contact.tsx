import { CodeXml } from "lucide-react";
import Section from "@/components/section";
import Reveal from "@/components/reveal";
import { profile, reference } from "@/data/portfolio";

export default function Contact() {
  const socialButton =
    "inline-flex size-12 items-center justify-center rounded-full border border-white/35 bg-[#17181c] text-[#F5F3EF] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(255,201,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

  return (
    <Section id="contact" title="Contact" wide revealContent={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        <Reveal direction="left" repeat>
          <article className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(255,201,0,0.07)]">
            <h3 className="mb-5 font-[family-name:var(--font-heading)] text-xl font-bold">Get in touch</h3>
            <div className="space-y-4">
              <a className="block break-all text-lg font-semibold text-primary transition-all duration-300 hover:translate-x-1 hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="block text-lg font-semibold text-primary transition-all duration-300 hover:translate-x-1 hover:underline" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
              <div className="flex items-center gap-3 pt-2">
                {profile.linkedin && (
                  <a
                    className={socialButton}
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    title="LinkedIn"
                  >
                    <span aria-hidden="true" className="text-sm font-extrabold tracking-tight">in</span>
                  </a>
                )}
                {profile.github && (
                  <a
                    className={socialButton}
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    title="GitHub"
                  >
                    <CodeXml aria-hidden="true" size={21} strokeWidth={2} />
                  </a>
                )}
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal direction="right" delay={120} repeat>
          <article className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(255,201,0,0.07)]">
            <p className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">Location</p>
            <p className="text-lg text-foreground">{profile.location}</p>
            <p className="mt-6 border-t border-border/70 pt-5 leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Reference:</span> {reference}
            </p>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
