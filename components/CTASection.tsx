"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { contactInfo, referralUrl } from "@/lib/data";
import { HiPhone, HiArrowRight } from "react-icons/hi";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-secondary-dark" />

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/10 blur-2xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Get the Care
            <br />
            <span className="text-accent-light">You Deserve?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Contact us today and let our experienced team create a personalized home care
            plan tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
