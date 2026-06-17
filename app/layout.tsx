import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, contactInfo, services } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.centraloftexas.com";

export const metadata: Metadata = {
  title: {
    default:
      "Central Home Health Care of Texas | #1 Rated Home Health Care in Houston",
    template: "%s | Central Home Health Care of Texas",
  },
  description:
    "Houston's top-rated home health care agency since 2005. 24/7 skilled nursing, medication management, rehabilitation therapy, attendant services & Medicare-covered Remote Patient Monitoring (RPM). Free consultation. Call 713-378-0781.",
  keywords: [
    "home health care Houston",
    "home health care Texas",
    "Houston home health agency",
    "skilled nursing Houston",
    "home health care near me",
    "in-home care Houston TX",
    "Medicare home health Houston",
    "home health services Houston",
    "best home health agency Houston",
    "24 hour home care Houston",
    "home health aide Houston",
    "post-surgery home care",
    "elderly home care Houston",
    "Houston TX home health",
    "homebound patient care",
    "wound care at home Houston",
    "IV therapy home Houston",
    "physical therapy home Houston",
    "occupational therapy home Houston",
    "speech therapy home Houston",
    "medication management home",
    "remote patient monitoring RPM",
    "RPM Houston",
    "RPM Medicare",
    "telehealth home health",
    "telehealth monitoring Houston",
    "post-hospital recovery care",
    "stroke recovery home care",
    "heart failure home care",
    "diabetes home care",
    "COPD home care",
    "Houston home care agency",
    "private duty nursing Houston",
    "attendant care services",
    "CNA Houston home care",
    "home health careers Houston",
    "home health care jobs Texas",
    "home health referrals Houston",
    "discharge planning Houston",
    "Harris County home health",
    "Fort Bend home health",
    "Montgomery County home health",
    "Brazoria home health",
    "Galveston home health",
    "memory care home Houston",
    "Parkinson's care home",
    "Alzheimer's home care",
    "dementia home care Houston",
    "Central Home Health",
    "Central Home Health Care of Texas",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title:
      "Central Home Health Care of Texas | #1 Rated Home Health Care in Houston",
    description:
      "Houston's top-rated home health care agency since 2005. 24/7 skilled nursing, medication management, rehabilitation therapy, attendant services & Medicare-covered RPM. Call 713-378-0781.",
    url: BASE_URL,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Central Home Health Care of Texas | Top-Rated Houston Home Health Agency",
    description:
      "24/7 skilled nursing, medication management, rehabilitation therapy, attendant services & Medicare-covered RPM. Serving Houston since 2005.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Add real verification codes after deployment
    // google: "your-google-site-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Healthcare",
  classification: "Home Health Care Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ── JSON-LD structured data: MedicalOrganization + LocalBusiness + FAQPage ──
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": `${BASE_URL}#organization`,
        name: siteConfig.name,
        alternateName: "Central Home Health Services of Texas, LLC",
        url: BASE_URL,
        logo: `${BASE_URL}/logo.png`,
        description:
          "Houston's top-rated home health care agency providing skilled nursing, medication distribution, rehabilitation therapy, attendant services, and Medicare-covered Remote Patient Monitoring (RPM) since 2005.",
        telephone: contactInfo.phone,
        email: contactInfo.email,
        foundingDate: "2005",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: contactInfo.addressLine1,
          addressLocality: "Houston",
          addressRegion: "TX",
          postalCode: "77024",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 29.7653,
          longitude: -95.4579,
        },
        areaServed: [
          { "@type": "City", name: "Houston" },
          { "@type": "State", name: "Texas" },
          { "@type": "AdministrativeArea", name: "Harris County" },
          { "@type": "AdministrativeArea", name: "Fort Bend County" },
          { "@type": "AdministrativeArea", name: "Montgomery County" },
          { "@type": "AdministrativeArea", name: "Brazoria County" },
          { "@type": "AdministrativeArea", name: "Galveston County" },
        ],
        medicalSpecialty: [
          "Skilled Nursing",
          "Home Health Care",
          "Rehabilitation Therapy",
          "Medication Management",
          "Remote Patient Monitoring",
        ],
        availableService: services.map((s) => ({
          "@type": "MedicalProcedure",
          name: s.title,
          description: s.description,
        })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: contactInfo.phone,
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: ["English", "Spanish"],
            hoursAvailable:
              "Mo-Su 00:00-23:59",
          },
          {
            "@type": "ContactPoint",
            telephone: contactInfo.phone2,
            contactType: "patient intake",
            areaServed: "US",
            availableLanguage: ["English", "Spanish"],
          },
        ],
        sameAs: [
          // Add real social profiles after deployment
          // "https://www.facebook.com/centraloftexas",
          // "https://www.linkedin.com/company/centraloftexas",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}#localbusiness`,
        name: siteConfig.name,
        image: `${BASE_URL}/logo.png`,
        url: BASE_URL,
        telephone: contactInfo.phone,
        email: contactInfo.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: contactInfo.addressLine1,
          addressLocality: "Houston",
          addressRegion: "TX",
          postalCode: "77024",
          addressCountry: "US",
        },
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}#website`,
        url: BASE_URL,
        name: siteConfig.name,
        description:
          "Houston's top-rated home health care agency. 24/7 skilled nursing, medication management, rehabilitation therapy, attendant services, and Medicare-covered RPM.",
        publisher: { "@id": `${BASE_URL}#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What services does Central Home Health Care of Texas provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Central Home Health Care of Texas provides five main services: (1) 24-hour skilled nursing, (2) medication distribution and management, (3) rehabilitation therapy (physical, occupational, and speech), (4) provider attendant services for daily living, and (5) Remote Patient Monitoring (RPM) with FDA-cleared Bluetooth devices.",
            },
          },
          {
            "@type": "Question",
            name: "Is Central Home Health Care of Texas Medicare-certified?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Central Home Health Services of Texas, LLC is certified by the Centers for Medicare & Medicaid Services (CMS) and licensed by the Texas Health and Human Services Commission (HHSC). Most qualifying home health services are covered at 100% by Medicare Part A.",
            },
          },
          {
            "@type": "Question",
            name: "What areas does Central Home Health serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We serve the Greater Houston area including Harris County, Fort Bend County, Brazoria County, Galveston County, Montgomery County, and Liberty County.",
            },
          },
          {
            "@type": "Question",
            name: "How do I refer a patient to Central Home Health Care?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Call 713-378-0781, submit the online referral form at https://www.centraloftexas.com/refer, or email info@centraloftexas.com. Our intake team responds within 24 hours.",
            },
          },
          {
            "@type": "Question",
            name: "What is Remote Patient Monitoring (RPM)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Remote Patient Monitoring (RPM) uses FDA-cleared Bluetooth devices — such as a blood pressure cuff, glucometer, pulse oximeter, or smart scale — to transmit patient vitals in real time to our clinical team. The team reviews readings daily and intervenes early when readings exceed safe thresholds. RPM is Medicare-reimbursed and reduces hospital readmissions by 25-40%.",
            },
          },
          {
            "@type": "Question",
            name: "How long has Central Home Health been in business?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Central Home Health Services of Texas, LLC was founded in 2005 and has served the Houston area continuously for over 19 years.",
            },
          },
          {
            "@type": "Question",
            name: "Does Central Home Health offer 24-hour care?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our skilled nursing and attendant services are available 24 hours a day, 7 days a week. Our clinical on-call line is staffed around the clock for emergencies.",
            },
          },
          {
            "@type": "Question",
            name: "What insurance do you accept?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We accept Medicare, Texas Medicaid, private insurance (PPO/HMO), VA benefits, long-term care insurance, workers' compensation, and private pay. Call 713-378-0781 to verify your benefits.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="canonical" href={BASE_URL} />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Houston" />
        <meta name="geo.position" content="29.7653;-95.4579" />
        <meta name="ICBM" content="29.7653, -95.4579" />
        <meta name="theme-color" content="#1a3a5c" />
        <link
          rel="alternate"
          type="text/plain"
          title="LLM Index"
          href="/llms.txt"
        />
        <link
          rel="alternate"
          type="text/plain"
          title="LLM Full Reference"
          href="/llms-full.txt"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
