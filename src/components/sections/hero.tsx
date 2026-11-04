import Image from "next/image";
import { Download } from "lucide-react";
import AnimatedGreeting from "@/components/animated-greeting";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="animate-glow pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="animate-float pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative grid min-h-[calc(100svh-4rem)] w-full items-center md:grid-cols-2">
        <div className="flex h-full flex-col justify-center px-6 py-16 sm:px-10 md:px-14 lg:px-20 xl:px-28">
          <AnimatedGreeting greeting="Hi, I'm" name={profile.name} />

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{profile.role}</p>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">In production:</span>{" "}
            {profile.proof}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className={buttonVariants({ size: "lg" })}>See my projects</a>
            <a href="#contact" className={buttonVariants({ size: "lg", variant: "outline" })}>Get in touch</a>
            <a
              href={`${basePath}/Sahed-Ahmed-CV.pdf`}
              download
              className={buttonVariants({ size: "lg", variant: "outline", className: "border-primary/50 text-primary hover:bg-primary/10" })}
            >
              <Download aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>

        <div className="relative flex h-full min-h-[420px] items-center justify-center px-8 py-12 sm:px-14 md:min-h-0 md:px-10 lg:px-16">
          <div className="animate-glow pointer-events-none absolute size-72 rounded-full bg-primary/15 blur-3xl sm:size-96" />
          <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-full border border-primary/25 bg-[#08090c] shadow-[0_0_60px_rgba(255,201,0,0.10)] sm:max-w-[340px] lg:max-w-[400px]">
            <Image
              src={`${basePath}/profile.png`}
              alt={`${profile.name} — portrait`}
              fill
              priority
              sizes="(max-width: 768px) 75vw, 400px"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
