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
              A Longstanding Part of
              <br />
              Houston’s Home Health Community
            </motion.h2>
            <motion.p
              className="text-text-secondary text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Central Home Health has proudly served the Houston area for many years,
              helping patients and families navigate care at home with compassion,
              professionalism, and respect.
            </motion.p>
            <motion.p
              className="text-text-secondary leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              As a local home health agency, we understand how important it is for
              patients to receive care in a familiar environment surrounded by the
              people who know them best. Our role is to support that process by
              coordinating with physicians, educating families, and providing skilled
              services that help patients manage their health at home. We are honored
              to be part of the communities we serve and remain committed to delivering
              dependable, patient-centered home health care throughout the Houston
              area.
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
