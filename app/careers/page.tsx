import type { Metadata } from "next";
import { CareersContent } from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Central Home Health Care of Texas. We hire Nurses (RN/LVN), Caregivers, and Certified Nursing Assistants (CNA) to deliver skilled home health and provider attendant services in Houston, TX.",
  alternates: {
    canonical: "https://www.centraloftexas.com/careers",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}