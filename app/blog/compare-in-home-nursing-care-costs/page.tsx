import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/lib/data";
import { HiPhone, HiArrowRight } from "react-icons/hi";

export const metadata: Metadata = {
  title:
    "Compare In-Home Nursing Care Costs | Central Home Health Texas",
  description:
    "Compare in-home nursing care costs in Houston. Skilled nursing, private duty nursing, home health aide rates, Medicare coverage, and what to expect when budgeting for home care.",
  keywords: [
    "in-home nursing care cost",
    "home nursing care prices",
    "private duty nursing cost Houston",
    "RN home care cost",
    "LVN home care cost",
    "home health aide hourly rate",
    "skilled nursing visit cost",
    "24 hour home nursing cost",
  ],
  alternates: {
    canonical: "https://www.centraloftexas.com/blog/compare-in-home-nursing-care-costs",
  },
};

const costComparison = [
  {
    service: "Skilled Nursing Visit (RN/LVN)",
    duration: "45–60 min",
    medicare: "$0 with Part A",
    privatePay: "$95–$175/visit",
    bestFor: "Wound care, IVs, post-op checks, chronic disease monitoring",
  },
  {
    service: "Physical Therapy Visit",
    duration: "45–60 min",
    medicare: "$0 with Part A",
    privatePay: "$90–$160/visit",
    bestFor: "Post-surgery, stroke recovery, balance and strength training",
  },
  {
    service: "Home Health Aide",
    duration: "Per hour",
    medicare: "$0 if part of skilled plan",
    privatePay: "$22–$32/hr",
    bestFor: "Bathing, dressing, grooming, light housekeeping",
  },
  {
    service: "Private Duty RN (continuous)",
    duration: "Per hour",
    medicare: "Not covered",
    privatePay: "$45–$80/hr",
    bestFor: "24/7 complex medical care, ventilator, trach, feeding tube",
  },
  {
    service: "Private Duty LVN/LPN",
    duration: "Per hour",
    medicare: "Not covered",
    privatePay: "$35–$55/hr",
    bestFor: "Medication administration, monitoring, companionship",
  },
  {
    service: "Remote Patient Monitoring",
    duration: "Monthly",
    medicare: "$0 for qualifying patients",
    privatePay: "$100–$250/mo",
    bestFor: "Chronic disease tracking: BP, glucose, SpO2, weight",
  },
];

export default function CompareNursingCosts() {
  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <div className="text-sm text-text-muted mb-3">
            <Link href="/blog" className="hover:text-secondary">
              Blog
            </Link>{" "}
            · May 15, 2026 · 10 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight">
            Compare Costs for In-Home Nursing Care
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Budgeting for in-home nursing care can be confusing because costs
            vary by type of caregiver, level of medical need, and payment
            method. Use this side-by-side comparison to estimate your
            Houston-area home nursing costs.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Home nursing care cost comparison
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-warm-gray bg-surface">
            <table className="w-full min-w-[700px]">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-sm">Service</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm">Duration</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm">Medicare</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm">Private Pay</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-gray">
                {costComparison.map((row, i) => (
                  <tr key={row.service} className={i % 2 === 1 ? "bg-warm-white" : ""}>
                    <td className="px-4 py-4 font-semibold text-primary">{row.service}</td>
                    <td className="px-4 py-4 text-text-secondary text-sm">{row.duration}</td>
                    <td className="px-4 py-4 text-secondary text-sm font-medium">{row.medicare}</td>
                    <td className="px-4 py-4 text-text-secondary text-sm">{row.privatePay}</td>
                    <td className="px-4 py-4 text-text-secondary text-sm">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Important notes about coverage
          </h2>
          <ul className="space-y-3 list-disc pl-6 text-text-secondary">
            <li>
              <strong>Medicare covers skilled nursing and therapy</strong>{" "}
              only when the patient is homebound and the services are ordered by
              a physician.
            </li>
            <li>
              <strong>Private duty nursing</strong> (RN/LVN continuously in
              the home) is not covered by Medicare. It is paid privately or
              through long-term care insurance.
            </li>
            <li>
              <strong>Home health aide services</strong> are only covered
              when the patient is also receiving skilled nursing or therapy.
            </li>
            <li>
              <strong>Remote Patient Monitoring (RPM)</strong> is a
              Medicare-reimbursed add-on for qualifying patients with chronic
              conditions.
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-primary/5 border border-primary/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Get a personalized cost estimate
          </h2>
          <p className="text-text-secondary mb-6">
            Central Home Health Services of Texas provides free benefits
            verification and a written estimate before your first visit. Call us
            to compare your options.
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
              Request Cost Estimate
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
