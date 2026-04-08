import { Metadata } from "next";
import PolicyClient from "./PolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | NeoScratch",
  description: "Read NeoScratch's privacy policy to understand how we collect, use, and protect your personal data when you use our services.",
  keywords: ["privacy policy", "NeoScratch privacy", "data protection", "GDPR", "user data"],
  openGraph: {
    title: "Privacy Policy | NeoScratch",
    description: "How NeoScratch handles your data — transparently, responsibly, and securely.",
    type: "website",
  },
};

export default function Page() {
  return <PolicyClient />;
}
