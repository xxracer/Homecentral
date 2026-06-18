// Central Home Health Care of Texas — centralized site data

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path or icon identifier
  features: string[];
}

export interface JobPosition {
  id: string;
  title: string;
  location: string;
  description: string;
  requirements: string[];
  howToApply: string;
  /** When false, the listing is shown but not yet clickable to apply. */
  applyReady: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ContactInfo {
  phone: string;
  phoneLabel: string;
  phone2: string;
  phone2Label: string;
  email: string;
  address: string;
  addressLine1: string;
  addressLine2: string;
}

// External referral portal — "Refer a Patient" links go here.
export const referralUrl = "https://Central.referralflow.health";

// ── Site metadata ──
export const siteConfig = {
  name: "Central Home Health Care of Texas",
  shortName: "Central Home Health",
  tagline: "High Quality Care With a Lasting Impact",
  description:
    "Central Home Health Care of Texas provides skilled home health care and provider attendant services across the Houston area. Our licensed practitioners deliver skilled nursing, rehabilitation therapy, and personalized care tailored to each client's specific needs.",
  url: "https://www.centraloftexas.com",
  ogImage: "/og-image.jpg",
  founded: 2005,
};

// ── Contact ──
export const contactInfo: ContactInfo = {
  phone: "713-387-0781",
  phoneLabel: "Skilled Home Health",
  phone2: "713-461-5696",
  phone2Label: "Provider Services (PAS)",
  email: "info@centraloftexas.com",
  address: "720 N Post Oak Rd #140, Houston, TX 77024",
  addressLine1: "720 N Post Oak Rd, Ste. 140",
  addressLine2: "Houston, TX 77024",
};

// ── Navigation ──
// "Refer a Patient" is rendered as a dedicated external button in the navbar,
// so it is intentionally NOT listed here.
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

// ── Services ──
export const services: Service[] = [
  {
    id: "skilled-nursing",
    title: "Skilled Nursing Services",
    description:
      "Central Home Health provides skilled nursing care at home for patients who need medical support, education, and monitoring under a physician-directed plan of care. Our licensed nurses help patients manage their health needs while remaining in the comfort and familiarity of home.",
    icon: "nursing",
    features: [
      "Skilled nursing visits",
      "Medication education and monitoring",
      "Post-surgical care support",
      "Chronic condition management",
      "Coordination with physicians and caregivers",
    ],
  },
  {
    id: "rehabilitation-therapy",
    title: "Rehabilitation Therapy",
    description:
      "Central Home Health provides in-home rehabilitation therapy to help patients regain strength, mobility, independence, and confidence after an illness, injury, surgery, or hospital stay. Our therapy team works with each patient's physician-directed plan of care to support safe recovery in the comfort of home.",
    icon: "rehab",
    features: [
      "In-home physical therapy",
      "Post-surgical rehabilitation support",
      "Strength, balance, and mobility training",
      "Personalized treatment plans based on patient needs",
    ],
  },
  {
    id: "attendant-services",
    title: "Provider Attendant Services (PAS)",
    description:
      "A Medicaid benefit that pairs clients with a dedicated caregiver for help with daily living activities — bathing, dressing, mobility, meals, and companionship — so clients keep their dignity and independence at home. Our trained attendants care like family.",
    icon: "attendant",
    features: [
      "Medicaid-funded benefit",
      "Personal care & bathing assistance",
      "Mobility & transfer support",
      "Companionship & daily living activities",
    ],
  },
  {
    id: "remote-patient-monitoring",
    title: "Remote Patient Monitoring (RPM)",
    description:
      "Advanced RPM technology that tracks your vital signs — blood pressure, glucose, oxygen levels, heart rhythm, and weight — from the comfort of your home. Our clinicians monitor your data in real time, detect changes before they become emergencies, and adjust your care plan proactively. Medicare-reimbursed and FDA-cleared devices included.",
    icon: "rpm",
    features: [
      "Real-time vital sign tracking",
      "FDA-cleared Bluetooth devices included",
      "Early detection prevents hospitalizations",
      "Clinician review & monthly care adjustments",
      "Medicare-reimbursed service",
      "Reduces ER visits & readmissions by 30%+",
    ],
  },
];

// ── Job positions (Careers) ──
// Only the three role families the user wants listed now. applyReady=false
// means the role is visible but the Apply button is intentionally disabled
// until compliance details are finalized.
export const jobPositions: JobPosition[] = [
  {
    id: "nurse",
    title: "Nurse (RN / LVN)",
    location: "Houston, TX",
    description:
      "Join our skilled home health team delivering high-quality nursing care in patients' homes. You'll manage treatments, medications, and care plans while building genuine relationships with the families you serve.",
    requirements: [
      "Active Texas RN or LVN license",
      "Current CPR certification",
      "Reliable transportation for home visits",
      "Compassionate, patient-first mindset",
    ],
    howToApply:
      "Click Apply Now to fill out our secure online employment application. You may also call or email the office with questions.",
    applyReady: true,
  },
  {
    id: "caregiver",
    title: "Caregiver",
    location: "Houston, TX",
    description:
      "Provide attentive, dignified support with daily living activities through our Provider Attendant Services program. Help clients stay safe and comfortable at home while treating them like family.",
    requirements: [
      "High school diploma or equivalent",
      "Reliable transportation",
      "Patient, dependable, and caring attitude",
      "Ability to assist with mobility and personal care",
    ],
    howToApply:
      "Click Apply Now to fill out our secure online employment application. You may also call or email the office with questions.",
    applyReady: true,
  },
  {
    id: "cna",
    title: "Certified Nursing Assistant (CNA)",
    location: "Houston, TX",
    description:
      "Work alongside our nurses to deliver hands-on care — taking vitals, assisting with personal care, and supporting each patient's recovery and comfort at home.",
    requirements: [
      "Active Texas CNA certification",
      "Current CPR certification",
      "Reliable transportation for home visits",
      "Strong attention to detail and empathy",
    ],
    howToApply:
      "Click Apply Now to fill out our secure online employment application. You may also call or email the office with questions.",
    applyReady: true,
  },
];

// ── Trust stats ──
export const trustStats = [
  { value: "19+", label: "Years of Service" },
  { value: "2", label: "Care Lines: Skilled & PAS" },
  { value: "100%", label: "Licensed Staff" },
];

// ── Refer page content ──
export const referContent = {
  title: "Refer a Patient",
  subtitle:
    "Know someone who needs home health care? Refer them to Central Home Health Care of Texas. We provide compassionate, professional care tailored to each individual's needs.",
  howItWorks: [
    "Submit your referral through our secure online portal",
    "Provide basic information about the patient's needs",
    "Our team reviews the referral and arranges a consultation",
    "We develop a personalized care plan and begin services",
  ],
};