/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { PROJECTS } from "../data";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* Glow backgrounds to illuminate card entries */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-indigo-500/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 left-10 w-[40vw] h-[40vw] rounded-full bg-violet-600/3 blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Subtle Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-indigo-400 mb-8 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span>Section 03 // Portfolio Showcase</span>
        </div>

        {/* Section Heading */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-black text-[clamp(44px,7vw,90px)] tracking-tighter text-[#D7E2EA] font-sans flex flex-wrap items-center gap-x-6 uppercase"
            id="projects-headline"
          >
            FEATURED PROJECTS
          </motion.h2>
          <p className="text-neutral-500 text-sm mt-4 font-light max-w-md">
            A handpicked curation of modern, responsive websites and high-performance digital products crafted for clients.
          </p>
        </div>

        {/* Stacking Project Cards Container */}
        <div className="flex flex-col gap-12" id="projects-stack-container">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
