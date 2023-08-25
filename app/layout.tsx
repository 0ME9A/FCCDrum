import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FCC Drum",
  description: `Experience the FCC Drum, a virtual drum machine for creating beats and rhythms. Play different drum sounds using your keyboard or mouse. Unlock your musical creativity with FCC Drum and compose unique percussion tracks.`,
  authors: [{ name: "Baliram Singh", url: "https://ome9a.com" }],
  applicationName: "FCC Drum",
  keywords: [
    "Drum machine",
    "Music composition",
    "Virtual drum",
    "Beat creation",
    "Rhythm maker",
    "Musical creativity",
    "Percussion tracks",
    "Keyboard drumming",
    "Interactive",
    "Audio production",
    "Sound design",
    "Music maker",
    "Play drums online",
    "Virtual instrument",
    "Drum sounds",
    "Compose beats",
    "Electronic music",
    "Sound effects",
    "Audio editing",
    "Music production tool",
    "Creative expression",
    "User-friendly interface",
    "Cross-device compatibility",
    "Modern UI",
    "Music enthusiasts",
  ],
  creator: "OMEGA",
  publisher: "OMEGA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-tr from-orange-900 to-orange-950`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
