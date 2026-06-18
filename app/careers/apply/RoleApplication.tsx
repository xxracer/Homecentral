"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  HiArrowRight,
  HiArrowLeft,
  HiCheckCircle,
  HiLockClosed,
  HiPhone,
  HiMail,
  HiHome,
} from "react-icons/hi";
import { contactInfo } from "@/lib/data";

const validRoles = ["nurse", "caregiver", "cna"] as const;
type Role = (typeof validRoles)[number];

const roleMeta: Record<Role, { title: string; subtitle: string }> = {
  nurse: {
    title: "Nurse Application",
    subtitle: "RN / LVN — Skilled Home Health",
  },
  caregiver: {
    title: "Caregiver Application",
    subtitle: "Provider Attendant Services (PAS)",
  },
  cna: {
    title: "CNA Application",
    subtitle: "Certified Nursing Assistant",
  },
};

// === Field definitions ===
interface TextField {
  id: string;
  type: "text" | "email" | "tel" | "date" | "number" | "ssn" | "textarea" | "select" | "yesno" | "checkbox";
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
  subText?: string;
  width?: "full" | "half";
}

interface Page {
  title: string;
  intro?: string;
  fields: TextField[];
}

const buildPages = (): Page[] => [
  {
    title: "Role & Personal Information",
    fields: [
      { id: "roleConfirm", type: "text", label: "Role you are applying for", required: true, placeholder: "e.g. Nurse (RN/LVN)" },
      { id: "lastName", type: "text", label: "Last Name", required: true, width: "half" },
      { id: "firstName", type: "text", label: "First Name", required: true, width: "half" },
      { id: "middleName", type: "text", label: "Middle Name", width: "half" },
      { id: "date", type: "date", label: "Date", required: true, width: "half" },
      { id: "homePhone", type: "tel", label: "Home Phone", width: "half" },
      { id: "cellPhone", type: "tel", label: "Cell Phone", width: "half" },
      { id: "email", type: "email", label: "Email Address", placeholder: "your@email.com", width: "half" },
    ],
  },
  {
    title: "Address & Emergency Contact",
    intro: "Please provide a current address and an emergency contact who does not live with you.",
    fields: [
      { id: "streetAddress", type: "text", label: "Street Address", required: true },
      { id: "city", type: "text", label: "City", required: true, width: "half" },
      { id: "state", type: "text", label: "State", required: true, width: "half" },
      { id: "zipCode", type: "text", label: "ZIP Code", required: true, width: "half" },
      { id: "ssn", type: "ssn", label: "Social Security Number", required: true, width: "half" },
      { id: "emergencyContact", type: "text", label: "Emergency Contact Name", required: true, subText: "A person not living with you" },
      { id: "emergencyPhone", type: "tel", label: "Emergency Contact Phone", width: "half" },
      { id: "emergencyRelationship", type: "text", label: "Relationship", width: "half" },
    ],
  },
  {
    title: "Availability & Eligibility",
    fields: [
      { id: "hoursPerWeek", type: "number", label: "Hours per week available for work", required: true },
      { id: "willingEvenings", type: "checkbox", label: "Willing to work evenings" },
      { id: "willingWeekends", type: "checkbox", label: "Willing to work weekends" },
      { id: "appliedBefore", type: "yesno", label: "Have you ever applied for employment with this Agency?", required: true },
      { id: "currentlyEmployed", type: "yesno", label: "Are you currently employed?", required: true },
      { id: "legallyEligible", type: "yesno", label: "Are you legally eligible for employment in the United States?", required: true },
      { id: "reliableTransportation", type: "yesno", label: "Do you have reliable transportation?", required: true },
      { id: "howLearned", type: "text", label: "How did you learn of our organization?", placeholder: "Friend, job board, social media..." },
      { id: "positionApplyingFor", type: "text", label: "Position applying for" },
      { id: "therapistSpecify", type: "text", label: "Therapist (specify)", placeholder: "If applicable" },
      { id: "otherPosition", type: "text", label: "Other position of interest" },
    ],
  },
  {
    title: "Education",
    intro: "List your education background. High school is required; college, vo-tech, and other training are optional.",
    fields: [
      { id: "collegeName", type: "text", label: "College — School Name", width: "half" },
      { id: "collegeLocation", type: "text", label: "Location of School", width: "half" },
      { id: "collegeCourse", type: "text", label: "Course of Study / Degree", width: "half" },
      { id: "collegeYears", type: "text", label: "Years / Diploma", width: "half" },
      { id: "voTechName", type: "text", label: "Vo-Tech or Trade — School Name", width: "half" },
      { id: "voTechLocation", type: "text", label: "Location of School", width: "half" },
      { id: "voTechCourse", type: "text", label: "Course of Study / Degree", width: "half" },
      { id: "voTechYears", type: "text", label: "Years / Diploma", width: "half" },
      { id: "highSchoolName", type: "text", label: "High School — School Name", required: true, width: "half" },
      { id: "highSchoolLocation", type: "text", label: "Location of School", width: "half" },
      { id: "highSchoolCourse", type: "text", label: "Course of Study / Degree", width: "half" },
      { id: "highSchoolYears", type: "text", label: "Years / Diploma", width: "half" },
      { id: "otherSchoolName", type: "text", label: "Other — School Name", width: "half" },
      { id: "otherSchoolLocation", type: "text", label: "Location of School", width: "half" },
      { id: "otherSchoolCourse", type: "text", label: "Course of Study / Degree", width: "half" },
      { id: "otherSchoolYears", type: "text", label: "Years / Diploma", width: "half" },
    ],
  },
  {
    title: "Employment History #1",
    intro: "Start with your most recent employer.",
    fields: [
      { id: "emp1Company", type: "text", label: "Company Name", required: true, width: "half" },
      { id: "emp1Telephone", type: "tel", label: "Telephone", width: "half" },
      { id: "emp1Address", type: "text", label: "Address" },
      { id: "emp1From", type: "date", label: "From", required: true, width: "half" },
      { id: "emp1To", type: "date", label: "To", width: "half" },
      { id: "emp1City", type: "text", label: "City", width: "half" },
      { id: "emp1State", type: "text", label: "State", width: "half" },
      { id: "emp1Zip", type: "text", label: "ZIP Code", width: "half" },
      { id: "emp1StartingPay", type: "text", label: "Starting Pay", placeholder: "e.g. $18/hr", width: "half" },
      { id: "emp1JobTitle", type: "textarea", label: "Job Title and Describe your work", required: true, rows: 3 },
      { id: "emp1ReasonLeaving", type: "text", label: "Reason for leaving" },
    ],
  },
  {
    title: "Employment History #2",
    intro: "Previous employer.",
    fields: [
      { id: "emp2Company", type: "text", label: "Company Name", width: "half" },
      { id: "emp2Telephone", type: "tel", label: "Telephone", width: "half" },
      { id: "emp2Address", type: "text", label: "Address" },
      { id: "emp2From", type: "date", label: "From", width: "half" },
      { id: "emp2To", type: "date", label: "To", width: "half" },
      { id: "emp2City", type: "text", label: "City", width: "half" },
      { id: "emp2State", type: "text", label: "State", width: "half" },
      { id: "emp2Zip", type: "text", label: "ZIP Code", width: "half" },
      { id: "emp2StartingPay", type: "text", label: "Starting Pay", placeholder: "e.g. $18/hr", width: "half" },
      { id: "emp2JobTitle", type: "textarea", label: "Job Title and Describe your work", rows: 3 },
      { id: "emp2ReasonLeaving", type: "text", label: "Reason for leaving" },
    ],
  },
  {
    title: "Employment History #3",
    intro: "Earlier employer (optional but helpful).",
    fields: [
      { id: "emp3Company", type: "text", label: "Company Name", width: "half" },
      { id: "emp3Telephone", type: "tel", label: "Telephone", width: "half" },
      { id: "emp3Address", type: "text", label: "Address" },
      { id: "emp3From", type: "date", label: "From", width: "half" },
      { id: "emp3To", type: "date", label: "To", width: "half" },
      { id: "emp3City", type: "text", label: "City", width: "half" },
      { id: "emp3State", type: "text", label: "State", width: "half" },
      { id: "emp3Zip", type: "text", label: "ZIP Code", width: "half" },
      { id: "emp3StartingPay", type: "text", label: "Starting Pay", placeholder: "e.g. $18/hr", width: "half" },
      { id: "emp3JobTitle", type: "textarea", label: "Job Title and Describe your work", rows: 3 },
      { id: "emp3ReasonLeaving", type: "text", label: "Reason for leaving" },
    ],
  },
  {
    title: "References & Background",
    intro: "Professional references who can speak to your job performance.",
    fields: [
      { id: "lastNameDifferent", type: "yesno", label: "Was your last name different from your present name during the above listed jobs?", required: true },
      { id: "previousLastName", type: "text", label: "If yes, what was your name?", width: "half" },
      { id: "ref1Name", type: "text", label: "Reference #1 — Name", required: true, width: "half" },
      { id: "ref1Telephone", type: "tel", label: "Telephone", width: "half" },
      { id: "ref1Fax", type: "tel", label: "Fax", width: "half" },
      { id: "ref1Address", type: "text", label: "Address" },
      { id: "ref2Name", type: "text", label: "Reference #2 — Name", width: "half" },
      { id: "ref2Telephone", type: "tel", label: "Telephone", width: "half" },
      { id: "ref2Fax", type: "tel", label: "Fax", width: "half" },
      { id: "ref2Address", type: "text", label: "Address" },
      { id: "ref3Name", type: "text", label: "Reference #3 — Name", width: "half" },
      { id: "ref3Telephone", type: "tel", label: "Telephone", width: "half" },
      { id: "ref3Fax", type: "tel", label: "Fax", width: "half" },
      { id: "ref3Address", type: "text", label: "Address" },
      { id: "convictedCrime", type: "yesno", label: "Have you ever been convicted of a crime in the past 5 years, barring employment in a Home Care and community support Agency?", required: true },
      { id: "convictionDescription", type: "textarea", label: "If yes, describe in full", rows: 4 },
      { id: "capableOfJob", type: "yesno", label: "Are you capable of performing the job set forth in the job description?", required: true },
      { id: "notCapableReason", type: "textarea", label: "If No, which job requirement can you not meet?", rows: 3 },
    ],
  },
  {
    title: "Credentials & Skills",
    fields: [
      { id: "credentials", type: "textarea", label: "Credentials / Specialized Skills / Qualifications / Equipment Operated", rows: 6, placeholder: "List all states in which licensed with registration and expiration date. Summarize special job-related skills, qualifications, and equipment you can operate." },
    ],
  },
  {
    title: "Review & Signature",
    fields: [
      { id: "signature", type: "text", label: "Type your full name as a digital signature", required: true, placeholder: "First and last name" },
    ],
  },
];

