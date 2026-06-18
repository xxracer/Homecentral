"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { services } from "@/lib/data";

// Service-specific images (Unsplash + Pexels, all free-license)
const serviceImages: Record<string, string> = {
  rehab:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
  attendant:
    "https://images.unsplash.com/photo-1773227055624-07b515ba87c5?q=80&w=800&auto=format&fit=crop",
  nursing:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  rpm:
    "https://images.unsplash.com/photo-1776761916500-f639da084b7b?q=80&w=800&auto=format&fit=crop",
};

// Custom SVG icons
const serviceIcons: Record<string, React.ReactNode> = {
  rehab: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
      <path d="M16 24a8 8 0 0 1 8-8v16a8 8 0 0 1-8-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 16a8 8 0 0 1 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  ),
  attendant: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle cx="18" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M8 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 20c2.8.8 5 3.3 5 6.3V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M33 18a4 4 0 1 0 0-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  nursing: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M24 6v12M18 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="14" y="18" width="20" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="26" x2="28" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="32" x2="28" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 38v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  rpm: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect x="10" y="6" width="28" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="10" width="20" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 26 L20 26 L22 20 L24 30 L26 22 L28 26 L32 26"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M34 12a3 3 0 0 1 0 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 10a5 5 0 0 1 0 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 18l-3 2 3 2-3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-secondary font-semibold text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Home Health Care Done Right
          </motion.h2>
          <motion.p
            className="text-text-secondary max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We bring high quality care right to your front door so that you can get better
            in an environment that is comfortable and familiar to you.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            const isOdd = services.length % 2 !== 0;
            const spanClass = isLast && isOdd ? "md:col-span-2" : "";

            return (
              <motion.div
                key={service.id}
                className={spanClass}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover padding="none" className="h-full group overflow-hidden">
                  <div className={`grid ${isLast && isOdd ? "md:grid-cols-2" : "grid-cols-1"} h-full`}>
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={serviceImages[service.icon]}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                          {serviceIcons[service.icon]}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-text-secondary leading-relaxed mt-4 mb-5">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-text-muted"
                          >
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              className="w-4 h-4 text-secondary flex-shrink-0"
                            >
                              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                              <path
                                d="M5 8l2 2 4-4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
