import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/lib/data";
import { HiPhone, HiCheckCircle, HiArrowRight } from "react-icons/hi";

export const metadata: Metadata = {
  title:
    "Best Home Health Care Services for Elderly Patients | Central Home Health Texas",
  description:
    "Discover the best home health care services for elderly patients: skilled nursing, physical therapy, medication management, attendant care, and remote patient monitoring. Compare benefits and choose the right level of care.",
  keywords: [
    "best home health care services for elderly",
    "elderly home care services",
    "home health care for seniors",
    "in-home care for elderly Texas",
    "senior home health services Houston",
    "skilled nursing elderly",
    "medication management seniors",
    "fall prevention elderly home care",
  ],
  alternates: {
    canonical: "https://www.centraloftexas.com/blog/best-home-health-services-elderly",
  },
};

const servicesForElderly = [
  {
    title: "Skilled Nursing",
    description:
      "Licensed nurses manage wounds, IVs, medications, catheter care, and monitor chronic conditions after hospital discharge.",
  },
  {
    title: "Physical Therapy",
    description:
      "In-home PT restores mobility, balance, and strength after falls, surgery, or stroke — reducing the risk of future falls.",
  },
  {
    title: "Occupational Therapy",
    description:
      "Helps seniors safely bathe, dress, cook, and manage daily activities with adaptive equipment and home modifications.",
  },
  {
    title: "Speech Therapy",
    description:
      "Supports recovery from stroke, dementia, or Parkinson’s by improving swallowing safety and communication skills.",
  },
  {
    title: "Medication Management",
    description:
      "Licensed staff set up weekly pill planners, verify dosages, and watch for drug interactions or side effects.",
  },
  {
    title: "Provider Attendant Services",
    description:
      "Non-medical help with bathing, dressing, grooming, meals, light housekeeping, companionship, and errands.",
  },
  {
    title: "Remote Patient Monitoring",
    description:
      "Bluetooth devices track blood pressure, glucose, oxygen, and weight. Clinicians review data daily and call if readings are concerning.",
  },
];

export default function BestServicesForElderly() {
  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <div className="text-sm text-text-muted mb-3">
            <Link href="/blog" className="hover:text-secondary">
              Blog
            </Link>{" "}
            · June 10, 2026 · 9 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight">
            What Are the Best Home Health Care Services for Elderly Patients?
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            As our parents and loved ones age, the right home health care
            service can help them stay independent, safe, and comfortable at
            home. Here is a clear comparison of the most effective services for
            seniors and how to choose the right mix.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Top home health services for seniors
          </h2>
          <div className="space-y-5">
            {servicesForElderly.map((service, index) => (
              <div
                key={service.title}
                className="bg-warm-white rounded-xl p-5 border border-warm-gray/50"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            How to choose the right level of care
          </h2>
          <ul className="space-y-3 list-disc pl-6 text-text-secondary">
            <li>
              <strong>Medical needs:</strong> Use skilled nursing and therapy
              after surgery, hospitalization, or for chronic disease
              management.
            </li>
            <li>
              <strong>Daily living needs:</strong> Use attendant services when a
              senior needs help bathing, dressing, cooking, or remembering
              medications.
            </li>
            <li>
              <strong>Chronic monitoring:</strong> Add RPM for diabetes,
              hypertension, heart failure, or COPD to catch problems early.
            </li>
            <li>
              <strong>Family involvement:</strong> Consider a combination of
              skilled and non-skilled services when family caregivers need
              relief.
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-primary/5 border border-primary/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Get a free care consultation
          </h2>
          <p className="text-text-secondary mb-6">
            Central Home Health Services of Texas helps Houston-area families
            choose the right mix of skilled nursing, therapy, attendant care,
            and RPM for their loved ones.
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
              Request Care Assessment
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
