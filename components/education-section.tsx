import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

type EducationItem = {
  institution: string;
  credential: string;
  field: string;
  period: string;
  details: readonly string[];
};

export function EducationSection({ items }: { items: readonly EducationItem[] }) {
  return (
    <section id="education" className="section">
      <div className="section-divider" />
      <SectionIntro
        eyebrow="Education"
        title="A solid academic and practical background"
        copy="My education supports my practical experience with a strong grounding in informatics, digitalization, and the broader context of how technology is used in organizations."
      />
      <div className="space-y-6">
        {items.map((item, index) => (
          <Reveal key={`${item.institution}-${item.period}`} delay={index * 0.06}>
            <article className="panel interactive-card grid gap-6 p-7 md:grid-cols-[84px_1fr_0.9fr] md:items-start md:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-lg text-text/70">
                {index === 0 ? "M" : index === 1 ? "B" : "P"}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted">{item.period}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-text">
                  {item.credential}
                </h3>
                <p className="mt-2 text-base text-text/72">{item.field}</p>
                <p className="mt-4 text-base leading-8 text-muted">{item.institution}</p>
              </div>
              <div className="rounded-[26px] border border-slate-200 bg-white/75 p-5">
                {item.details.length ? (
                  <ul className="space-y-3 text-sm leading-7 text-muted">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-7 text-muted">
                    Ongoing advanced study focused on computer science and web technologies.
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
