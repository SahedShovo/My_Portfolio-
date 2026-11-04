import Section from "@/components/section";
import Reveal from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" wide revealContent={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((p, index) => (
          <Reveal key={p.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 120} repeat>
            <Card className="group glass-card h-full transition-all duration-300 hover:-translate-y-1 hover:border-highlight/30 hover:shadow-[0_20px_60px_rgba(255,201,0,0.12)]">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-heading)] text-2xl">{p.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 pt-1">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="outline" className="transition-transform duration-300 group-hover:scale-[1.02]">{s}</Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="list-disc space-y-1.5 pl-5 text-base">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-3 pt-5">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className={buttonVariants({ size: "sm" })}>Live demo</a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={buttonVariants({ size: "sm", variant: "outline" })}>GitHub</a>
                  )}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
