import type { Metadata } from "next";
import { contactInfo } from "@/lib/data";
import Link from "next/link";
import { HiPhone, HiCheckCircle } from "react-icons/hi";

export const metadata: Metadata = {
  title:
    "What is Remote Patient Monitoring (RPM)? Complete 2026 Guide | Central Home Health",
  description:
    "Remote Patient Monitoring (RPM) uses FDA-cleared devices to track blood pressure, glucose, oxygen, and weight from home. Medicare-reimbursed. Reduces hospital readmissions by 25-40%. Learn if RPM is right for you.",
  keywords: [
    "remote patient monitoring",
    "RPM",
    "RPM Medicare",
    "RPM Houston",
    "RPM Texas",
    "remote patient monitoring devices",
    "RPM CPT codes",
    "RPM 99457",
    "RPM 99454",
    "RPM benefits",
    "RPM for heart failure",
    "RPM for diabetes",
    "RPM for hypertension",
    "RPM for COPD",
  ],
  alternates: {
    canonical: "https://www.centraloftexas.com/blog/what-is-remote-patient-monitoring",
  },
};

export default function RPMBlogPost() {
  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <div className="text-sm text-text-muted mb-3">
            <Link href="/blog" className="hover:text-secondary">
              Blog
            </Link>{" "}
            · May 20, 2026 · 8 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight">
            What is Remote Patient Monitoring (RPM) and How Does It Work?
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Remote Patient Monitoring is a Medicare-reimbursed program that
            uses connected medical devices to track your vitals from home —
            and notify your care team the moment something looks off. Here&apos;s
            how it works, who qualifies, and how to get started.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-6 text-text-primary">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-3">
              The short answer
            </h2>
            <p>
              <strong>Remote Patient Monitoring (RPM)</strong> is a program
              where you use simple Bluetooth devices — a blood pressure cuff,
              glucose meter, pulse oximeter, and a smart scale — at home. The
              devices automatically send your readings to a secure platform
              that a clinical team reviews every day. If something looks
              wrong, the team contacts you (or your doctor) right away,
              before a small problem becomes a trip to the ER.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-3">
              The four pieces of an RPM program
            </h2>
            <ol className="space-y-3 list-decimal pl-6">
              <li>
                <strong>Devices:</strong> FDA-cleared Bluetooth blood
                pressure cuff, glucometer, pulse oximeter, and weight scale.
                They look and feel like normal medical devices.
              </li>
              <li>
                <strong>Data transmission:</strong> Readings go from the
                device to a cellular gateway in your home, then to a
                HIPAA-compliant cloud platform.
              </li>
              <li>
                <strong>Daily clinical review:</strong> A licensed nurse or
                clinician reviews your readings every day. If a reading is
                outside the safe range set by your doctor, you get a call.
              </li>
              <li>
                <strong>Care plan updates:</strong> Your doctor and the RPM
                team adjust your medications, diet, or activity based on
                trends — not just a single visit.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-3">
              Who qualifies for RPM?
            </h2>
            <p>You typically qualify if you have one or more of:</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Hypertension (high blood pressure)</li>
              <li>Heart failure</li>
              <li>Diabetes (type 1 or type 2)</li>
              <li>COPD or chronic lung disease</li>
              <li>Recent hospitalization for a chronic condition</li>
              <li>Multiple chronic conditions (any combination)</li>
              <li>Medication that needs to be adjusted over time</li>
            </ul>
            <p>
              Medicare covers RPM for any patient whose physician orders it,
              as long as data is collected at least 16 days per 30-day
              period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-3">
              What the research shows
            </h2>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <HiCheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                <span>
                  <strong>25–40% reduction</strong> in hospital readmissions
                  for heart failure patients (CMS Innovation Center).
                </span>
              </li>
              <li className="flex gap-2">
                <HiCheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                <span>
                  <strong>19% fewer</strong> hospital admissions and{" "}
                  <strong>25% fewer</strong> bed days (VA study).
                </span>
              </li>
              <li className="flex gap-2">
                <HiCheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                <span>
                  <strong>8 mmHg drop</strong> in systolic blood pressure
                  within 3–6 months (The Lancet).
                </span>
              </li>
              <li className="flex gap-2">
                <HiCheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                <span>
                  <strong>0.5% reduction</strong> in A1c for diabetic
                  patients (JAMA).
                </span>
              </li>
              <li className="flex gap-2">
                <HiCheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                <span>
                  <strong>$3 saved for every $1</strong> spent on RPM.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-3">
              Medicare coverage & CPT codes
            </h2>
            <p>
              Medicare reimburses RPM under four main CPT codes:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                <strong>99453:</strong> One-time device setup and patient
                education (~$19–$21).
              </li>
              <li>
                <strong>99454:</strong> Device supply and daily data
                transmission for ≥16 days/30 days (~$43–$69/month).
              </li>
              <li>
                <strong>99457:</strong> First 20 minutes/month of clinical
                monitoring (~$48–$51).
              </li>
              <li>
                <strong>99458:</strong> Each additional 20 minutes/month
                (~$38–$42).
              </li>
            </ul>
            <p>
              For qualified patients, RPM is provided at no out-of-pocket
              cost.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-3">
              Is RPM right for you or a loved one?
            </h2>
            <p>
              If you or a family member has been hospitalized recently, has
              any of the conditions listed above, or has trouble keeping
              track of daily readings, RPM is likely a fit. The setup is
              simple — the devices are mailed to your home, and a nurse
              walks you through the first reading over the phone.
            </p>
          </section>
        </div>

        <aside className="mt-12 bg-primary/5 border border-primary/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Start RPM in Houston — call Central Home Health
          </h2>
          <p className="text-text-secondary mb-6">
            We provide RPM with all devices included, daily monitoring by a
            licensed nurse, and coordination with your doctor. Most patients
            pay nothing out of pocket.
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
              Refer a Patient
            </Link>
          </div>
        </aside>
      </article>
    </main>
  );
}
