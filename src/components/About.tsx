/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Code2, Compass, Cpu, Layers } from "lucide-react";

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-3 mt-2 inline-block">
      <motion.span style={{ opacity }} className="text-[#D7E2EA]">
        {children}
      </motion.span>
    </span>
  );
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Scroll tracking against the text paragraph specifically
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const body1 = "Engineering student and freelance web developer focused on creating modern, responsive, and conversion-focused websites.";
  const body2 = "I enjoy building business websites, startup landing pages, and digital experiences that combine strong design with practical functionality.";

  const words1 = body1.split(" ");
  const words2 = body2.split(" ");
  const allWords = [...words1, ...words2];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen bg-[#0C0C0C] flex flex-col justify-center py-32 px-6 md:px-12 overflow-hidden border-b border-white/5"
    >
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[30vh] h-[30vh] rounded-full bg-purple-500/3 blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        
        {/* Editorial Subtitle Indicator */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-indigo-400 mb-8 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span>Section 01 // The Philosophy</span>
        </div>

        {/* Huge Heading with Outlined Contrast */}
        <div className="mb-16 select-none">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-black text-[clamp(44px,7vw,90px)] tracking-tighter text-[#D7E2EA] font-sans flex flex-wrap items-center gap-x-6 gap-y-0"
            id="about-headline"
          >
            ABOUT ME
          </motion.h2>
          <div className="h-[1px] w-24 bg-indigo-500 mt-4 rounded-full" />
        </div>

        {/* Text Area with Sequential Illuminations */}
        <div ref={textRef} className="max-w-4xl text-left font-semibold text-[clamp(20px,3.2vw,40px)] tracking-tight leading-snug text-[#D7E2EA]/15 flex flex-wrap" id="about-body">
          {allWords.map((word, i) => {
            // Distribute steps fairly across 0 to 1 progress
            const start = i / allWords.length;
            const end = (i + 1) / allWords.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>

        {/* Bottom micro-bento cards to enrich the section context */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#111111]/40 border border-white/5 backdrop-blur-md flex flex-col gap-4 group hover:border-indigo-500/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white tracking-tight">Sleek Web Developer</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Writing clean, modern frontends that combine strict specifications with satisfying micro-animations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#111111]/40 border border-white/5 backdrop-blur-md flex flex-col gap-4 group hover:border-purple-500/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white tracking-tight">Engineering Student</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Combining computational theory and core performance concepts with real-world, high-traffic client requests.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 rounded-3xl bg-[#111111]/40 border border-white/5 backdrop-blur-md flex flex-col gap-4 group hover:border-pink-500/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white tracking-tight">Indie SaaS Founder</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Obsessed with product-market fit, conversion flow psychology, ultra-fast landing pages, and minimal friction.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
