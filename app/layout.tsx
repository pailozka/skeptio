import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Skeptio — Web Development Studio",
    template: "%s | Skeptio",
  },
  description:
    "Skeptio is a web development studio specializing in fullstack development, web design, SEO, AI integration, and business automation.",
  keywords: [
    "web development",
    "web design",
    "fullstack developer",
    "Next.js",
    "React",
    "SEO",
    "AI integration",
    "business automation",
    "TypeScript",
    "web studio",
  ],
  authors: [{ name: "Skeptio" }],
  creator: "Skeptio",
  metadataBase: new URL("https://skeptio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Skeptio — Web Development Studio",
    description:
      "Fullstack development, web design, SEO, AI integration, and business automation.",
    url: "https://skeptio.com",
    siteName: "Skeptio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skeptio — Web Development Studio",
    description:
      "Fullstack development, web design, SEO, AI integration, and business automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jakartaSans.variable}`} suppressHydrationWarning>
      <body className="bg-light text-dark font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
