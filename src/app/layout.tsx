import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider";
import Footer from "./components/Footer";
import BlurVideoStrip from "./components/BlurVideoStrip";

export const metadata: Metadata = {
  title: "Association of Eighty5ers FGCS | One Love Reunion",
  description:
    "Official home of the Association of Eighty5ers FGCS – reconnect, give back and build legacy together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased transition-colors duration-300">
        <ThemeProvider>
          <Navbar />

          {/* ⬇️ full-width, no max-w / mx-auto */}
          <main className="w-full">{children}</main>

          <BlurVideoStrip />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
