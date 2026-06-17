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
}

export interface NavLink {
  label: string;
  href: string;
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

// ── Site metadata ──
export const siteConfig = {
  name: "Central Home Health Care of Texas",
  shortName: "Central Home Health",
  tagline: "High Quality Care With a Lasting Impact",
  description:
    "Central Home Health Care is the most reliable Home Care Agency in the Houston area. Our practitioners provide the best home health care services and cater to the specific needs of each client.",
  url: "https://www.centraloftexas.com",
  ogImage: "/og-image.jpg",
  founded: 2005,
};

// ── Contact ──
export const contactInfo: ContactInfo = {
  phone: "713-378-0781",
  phoneLabel: "Skilled Home Health",
  phone2: "713-461-5696",
  phone2Label: "Provider Attendant Services",
  email: "info@centraloftexas.com",
  address: "720 N Post Oak Rd #140, Houston, TX 77024",
  addressLine1: "720 N Post Oak Rd, Ste. 140",
  addressLine2: "Houston, TX 77024",
};

// ── Navigation ──
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Referrals", href: "/referrals" },
  { label: "Positions", href: "/positions" },
  { label: "Refer a Patient", href: "/refer" },
];

// ── Services ──
export const services: Service[] = [
  {
    id: "medication-distribution",
    title: "Medication Distribution",
    description:
      "Professional, reliable Medication Distribution services tailored to each patient. Our licensed practitioners ensure personalized attention and proper medication management around the clock.",
    icon: "medication",
    features: [
      "Personalized medication schedules",
      "Licensed practitioner oversight",
      "24/7 availability",
      "Proper dosage management",
    ],
  },
  {
    id: "rehabilitation-therapy",
    title: "Rehabilitation Therapy",
    description:
      "Rapid-response Rehabilitation Therapy services for emergencies and ongoing recovery. We bring high-quality therapeutic care directly to your home for maximum comfort and faster recovery.",
    icon: "rehab",
    features: [
      "In-home physical therapy",
      "Post-surgery recovery",
      "Emergency response ready",
      "Customized treatment plans",
    ],
  },
  {
    id: "attendant-services",
    title: "Provider Attendant Services",
    description:
      "Compassionate attendant care for daily living activities. Our trained providers assist with personal care, mobility, and household tasks so clients maintain dignity and independence at home.",
    icon: "attendant",
    features: [
      "Personal care assistance",
      "Mobility support",
      "Companionship & monitoring",
      "Daily living activities",
    ],
  },
  {
    id: "skilled-nursing",
    title: "24-Hour Skilled Nursing",
    description:
      "Round-the-clock skilled nursing care for patients with complex medical needs. Our experienced nurses deliver hospital-quality care in the comfort and familiarity of your own home.",
    icon: "nursing",
    features: [
      "24/7 nursing availability",
      "Complex medical care",
      "Post-operative monitoring",
      "Chronic condition management",
    ],
  },
  {
    id: "remote-patient-monitoring",
    title: "Remote Patient Monitoring (RPM)",
    description:
      "Advanced RPM technology that tracks your vital signs — blood pressure, glucose, oxygen levels, heart rhythm, and weight — from the comfort of your home. Our clinicians monitor your data in real time, detect changes before they become emergencies, and adjust your care plan proactively. Medicare-reimbursed and FDA-cleared devices included.",
    icon: "rpm",
    features: [
      "Real-time vital sign tracking 24/7",
      "FDA-cleared Bluetooth devices included",
      "Early detection prevents hospitalizations",
      "Clinician review & monthly care adjustments",
      "Medicare-reimbursed service",
      "Reduces ER visits & readmissions by 30%+",
    ],
  },
];

// ── Job positions ──
export const jobPositions: JobPosition[] = [
  {
    id: "finance-manager",
    title: "Finance Manager",
    location: "Houston, TX",
    description:
      "Oversee Accounts Payable process, invoices, and payments. Prepare monthly clinic volume reports, financials, and audits through Kinnser (EMR). Maintain payor contract rates and audits. Examine financial records and prepare financial reports. Maintain equipment records, inventories, ledgers, and depreciation. Assist with implementation, control, and policies for compliance.",
    requirements: [
      "Bachelor's degree in Business Administration or closely related field (or foreign equivalent) and 5 years of experience, including 3 years in finance management in home healthcare",
      "OR Master's degree in same field and 3 years of experience in finance management in home healthcare",
      "Experience with Kinnser EMR system",
      "Knowledge of healthcare payor contracts and compliance",
    ],
    howToApply:
      "Mail resume to Central Home Health Services of Texas, LLC. 720 N Post Oak Rd, Ste. 140, Houston, TX 77024.",
  },
];

// ── Trust stats ──
export const trustStats = [
  { value: "19+", label: "Years of Service" },
  { value: "24/7", label: "Care Available" },
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
        "Fill out our referral form with patient information and care needs. You can also call us directly for urgent referrals.",
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
    "Contact us by phone or fill out the form below",
    "Provide basic information about the patient's needs",
    "Our team will reach out within 24 hours to arrange a consultation",
    "We develop a personalized care plan and begin services",
  ],
};
