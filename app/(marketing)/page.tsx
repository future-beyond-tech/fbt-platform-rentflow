import type { Metadata } from "next";
import LandingPage from "@/modules/marketing/landing/LandingPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "RentFlow - The Future of Property Management | FBT",
  description: siteConfig.description,
  openGraph: {
    title: "RentFlow - The Future of Property Management",
    description: siteConfig.description,
  },
};

export default function MarketingPage() {
  return <LandingPage />;
}
