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
      <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="panel relative overflow-hidden p-6 md:p-10">
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,167,209,0.12),transparent_36%)]" />
            <div className="relative flex min-h-[300px] items-center justify-center md:min-h-[420px]">
              <div className="absolute h-[220px] w-[220px] rounded-full border border-slate-200 md:h-[320px] md:w-[320px]" />
              <div className="absolute h-[170px] w-[170px] rounded-full border border-accent/20 md:h-[240px] md:w-[240px]" />
              <div className="absolute h-[128px] w-[128px] rounded-full border border-slate-200 md:h-[180px] md:w-[180px]" />
              <div className="absolute h-[250px] w-[160px] rotate-12 rounded-full border border-accentBlue/15 md:h-[360px] md:w-[220px]" />
              <div className="absolute h-[250px] w-[160px] -rotate-12 rounded-full border border-slate-200/80 md:h-[360px] md:w-[220px]" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-accent/30 bg-[radial-gradient(circle_at_top,rgba(138,167,209,0.2),rgba(255,255,255,0.84))] shadow-[0_18px_40px_rgba(138,167,209,0.16)] md:h-36 md:w-36">
                <span className="max-w-[100px] text-center text-sm uppercase tracking-[0.2em] text-text/68">
                  Responsible Digitalization
                </span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-4 md:space-y-6">
            {values.paragraphs.map((paragraph, index) => (
              <div key={paragraph} className="panel interactive-card p-5 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-text/40">
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
