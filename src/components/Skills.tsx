/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Terminal, AppWindow, CloudLightning, Shield } from "lucide-react";
import { SKILLS } from "../data";

export default function Skills() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Frontend Development":
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case "Tools & Workspace":
        return <AppWindow className="w-5 h-5 text-purple-400" />;
      case "Deployment & Infrastructure":
        return <CloudLightning className="w-5 h-5 text-pink-400" />;
      default:
        return <Shield className="w-5 h-5 text-[#D7E2EA]" />;
    }
  };

  const getGradient = (category: string) => {
    switch (category) {
      case "Frontend Development":
        return "group-hover:border-indigo-500/30 group-hover:shadow-[0_0_50px_rgba(99,102,241,0.05)]";
      case "Tools & Workspace":
        return "group-hover:border-purple-500/30 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.05)]";
      case "Deployment & Infrastructure":
        return "group-hover:border-pink-500/30 group-hover:shadow-[0_0_50px_rgba(236,72,153,0.05)]";
      default:
        return "";
    }
  };

  return (
    <section
      id="skills"
      className="relative py-32 bg-[#0C0C0C] overflow-hidden select-none border-t border-white/5"
    >
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-10 w-[30vw] h-[30vw] rounded-full bg-purple-500/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[30vw] h-[30vw] rounded-full bg-pink-500/3 blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section meta tag */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-indigo-400 mb-8 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span>Section 04 // Dynamic Toolset</span>
        </div>

        {/* Section Heading */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-black text-[clamp(44px,7vw,90px)] tracking-tighter text-[#D7E2EA] font-sans flex flex-wrap items-center gap-x-6 uppercase"
            id="skills-headline"
          >
            SKILLS & TOOLS
          </motion.h2>
          <p className="text-neutral-500 text-sm mt-4 font-light max-w-md">
            The technical engine powering fluid layouts, semantic code blocks, and deployment optimizations.
          </p>
        </div>

        {/* Category Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="skills-grid">
          {SKILLS.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group flex flex-col justify-between p-8 rounded-[2rem] bg-[#111111]/90 border border-white/5 backdrop-blur-md transition-all duration-500 ${getGradient(cat.title)}`}
            >
              {/* Card top */}
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <h3 className="font-extrabold text-lg text-white tracking-tight">
                    {cat.title}
                  </h3>
                  <div className="p-2 rounded-xl bg-white/3 border border-white/5 group-hover:scale-110 transition-transform">
                    {getIcon(cat.title)}
                  </div>
                </div>

                {/* Sublist listing chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 rounded-xl text-xs font-medium bg-[#161616] border border-white/5 text-neutral-400 hover:text-white hover:border-[#D7E2EA]/20 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Design accent */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[9px] font-mono text-neutral-600 uppercase">
                <span>Optimized Stack</span>
                <span>Active 2026 // Ready</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
