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
            <div className="absolute inset-0 grid-overlay opacity-25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.07),transparent_40%)]" />
            <div className="relative space-y-5">
              {/* Terminal header */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/50">operating-model.ts</span>
                <span className="rounded-full border border-sky-500/20 bg-sky-950/30 px-2.5 py-0.5 font-mono text-[10px] text-accent/70">
                  Business ↔ Technology
                </span>
              </div>
              <div className="grid gap-3 md:gap-4">
                {[
                  { label: "01", title: "Business context", copy: "I start by understanding what the organization needs and what will actually help in daily work." },
                  { label: "02", title: "Process design", copy: "I look for structure, clarity, and simpler ways of working across teams and processes." },
                  { label: "03", title: "Delivery structure", copy: "I try to support implementation in a way that stays practical, understandable, and manageable over time." },
                ].map(({ label, title, copy }) => (
                  <div key={title} className="interactive-card rounded-[24px] border border-sky-500/10 bg-sky-950/20 p-4 md:rounded-[26px] md:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] text-accent/50">{label}</span>
                      <div className="h-px flex-1 bg-sky-500/10" />
                    </div>
                    <p className="text-sm font-semibold text-text">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted md:leading-7">{copy}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[24px] border border-sky-500/10 bg-sky-950/20 p-5 md:rounded-[28px] md:p-6">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                  <div className="h-px flex-1 bg-sky-500/15" />
                  <div className="h-2 w-2 rounded-full bg-accentBlue shadow-[0_0_8px_rgba(125,211,252,0.4)]" />
                </div>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-6">
                  {["Clarity", "Structure", "Usefulness"].map((val) => (
                    <div key={val} className="rounded-2xl border border-sky-500/10 bg-sky-950/30 p-3.5 font-mono text-sm text-accent/70 md:p-4">
                      {val}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
