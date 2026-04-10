import type { Metadata } from "next";

import "./globals.css";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Žiga Žlogar | Responsible Digital Transformation",
  description:
    "Premium personal positioning website for Žiga Žlogar, an IT Project Manager, Business Analyst, and Solution Architect focused on responsible digitalization and long-term enterprise value.",
  openGraph: {
    title: "Žiga Žlogar | Responsible Digital Transformation",
    description:
      "Structured, scalable enterprise digital systems shaped through project leadership, business analysis, and solution architecture.",
    type: "website",
    url: "https://example.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Žiga Žlogar personal positioning website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Žiga Žlogar | Responsible Digital Transformation",
    description:
      "IT Project Manager, Business Analyst, and Solution Architect focused on responsible digitalization.",
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.hero.name,
  jobTitle: "IT Project Manager",
  description: siteContent.intro.paragraphs[0],
  url: "https://example.com", // TODO: update to production URL before launch
  email: siteContent.contact.email,
  sameAs: [siteContent.contact.linkedin, siteContent.contact.github],
  worksFor: {
    "@type": "Organization",
    name: siteContent.experience[0].company,
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: siteContent.education[0].institution,
    },
    {
      "@type": "EducationalOrganization",
      name: siteContent.education[1].institution,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-canvas font-sans text-text antialiased">{children}</body>
    </html>
  );
}
