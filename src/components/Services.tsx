/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowUpRight, Sparkles } from "lucide-react";
import { SERVICES } from "../data";

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-white text-black overflow-hidden select-none"
    >
      {/* Absolute faint premium design overlay lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000003_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Subtle Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-neutral-500 mb-8 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span>Section 02 // Core Offerings</span>
        </div>

        {/* Section Heading */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-black text-[clamp(44px,7vw,90px)] tracking-tighter uppercase leading-none"
            id="services-headline"
          >
            SERVICES
          </motion.h2>
          <p className="text-neutral-500 text-sm mt-4 tracking-normal font-light max-w-md">
            Custom web solutions engineered to convert, engage, and elevate your business with agency-quality visual precision.
          </p>
        </div>

        {/* Premium List Accordion / Hover Group */}
        <div className="flex flex-col border-t border-black/10" id="services-list-container">
          {SERVICES.map((service, index) => {
            const isOpen = activeId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="group border-b border-black/10 transition-colors duration-300 relative"
              >
                {/* Active Highlight Background */}
                <span className={`absolute inset-0 bg-[#F9F9F9] -z-10 origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100`} />

                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full py-8 md:py-10 flex flex-row items-center justify-between text-left gap-4 md:gap-6 cursor-pointer"
                  id={`service-trigger-${service.id}`}
                >
                  <div className="flex items-center gap-6 md:gap-12 flex-grow">
                    {/* Index Number */}
                    <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-black transition-colors">
                      {service.number}
                    </span>
                    {/* Title */}
                    <h3 className="font-extrabold text-[clamp(22px,3vw,38px)] tracking-tight leading-none text-neutral-800 group-hover:text-black group-hover:translate-x-2 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Icon Status Indicator */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-black/10 group-hover:border-black/30 group-hover:scale-110 active:scale-95 bg-white transition-all">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-black" />
                    ) : (
                      <Plus className="w-4 h-4 text-neutral-600" />
                    )}
                  </div>
                </button>

                {/* Smooth Expandable Context Grid */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-12 pl-6 md:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Description Column */}
                        <div className="lg:col-span-7">
                          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl font-normal">
                            {service.description}
                          </p>
                        </div>

                        {/* Specs Tag Column */}
                        <div className="lg:col-span-5 flex flex-col gap-3">
                          <span className="font-mono text-[10px] tracking-widest text-[#0C0C0C]/40 uppercase flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#0C0C0C]/50" />
                            Core deliverables
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, fIdx) => (
                              <span
                                key={fIdx}
                                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 border border-neutral-200 text-neutral-800 flex items-center gap-1.5"
                              >
                                <span className="w-1 h-1 rounded-full bg-black/40" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal High-End CTA Link */}
        <div className="mt-20 text-center">
          <span className="text-neutral-400 font-mono text-xs uppercase block mb-3">Want custom features not listed above?</span>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase hover:text-indigo-600 transition-colors group"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            LET'S SHAPE IT IN THE DRAWING BOARD
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
