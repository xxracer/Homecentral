import type { Metadata } from "next";
import { contactInfo } from "@/lib/data";
import Link from "next/link";
import { HiPhone, HiCheckCircle, HiX } from "react-icons/hi";

export const metadata: Metadata = {
  title:
    "Does Medicare Cover Home Health Care in 2026? | Central Home Health Houston",
  description:
    "Yes — Medicare Part A covers skilled home health services at 100% for qualifying patients. Learn who qualifies, what's covered (skilled nursing, therapy, attendant care, RPM), and how to start.",
  keywords: [
    "Medicare home health coverage",
    "Medicare home health 2026",
    "Medicare Part A home health",
    "home health benefits",
    "Medicare skilled nursing",
    "Medicare homebound criteria",
    "home health eligibility",
  ],
  alternates: {
    canonical: "https://www.centraloftexas.com/blog/medicare-home-health-coverage-2026",
  },
};

export default function MedicareBlogPost() {
  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <div className="text-sm text-text-muted mb-3">
            <Link href="/blog" className="hover:text-secondary">
              Blog
            </Link>{" "}
            · April 15, 2026 · 10 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight">
            Does Medicare Cover Home Health Care in 2026?
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Yes. Medicare Part A covers skilled home health services at 100%
            for qualifying beneficiaries. Here&apos;s the full breakdown of
            who qualifies, what&apos;s covered, what isn&apos;t, and how to
            get started.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-6 text-text-primary">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-3">
              What Medicare covers at 100%
            </h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                <strong>Skilled nursing</strong> (RN and LVN visits) — wound
                care, injections, IV therapy, catheter care, monitoring
              </li>
              <li>
                <strong>Physical therapy</strong> in the home
              </li>
              <li>
                <strong>Occupational therapy</strong> in the home
              </li>
              <li>
                <strong>Speech-language pathology</strong> in the home
              </li>
              <li>
                <strong>Medical social services</strong>
              </li>
              <li>
                <strong>Home health aide</strong> services (only when
                receiving skilled care)
              </li>
            </ul>
            <p>
              <strong>Remote Patient Monitoring (RPM)</strong> is covered
              separately under CPT codes 99453, 99454, 99457, and 99458.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-3">
              Who qualifies
            </h2>
            <p>To qualify for Medicare home health, you must:</p>
            <ol className="space-y-2 list-decimal pl-6">
              <li>
                Be enrolled in <strong>Medicare Part A and/or Part B</strong>
              </li>
              <li>
                Be under the care of a doctor who orders home health
                services
              </li>
              <li>
                Be <strong>homebound</strong> — leaving home requires
                considerable effort (a doctor must certify this)
              </li>
              <li>
                Need <strong>intermittent skilled care</strong> (nursing or
                therapy), not full-time
              </li>
              <li>
                Receive care from a <strong>Medicare-certified</strong>{" "}
                home health agency
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-3">
              What&apos;s NOT covered by Medicare home health
            </h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                <HiX className="inline text-red-500" size={18} /> 24/7
                around-the-clock skilled nursing
              </li>
              <li>
                <HiX className="inline text-red-500" size={18} /> Meal
                delivery
              </li>
              <li>
                <HiX className="inline text-red-500" size={18} /> Homemaker
                services (cleaning, laundry) when not part of skilled care
              </li>
              <li>
                <HiX className="inline text-red-500" size={18} /> Custodial
                care as the only service
              </li>
            </ul>
            <p>
              These services are sometimes covered by Texas Medicaid waiver
              programs (like STAR+PLUS or the Community Attendant Services
              program) or by private long-term care insurance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-3">
              How to start Medicare home health
            </h2>
            <ol className="space-y-2 list-decimal pl-6">
              <li>Ask your doctor for a home health order.</li>
              <li>
                Contact a Medicare-certified agency like Central Home
                Health.
              </li>
              <li>
                Our intake nurse verifies your benefits and coordinates the
                start-of-care visit.
              </li>
              <li>
                Your first nursing or therapy visit happens within 48
                hours of discharge (or sooner).
              </li>
            </ol>
          </section>
        </div>

        <aside className="mt-12 bg-primary/5 border border-primary/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Verify your Medicare home health benefits — free
          </h2>
          <p className="text-text-secondary mb-6">
            Central Home Health Services of Texas verifies your Medicare
            benefits at no charge. We&apos;ll tell you exactly what&apos;s
            covered before your first visit.
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
