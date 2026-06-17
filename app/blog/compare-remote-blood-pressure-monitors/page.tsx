import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/lib/data";
import { HiPhone, HiArrowRight, HiCheckCircle } from "react-icons/hi";

export const metadata: Metadata = {
  title:
    "Best Remote Blood Pressure Monitors for Home Use 2026 | Central Home Health",
  description:
    "Compare the leading remote blood pressure monitors for home RPM. Bluetooth-enabled, FDA-cleared cuffs from Omron, Welch Allyn, and Withings. Medicare reimbursement and pricing explained.",
  keywords: [
    "best remote blood pressure monitor",
    "bluetooth blood pressure cuff RPM",
    "Omron RPM blood pressure monitor",
    "Welch Allyn blood pressure monitor",
    "Withings blood pressure monitor",
    "FDA cleared blood pressure monitor",
    "Medicare blood pressure monitor",
  ],
  alternates: {
    canonical: "https://www.centraloftexas.com/blog/compare-remote-blood-pressure-monitors",
  },
};

const monitors = [
  {
    name: "Omron HeartGuide",
    type: "Wearable BP monitor",
    fdaCleared: true,
    connectivity: "Bluetooth to smartphone app",
    pros: ["Portable", "stores many readings", " integrates with RPM platforms"],
    cons: ["Higher price point", " Wrist cuff can be less accurate than arm"],
    bestFor: "Patients who need frequent readings outside the home",
  },
  {
    name: "Welch Allyn Home 1700 Series",
    type: "Arm-cuff BP monitor",
    fdaCleared: true,
    connectivity: "Bluetooth to cellular gateway",
    pros: ["Clinic-grade accuracy", " easy one-button use", " rugged"],
    cons: ["No screen alerts", " requires gateway for RPM transmission"],
    bestFor: "Seniors and patients who want simple, accurate readings",
  },
  {
    name: "BodyTrace BP Cuff",
    type: "Cellular arm-cuff monitor",
    fdaCleared: true,
    connectivity: "Built-in cellular (no smartphone needed)",
    pros: ["No app required", " works immediately out of the box", " ideal for RPM"],
    cons: ["Requires cellular signal in the home"],
    bestFor: "RPM programs and patients without smartphones",
  },
  {
    name: "Withings BPM Connect",
    type: "Arm-cuff BP monitor",
    fdaCleared: true,
    connectivity: "Bluetooth + Wi-Fi",
    pros: ["Sleek design", " Wi-Fi sync", " family sharing"],
    cons: ["More consumer-focused", " may need manual RPM integration"],
    bestFor: "Tech-savvy patients tracking BP at home",
  },
];

const comparisonTable = [
  { feature: "FDA-cleared", omron: "Yes", welch: "Yes", bodytrace: "Yes", withings: "Yes" },
  { feature: "Medicare RPM eligible", omron: "Yes", welch: "Yes", bodytrace: "Yes", withings: "Yes" },
  { feature: "Bluetooth", omron: "Yes", welch: "Yes", bodytrace: "Cellular", withings: "Yes" },
  { feature: "No smartphone needed", omron: "No", welch: "No", bodytrace: "Yes", withings: "No" },
  { feature: "Arm-cuff accuracy", omron: "Wrist", welch: "Arm", bodytrace: "Arm", withings: "Arm" },
];

export default function CompareBPMonitors() {
  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <div className="text-sm text-text-muted mb-3">
            <Link href="/blog" className="hover:text-secondary">
              Blog
            </Link>{" "}
            · May 2, 2026 · 8 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight">
            Compare Leading Remote Blood Pressure Monitors for Home Use
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Blood pressure is the most common metric tracked in Remote Patient
            Monitoring programs. Compare the top FDA-cleared Bluetooth blood
            pressure cuffs and find the right one for your RPM program or
            personal health tracking.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Top remote blood pressure monitors
          </h2>
          <div className="space-y-5">
            {monitors.map((monitor, index) => (
              <div
                key={monitor.name}
                className="bg-warm-white rounded-xl p-5 border border-warm-gray/50"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-primary">{monitor.name}</h3>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        <HiCheckCircle size={12} /> FDA-cleared
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-2">
                      <strong>Type:</strong> {monitor.type} ·{" "}
                      <strong>Connectivity:</strong> {monitor.connectivity}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <strong className="text-secondary">Pros:</strong>{" "}
                        <span className="text-text-secondary">{monitor.pros.join(", ")}</span>
                      </div>
                      <div>
                        <strong className="text-text-muted">Cons:</strong>{" "}
                        <span className="text-text-secondary">{monitor.cons.join(", ")}</span>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm mt-2">
                      <strong>Best for:</strong> {monitor.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Feature comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-warm-gray bg-surface">
            <table className="w-full min-w-[500px]">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-sm">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm">Omron</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm">Welch Allyn</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm">BodyTrace</th>
                  <th className="text-left px-4 py-3 font-semibold text-sm">Withings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-gray">
                {comparisonTable.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 1 ? "bg-warm-white" : ""}>
                    <td className="px-4 py-3 font-semibold text-primary text-sm">{row.feature}</td>
                    <td className="px-4 py-3 text-text-secondary text-sm">{row.omron}</td>
                    <td className="px-4 py-3 text-text-secondary text-sm">{row.welch}</td>
                    <td className="px-4 py-3 text-text-secondary text-sm">{row.bodytrace}</td>
                    <td className="px-4 py-3 text-text-secondary text-sm">{row.withings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Accuracy tip
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Upper-arm cuffs are generally more accurate than wrist cuffs for
            blood pressure. For RPM, Medicare and most RPM programs require
            FDA-cleared devices and regular readings (at least 16 days of data
            per 30-day period).
          </p>
        </section>

        <section className="mb-12 bg-primary/5 border border-primary/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Get a Medicare-covered BP monitor in Houston
          </h2>
          <p className="text-text-secondary mb-6">
            Central Home Health Services of Texas provides FDA-cleared remote
            blood pressure cuffs at no cost to qualifying Medicare patients.
            We handle setup, training, and daily monitoring.
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
              Request RPM Cuff
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
