import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EE Website - Next.js with Routing",
  description: "A demonstration of Next.js App Router with multiple routes and navigation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
