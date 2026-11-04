import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-heading", weight: ["600", "800"] });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Sahed Ahmed – Full-Stack Developer",
  description: "Portfolio of Sahed Ahmed, CSE student and full-stack developer from Dhaka.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} bg-background font-[family-name:var(--font-body)] text-lg text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
