import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import TopLeftImg from "@/components/TopLeftImg";
import { profile } from "@/lib/profile";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora-family",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const description =
  "Harold Johnson is a software, systems and test engineer with decades of experience across medical devices, defense/aerospace and simulation, now working as an AI consultant on model evaluation, prompt testing and data quality.";

export const metadata: Metadata = {
  title: `${profile.name} | Software, Systems & Test Engineer · AI Consultant`,
  description,
  keywords: [
    "Harold Johnson",
    "AI consultant",
    "AI evaluation",
    "prompt testing",
    "model testing",
    "data quality",
    "test engineer",
    "systems engineer",
    "software engineer",
    "test automation",
    "verification and validation",
    "medical devices",
    "defense",
    "aerospace",
    "La Plata, Maryland",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description,
    type: "website",
  },
  other: {
    "theme-color": "#f13024",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${sora.variable} font-sora page bg-site text-white bg-cover bg-no-repeat relative`}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        <aside>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#393a47",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              },
            }}
          />
        </aside>
      </body>
    </html>
  );
}
