"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { jobPositions, contactInfo } from "@/lib/data";
import { HiBriefcase, HiLocationMarker, HiCheckCircle, HiClock } from "react-icons/hi";

export function CareersContent() {
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
              Careers at Central Home Health
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join a team that treats patients like family. We&apos;re building our
              roster of Nurses, Caregivers, and CNAs to deliver skilled home health
              and provider attendant services across the Houston area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notice banner */}
      <SectionWrapper className="bg-surface-warm !pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-start gap-4 bg-warm-white rounded-2xl border border-warm-gray p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
              <HiClock size={20} />
            </div>
            <div>
              <h2 className="font-bold text-primary mb-1">Applications opening soon</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We&apos;re finalizing our compliance process. Once it&apos;s ready,
                you&apos;ll be able to click any role below and apply directly. For now,
                feel free to review the roles we&apos;re hiring for.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Role listings */}
      <SectionWrapper className="bg-surface-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover padding="lg">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <HiBriefcase size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-primary">{job.title}</h2>
                      <div className="flex items-center gap-1 text-text-muted text-sm">
                        <HiLocationMarker size={14} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-text-secondary leading-relaxed">{job.description}</p>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                      What we look for
                    </h3>
                    <ul className="space-y-2">
                      {job.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-3 text-text-secondary text-sm"
                        >
                          <HiCheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply */}
                  <div className="bg-warm-white rounded-xl p-5 border border-warm-gray/50">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      How to Apply
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {job.howToApply}
                    </p>
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-2 px-6 py-3 bg-warm-gray text-text-muted font-semibold rounded-xl cursor-not-allowed"
                    >
                      Apply Now (coming soon)
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* General inquiry CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Have Questions About Joining?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Reach out to our office and we&apos;ll be happy to talk through the
              roles and what to expect once applications open.
            </p>
            <a
              href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-primary text-white hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
            >
              Call {contactInfo.phone}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}