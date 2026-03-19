import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shane Kong — 초기투자액셀러레이터협회 사무국장",
    template: "%s | Shane Kong",
  },
  description:
    "초기투자액셀러레이터협회 사무국장 · 벤처투자 전문가. 국내 스타트업 투자 생태계를 대표하는 사단법인의 핵심 운영을 총괄합니다.",
  keywords: ["초기투자액셀러레이터협회", "벤처투자", "액셀러레이터", "스타트업", "사무국장", "Shane Kong"],
  authors: [{ name: "Shane Kong" }],
  creator: "Shane Kong",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "Shane Kong — 초기투자액셀러레이터협회 사무국장",
    description:
      "초기투자액셀러레이터협회 사무국장 · 벤처투자 전문가.",
    siteName: "Shane Kong",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shane Kong — 초기투자액셀러레이터협회 사무국장",
    description:
      "초기투자액셀러레이터협회 사무국장 · 벤처투자 전문가.",
    creator: "@shanekong",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0F1E" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className={inter.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
