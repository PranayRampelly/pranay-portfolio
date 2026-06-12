/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, AppWindow, Sparkles, CheckCircle2, ShieldCheck, Dumbbell, CalendarRange, Scale } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  key?: string | number;
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch((err) => {
          console.warn("Autoplay preview prevented:", err);
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  // Custom inline browser mockup simulator to represent the website video preview.
  const renderLiveMockup = () => {
    switch (project.id) {
      case "project-01": // Iron Haven Gym
        return (
          <div className="w-full h-full bg-[#0C0C0C] text-[#D7E2EA] flex flex-col p-4 font-sans select-none overflow-hidden relative">
            {/* Browser top layout */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3 text-[10px] text-neutral-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="px-4 py-0.5 rounded bg-white/5 truncate max-w-xs text-indigo-400 font-mono">
                iron-haven-gym-578943506155.asia-southeast1.run.app
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                LIVE RUN
              </span>
            </div>

            {/* Dashboard Workspace with Live Preview */}
            <div className="flex-grow w-full h-full rounded-xl overflow-hidden relative bg-black border border-white/5">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted={true}
                playsInline={true}
                preload="auto"
                src="/gym-video.mp4"
              />
            </div>
          </div>
        );
      case "project-02": // Dente Studio
        return (
          <div className="w-full h-full bg-[#111] text-stone-200 flex flex-col p-4 font-sans select-none overflow-hidden relative">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3 text-[10px] text-neutral-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="px-4 py-0.5 rounded bg-white/5 truncate max-w-xs text-neutral-300 font-mono">
                dentist-portfolio-we-evw3.bolt.host
              </div>
              <span className="text-teal-400 flex items-center gap-1">
                <CalendarRange className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Dentist Live Preview on Hover */}
            <div className="flex-grow w-full h-full rounded-xl overflow-hidden relative bg-black border border-white/5">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted={true}
                playsInline={true}
                preload="auto"
                src="/dentist-video.mp4"
              />
            </div>
          </div>
        );
      case "project-03": // Vakil & Co.
        return (
          <div className="w-full h-full bg-[#0E0E12] text-[#EBEBF5] flex flex-col p-4 font-mono select-none overflow-hidden relative">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3 text-[10px] text-neutral-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              </div>
              <div className="px-4 py-0.5 rounded bg-white/5 truncate max-w-xs text-indigo-400 font-mono">
                vakil-co-574373755117.asia-southeast1.run.app
              </div>
              <Scale className="w-3.5 h-3.5 text-indigo-400" />
            </div>

            <div className="flex-grow w-full h-full rounded-xl overflow-hidden relative bg-black border border-white/5">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted={true}
                playsInline={true}
                preload="auto"
                src="/vakil-video.mp4"
              />
            </div>
          </div>
        );
      case "project-04": // Advocate Portfolio
        return (
          <div className="w-full h-full bg-[#0D0D11] text-[#EBEBF5] flex flex-col p-4 font-mono select-none overflow-hidden relative">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3 text-[10px] text-neutral-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              </div>
              <div className="px-4 py-0.5 rounded bg-white/5 truncate max-w-xs text-purple-400 font-mono">
                nickbiz-513.github.io/Advocate
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
            </div>

            <div className="flex-grow w-full h-full rounded-xl overflow-hidden relative bg-black border border-white/5">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted={true}
                playsInline={true}
                preload="auto"
                src="/advocate-video.mp4"
              />
            </div>
          </div>
        );
      case "project-05": // Prime Arch Residency
        return (
          <div className="w-full h-full bg-black text-[#D7E2EA] flex flex-col p-4 font-sans select-none overflow-hidden relative">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3 text-[10px] text-neutral-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="px-4 py-0.5 rounded bg-white/5 truncate max-w-xs text-rose-400 font-mono">
                nickbiz-513.github.io/real-estate
              </div>
              <span className="text-rose-400 text-[9px] font-bold">LODHA / RUNWAL</span>
            </div>

            <div className="flex-grow w-full h-full rounded-xl overflow-hidden relative bg-black border border-white/5">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted={true}
                playsInline={true}
                preload="auto"
                src="/estate-video.mp4"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        style={{
          zIndex: index + 10,
        }}
        className="sticky top-[100px] md:top-[120px] lg:top-[140px] w-full min-h-[480px] md:min-h-[550px] bg-[#121212] border border-white/5 rounded-[2.5rem] p-6 md:p-10 lg:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row justify-between gap-8 mb-12 group transition-all duration-500 hover:border-white/15"
        id={`project-card-${project.id}`}
      >
        {/* Project Technical Meta (Left) */}
        <div className="flex flex-col justify-between lg:w-5/12 gap-8 relative z-10">
          <div>
            {/* Header: Project Number & Type */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <span className="font-mono text-sm tracking-widest text-[#D7E2EA]/30">
                // MODULE {project.number}
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-[#D7E2EA] tracking-wider">
                {project.type}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="font-bold tracking-tight text-white text-[clamp(28px,4vw,48px)] leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-indigo-200 group-hover:to-purple-300 transition-colors">
              {project.title}
            </h3>
            <span className="block italic text-indigo-400 font-sans text-sm md:text-base font-light mb-4">
              {project.tagline}
            </span>

            {/* Description Paragraph */}
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed font-light mb-6">
              {project.description}
            </p>

            {/* Tags Grid */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 text-neutral-400 hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase bg-white text-black hover:bg-neutral-200 transition-all shadow-lg active:scale-95 group/btn"
              id={`project-live-btn-${project.id}`}
            >
              Live Demo
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
            <button
              onClick={() => setShowDetailsModal(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase border border-white/10 hover:border-white text-neutral-400 hover:text-white hover:bg-white/5 transition-all active:scale-95"
              id={`project-details-btn-${project.id}`}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Project Interactive Preview Frame (Right) */}
        <div className="lg:w-7/12 flex items-center justify-center relative">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full aspect-[4/3] max-w-[620px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 relative cursor-pointer shadow-2xl group/image shadow-black/80"
          >
            {/* Ambient Background Glow behind Card */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-5 transition-opacity duration-500 group-hover/image:opacity-10`} />

            {/* State A: Static Luxury Image View */}
            <motion.div
              animate={{
                opacity: isHovered ? 0 : 1,
                scale: isHovered ? 0.95 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 z-10 w-full h-full"
            >
              <img
                src={project.primaryImage}
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="text-[10px] font-mono tracking-widest text-[#D7E2EA]/50 uppercase mb-1">
                  Interactive Showcase
                </span>
                <span className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  HOVER TO INITIATE LIVE DEMO PREVIEW
                </span>
              </div>
            </motion.div>

            {/* State B: Simulated Autoplay Video Loop */}
            <div className="absolute inset-0 w-full h-full z-0">
              {renderLiveMockup()}
            </div>
          </div>
        </div>
      </div>

      {/* View Details Custom Overlay Modal */}
      <AnimatePresence>
        {showDetailsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="w-full max-w-4xl bg-[#141414] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              {/* Modal Left Preview Image */}
              <div className="lg:w-1/2 relative bg-black flex flex-col justify-between">
                <img
                  src={project.primaryImage}
                  alt={`${project.title} Modal Image`}
                  className="w-full h-full object-cover absolute inset-0 opacity-40 select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 p-8 flex flex-col justify-between h-full bg-gradient-to-t from-black via-black/20 to-transparent">
                  <div className="flex items-center justify-between text-xs font-mono text-indigo-400">
                    <span>// PRANAY COLLAY</span>
                    <span>©2026 REF</span>
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded bg-white/10 text-[10px] font-mono uppercase text-white border border-white/5">
                      {project.type}
                    </span>
                    <h2 className="text-3xl font-black text-white mt-4 tracking-tight">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Modal Right Copy text */}
              <div className="lg:w-1/2 p-8 overflow-y-auto flex flex-col justify-between gap-8 max-h-[80vh] lg:max-h-none">
                <div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Specifications</span>
                    <button
                      onClick={() => setShowDetailsModal(false)}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-neutral-400 hover:text-white transition-colors"
                    >
                      Close [Esc]
                    </button>
                  </div>

                  <h3 className="font-bold text-white text-lg tracking-tight mb-3">Key Features</h3>
                  <div className="flex flex-col gap-3 mb-6">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start select-none">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-neutral-300 text-xs leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-white text-lg tracking-tight mb-2">Tech Stack Used</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#1c1c1c] text-indigo-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-grow flex items-center justify-center gap-2 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase transition-all text-center"
                  >
                    Launch Live Web Demo
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
