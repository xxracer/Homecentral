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
  { label: "Referrals", href: "/referrals" },
  { label: "Careers", href: "/careers" },
];

// ── Services ──
export const services: Service[] = [
  {
    id: "skilled-nursing",
    title: "Skilled Nursing",
    description:
      "Compassionate, hospital-quality skilled nursing delivered in the comfort and familiarity of your own home. Our experienced RNs and LVNs manage complex medical needs and coordinate every part of your care plan.",
    icon: "nursing",
    features: [
      "Wound Care",
      "Medication Management",
      "Medical Social Worker",
      "Home Health Aides",
    ],
  },
  {
    id: "rehabilitation-therapy",
    title: "Rehabilitation Therapy",
    description:
      "In-home rehabilitation that helps you regain strength, mobility, and independence after surgery, illness, or injury. Our licensed therapists build a customized recovery plan around your goals.",
    icon: "rehab",
    features: [
      "Physical Therapy",
      "Occupational Therapy",
      "Speech Therapy",
      "Post-surgery recovery at home",
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
      "Online applications open soon. Once our compliance process is finalized, you'll be able to apply directly from this page.",
    applyReady: false,
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
      "Online applications open soon. Once our compliance process is finalized, you'll be able to apply directly from this page.",
    applyReady: false,
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
      "Online applications open soon. Once our compliance process is finalized, you'll be able to apply directly from this page.",
    applyReady: false,
  },
];

// ── Trust stats ──
export const trustStats = [
  { value: "19+", label: "Years of Service" },
  { value: "2", label: "Care Lines: Skilled & PAS" },
  { value: "500+", label: "Patients Served" },
  { value: "100%", label: "Licensed Staff" },
];

// ── Referrals page content ──
export const referralsContent = {
  title: "Referrals",
  subtitle:
    "We welcome referrals from healthcare professionals, hospitals, and families. Partner with us to ensure your patients and loved ones receive the highest quality home health care.",
  steps: [
    {
      step: 1,
      title: "Submit Referral",
      description:
        "Send your referral through our secure online portal with patient information and care needs. You can also call us directly for urgent referrals.",
    },
    {
      step: 2,
      title: "Care Assessment",
      description:
        "Our clinical team reviews each referral and conducts a comprehensive assessment to determine the appropriate care plan.",
    },
    {
      step: 3,
      title: "Care Begins",
      description:
        "Once the care plan is approved, our skilled practitioners begin delivering personalized home health services.",
    },
  ],
};

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