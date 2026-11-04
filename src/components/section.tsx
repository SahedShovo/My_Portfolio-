import Reveal from "@/components/reveal";

export default function Section({
  id,
  title,
  children,
  wide = false,
  revealContent = true,
  titleClassName = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
  revealContent?: boolean;
  titleClassName?: string;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-border/60 py-14">
      <div className={`mx-auto px-5 ${wide ? "max-w-7xl" : "max-w-4xl"}`}>
        <Reveal>
          <h2 className={`mb-6 font-[family-name:var(--font-heading)] text-3xl font-extrabold sm:text-4xl ${titleClassName}`}>{title}</h2>
        </Reveal>
        {revealContent ? <Reveal delay={80}>{children}</Reveal> : children}
      </div>
    </section>
  );
}
