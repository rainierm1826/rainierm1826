import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "Rainier Marasigan | Software Developer",
    template: "%s | Rainier Marasigan",
  },
  description:
    "Portfolio of Rainier Marasigan, a software developer and BS Information Technology graduate specializing in full-stack web development and software solutions.",
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  openGraph: {
    title: "Rainier Marasigan | Software Developer",
    description:
      "Portfolio of Rainier Marasigan, a software developer and BS Information Technology graduate specializing in full-stack web development and software solutions.",
    type: "website",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Rainier Marasigan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainier Marasigan | Software Developer",
    description:
      "Portfolio of Rainier Marasigan, a software developer and BS Information Technology graduate specializing in full-stack web development and software solutions.",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/profile.png",
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
