"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { trustStats, siteConfig } from "@/lib/data";

export default function TrustStats() {
  return (
    <SectionWrapper className="bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image + text */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/3]">
              <Image
                src="https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Caregiver helping a senior at home"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-2 sm:right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-3xl font-bold text-secondary">200+</div>
              <div className="text-sm text-text-muted">Five-star reviews from Houston families</div>
            </motion.div>
          </div>

          {/* Right: Text + Stats */}
          <div>
            <motion.span
              className="inline-block text-secondary font-semibold text-sm uppercase tracking-widest mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Skilled Home Health &amp;
              <br />
              Provider Attendant Services
            </motion.h2>
            <motion.p
              className="text-text-secondary text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {siteConfig.description}
            </motion.p>
            <motion.p
              className="text-text-secondary leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We bring high quality care right to your front door so that you can get
              better in an environment that is comfortable and familiar to you. From
              skilled nursing and rehabilitation therapy to Medicaid-funded attendant
              care, our practitioners cater to the specific needs of each client.
            </motion.p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {trustStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-warm-white rounded-2xl p-6 sm:p-8 text-center border border-warm-gray/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