const initialData = (): Record<string, string> => ({
  roleConfirm: "",
  lastName: "",
  firstName: "",
  middleName: "",
  date: new Date().toISOString().split("T")[0],
  streetAddress: "",
  homePhone: "",
  city: "",
  state: "",
  zipCode: "",
  cellPhone: "",
  email: "",
  ssn: "",
  emergencyContact: "",
  emergencyPhone: "",
  emergencyRelationship: "",
  appliedBefore: "",
  hoursPerWeek: "",
  legallyEligible: "",
  howLearned: "",
  willingEvenings: "false",
  willingWeekends: "false",
  positionApplyingFor: "",
  therapistSpecify: "",
  otherPosition: "",
  currentlyEmployed: "",
  reliableTransportation: "",
  lastNameDifferent: "",
  previousLastName: "",
  convictedCrime: "",
  convictionDescription: "",
  capableOfJob: "",
  notCapableReason: "",
  collegeName: "",
  collegeLocation: "",
  collegeCourse: "",
  collegeYears: "",
  voTechName: "",
  voTechLocation: "",
  voTechCourse: "",
  voTechYears: "",
  highSchoolName: "",
  highSchoolLocation: "",
  highSchoolCourse: "",
  highSchoolYears: "",
  otherSchoolName: "",
  otherSchoolLocation: "",
  otherSchoolCourse: "",
  otherSchoolYears: "",
  emp1Company: "",
  emp1Telephone: "",
  emp1Address: "",
  emp1From: "",
  emp1To: "",
  emp1City: "",
  emp1State: "",
  emp1Zip: "",
  emp1StartingPay: "",
  emp1JobTitle: "",
  emp1ReasonLeaving: "",
  emp2Company: "",
  emp2Telephone: "",
  emp2Address: "",
  emp2From: "",
  emp2To: "",
  emp2City: "",
  emp2State: "",
  emp2Zip: "",
  emp2StartingPay: "",
  emp2JobTitle: "",
  emp2ReasonLeaving: "",
  emp3Company: "",
  emp3Telephone: "",
  emp3Address: "",
  emp3From: "",
  emp3To: "",
  emp3City: "",
  emp3State: "",
  emp3Zip: "",
  emp3StartingPay: "",
  emp3JobTitle: "",
  emp3ReasonLeaving: "",
  ref1Name: "",
  ref1Telephone: "",
  ref1Fax: "",
  ref1Address: "",
  ref2Name: "",
  ref2Telephone: "",
  ref2Fax: "",
  ref2Address: "",
  ref3Name: "",
  ref3Telephone: "",
  ref3Fax: "",
  ref3Address: "",
  credentials: "",
  signature: "",
});

