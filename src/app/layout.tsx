import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teamcomputers.com"),
  title:
    "Google Workspace Migration & Support | Team Computers (Modern Experience)",
  description:
    "Reimagined Google Workspace page by Team Computers. Explore zero-downtime migrations, AI productivity, enterprise security, and 24/7 support tailored to your teams.",
  openGraph: {
    title: "Google Workspace Migration & Support | Team Computers",
    description:
      "Work smarter, faster, and safer with Google Workspace—now in a modern, high-performing experience crafted by Team Computers.",
    type: "website",
    url: "https://teamcomputers.com/google-workspace/",
    siteName: "Team Computers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Workspace Migration & Support | Team Computers",
    description:
      "Team Computers makes Google Workspace work harder for your business—migrate, secure, and scale with confidence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
