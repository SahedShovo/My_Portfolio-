import Section from "@/components/section";
import Reveal from "@/components/reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education and activities" wide revealContent={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        <Reveal direction="left" repeat>
          <article className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(255,201,0,0.07)]">
            <p className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">Degree</p>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{education.degree}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{education.school}</p>
            <p className="mt-6 border-t border-border/70 pt-5 leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Coursework:</span> {education.courses}
            </p>
          </article>
        </Reveal>

        <Reveal direction="right" delay={120} repeat>
          <article className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(255,201,0,0.07)]">
            <p className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">Activities</p>
            <ul className="space-y-4">
              {education.extras.map((item) => (
                <li key={item} className="border-l-2 border-highlight/70 pl-4 leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
