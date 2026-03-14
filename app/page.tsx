import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-timeline";
import { HeroSection } from "@/components/hero-section";
import { IntroSection } from "@/components/intro-section";
import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/about-section";
import { StatementSection } from "@/components/statement-section";
import { WhatIDoSection } from "@/components/expertise-section";
import { ValuesSection } from "@/components/values-section";
import { siteContent } from "@/data/site-content";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-canvas">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:120px_120px] opacity-[0.08]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(138,167,209,0.14),transparent_50%)]" />
      <Navigation />
      <main className="relative z-10">
        <HeroSection hero={siteContent.hero} />
        <IntroSection intro={siteContent.intro} />
        <StatementSection statement={siteContent.statements.first} />
        <AboutSection about={siteContent.about} />
        <WhatIDoSection items={siteContent.whatIDo} />
        <StatementSection statement={siteContent.statements.second} />
        <ExperienceSection items={siteContent.experience} />
        <EducationSection items={siteContent.education} />
        <StatementSection statement={siteContent.statements.third} />
        <ValuesSection values={siteContent.values} />
        <ContactSection contact={siteContent.contact} />
      </main>
    </div>
  );
}
