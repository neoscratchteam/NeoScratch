import { Metadata } from "next";
import PolicyClient from "./PolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | NeoScratch Data Protection",
  description: "Read the NeoScratch privacy policy. We are committed to protecting your data and being transparent about how we collect, use, and safeguard your personal information.",
  keywords: ["privacy policy", "NeoScratch privacy", "data protection Rwanda", "GDPR compliance", "user data security Kigali"],
  alternates: {
    canonical: 'https://neoscratch.com/policy',
  },
  openGraph: {
    title: "Privacy Policy | NeoScratch",
    description: "Learn how we protect your privacy and handle your data with the highest security standards.",
    type: "website",
    url: 'https://neoscratch.com/policy',
  },
};


export default function Page() {
  return <PolicyClient />;
}
