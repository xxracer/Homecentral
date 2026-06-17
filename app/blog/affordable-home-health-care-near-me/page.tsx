import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/lib/data";
import { HiPhone, HiArrowRight, HiCheckCircle, HiX } from "react-icons/hi";

export const metadata: Metadata = {
  title:
    "How to Find Affordable Home Health Care Near Me | Central Home Health Texas",
  description:
    "Learn how to find affordable home health care providers near you. Compare costs, insurance coverage, Medicare/Medicaid eligibility, and payment options for in-home care in Houston.",
  keywords: [
    "affordable home health care near me",
    "cheap home health care providers",
    "low cost home health care",
    "home health care prices Houston",
    "home care cost Texas",
    "Medicare home health cost",
    "Medicaid home health Texas",
    "private pay home care",
  ],
  alternates: {
    canonical: "https://www.centraloftexas.com/blog/affordable-home-health-care-near-me",
  },
};

const costFactors = [
  "Type of care (skilled nursing vs. attendant care)",
  "Number of hours per day or week",
  "Whether you qualify for Medicare, Medicaid, or VA benefits",
  "Complexity of medical needs and equipment",
  "Geographic location within the Houston metro area",
];

const paymentOptions = [
  {
    option: "Medicare Part A",
    cost: "$0 copay",
    note: "Covers skilled nursing, PT/OT, SLP for qualifying homebound patients.",
  },
  {
    option: "Texas Medicaid",
    cost: "$0 copay",
    note: "Covers STAR+PLUS, Community Attendant Services, and skilled care for eligible low-income Texans.",
  },
  {
    option: "Private Insurance",
    cost: "$0–$40/visit",
    note: "PPO and HMO plans vary. We verify benefits before the first visit.",
  },
  {
    option: "VA Benefits",
    cost: "$0 copay",
    note: "Eligible veterans can receive home health and remote monitoring through the VA.",
  },
  {
    option: "Private Pay",
    cost: "$22–$45/hour",
    note: "Best for non-medical attendant care or extra hours not covered by insurance.",
  },
];

export default function AffordableHomeHealthCare() {
  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <div className="text-sm text-text-muted mb-3">
            <Link href="/blog" className="hover:text-secondary">
              Blog
            </Link>{" "}
            · May 28, 2026 · 8 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight">
            How Can I Find Affordable Home Health Care Providers Near Me?
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Finding affordable home health care starts with understanding who
            qualifies for Medicare or Medicaid, what insurance covers, and
            how private-pay rates work. This guide breaks down real costs and
            payment options in Houston, Texas.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            What affects the cost of home health care?
          </h2>
          <ul className="space-y-2 list-disc pl-6 text-text-secondary">
            {costFactors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Payment options and typical costs
          </h2>
          <div className="space-y-4">
            {paymentOptions.map((item) => (
              <div
                key={item.option}
                className="bg-warm-white rounded-xl p-5 border border-warm-gray/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-primary">{item.option}</h3>
                  <span className="text-lg font-bold text-secondary">
                    {item.cost}
                  </span>
                </div>
                <p className="text-text-secondary text-sm">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            5 ways to lower your home health care costs
          </h2>
          <ol className="space-y-3 list-decimal pl-6 text-text-secondary">
            <li>
              <strong>Verify Medicare or Medicaid eligibility first.</strong>
              If your loved one qualifies, skilled nursing and therapy may be
              covered at 100%.
            </li>
            <li>
              <strong>Bundle services with one agency.</strong> Agencies
              like Central Home Health offer skilled nursing, therapy, attendant
              care, and RPM — often reducing duplicate intake fees.
            </li>
            <li>
              <strong>Use attendant care for non-medical tasks.</strong> A
              home health aide ($22–$30/hr) costs far less than a nurse for
              bathing, dressing, and meals.
            </li>
            <li>
              <strong>Add RPM for chronic conditions.</strong> Remote Patient
              Monitoring is Medicare-reimbursed and reduces ER visits.
            </li>
            <li>
              <strong>Ask for a free benefits verification.</strong> A good
              agency will check coverage before charging anything.
            </li>
          </ol>
        </section>

        <section className="mb-12 bg-primary/5 border border-primary/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Get a free benefits check in Houston
          </h2>
          <p className="text-text-secondary mb-6">
            Call Central Home Health Services of Texas. We verify Medicare,
            Medicaid, private insurance, and VA benefits at no charge — before
            your first visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors"
            >
              <HiPhone size={18} />
              Call {contactInfo.phone}
            </a>
            <Link
              href="/refer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
            >
              <HiArrowRight size={18} />
              Request a Free Quote
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
