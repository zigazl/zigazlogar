import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

type ContactProps = {
  contact: {
    email: string;
    linkedin: string;
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
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:items-center sm:gap-4 sm:flex-row">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="btn-secondary w-full sm:w-auto"
              >
                {contact.email}
              </a>
              <a
                href="/ziga-zlogar-cv.pdf"
                download
                className="btn-primary w-full sm:w-auto"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
