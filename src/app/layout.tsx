import type { Metadata } from "next";
import { DM_Mono, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--dynamic-font-family",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibex Labs | Solana Systems Engineering",
  description:
    "Senior Solana and backend engineering for scoped protocol, migration, and onchain finance work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakarta.variable} ${spaceGrotesk.variable} ${dmMono.variable} h-full`}
    >
      <body className="relative min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
