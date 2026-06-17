"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/lib/data";
import { HiPhone, HiMail, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" className="bg-surface-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact info */}
          <div>
            <motion.span
              className="inline-block text-secondary font-semibold text-sm uppercase tracking-widest mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact Us Today
            </motion.h2>
            <motion.p
              className="text-text-secondary text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              There comes a time in each of our lives when we or our loved ones need
              medical assistance. Reach out today and see how we can be of assistance.
            </motion.p>

            {/* Contact details */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <HiPhone size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary">{contactInfo.phoneLabel}</div>
                  <a
                    href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                    className="text-text-secondary hover:text-secondary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                  <div className="mt-2">
                    <div className="font-semibold text-primary">{contactInfo.phone2Label}</div>
                    <a
                      href={`tel:${contactInfo.phone2.replace(/-/g, "")}`}
                      className="text-text-secondary hover:text-secondary transition-colors"
                    >
                      {contactInfo.phone2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                  <HiMail size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary">Email</div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-text-secondary hover:text-secondary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary">Address</div>
                  <div className="text-text-secondary">
                    {contactInfo.addressLine1}
                    <br />
                    {contactInfo.addressLine2}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                className="bg-surface rounded-2xl border border-warm-gray p-10 text-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Thanks for Submitting!</h3>
                <p className="text-text-secondary">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface rounded-2xl border border-warm-gray p-8 space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white text-text-primary placeholder:text-text-muted focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white text-text-primary placeholder:text-text-muted focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white text-text-primary placeholder:text-text-muted focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white text-text-primary placeholder:text-text-muted focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                    placeholder="Tell us about your home care needs..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<HiPaperAirplane />}
                >
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
