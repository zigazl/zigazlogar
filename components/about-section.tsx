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
      <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionIntro eyebrow="About Žiga" title={about.title} />
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <p className="max-w-2xl text-lg leading-8 text-muted md:text-[1.05rem]">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.12}>
          <div className="panel relative overflow-hidden p-8 md:p-10">
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,167,209,0.12),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.48))]" />
            <div className="relative space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted">Operating model</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-muted">
                  Business ↔ Technology
                </span>
              </div>
              <div className="grid gap-4">
                {[
                  ["Business context", "Understanding what the organization needs and what will be helpful in everyday work."],
                  ["Process design", "Looking for structure, clarity, and simpler ways of working."],
                  ["Delivery structure", "Supporting implementation in a way that stays practical and manageable over time."],
                ].map(([title, copy]) => (
                  <div key={title} className="interactive-card rounded-[26px] border border-slate-200 bg-white/75 p-5">
                    <p className="text-sm font-semibold text-text">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">{copy}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="h-px flex-1 bg-slate-200" />
                  <div className="h-2 w-2 rounded-full bg-accentBlue" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-slate-200 p-4 text-sm text-muted">Clarity</div>
                  <div className="rounded-2xl border border-slate-200 p-4 text-sm text-muted">Structure</div>
                  <div className="rounded-2xl border border-slate-200 p-4 text-sm text-muted">Usefulness</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
