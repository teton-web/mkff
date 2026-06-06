import type { Metadata } from "next";
import { Fraunces, Inter, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malmar Knowles Family Foundation | MKFF",
  description:
    "The Malmar Knowles Family Foundation (MKFF) empowers talented youth from developing countries through the Kectil Program — building ethical leaders, innovators, and changemakers across 100+ countries.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Malmar Knowles Family Foundation | MKFF",
    description:
      "Empowering the next generation of ethical leaders from developing countries through the Kectil Program.",
    images: [{ url: "/og-image.jpg" }],
  },
  metadataBase: new URL("https://mkff.org"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  name: "Malmar Knowles Family Foundation",
  alternateName: "MKFF",
  url: "https://mkff.org",
  description:
    "The Malmar Knowles Family Foundation empowers talented youth from developing countries through the Kectil Program, advancing ethical leadership, innovation, and governance worldwide.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "400 Perimeter Center Terrace, Suite 200",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    postalCode: "30346",
    addressCountry: "US",
  },
  email: "info@mkff.org",
  foundingDate: "2015",
  nonprofitStatus: "501(c)(3) Private Foundation",
  sameAs: [
    "https://kectil.com",
    "https://www.linkedin.com/company/the-malmar-knowles-family-foundation-the-kectil-program",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${schibsted.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--mkff-cream)] text-[var(--mkff-ink)]">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
