import Section from "@/components/section";
import Reveal from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" wide revealContent={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((s, index) => {
          const direction = ["Frontend", "Databases", "Tools and AI"].includes(s.group)
            ? "right"
            : "left";

          return (
            <Reveal key={s.group} direction={direction} delay={index * 100} repeat>
              <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(255,201,0,0.07)]">
                <h3 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Badge key={i} variant="secondary" className="text-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary">
                      {i}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
