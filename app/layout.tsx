import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "RentFlow - The Future of Property Management | FBT",
  description: siteConfig.description,
  keywords: ["property management", "PG management", "rent collection", "tenant management", "SaaS", "RentFlow", "Future Beyond Tech"],
  authors: [{ name: "Future Beyond Tech" }],
  openGraph: {
    title: "RentFlow - The Future of Property Management",
    description: "World's first usage-based property management platform. Zero friction. Infinite scale.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <QueryProvider>
          <ThemeProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
