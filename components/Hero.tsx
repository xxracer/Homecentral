"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig, contactInfo, referralUrl } from "@/lib/data";
import { HiPhone, HiArrowRight } from "react-icons/hi";

// Animated EKG pulse line
function EKGPulse() {
  return (
    <div className="relative h-8 w-full max-w-[240px] overflow-hidden">
      <svg
        viewBox="0 0 240 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 15 H240"
          stroke="rgba(201,168,76,0.3)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <motion.path
          d="M0 15 H80 L85 15 L88 5 L91 25 L94 15 L100 15 H240"
          stroke="#c9a84c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 0.8, 1],
          }}
        />

        <motion.circle
          r="4"
          fill="#c9a84c"
          initial={{ cx: -10, cy: 15, opacity: 0 }}
          animate={{
            cx: [0, 80, 85, 88, 91, 94, 100, 260],
            cy: [15, 15, 15, 5, 25, 15, 15, 15],
            opacity: [0, 1, 1, 1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42, 1],
          }}
        />
      </svg>
    </div>
  );
}

// Small trust badge pill
function TrustBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-primary shadow-sm">
      <span className="w-2 h-2 rounded-full bg-secondary" />
      {label}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-dark">
      {/* ── Background image with overlay ── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"
          alt="Caring nurse holding senior patient's hand at home"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
      </div>

      {/* ── Decorative orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* ── Floating trust badges ── */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          className="absolute top-[35%] right-[15%]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrustBadge label="Medicare-Certified" />
        </motion.div>
        <motion.div
          className="absolute top-[55%] right-[22%]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <TrustBadge label="Medicare & Medicaid Certified" />
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] right-[12%]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <TrustBadge label="Serving Since 2005" />
        </motion.div>
      </div>

      {/* ── Wave divider bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C180,110 360,30 540,70 C720,110 900,40 1080,70 C1260,100 1440,50 1440,50 L1440,120 L0,120 Z"
            fill="#f8f7f4"
          />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            Houston's Trusted Home Health Care Since 2005
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              High Quality Care
            </motion.span>
            <motion.span
              className="block text-accent-light"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              With a Lasting Impact
            </motion.span>
          </h1>

          {/* EKG pulse */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <EKGPulse />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {siteConfig.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <Button
              variant="accent"
              size="lg"
              href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
              icon={<HiPhone />}
            >
              Call {contactInfo.phone}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={referralUrl}
              external
              icon={<HiArrowRight />}
              className="!border-white/40 !text-white hover:!bg-white hover:!text-primary"
            >
              Refer a Patient
            </Button>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            className="flex flex-wrap gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            {[
              { value: "19+", label: "Years" },
              { value: "2", label: "Care Lines" },
              { value: "500+", label: "Patients" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-left"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
              >
                <div className="text-3xl font-bold text-accent-light">{stat.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
