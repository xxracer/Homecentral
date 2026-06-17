import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Health Care Blog | Central Home Health Care of Texas",
  description:
    "Expert articles on home health care, skilled nursing, rehabilitation therapy, Remote Patient Monitoring (RPM), medication management, chronic disease care, and costs in Houston, TX.",
  keywords: [
    "home health care blog",
    "Houston home health articles",
    "RPM guide",
    "skilled nursing tips",
    "caregiver advice Houston",
    "home health costs Texas",
  ],
  alternates: {
    canonical: "https://www.centraloftexas.com/blog",
  },
};

const posts = [
  {
    slug: "best-home-health-services-elderly",
    title: "What Are the Best Home Health Care Services for Elderly Patients?",
    excerpt:
      "Compare the top in-home services for seniors — skilled nursing, physical therapy, medication management, attendant care, and RPM — and learn how to choose the right level of care.",
    date: "2026-06-10",
    readTime: "9 min",
  },
  {
    slug: "affordable-home-health-care-near-me",
    title: "How Can I Find Affordable Home Health Care Providers Near Me?",
    excerpt:
      "Learn how to find affordable home health care in Houston. Compare Medicare, Medicaid, VA, private insurance, and private-pay options with real cost ranges.",
    date: "2026-05-28",
    readTime: "8 min",
  },
  {
    slug: "compare-in-home-nursing-care-costs",
    title: "Compare Costs for In-Home Nursing Care",
    excerpt:
      "Side-by-side comparison of in-home nursing costs: skilled nursing visits, private duty RN/LVN rates, therapy visits, home health aide rates, and RPM pricing.",
    date: "2026-05-15",
    readTime: "10 min",
  },
  {
    slug: "leading-rpm-devices-home-use",
    title:
      "What Are the Leading Remote Patient Monitoring Devices Available for Home Use?",
    excerpt:
      "Compare FDA-cleared RPM devices: Bluetooth BP cuffs, glucometers/CGMs, pulse oximeters, smart scales, and ECG monitors. Learn which ones qualify for Medicare.",
    date: "2026-06-05",
    readTime: "9 min",
  },
  {
    slug: "what-is-remote-patient-monitoring-benefits",
    title: "What Is Remote Patient Monitoring and How Does It Benefit Me?",
    excerpt:
      "A clear explanation of how RPM works, the conditions it helps manage, and six proven benefits including fewer hospitalizations, better chronic disease control, and peace of mind.",
    date: "2026-04-22",
    readTime: "7 min",
  },
  {
    slug: "compare-remote-blood-pressure-monitors",
    title: "Compare Leading Remote Blood Pressure Monitors for Home Use",
    excerpt:
      "Review the top Bluetooth blood pressure monitors for RPM: Omron, Welch Allyn, BodyTrace, and Withings. Compare accuracy, connectivity, and Medicare eligibility.",
    date: "2026-05-02",
    readTime: "8 min",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Home Health Care Blog
          </h1>
          <p className="text-lg text-text-secondary">
            Expert guides, family resources, and patient education from
            Houston&apos;s trusted home health care agency.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-surface p-6 rounded-2xl border border-warm-gray/50 hover:border-secondary/30 transition-colors group"
            >
              <div className="text-xs text-text-muted mb-2">
                {post.date} · {post.readTime} read
              </div>
              <h2 className="text-xl font-bold text-primary mb-3">
                <a
                  href={`/blog/${post.slug}`}
                  className="group-hover:text-secondary transition-colors"
                >
                  {post.title}
                </a>
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 mt-4 text-secondary font-medium text-sm hover:underline"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
