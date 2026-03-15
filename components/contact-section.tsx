import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

type ContactProps = {
  contact: {
    email: string;
    linkedin: string;
    github: string;
    cta: string;
    closing: string;
  };
};

export function ContactSection({ contact }: ContactProps) {
  return (
    <section id="contact" className="section pb-24">
      <div className="section-divider" />
      <SectionIntro eyebrow="Contact" title="Get in touch" copy={contact.cta} align="center" />
      <Reveal className="mx-auto max-w-4xl">
        <div className="panel relative overflow-hidden px-6 py-12 text-center md:px-16 md:py-18">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(138,167,209,0.12),transparent_38%)]" />
          <div className="relative">
            <p className="mx-auto max-w-2xl text-[1.02rem] leading-7 text-muted md:text-lg md:leading-8">{contact.closing}</p>
            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white/70 p-4 text-left md:mt-10 md:p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted">Profiles</p>
              <div className="mt-4 grid gap-3">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-sm text-text transition-colors duration-300 hover:border-accent/60 hover:bg-slate-50"
                >
                  <span>LinkedIn</span>
                  <span className="text-muted">linkedin.com/in/zigazlogar-it</span>
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-sm text-text transition-colors duration-300 hover:border-accent/60 hover:bg-slate-50"
                >
                  <span>GitHub</span>
                  <span className="text-muted">github.com/zigazl</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-between rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-sm text-text transition-colors duration-300 hover:border-accent/60 hover:bg-slate-50"
                >
                  <span>Email</span>
                  <span className="text-muted">{contact.email}</span>
                </a>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:items-center sm:gap-4 sm:flex-row">
              <a
                href="/ziga-zlogar-cv.pdf"
                download
                className="btn-primary w-full sm:w-auto"
              >
                Download CV
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
