import type { Metadata } from "next";
import { PositionsContent } from "./PositionsContent";

export const metadata: Metadata = {
  title: "Positions",
  description:
    "View current job openings at Central Home Health Care of Texas. Join our team of dedicated home health care professionals in Houston, TX.",
};

export default function PositionsPage() {
  return <PositionsContent />;
}
