/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";
import CurrentlyExploring from "./components/CurrentlyExploring";
import Contact from "./components/Contact";
import { ArrowUp, Code2, LucideIcon } from "lucide-react";

export default function App() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] font-sans antialiased selection:bg-indigo-500 selection:text-white text-[#D7E2EA]">
      {/* Floating Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Featured Projects Section */}
        <FeaturedProjects />

        {/* 5. Skills & Tools Section */}
        <Skills />

        {/* 6. Currently Exploring Section */}
        <CurrentlyExploring />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Agency-Quality Custom Footer */}
      <footer className="bg-[#0C0C0C] border-t border-white/5 py-16 px-6 md:px-12 relative overflow-hidden select-none">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          
          {/* Logo & Slogan Column */}
          <div className="text-center md:text-left">
            <span className="font-extrabold text-sm tracking-wider text-white">PRANAY RAMPELLY</span>
            <p className="text-[10px] font-mono text-neutral-500 mt-1 uppercase tracking-widest">
              Digital product developer // Saas & Startup Codebases
            </p>
          </div>

          {/* Social indexes links */}
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono uppercase text-neutral-400">
            <a
              href="mailto:pranay.rampelly431@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <span>//</span>
            <a
              href="https://wa.me/qr/RQ7V42YMM7WHD1"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <span>//</span>
            <a
              href="https://www.linkedin.com/in/pranay-rampelly-0693793a6/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Jump to top button */}
          <div>
            <button
              onClick={handleScrollToTop}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#111111] border border-white/5 hover:border-white/20 text-neutral-400 hover:text-white transition-all hover:scale-105 active:scale-95"
              title="Return to peak"
              id="footer-back-to-top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Technical bottom credits bar */}
        <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-white/3 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-mono text-neutral-600 uppercase">
          <span>© 2026 PRANAY RAMPELLY. ALL SENSORY INTRODUCTIONS REGISTERED.</span>
          <span className="flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" />
            Designed & Compiled in sandboxed Cloud Container
          </span>
        </div>
      </footer>
    </div>
  );
}
