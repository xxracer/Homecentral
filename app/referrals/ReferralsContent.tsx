"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { referralsContent, contactInfo } from "@/lib/data";
import { HiPhone, HiArrowRight } from "react-icons/hi";

export function ReferralsContent() {
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
              {referralsContent.title}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {referralsContent.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <SectionWrapper className="bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4">
              How Referrals Work
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A simple three-step process to connect patients with the care they need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {referralsContent.steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card hover padding="lg" className="h-full text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-5 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Ready to Make a Referral?</h2>
            <p className="text-text-secondary text-lg mb-8">
              Call us directly or use our contact form. We respond to all referrals within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                icon={<HiPhone />}
              >
                Call {contactInfo.phone}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/#contact"
                icon={<HiArrowRight />}
              >
                Contact Form
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
