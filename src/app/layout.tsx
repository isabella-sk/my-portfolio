import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";
import { BackgroundRadial } from "@/src/components/shared/background-snippets";
import { ApplyDock } from "@/src/components/shared/demoDock";
import { ThemeProvider } from "@/src/components/shared/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Isabella K",
  description: "Découvrez mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="relative flex flex-col min-h-screen text-foreground">
        <ThemeProvider>
          <BackgroundRadial />
          <main className="flex-1">{children}</main>
          <ApplyDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
