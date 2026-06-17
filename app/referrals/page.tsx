import type { Metadata } from "next";
import { ReferralsContent } from "./ReferralsContent";

export const metadata: Metadata = {
  title: "Referrals",
  description:
    "Refer patients to Central Home Health Care of Texas. We welcome referrals from healthcare professionals, hospitals, and families for home health services in Houston.",
};

export default function ReferralsPage() {
  return <ReferralsContent />;
}
