import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malmar Knowles Family Foundation | MKFF",
  description: "The Malmar Knowles Family Foundation (MKFF) empowers talented youth from developing countries through the Kectil Program — building ethical leaders, innovators, and changemakers across 100+ countries. 10 years. 20,900+ youth leaders. 100% charitable impact.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Malmar Knowles Family Foundation | MKFF",
    description: "Empowering the next generation of ethical leaders from developing countries. The Kectil Program has reached 20,900+ youth leaders across 100+ countries in 10 years.",
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
  description: "The Malmar Knowles Family Foundation empowers talented youth from developing countries through the Kectil Program, advancing ethical leadership, innovation, and governance worldwide.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F9FA] text-[#111827]">
        {children}
        <Toaster position="top-center" richColors closeButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
