import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const spaceGrotesk = localFont({
  src: "../../public/fonts/Space_Grotesk/static/SpaceGrotesk-Medium.ttf",
  variable: "--font-space",
  weight: "500",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

const playfairDisplay = localFont({
  src: "../../public/fonts/Playfair_Display/static/PlayfairDisplay-SemiBold.ttf",
  variable: "--font-playfair",
  weight: "600",
  display: "swap",
  fallback: ["serif"],
});

export const metadata: Metadata = {
  title: "Balawal's Portfolio",
  description: "Software Engineer & Developer",
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload fonts for faster loading */}
        <link rel="preload" href="/fonts/hd44780.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/hd44780.otf.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          spaceGrotesk.variable,
          playfairDisplay.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
