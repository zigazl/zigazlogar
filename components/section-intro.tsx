import { Reveal } from "@/components/reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <Reveal className={`mb-14 max-w-3xl ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy mt-6">{copy}</p> : null}
    </Reveal>
  );
}
