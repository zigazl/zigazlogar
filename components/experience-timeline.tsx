import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
};

export function ExperienceSection({ items }: { items: readonly ExperienceItem[] }) {
  return (
    <section id="experience" className="section">
      <div className="section-divider" />
      <SectionIntro
        eyebrow="Experience"
        title="A path built through operations, analysis, and project work"
        copy="My experience has gradually moved toward digital projects and solution work, with each role adding practical understanding, responsibility, and communication."
      />
      <div className="relative mt-2">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent/40 via-sky-900/40 to-transparent md:block" />
        <div className="space-y-4 md:space-y-8">
          {items.map((item, index) => {
            const isCurrent = index === 0;

            return (
              <Reveal key={`${item.role}-${item.company}`} delay={index * 0.07}>
                <article className="grid gap-3.5 md:grid-cols-[48px_1fr] md:gap-8">
                  <div className="hidden md:flex md:justify-center">
                    <div
                      className={`mt-10 h-8 w-8 rounded-full border ${
                        isCurrent
                          ? "border-accent/40 bg-accent/10 shadow-[0_0_16px_rgba(56,189,248,0.3)]"
                          : "border-sky-900/50 bg-sky-950/40"
                      }`}
                    />
                  </div>
                  <div
                    className={`panel relative overflow-hidden p-5 md:p-9 interactive-card ${
                      isCurrent ? "border-accent/20 bg-[linear-gradient(180deg,rgba(13,24,45,0.95),rgba(8,16,36,0.98))]" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.06),transparent_36%)]" />
                    <div className="relative grid gap-3.5 md:gap-6 md:grid-cols-[1fr_230px]">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted/70">{item.period}</p>
                          {isCurrent ? (
                            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                              Current
                            </span>
                          ) : null}
                        </div>
                        <h3 className="mt-3 font-display text-[1.6rem] font-semibold tracking-[-0.04em] text-text md:mt-4 md:text-3xl">
                          {item.role}
                        </h3>
                        <p className="mt-1.5 text-[0.98rem] text-text/60 md:mt-2 md:text-base">{item.company}</p>
                        <p className="mt-3.5 max-w-2xl text-[1rem] leading-7 text-muted md:mt-5 md:max-w-[42rem] md:text-base md:leading-8">{item.description}</p>
                      </div>
                      <div className="md:pl-4">
                        <div className="rounded-[20px] border border-sky-500/10 bg-sky-950/20 px-4 py-3 font-mono text-sm leading-6 text-muted md:rounded-[24px] md:px-5 md:py-4 md:leading-7">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
