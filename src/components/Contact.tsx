/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Linkedin, ArrowUpRight, Check, Send, AlertCircle } from "lucide-react";
import { supabase } from "../supabaseClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Missing required fields. Please ensure Name, Email, and Message are filled.");
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
      return;
    }

    setFormStatus("submitting");

    // Insert data into Supabase
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

    if (error) {
      console.error(error);
      setErrorMessage(`Database Error: ${error.message || "Failed to submit. Check permissions or table structure."}`);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 8000);
    } else {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#0C0C0C] overflow-hidden select-none border-t border-white/5"
    >
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-indigo-500/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[30vw] h-[30vw] rounded-full bg-pink-500/2 blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Section title prefix */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-indigo-400 mb-8 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span>Section 06 // Initiate Session</span>
        </div>

        {/* Section Main Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-black text-[clamp(34px,6vw,74px)] tracking-tighter text-[#D7E2EA] font-sans flex flex-col md:flex-row flex-wrap uppercase gap-2 leading-none"
            id="contact-headline"
          >
            LET'S BUILD SOMETHING GREAT
          </motion.h2>
          <p className="text-neutral-500 text-sm mt-4 font-light max-w-lg">
            Ready to design a responsive web experience, develop a high-converting startup landing page, or architect an integration? Contact Pranay below.
          </p>
        </div>

        {/* Contact Split layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column A: Channels (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-widest text-[#D7E2EA]/30 uppercase block mb-3">
                DIRECT COMMUNICATIONS
              </span>
              
              {/* Email Client Row */}
              <a
                href="mailto:pranay.rampelly431@gmail.com"
                className="group flex items-center justify-between p-6 rounded-3xl bg-[#111111]/70 border border-white/5 hover:border-white/15 transition-all text-left"
                id="contact-email-btn"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase block mb-0.5">Mail Client</span>
                    <span className="text-white text-sm font-semibold tracking-wide">
                      Send an Email
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* WhatsApp Client Row */}
              <a
                href="https://wa.me/qr/RQ7V42YMM7WHD1" // Formatting nice wa link representation
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-6 rounded-3xl bg-[#111111]/70 border border-white/5 hover:border-white/15 transition-all text-left mt-4"
                id="contact-whatsapp-btn"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase block mb-0.5">Instant WhatsApp Chat</span>
                    <span className="text-white text-sm font-semibold tracking-wide">
                      Message on WhatsApp
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* LinkedIn Redirect Row */}
              <a
                href="https://www.linkedin.com/in/pranay-rampelly-0693793a6/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-6 rounded-3xl bg-[#111111]/70 border border-white/5 hover:border-white/15 transition-all text-left mt-4"
                id="contact-linkedin-btn"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-sky-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase block mb-0.5">LinkedIn Profile</span>
                    <span className="text-white text-sm font-semibold tracking-wide">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Micro Agency Spec Detail text */}
            <div className="p-6 rounded-3xl border border-[#D7E2EA]/5 bg-indigo-950/5 flex flex-col gap-2 text-left">
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">Service Hours Standard</span>
              <span className="text-xs font-bold text-neutral-300">Mon - Fri // 09:00 - 18:00 (GMT+5:30)</span>
              <p className="text-[10px] text-neutral-500 leading-relaxed font-light">
                Typically replying in less than 24 hours. Custom pricing sheets are issued upon reviewing the project scope guidelines.
              </p>
            </div>
          </div>

          {/* Column B: Premium Contact Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#111111] border border-white/5 relative overflow-hidden">
              <span className="font-mono text-[10px] tracking-widest text-[#D7E2EA]/30 uppercase block mb-8 text-left">
                SECURE SPRINT ENTAIL FORM
              </span>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-left" id="contact-form">
                
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="form-name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/10 py-3.5 px-0 text-white font-medium text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <label
                    htmlFor="form-name"
                    className="absolute left-0 top-3.5 text-neutral-500 font-medium text-sm transition-all pointer-events-none origin-left transform peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                  >
                    Your Name *
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="form-email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/10 py-3.5 px-0 text-white font-medium text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <label
                    htmlFor="form-email"
                    className="absolute left-0 top-3.5 text-neutral-500 font-medium text-sm transition-all pointer-events-none origin-left transform peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                  >
                    Your Email Address *
                  </label>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    id="form-subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/10 py-3.5 px-0 text-white font-medium text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <label
                    htmlFor="form-subject"
                    className="absolute left-0 top-3.5 text-neutral-500 font-medium text-sm transition-all pointer-events-none origin-left transform peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                  >
                    Subject (Optional)
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/10 py-3.5 px-0 text-white font-medium text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                  <label
                    htmlFor="form-message"
                    className="absolute left-0 top-3.5 text-neutral-500 font-medium text-sm transition-all pointer-events-none origin-left transform peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                  >
                    Brief description of your project *
                  </label>
                </div>

                {/* Feedback System Messages */}
                <AnimatePresence mode="wait">
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>TRANSMISSION SECURED! Pranay will reply to you in less than 24h.</span>
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting" || formStatus === "success"}
                  className="w-full py-4 rounded-full bg-white text-[#0C0C0C] font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none mt-4 cursor-pointer"
                  id="form-submit-btn"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <span>Encrypting Payload...</span>
                      <div className="w-4.5 h-4.5 rounded-full border-2 border-neutral-600 border-t-black animate-spin" />
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <span>SENT SECURELY</span>
                      <Check className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Submit Secure Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
