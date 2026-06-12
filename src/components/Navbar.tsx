/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAVIGATION_ITEMS } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Reduce padding when scrolled
      setIsScrolled(currentScrollY > 50);
      
      // Hide on scroll down, show on scroll up (don't hide if menu is open)
      if (currentScrollY > lastScrollY.current && currentScrollY > 150 && !isMobileMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-8"
        } ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-3 relative"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src="/avatar.jpeg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-widest text-[#D7E2EA] text-sm group-hover:text-indigo-400 transition-colors duration-300">
                PRANAY RAMPELLY
              </span>
              <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase">
                Saas Founder / Web Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#111111]/80 backdrop-blur-xl border border-white/5 shadow-2xl shadow-black/80">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-5 py-2 rounded-full text-xs font-medium text-neutral-400 hover:text-[#D7E2EA] transition-colors duration-300 group"
                id={`nav-link-${item.href.replace("#", "")}`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </nav>

          {/* CTA Link Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold bg-[#D7E2EA] text-[#0C0C0C] hover:bg-white hover:shadow-xl hover:shadow-white/5 hover:scale-105 active:scale-95 transition-all duration-300 group"
              id="nav-cta-desktop"
            >
              Let's Build
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#111111]/90 border border-white/5 text-[#D7E2EA] hover:bg-neutral-900 active:scale-95 transition-all"
            id="nav-mobile-toggle"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0C0C0C]/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-between p-8"
          >
            <div className="flex flex-col gap-12 mt-24">
              <span className="text-[10px] font-mono tracking-widest text-[#D7E2EA]/30 uppercase">
                Navigation Index
              </span>
              <nav className="flex flex-col gap-6">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.a
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08 }}
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-3xl font-extrabold tracking-tight text-neutral-400 hover:text-white transition-colors flex items-center justify-between group"
                    id={`nav-link-mobile-${item.href.replace("#", "")}`}
                  >
                    <span>{item.label}</span>
                    <span className="text-sm font-mono text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      // 0{index + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <div className="h-[1px] bg-white/5 w-full" />
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-[#D7E2EA] font-semibold text-sm hover:opacity-90 active:scale-95 transition-all text-center"
                id="nav-cta-mobile"
              >
                Initiate Project
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 py-2">
                <span>© 2026 PRANAY RAMPELLY</span>
                <span>BASED IN INDIA</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
