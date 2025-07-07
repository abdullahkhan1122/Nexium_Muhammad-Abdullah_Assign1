import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "Generate motivational quotes by topic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
