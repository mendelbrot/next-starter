import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/nav";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "next starter",
  description: "starter next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-4 mb-4">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
