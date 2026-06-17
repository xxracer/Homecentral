"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/data";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-sm border-b border-warm-gray/50"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl">🏥</span>
              <span
                className={`font-bold text-lg transition-colors duration-300 ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                {siteConfig.shortName}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      scrolled
                        ? isActive
                          ? "text-primary"
                          : "text-text-secondary hover:text-primary"
                        : isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                          scrolled ? "bg-secondary" : "bg-accent"
                        }`}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/refer"
                className={`ml-3 px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  scrolled
                    ? "bg-primary text-white hover:bg-primary-light shadow-md"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30"
                }`}
              >
                Refer a Patient
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-primary hover:bg-warm-gray"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-primary/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl flex flex-col pt-24 px-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-text-primary hover:bg-warm-gray"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-8">
                <Link
                  href="/refer"
                  className="block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Refer a Patient
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
