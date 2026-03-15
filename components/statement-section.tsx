import { Reveal } from "@/components/reveal";

type StatementSectionProps = {
  statement: string;
};

export function StatementSection({ statement }: StatementSectionProps) {
  return (
    <section className="shell py-8 md:py-16">
      <Reveal>
        <div className="mx-auto max-w-5xl px-1 md:px-2 text-left md:text-center">
          <p className="font-display text-[1.9rem] leading-[1.08] tracking-[-0.05em] text-text md:text-[3.4rem] lg:text-[4.2rem]">
            {statement}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
