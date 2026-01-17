import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Hack 2 Future 2.0 - 36-Hour Innovation Challenge",
  description: "Join the ultimate 36-hour hackathon at IIIT Dharwad. Hack the present, shape the future. Register your team today!",
  keywords: ["Hack 2 Future", "Hackathon", "IIIT Dharwad", "Innovation", "Technology", "Coding Challenge"],
  authors: [{ name: "Hack 2 Future Team" }],
  openGraph: {
    title: "Hack 2 Future 2.0",
    description: "36-hour innovation challenge at IIIT Dharwad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hack 2 Future 2.0",
    description: "Hack the present, shape the future",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
