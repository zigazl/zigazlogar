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
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="panel relative overflow-hidden p-10">
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,167,209,0.12),transparent_36%)]" />
            <div className="relative flex min-h-[420px] items-center justify-center">
              <div className="absolute h-[320px] w-[320px] rounded-full border border-slate-200" />
              <div className="absolute h-[240px] w-[240px] rounded-full border border-accent/20" />
              <div className="absolute h-[180px] w-[180px] rounded-full border border-slate-200" />
              <div className="absolute h-[360px] w-[220px] rotate-12 rounded-full border border-accentBlue/15" />
              <div className="absolute h-[360px] w-[220px] -rotate-12 rounded-full border border-slate-200/80" />
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-accent/30 bg-[radial-gradient(circle_at_top,rgba(138,167,209,0.2),rgba(255,255,255,0.84))] shadow-[0_18px_40px_rgba(138,167,209,0.16)]">
                <span className="max-w-[100px] text-center text-sm uppercase tracking-[0.2em] text-text/68">
                  Responsible Digitalization
                </span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-6">
            {values.paragraphs.map((paragraph, index) => (
              <div key={paragraph} className="panel interactive-card p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-text/40">
                  0{index + 1}
                </p>
                <p className="mt-4 text-lg leading-8 text-muted">{paragraph}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
