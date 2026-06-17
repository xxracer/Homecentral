import type { Metadata } from "next";
import { ReferContent } from "./ReferContent";

export const metadata: Metadata = {
  title: "Refer a Patient",
  description:
    "Refer a patient to Central Home Health Care of Texas. We provide compassionate, professional home health care tailored to each individual's needs in Houston.",
};

export default function ReferPage() {
  return <ReferContent />;
}
