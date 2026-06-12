/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Code2, Sparkles, Layers, Terminal } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbContainerRef = useRef<HTMLDivElement>(null);

  // Mouse coords tracker for magnetic interaction
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringOrb, setIsHoveringOrb] = useState(false);

  // Parallax scrolling triggers
  const { scrollY } = useScroll();
  const textTranslateY = useTransform(scrollY, [0, 800], [0, 200]);
  const orbTranslateY = useTransform(scrollY, [0, 800], [0, -100]);
  const fadeOutOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHoveringOrb || !orbContainerRef.current) return;
      const rect = orbContainerRef.current.getBoundingClientRect();
      const orbCenterX = rect.left + rect.width / 2;
      const orbCenterY = rect.top + rect.height / 2;

      // Magnetic pull: pull maximum 40 units
      const pullX = (e.clientX - orbCenterX) * 0.15;
      const pullY = (e.clientY - orbCenterY) * 0.15;

      setMousePosition({ x: pullX, y: pullY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHoveringOrb]);

  const resetMagnetic = () => {
    setIsHoveringOrb(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen bg-[#0C0C0C] flex flex-col justify-center items-center overflow-hidden py-24 px-6 md:px-12 select-none"
    >
      {/* Radiant ambient backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[50vw] h-[50vw] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-[40vw] h-[40vw] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <motion.div
        style={{ opacity: fadeOutOpacity }}
        className="relative z-10 w-full max-w-[1400px] flex flex-col justify-between h-full flex-grow"
      >
        {/* Top tag text */}
        <div className="w-full flex justify-between items-start pt-12 text-[#D7E2EA]/40 text-xs font-mono tracking-wider">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE SPRINT INTAKE 2026</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-right hidden sm:block"
          >
            <span>OPEN TO WORK // AVAILABLE FOR HIRE</span>
          </motion.div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-8">
          
          {/* Headline Text: Dominant Epic Typography */}
          <motion.div
            style={{ translateY: textTranslateY }}
            className="lg:col-span-8 flex flex-col relative"
          >
            {/* Background Subtitle Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-indigo-400/20 font-mono text-[clamp(12px,1.5vw,20px)] font-bold tracking-[0.4em] uppercase mb-4"
            >
              PREMIUM WEB ARCHITECTURE
            </motion.div>

            {/* Huge Name Display */}
            <div className="overflow-hidden leading-none mb-1 md:mb-4">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-black tracking-tighter text-[#D7E2EA] text-[clamp(44px,8vw,110px)]"
                id="hero-name-pranay"
              >
                PRANAY
              </motion.h1>
            </div>
            
            <div className="overflow-hidden leading-none mb-8 flex items-center gap-4">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="font-black tracking-tighter text-[#D7E2EA] text-[clamp(44px,8vw,110px)]"
                id="hero-name-rampelly"
              >
                RAMPELLY
              </motion.h1>
            </div>

            {/* Subheadings and Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="max-w-xl flex flex-col gap-6"
            >
              <h2 className="text-[#D7E2EA]/90 text-lg md:text-xl font-medium tracking-tight leading-relaxed">
                Freelance Web Developer crafting modern websites, startup experiences, and high-converting digital products.
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-lg font-light">
                Engineering student passionate about clean responsive web development, startup codebases, SaaS dashboards, and workflow automation.
              </p>

              {/* CTA Assembly */}
              <div className="flex flex-wrap items-center gap-4 mt-4" id="hero-cta-group">
                <button
                  onClick={handleScrollToProjects}
                  className="px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-600/20"
                >
                  View Projects
                </button>
                <button
                  onClick={handleScrollToContact}
                  className="px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase border border-[#D7E2EA]/20 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/5 text-[#D7E2EA] hover:scale-105 active:scale-95 transition-all"
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Floating Element & Cards */}
          <motion.div
            style={{ translateY: orbTranslateY }}
            className="hidden lg:flex lg:col-span-4 justify-center items-center relative aspect-square p-2"
          >
            {/* Magnetic Interactive Orb Container */}
            <div
              ref={orbContainerRef}
              onMouseEnter={() => setIsHoveringOrb(true)}
              onMouseLeave={resetMagnetic}
              className="relative w-full max-w-[340px] h-full max-h-[340px] rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform duration-300"
              style={{
                perspective: "1000px"
              }}
            >
              <motion.div
                animate={{
                  x: mousePosition.x,
                  y: mousePosition.y,
                  rotateX: -mousePosition.y * 0.4,
                  rotateY: mousePosition.x * 0.4,
                  scale: isHoveringOrb ? 1.05 : 1
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="relative w-72 h-72 rounded-full bg-gradient-to-tr from-sky-400 via-indigo-600 to-purple-800 p-1 flex items-center justify-center shadow-2xl shadow-indigo-500/20"
              >
                {/* Simulated Glass Refraction */}
                <div className="absolute inset-0.5 rounded-full bg-[#0C0C0C]/85 backdrop-blur-2xl overflow-hidden flex items-center justify-center">
                  
                  {/* Inside Glowing Moving Waves */}
                  <div className="absolute w-60 h-60 rounded-full bg-gradient-to-br from-indigo-500/20 via-pink-500/10 to-transparent blur-2xl animate-pulse" />
                  
                  {/* Complex Tech Graphics inside Orb to make it look expensive */}
                  <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center text-[#D7E2EA]">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-xl">
                      <Terminal className="w-8 h-8 text-indigo-400 animate-pulse" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-[#D7E2EA]/40 uppercase mb-1">
                      System Status
                    </span>
                    <span className="font-bold text-sm text-[#D7E2EA] tracking-wide">
                      PR_ENGINE_LIVE
                    </span>
                    <div className="flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] font-mono text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                      AWAITING SESSIONS
                    </div>
                  </div>

                  {/* Aesthetic grid lines */}
                  <div className="absolute inset-0 bg-[#D7E2EA]/3 opacity-15 [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] select-none pointer-events-none" />
                </div>

                {/* Subtle outer orbit ring */}
                <div className="absolute -inset-4 border border-indigo-400/10 rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="absolute -inset-8 border border-purple-400/5 rounded-full animate-[spin_60s_linear_infinite_reverse]" />
              </motion.div>

              {/* Floating Cards (Awwwards Style from Reference Video) */}
              
              {/* Card 1: AI Prompt Card */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="absolute -top-6 -left-12 x-card p-4 rounded-2xl bg-black/80 border border-white/10 w-44 shadow-2xl flex gap-2.5 items-start text-left"
              >
                <div className="p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] text-white tracking-wider uppercase mb-0.5">AI powered</h4>
                  <p className="text-[9px] text-neutral-400 leading-tight">Work Smarter. Move Faster.</p>
                </div>
              </motion.div>

              {/* Card 2: Technical Standard Card */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute -bottom-6 -right-12 x-card p-4 rounded-2xl bg-black/80 border border-white/10 w-48 shadow-2xl flex gap-2.5 items-start text-left"
              >
                <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] text-white tracking-wider uppercase mb-0.5">Awwwards Grade</h4>
                  <p className="text-[9px] text-neutral-400 leading-tight">Pixel-perfect styling and scroll mechanics.</p>
                </div>
              </motion.div>

              {/* Small floating specs indicator card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="absolute top-1/2 -right-16 -translate-y-1/2 p-2 rounded-xl bg-black/90 border border-white/10 w-28 text-center"
              >
                <span className="block text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 leading-none">
                  04+
                </span>
                <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 block mt-1">
                  Ready Demos
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom indicators */}
        <div className="w-full flex justify-between items-center pb-8 border-t border-white/5 pt-8">
          <div className="flex gap-12 text-[10px] font-mono text-neutral-500">
            <div className="flex flex-col">
              <span className="text-neutral-600 block mb-1 uppercase">Role</span>
              <span className="text-neutral-400 font-semibold uppercase">Product Engineer</span>
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-600 block mb-1 uppercase">Objective</span>
              <span className="text-neutral-400 font-semibold uppercase">Startup MVPs & SaaS</span>
            </div>
          </div>
          
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <button
              onClick={handleScrollToProjects}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5 transition-all text-xs font-mono tracking-widest"
              id="hero-scroll-btn"
            >
              SCROLL DOWN
              <ArrowDown className="w-3 h-3 text-indigo-400" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
