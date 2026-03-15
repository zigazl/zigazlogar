import { Reveal } from "@/components/reveal";

type IntroProps = {
  intro: {
    title: string;
    paragraphs: readonly string[];
  };
};

export function IntroSection({ intro }: IntroProps) {
  return (
    <section className="section pt-6 md:pt-12">
      <div className="section-divider" />
      <Reveal className="mx-auto max-w-4xl">
        <div className="panel px-6 py-11 md:px-16 md:py-20">
          <span className="eyebrow">A Quick Introduction</span>
          <h2 className="max-w-[10ch] font-display text-[2.2rem] font-semibold tracking-[-0.05em] text-text md:max-w-none md:text-[3.5rem]">
            {intro.title}
          </h2>
          <div className="mt-7 space-y-5 md:mt-8 md:space-y-6">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-[1.02rem] leading-7 text-muted md:text-[1.18rem] md:leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
