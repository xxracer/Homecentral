import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/lib/data";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

export const metadata: Metadata = {
  title:
    "Home Health Care Services in Houston, TX | Central Home Health Care of Texas",
  description:
    "Trusted home health care agency serving Houston, TX. Skilled nursing, wound care, medication management, rehabilitation therapy, provider attendant services, and Medicare-covered Remote Patient Monitoring (RPM). Call 713-387-0781.",
  keywords: [
    "home health care Houston",
    "Houston home health agency",
    "home health services Houston TX",
    "skilled nursing Houston",
    "skilled home health Houston",
    "Houston TX home health",
    "Medicare home health Houston",
  ],
  alternates: {
    canonical: "https://www.centraloftexas.com/services-areas/houston",
  },
};

export default function HoustonPage() {
  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Home Health Care Services in Houston, Texas
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Central Home Health Services of Texas, LLC has been the trusted
            home health care provider for Houston families since 2005.
            From the Medical Center to Memorial, from Katy to Kingwood, our
            licensed nurses, therapists, and attendants bring hospital-quality
            skilled home health and provider attendant care directly to your home.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Houston Home Health Care Services We Provide
          </h2>
          <ul className="space-y-3 text-text-secondary">
            <li>
              <strong className="text-primary">Skilled Nursing in Houston:</strong>{" "}
              Wound care, IV therapy, post-surgery care, catheter care, and
              chronic disease management by licensed RNs and LVNs.
            </li>
            <li>
              <strong className="text-primary">Rehabilitation Therapy in Houston:</strong>{" "}
              Physical, occupational, and speech therapy in the home for
              post-stroke, post-surgical, and injury recovery.
            </li>
            <li>
              <strong className="text-primary">Medication Management in Houston:</strong>{" "}
              Pre-poured weekly planners, dosage verification, and licensed
              practitioner oversight.
            </li>
            <li>
              <strong className="text-primary">Provider Attendant Services (PAS) in Houston:</strong>{" "}
              A Medicaid benefit providing caregiver help with bathing,
              dressing, meal prep, mobility, and daily living activities.
            </li>
            <li>
              <strong className="text-primary">Remote Patient Monitoring (RPM) in Houston:</strong>{" "}
              FDA-cleared Bluetooth devices with daily clinician review.
              Medicare-reimbursed.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Houston Neighborhoods We Serve
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Central Home Health Services provides in-home care across the
            entire Houston metropolitan area, including: Houston Heights,
            Montrose, Museum District, Medical Center, Rice Village, West
            University, Bellaire, Meyerland, Sharpstown, Gulfton, Memorial,
            Spring Branch, Energy Corridor, Katy, Sugar Land, Missouri City,
            Pearland, Clear Lake, Webster, Kingwood, Humble, Atascocita,
            Cypress, Tomball, The Woodlands, Conroe, Pasadena, Deer Park,
            La Porte, Baytown, and Channelview.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Hospitals and Health Systems We Work With
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Our Houston home health team coordinates with discharge planners
            and case managers at major Houston-area hospitals and health
            systems, including Houston Methodist, Memorial Hermann, HCA
            Houston Healthcare, St. Luke&apos;s Health, Baylor St. Luke&apos;s,
            Texas Children&apos;s Hospital, MD Anderson Cancer Center, CHI St.
            Luke&apos;s, and HCA-affiliated facilities.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Insurance & Medicare Coverage in Houston
          </h2>
          <p className="text-text-secondary leading-relaxed">
            We are Medicare-certified and accept most major insurance plans
            in the Houston area. For qualifying patients, Medicare Part A
            covers home health services at 100% with no copay. We also accept
            Texas Medicaid, BCBS Texas, United Healthcare, Aetna, Cigna,
            Humana, and most workers&apos; compensation and VA plans.
          </p>
        </section>

        <section className="mb-12 bg-warm-white p-8 rounded-2xl border border-warm-gray">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Contact Central Home Health Care of Texas
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <HiPhone className="text-secondary mt-1 flex-shrink-0" size={20} />
              <div>
                <strong className="text-primary">Phone (Skilled Home Health):</strong>{" "}
                <a
                  href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                  className="text-secondary hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <HiPhone className="text-secondary mt-1 flex-shrink-0" size={20} />
              <div>
                <strong className="text-primary">Attendant Services:</strong>{" "}
                <a
                  href={`tel:${contactInfo.phone2.replace(/-/g, "")}`}
                  className="text-secondary hover:underline"
                >
                  {contactInfo.phone2}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <HiMail className="text-secondary mt-1 flex-shrink-0" size={20} />
              <div>
                <strong className="text-primary">Email:</strong>{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-secondary hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <HiLocationMarker className="text-secondary mt-1 flex-shrink-0" size={20} />
              <div>
                <strong className="text-primary">Office:</strong>{" "}
                {contactInfo.address}
              </div>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/refer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors"
            >
              Refer a Patient Online
            </Link>
            <Link
              href="/referrals"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
            >
              Healthcare Provider Referrals
            </Link>
          </div>
        </section>

        <footer className="text-sm text-text-muted border-t border-warm-gray pt-6">
          <p>
            Central Home Health Services of Texas, LLC is a licensed and
            Medicare-certified home health agency headquartered in Houston,
            Texas. License # on file with the Texas Health and Human
            Services Commission. We have been in continuous operation since
            2005.
          </p>
        </footer>
      </article>
    </main>
  );
}
