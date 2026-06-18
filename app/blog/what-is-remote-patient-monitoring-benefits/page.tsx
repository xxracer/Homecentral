import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/lib/data";
import { HiPhone, HiArrowRight, HiCheckCircle } from "react-icons/hi";

export const metadata: Metadata = {
  title:
    "What Is Remote Patient Monitoring and How Does It Benefit Me? | Central Home Health",
  description:
    "Remote Patient Monitoring (RPM) tracks your vital signs from home and sends data to your care team. Learn how RPM reduces hospitalizations, improves chronic disease control, and lowers healthcare costs.",
  keywords: [
    "what is remote patient monitoring",
    "remote patient monitoring benefits",
    "RPM benefits patients",
    "how does RPM work",
    "why use remote patient monitoring",
    "RPM diabetes benefits",
    "RPM heart failure benefits",
  ],
  alternates: {
    canonical: "https://www.centraloftexas.com/blog/what-is-remote-patient-monitoring-benefits",
  },
};

const benefits = [
  {
    title: "Catch problems early",
    description:
      "Daily readings let clinicians spot trends before symptoms get worse. This prevents small issues from becoming ER visits or hospital stays.",
  },
  {
    title: "Fewer hospital readmissions",
    description:
      "RPM programs have been shown to reduce readmissions by 25–40% for heart failure patients and cut ER visits for chronic conditions.",
  },
  {
    title: "Better chronic disease control",
    description:
      "Patients with hypertension, diabetes, and COPD see measurable improvements in blood pressure, A1c, and oxygen levels when monitored regularly.",
  },
  {
    title: "Peace of mind for families",
    description:
      "Family members know a nurse is reviewing vitals every day. If something is wrong, the care team calls first.",
  },
  {
    title: "Medicare-covered",
    description:
      "For qualifying patients, RPM devices, data transmission, and clinical review are reimbursed by Medicare — often at $0 out-of-pocket cost.",
  },
  {
    title: "More personalized care",
    description:
      "Your doctor can adjust medications based on real trends, not just one reading at the clinic every few months.",
  },
];

export default function RPMBenefitsPage() {
  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <div className="text-sm text-text-muted mb-3">
            <Link href="/blog" className="hover:text-secondary">
              Blog
            </Link>{" "}
            · April 22, 2026 · 7 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight">
            What Is Remote Patient Monitoring and How Does It Benefit Me?
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Remote Patient Monitoring (RPM) is a simple, technology-enabled
            service that helps you stay healthy at home. Learn how it works and
            the specific ways it can improve your health, lower your costs,
            and give your family peace of mind.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            How RPM works in three steps
          </h2>
          <ol className="space-y-4 list-decimal pl-6 text-text-secondary">
            <li>
              <strong>You take readings at home.</strong> Using
              FDA-cleared Bluetooth devices — a blood pressure cuff, glucose
              meter, pulse oximeter, or smart scale — you measure your vitals
              as part of your normal routine.
            </li>
            <li>
              <strong>Data is sent automatically.</strong> The device sends
              readings to a secure platform that your clinical team monitors
              daily.
            </li>
            <li>
              <strong>Your care team responds.</strong> If a reading is
              outside the safe range, a nurse or clinician calls you to check
              in, adjust medications, or recommend next steps.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Six benefits of Remote Patient Monitoring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-warm-white rounded-xl p-5 border border-warm-gray/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <HiCheckCircle className="text-secondary flex-shrink-0" size={22} />
                  <h3 className="text-lg font-bold text-primary">{benefit.title}</h3>
                </div>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Conditions RPM helps manage
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Hypertension",
              "Heart failure",
              "Diabetes",
              "COPD",
              "Asthma",
              "Post-surgery recovery",
              "Chronic kidney disease",
              "Weight management",
            ].map((condition) => (
              <span
                key={condition}
                className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
              >
                {condition}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-primary/5 border border-primary/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Start RPM at no out-of-pocket cost
          </h2>
          <p className="text-text-secondary mb-6">
            Central Home Health Services of Texas provides RPM with included
            devices, setup, training, and ongoing clinical review. Call us to see
            if you qualify.
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
              Check My Eligibility
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
