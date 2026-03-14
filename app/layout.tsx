import type { Metadata } from "next";

import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-canvas font-sans text-text antialiased">{children}</body>
    </html>
  );
}
