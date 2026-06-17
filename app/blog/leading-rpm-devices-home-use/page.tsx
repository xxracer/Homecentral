import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/lib/data";
import { HiPhone, HiArrowRight, HiCheckCircle } from "react-icons/hi";

export const metadata: Metadata = {
  title:
    "Best Remote Patient Monitoring Devices for Home Use 2026 | Central Home Health",
  description:
    "Compare the leading remote patient monitoring devices for home use: blood pressure monitors, glucometers, pulse oximeters, smart scales, and ECG devices. Find FDA-cleared RPM devices that work with Medicare.",
  keywords: [
    "best RPM devices",
    "remote patient monitoring devices",
    "home blood pressure monitor RPM",
    "Bluetooth glucometer RPM",
    "pulse oximeter RPM",
    "smart scale RPM",
    "ECG patch RPM",
    "FDA cleared RPM devices",
  ],
  alternates: {
    canonical: "https://www.centraloftexas.com/blog/leading-rpm-devices-home-use",
  },
};

const devices = [
  {
    name: "Bluetooth Blood Pressure Cuff",
    whatItDoes: "Measures systolic/diastolic BP and heart rate",
    bestFor: "Hypertension, heart failure, post-stroke care",
    medicareCovered: true,
    example: "Omron HeartGuide, Welch Allyn Home 1700 Series",
  },
  {
    name: "Bluetooth Glucometer / CGM",
    whatItDoes: "Tracks blood glucose levels",
    bestFor: "Diabetes type 1 and type 2",
    medicareCovered: true,
    example: "Dexcom G7, FreeStyle Libre 3, Livongo",
  },
  {
    name: "Bluetooth Pulse Oximeter",
    whatItDoes: "Measures oxygen saturation (SpO2) and pulse",
    bestFor: "COPD, asthma, COVID-19 recovery, heart disease",
    medicareCovered: true,
    example: "Nonin 3230, Masimo MightySat",
  },
  {
    name: "Smart Weight Scale",
    whatItDoes: "Tracks daily weight and body composition",
    bestFor: "Heart failure, kidney disease, post-hospital monitoring",
    medicareCovered: true,
    example: "BodyTrace, Withings Body+",
  },
  {
    name: "ECG / EKG Patch or Monitor",
    whatItDoes: "Records heart rhythm continuously or event-based",
    bestFor: "Arrhythmia, atrial fibrillation, palpitations",
    medicareCovered: false,
    example: "Zio Patch, KardiaMobile (cardiac telemetry billed separately)",
  },
  {
    name: "Wearable Activity / Temperature Tracker",
    whatItDoes: "Tracks steps, sleep, temperature, heart rate",
    bestFor: "Wellness, not typically billable as RPM",
    medicareCovered: false,
    example: "Apple Watch, Fitbit (consumer-grade)",
  },
];

export default function LeadingRPMDevices() {
  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <div className="text-sm text-text-muted mb-3">
            <Link href="/blog" className="hover:text-secondary">
              Blog
            </Link>{" "}
            · June 5, 2026 · 9 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight">
            What Are the Leading Remote Patient Monitoring Devices for Home Use?
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Remote Patient Monitoring (RPM) programs rely on connected medical
            devices that send patient data to a clinical team. Below is a
            comparison of the most common RPM devices, what they measure, and
            whether they qualify for Medicare reimbursement.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Leading RPM devices for home use
          </h2>
          <div className="space-y-5">
            {devices.map((device, index) => (
              <div
                key={device.name}
                className="bg-warm-white rounded-xl p-5 border border-warm-gray/50"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-primary">{device.name}</h3>
                      {device.medicareCovered ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                          <HiCheckCircle size={12} /> Medicare-covered
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-warm-gray text-text-muted text-xs font-medium">
                          Consumer / separate billing
                        </span>
                      )}
                    </div>
                    <p className="text-text-secondary text-sm mb-1">
                      <strong>Measures:</strong> {device.whatItDoes}
                    </p>
                    <p className="text-text-secondary text-sm mb-1">
                      <strong>Best for:</strong> {device.bestFor}
                    </p>
                    <p className="text-text-secondary text-sm">
                      <strong>Examples:</strong> {device.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            What makes an RPM device Medicare-eligible?
          </h2>
          <p className="text-text-secondary leading-relaxed">
            For Medicare billing, RPM devices must be <strong>FDA-cleared</strong>,
            collect physiologic data (not just activity), and transmit data
            digitally for at least 16 days within a 30-day period. Consumer
            wearables like Apple Watch and Fitbit generally do not qualify for
            RPM reimbursement because they are not FDA-cleared medical devices.
          </p>
        </section>

        <section className="mb-12 bg-primary/5 border border-primary/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Get RPM devices included at no cost
          </h2>
          <p className="text-text-secondary mb-6">
            Central Home Health Services of Texas includes FDA-cleared RPM
            devices, setup, training, and daily monitoring for qualifying
            patients. Most Medicare beneficiaries pay $0 out of pocket.
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
              Check RPM Eligibility
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
