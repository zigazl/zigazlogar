import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

type ValuesProps = {
  values: {
    title: string;
    paragraphs: readonly string[];
  };
};

export function ValuesSection({ values }: ValuesProps) {
  return (
    <section id="values" className="section">
      <div className="section-divider" />
      <SectionIntro
        eyebrow="Values"
        title={values.title}
        copy="A simple approach shaped by practical solutions, clarity over complexity, and technology that works well for people over time."
      />
      <div className="grid items-center gap-6 md:gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="order-2 lg:order-1">
          <div className="panel relative overflow-hidden p-6 md:p-10">
            <div className="absolute inset-0 grid-overlay opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06),transparent_36%)]" />
            <div className="relative flex min-h-[300px] items-center justify-center md:min-h-[420px]">
              <div className="absolute h-[220px] w-[220px] rounded-full border border-sky-900/40 md:h-[320px] md:w-[320px]" />
              <div className="absolute h-[170px] w-[170px] rounded-full border border-accent/15 md:h-[240px] md:w-[240px]" />
              <div className="absolute h-[128px] w-[128px] rounded-full border border-sky-900/30 md:h-[180px] md:w-[180px]" />
              <div className="absolute h-[250px] w-[160px] rotate-12 rounded-full border border-accentBlue/10 md:h-[360px] md:w-[220px]" />
              <div className="absolute h-[250px] w-[160px] -rotate-12 rounded-full border border-sky-900/20 md:h-[360px] md:w-[220px]" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-accent/25 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),rgba(8,16,36,0.8))] shadow-[0_0_40px_rgba(56,189,248,0.12)] md:h-36 md:w-36">
                <span className="max-w-[100px] text-center font-mono text-[10px] uppercase tracking-[0.18em] text-accent/70">
                  Responsible Digitalization
                </span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="order-1 lg:order-2">
          <div className="space-y-3.5 md:space-y-6">
            {values.paragraphs.map((paragraph, index) => (
              <div key={paragraph} className="panel interactive-card p-5 md:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent/40">
                  0{index + 1}
                </p>
                <p className="mt-3 text-[1rem] leading-7 text-muted md:mt-4 md:text-lg md:leading-8">{paragraph}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
