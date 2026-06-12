/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Briefcase, Cpu, Sparkles, Palette, Rocket, Target } from "lucide-react";
import { EXPLORING } from "../data";

export default function CurrentlyExploring() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="w-5 h-5" />;
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Palette":
        return <Palette className="w-5 h-5" />;
      case "Rocket":
        return <Rocket className="w-5 h-5" />;
      default:
        return <Target className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Deep Dive":
        return "bg-indigo-500/10 border-indigo-500/20 text-indigo-400";
      case "Launch Phase":
        return "bg-pink-500/10 border-pink-500/20 text-pink-400";
      case "In Progress":
        return "bg-amber-500/10 border-amber-500/20 text-amber-400";
      default:
        return "bg-neutral-500/10 border-neutral-500/20 text-neutral-400";
    }
  };

  const getCardAesthetic = (id: string) => {
    switch (id) {
      case "exp-01":
        return "hover:border-indigo-500/20 hover:shadow-[0_0_50px_rgba(99,102,241,0.03)]";
      case "exp-02":
        return "hover:border-pink-500/20 hover:shadow-[0_0_50px_rgba(236,72,153,0.03)]";
      case "exp-03":
        return "hover:border-amber-500/20 hover:shadow-[0_0_50px_rgba(245,158,11,0.03)]";
      case "exp-04":
        return "hover:border-teal-500/20 hover:shadow-[0_0_50px_rgba(20,184,166,0.03)]";
      case "exp-05":
        return "hover:border-purple-500/20 hover:shadow-[0_0_50px_rgba(168,85,247,0.03)]";
      default:
        return "";
    }
  };

  return (
    <section
      id="exploring"
      className="relative py-32 bg-[#0C0C0C] overflow-hidden select-none border-t border-white/5"
    >
      {/* Dynamic glow overlays */}
      <div className="absolute inset-0 bg-[#0C0C0C]" />
      <div className="absolute top-1/2 left-1/4 w-[40vh] h-[40vh] rounded-full bg-indigo-500/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40vh] h-[40vh] rounded-full bg-rose-500/2 blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Section prefix meta */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-indigo-400 mb-8 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span>Section 05 // Growth Index</span>
        </div>

        {/* Section Headline */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-black text-[clamp(44px,7vw,90px)] tracking-tighter text-[#D7E2EA] font-sans flex flex-wrap items-center gap-x-6 uppercase"
            id="exploring-headline"
          >
            CURRENTLY EXPLORING
          </motion.h2>
          <p className="text-neutral-500 text-sm mt-4 font-light max-w-md">
            The concepts, design mechanics, and business models Pranay is breaking into on his path as a SaaS developer & founder.
          </p>
        </div>

        {/* Explorations Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="exploring-cards-grid">
          {EXPLORING.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className={`p-10 rounded-[2.5rem] bg-[#121212]/50 border border-white/5 flex flex-col justify-between h-[340px] group transition-all duration-500 ${getCardAesthetic(item.id)}`}
            >
              {/* Card top row: Icon & Status */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-neutral-400 group-hover:text-white flex items-center justify-center transition-colors group-hover:scale-110">
                  {getIcon(item.iconName)}
                </div>
                <span className={`px-3 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase border ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>

              {/* Title and Description block */}
              <div className="my-auto">
                <h3 className="font-extrabold text-xl text-white tracking-tight mb-3 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-light line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Card Bottom: spec ticker */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[9px] font-mono text-neutral-600 uppercase">
                <span>Core Research</span>
                <span>// PR_STUDY_{item.id.toUpperCase().replace("-", "_")}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
