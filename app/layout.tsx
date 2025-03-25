import "./globals.css";
import { Manrope } from "next/font/google";
import type { Metadata } from "next";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title:
    "Anderson Faé | Full-Stack Developer Specializing in JavaScript, Python, React.js, and Blockchain Technologies",
  description:
    "Full-Stack Developer with expertise in JavaScript, Python, and cloud architectures. Specializing in blockchain, Web3, and developing scalable, high-performance applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
