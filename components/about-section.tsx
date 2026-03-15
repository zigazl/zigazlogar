import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

type AboutProps = {
  about: {
    title: string;
    paragraphs: readonly string[];
  };
};

export function AboutSection({ about }: AboutProps) {
  return (
    <section id="about" className="section">
      <div className="section-divider" />
      <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionIntro
            eyebrow="How I Work"
            title={about.title}
          />
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <p className="max-w-2xl text-[1.02rem] leading-7 text-muted md:text-[1.05rem] md:leading-8">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.12}>
          <div className="panel relative overflow-hidden p-6 md:p-10">
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,167,209,0.12),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.48))]" />
            <div className="relative space-y-8">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted">Operating model</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-muted">
                  Business ↔ Technology
                </span>
              </div>
              <div className="grid gap-3 md:gap-4">
                {[
                  ["Business context", "I start by understanding what the organization needs and what will actually help in daily work."],
                  ["Process design", "I look for structure, clarity, and simpler ways of working across teams and processes."],
                  ["Delivery structure", "I try to support implementation in a way that stays practical, understandable, and manageable over time."],
                ].map(([title, copy]) => (
                  <div key={title} className="interactive-card rounded-[24px] border border-slate-200 bg-white/75 p-4 md:rounded-[26px] md:p-5">
                    <p className="text-sm font-semibold text-text">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted md:leading-7">{copy}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white/70 p-5 md:rounded-[28px] md:p-6">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-px flex-1 bg-slate-200" />
                  <div className="h-2 w-2 rounded-full bg-accentBlue" />
                </div>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-6">
                  <div className="rounded-2xl border border-slate-200 p-3.5 text-sm text-muted md:p-4">Clarity</div>
                  <div className="rounded-2xl border border-slate-200 p-3.5 text-sm text-muted md:p-4">Structure</div>
                  <div className="rounded-2xl border border-slate-200 p-3.5 text-sm text-muted md:p-4">Usefulness</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