function ApplicationForm({ role }: { role: Role }) {
  const [data, setData] = useState(initialData());
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const pages = useMemo(() => buildPages(), []);
  const meta = roleMeta[role];

  useEffect(() => {
    setData((prev) => ({ ...prev, roleConfirm: meta.title.replace(" Application", "") }));
  }, [meta.title]);

  const setValue = (id: string, value: string) => setData((prev) => ({ ...prev, [id]: value }));

  const validateStep = () => {
    const page = pages[step];
    const errs: string[] = [];
    page.fields.forEach((f) => {
      if (f.required && !data[f.id]?.trim()) {
        errs.push(`${f.label} is required`);
      }
      // Conditional requirement
      if (f.id === "previousLastName" && data.lastNameDifferent === "yes" && !data.previousLastName.trim()) {
        errs.push("Previous last name is required");
      }
      if (f.id === "convictionDescription" && data.convictedCrime === "yes" && !data.convictionDescription.trim()) {
        errs.push("Please describe the conviction");
      }
      if (f.id === "notCapableReason" && data.capableOfJob === "no" && !data.notCapableReason.trim()) {
        errs.push("Please describe which requirement you cannot meet");
      }
    });
    setErrors(errs);
    return errs.length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, pages.length - 1));
  };

  const handleBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = () => {
    if (!validateStep()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className="max-w-xl mx-auto text-center py-20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 rounded-full bg-[#0d9488]/10 text-[#0d9488] flex items-center justify-center mx-auto mb-6">
          <HiCheckCircle size={32} />
        </div>
        <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-4">Application Submitted</h2>
        <p className="text-[#5c5c5c] leading-relaxed mb-8">
          Thank you, {data.firstName || "applicant"}. We have received your {meta.title.toLowerCase()}.
          Our hiring team will review it and reach out soon.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#1a3a5c] hover:bg-[#264d73] transition-colors"
          >
            <HiHome size={18} /> Back to Careers
          </Link>
          <a
            href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#1a3a5c] border border-[#d4cec1] hover:bg-[#e8e5df] transition-colors"
          >
            <HiPhone size={18} /> Call {contactInfo.phone}
          </a>
        </div>
      </motion.div>
    );
  }

  const currentPage = pages[step];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-[#1a1a1a]">
            Page {step + 1} of {pages.length}
          </span>
          <span className="text-sm italic text-[#8c8c8c]">{currentPage.title}</span>
        </div>
        <div className="h-1.5 bg-[#e8e5df] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#0d9488]"
            animate={{ width: `${((step + 1) / pages.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Kindle card */}
      <div className="bg-[#fffdf8] rounded shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-[#e8e5df] overflow-hidden">
        <div className="p-8 sm:p-12 min-h-[520px] flex flex-col">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 60 : -60, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex-1"
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3 leading-tight">
                {currentPage.title}
              </h2>
              {currentPage.intro && (
                <p className="text-[#5c5c5c] italic mb-6">{currentPage.intro}</p>
              )}

              <div className="space-y-5">
                {currentPage.fields.map((field) => {
                  const commonInput = "w-full px-4 py-3 rounded-lg border border-[#d4cec1] bg-white text-[#1a1a1a] placeholder:text-[#8c8c8c] focus:outline-none focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/15 transition-all";
                  return (
                    <div key={field.id} className={`${field.width === "half" ? "sm:inline-block sm:w-[calc(50%-0.5rem)] sm:mr-4" : ""}`}>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      {field.subText && <p className="text-xs text-[#8c8c8c] mb-1.5">{field.subText}</p>}

                      {field.type === "textarea" && (
                        <textarea
                          value={data[field.id]}
                          onChange={(e) => setValue(field.id, e.target.value)}
                          rows={field.rows || 4}
                          placeholder={field.placeholder}
                          className={`${commonInput} resize-none`}
                        />
                      )}

                      {field.type === "yesno" && (
                        <div className="flex gap-4">
                          {["yes", "no"].map((opt) => (
                            <label
                              key={opt}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                                data[field.id] === opt
                                  ? "bg-[#0d9488]/10 border-[#0d9488] text-[#1a1a1a]"
                                  : "bg-white border-[#d4cec1] text-[#5c5c5c] hover:border-[#0d9488]/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name={field.id}
                                checked={data[field.id] === opt}
                                onChange={() => setValue(field.id, opt)}
                                className="w-4 h-4 text-[#0d9488]"
                              />
                              <span className="capitalize font-medium">{opt}</span>
                            </label>
                          ))}
                        </div>
                      )}

                      {field.type === "checkbox" && (
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={data[field.id] === "true"}
                            onChange={(e) => setValue(field.id, e.target.checked ? "true" : "false")}
                            className="w-5 h-5 rounded border-[#d4cec1] text-[#0d9488]"
                          />
                          <span className="text-[#5c5c5c]">Yes</span>
                        </label>
                      )}

                      {!["textarea", "yesno", "checkbox"].includes(field.type) && (
                        <input
                          type={field.type === "ssn" ? "password" : field.type}
                          value={data[field.id]}
                          onChange={(e) => setValue(field.id, e.target.value)}
                          placeholder={field.placeholder}
                          className={commonInput}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="bg-[#f8f7f4] border-t border-[#e8e5df] p-5 sm:p-6">
          {errors.length > 0 && (
            <div className="mb-4 p-4 bg-red-50 border border-red-100 rounded-lg text-sm text-red-700">
              <ul className="list-disc pl-5 space-y-1">
                {errors.map((err) => <li key={err}>{err}</li>)}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 0}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all ${
                step === 0 ? "text-[#8c8c8c] cursor-not-allowed" : "text-[#1a1a1a] hover:bg-[#e8e5df]"
              }`}
            >
              <HiArrowLeft size={18} /> Previous
            </button>

            {step < pages.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#0d9488] hover:bg-[#0f766e] transition-colors shadow-md"
              >
                Next <HiArrowRight size={18} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#1a3a5c] hover:bg-[#264d73] transition-colors shadow-md"
              >
                Submit Application <HiLockClosed size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleApplication() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("role")?.toLowerCase() || "";
  const role = validRoles.includes(raw as Role) ? (raw as Role) : null;

  if (!role) {
    return (
      <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center px-4">
        <div className="max-w-md text-center bg-[#fffdf8] rounded-xl shadow-lg border border-[#e8e5df] p-8">
          <h1 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-3">Select a Role</h1>
          <p className="text-[#5c5c5c] mb-6">Please choose a position to apply for:</p>
          <div className="space-y-3">
            {validRoles.map((r) => (
              <Link
                key={r}
                href={`/careers/apply?role=${r}`}
                className="block w-full px-5 py-3 rounded-lg bg-[#1a3a5c] text-white font-semibold hover:bg-[#264d73] transition-colors"
              >
                {roleMeta[r].title}
              </Link>
            ))}
          </div>
          <Link href="/careers" className="inline-flex items-center gap-2 mt-6 text-[#0d9488] font-semibold hover:underline">
            <HiArrowLeft size={16} /> Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f1ea] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[#0d9488] font-semibold text-sm uppercase tracking-widest mb-3">
              Online Application
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-2">
              {roleMeta[role].title}
            </h1>
            <p className="text-[#5c5c5c] italic">{roleMeta[role].subtitle}</p>
          </motion.div>
        </div>

        <ApplicationForm role={role} />

        {/* Footer info */}
        <div className="mt-12 text-center text-sm text-[#8c8c8c] space-y-1">
          <p>Need help? Contact our office.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${contactInfo.phone.replace(/-/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-[#0d9488]">
              <HiPhone size={14} /> {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-1.5 hover:text-[#0d9488]">
              <HiMail size={14} /> {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RoleApplicationWrapper() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#d4cec1] border-t-[#0d9488] rounded-full animate-spin" />
      </div>
    }>
      <RoleApplication />
    </Suspense>
  );
}