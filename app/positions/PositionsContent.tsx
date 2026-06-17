"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { jobPositions, contactInfo } from "@/lib/data";
import { HiBriefcase, HiLocationMarker, HiCheckCircle, HiMail } from "react-icons/hi";

export function PositionsContent() {
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
              Current Available Positions
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join our team of dedicated home health care professionals. We&apos;re always
              looking for talented individuals who share our commitment to quality care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job listings */}
      <SectionWrapper className="bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {jobPositions.length > 0 ? (
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
                      <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                        Job Description
                      </h3>
                      <p className="text-text-secondary leading-relaxed">{job.description}</p>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                        Requirements
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

                    {/* How to apply */}
                    <div className="bg-warm-white rounded-xl p-5 border border-warm-gray/50">
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        How to Apply
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {job.howToApply}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-warm-gray flex items-center justify-center mx-auto mb-6">
                <HiBriefcase size={28} className="text-text-muted" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2">No Open Positions</h2>
              <p className="text-text-secondary">
                There are currently no open positions. Please check back later or send us
                your resume for future consideration.
              </p>
            </motion.div>
          )}
        </div>
      </SectionWrapper>

      {/* General application CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Don&apos;t See the Right Fit?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              We&apos;re always interested in connecting with talented healthcare
              professionals. Send your resume to our office for future opportunities.
            </p>
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${contactInfo.email}`}
              icon={<HiMail />}
            >
              Send Your Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
