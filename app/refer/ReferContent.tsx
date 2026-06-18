"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { referContent, contactInfo, referralUrl } from "@/lib/data";
import { HiPhone, HiCheckCircle, HiArrowRight, HiExternalLink } from "react-icons/hi";

export function ReferContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-secondary/15 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-56 h-56 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {referContent.title}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {referContent.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works + Portal CTA */}
      <SectionWrapper className="bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: How it works */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">How It Works</h2>
              <div className="space-y-4">
                {referContent.howItWorks.map((step, index) => (
                  <motion.div
                    key={step}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-text-secondary leading-relaxed pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quick contact */}
              <motion.div
                className="mt-10 p-6 bg-surface rounded-2xl border border-warm-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-bold text-primary mb-3">Prefer to Call?</h3>
                <p className="text-text-secondary text-sm mb-4">
                  For urgent referrals, call our skilled home health line directly.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                  icon={<HiPhone />}
                >
                  {contactInfo.phone} · {contactInfo.phoneLabel}
                </Button>
              </motion.div>
            </div>

            {/* Right: Portal CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-surface rounded-2xl border border-warm-gray p-10 h-full flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-6">
                  <HiCheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 text-center">
                  Submit Your Referral Online
                </h3>
                <p className="text-text-secondary text-center mb-8 leading-relaxed">
                  Use our secure referral portal to send patient information and care
                  needs straight to our intake team.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  href={referralUrl}
                  external
                  className="w-full"
                  icon={<HiExternalLink />}
                >
                  Open Referral Portal
                </Button>
                <p className="text-xs text-text-muted text-center mt-4">
                  You&apos;ll be taken to {referralUrl.replace(/^https?:\/\//, "")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}