import type { Metadata } from "next";
import { Suspense } from "react";
import RoleApplication from "./RoleApplication";

export const metadata: Metadata = {
  title: "Apply | Careers",
  description:
    "Apply for a career at Central Home Health Care of Texas. Complete our online employment application for Nurse, Caregiver, or CNA roles.",
};

export default function ApplyPage() {
  return (
    <Suspense fallback={<KindleSkeleton />}>
      <RoleApplication />
    </Suspense>
  );
}

function KindleSkeleton() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-[#d4cec1] border-t-[#0d9488] rounded-full animate-spin" />
    </div>
  );
}