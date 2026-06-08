import { motion } from "motion/react";
import { Section } from "./Section";
import { SECTIONS } from "../constants";
import { useLanguage } from "../context/LanguageContext";

// @ts-ignore
import about0Img from "../assets/images/about/about_0.png";
// @ts-ignore
import about1Img from "../assets/images/about/about_1.png";
// @ts-ignore
import about2Img from "../assets/images/about/about_2.png";
// @ts-ignore
import about3Img from "../assets/images/about/about_3.png";
// @ts-ignore
import about4Img from "../assets/images/about/about_4.png";
// @ts-ignore
import about5Img from "../assets/images/about/about_5.png";
// @ts-ignore
import about6Img from "../assets/images/about/about_6.png";
// @ts-ignore
import about7Img from "../assets/images/about/about_7.png";
// @ts-ignore
import about8Img from "../assets/images/about/about_8.png";
// @ts-ignore
import about9Img from "../assets/images/about/about_9.png";
// @ts-ignore
import about10Img from "../assets/images/about/about_10.png";
// @ts-ignore
import about11Img from "../assets/images/about/about_11.png";
// @ts-ignore
import about12Img from "../assets/images/about/about_12.png";
// @ts-ignore
import about13Img from "../assets/images/about/about_13.png";
// @ts-ignore
import about14Img from "../assets/images/about/about_14.png";
// @ts-ignore
import eveLogoImg from "../assets/images/eve_logo.png";

export const About = () => {
  const { t } = useLanguage();

  return (
    <Section id={SECTIONS.ABOUT} className="bg-zinc-950">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-[0.3em] mb-4">
            The Architecture of Trust
          </h2>
          <h3 className="text-3.5xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-[1.15]">
            EVE is building the trusted digital record in maternal healthcare
          </h3>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            We combine clinical truth and system execution to close the gaps in fragmented care, strengthen continuity, and improve outcomes for every woman.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
              {/* Left text of the picture */}
              <div className="text-[11px] sm:text-xs font-black tracking-widest text-indigo-400 uppercase font-mono py-2 px-3 sm:py-0 sm:px-0 bg-indigo-950/30 border border-indigo-500/20 rounded-xl sm:bg-transparent sm:border-0 text-center sm:text-right sm:border-r sm:border-white/10 sm:pr-4 border-dashed leading-relaxed shrink-0">
                CLINICAL<br />
                NECESSITY<br />
                (Trust)
              </div>

              {/* Center: Image */}
              <div className="relative flex-1 max-w-sm w-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950/40 p-4 group">
                <img 
                  src={about0Img} 
                  alt="Clinical Necessity (Trust) and Systemic Execution (Scale)" 
                  className="w-full h-auto object-cover rounded-2xl opacity-90 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    console.error("Failed to load about_0 image");
                    // Fallback visually if image fails to load during local dev
                  }}
                />
              </div>

              {/* Right side of the picture */}
              <div className="text-[11px] sm:text-xs font-black tracking-widest text-emerald-400 uppercase font-mono py-2 px-3 sm:py-0 sm:px-0 bg-emerald-950/30 border border-emerald-500/20 rounded-xl sm:bg-transparent sm:border-0 text-center sm:text-left sm:border-l sm:border-white/10 sm:pl-4 border-dashed leading-relaxed shrink-0">
                SYSTEMIC<br />
                EXECUTION<br />
                (Scale)
              </div>
            </div>

            {/* Bottom text: line above this text */}
            <div className="w-full mt-8 pt-4 border-t border-white/10 text-center">
              <p className="text-xs sm:text-sm font-black tracking-widest text-gray-300 uppercase font-mono">
                Better Data, Better Decisions, Better Outcomes.
              </p>
            </div>
          </div>

          {/* Decorative elements background glows */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Dual Engine Leadership Divider Section */}
      <div className="mt-28 pt-20 border-t border-white/15">
        <div className="text-center mb-16">
          <h4 className="text-xs font-black tracking-[0.35em] text-indigo-500 uppercase mb-3">
            Core Foundations
          </h4>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
            OUR DUAL-ENGINE LEADERSHIP
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: The Clinical Anchor */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full bg-zinc-900/30 rounded-3xl border border-white/5 p-8 lg:p-10 hover:border-indigo-500/30 transition-all duration-300 relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-indigo-500/10 transition-all" />
            
            {/* Header section with small image side-by-side with text */}
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-6">
              {/* Lead Image - Smaller & Next to Text */}
              <div className="rounded-2xl overflow-hidden border border-white/10 w-24 h-24 sm:w-28 sm:h-28 bg-zinc-950/40 relative shrink-0 shadow-lg">
                <img 
                  src={about2Img} 
                  alt="Dr. Arifah Hamim" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    console.error("Failed to load about_2 image");
                  }}
                />
              </div>

              <div className="flex-grow">
                <div className="mb-2">
                  <span className="text-[9px] font-mono font-black tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-500/20 rounded-full px-2.5 py-0.5 uppercase">
                    THE CLINICAL ANCHOR
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tight">
                  Dr. Arifah Hamim
                </h4>
                <p className="text-indigo-300 font-bold text-xs tracking-wide uppercase font-mono leading-tight">
                  The Clinician Who saw the system's Blind spot
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
              With decades in clinical practice, Dr. Arifah Hamim witnessed firsthand how vital healthcare information is frequently lost in transition between disconnected maternal healthcare providers. She ensures EVE is rooted in clinical utility and unwavering medical safety.
            </p>

            {/* Box Quote */}
            <div className="mt-auto bg-indigo-950/20 border-l-4 border-indigo-500 rounded-r-2xl p-5 bg-gradient-to-r from-indigo-950/10 to-transparent">
              <p className="text-indigo-200 text-xs md:text-sm font-medium italic leading-relaxed">
                "A woman's health history shouldn't depend on her ability to remember it under stress."
              </p>
            </div>
          </motion.div>

          {/* Right Side: The Ecosystem Bridge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col h-full bg-zinc-900/30 rounded-3xl border border-white/5 p-8 lg:p-10 hover:border-emerald-500/30 transition-all duration-300 relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-all" />

            {/* Header section with small image side-by-side with text */}
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-6">
              {/* Lead Image - Smaller & Next to Text */}
              <div className="rounded-2xl overflow-hidden border border-white/10 w-24 h-24 sm:w-28 sm:h-28 bg-zinc-950/40 relative shrink-0 shadow-lg">
                <img 
                  src={about1Img} 
                  alt="Ainil Fidrah Ghazali" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    console.error("Failed to load about_1 image");
                  }}
                />
              </div>

              <div className="flex-grow">
                <div className="mb-2">
                  <span className="text-[9px] font-mono font-black tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 rounded-full px-2.5 py-0.5 uppercase">
                    THE ECOSYSTEM BRIDGE
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tight">
                  Ainil Fidrah Ghazali
                </h4>
                <p className="text-emerald-300 font-bold text-xs tracking-wide uppercase font-mono leading-tight">
                  Connecting the Vision to the Ecosystem
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
              Ainil brings expertise in systems and networks, connecting disparate platforms into a cohesive operational spine. She builds the integration bridges that scale this technology to seamlessly connect clinical databases and ecosystems.
            </p>

            {/* Box Quote */}
            <div className="mt-auto bg-emerald-950/20 border-l-4 border-emerald-500 rounded-r-2xl p-5 bg-gradient-to-r from-emerald-950/10 to-transparent">
              <p className="text-emerald-200 text-xs md:text-sm font-medium italic leading-relaxed">
                "Scaling EVE isn't just about software—it is about designing the institutional bridges that build absolute systemic trust."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* The Architecture behind EVE Section */}
      <div className="mt-28 pt-20 border-t border-white/15">
        <div className="text-center mb-16">
          <h4 className="text-xs font-black tracking-[0.35em] text-indigo-500 uppercase mb-3 text-center">
            The Architecture behind EVE
          </h4>
          <h3 className="text-3xl md:text-4.5xl font-black text-white tracking-tighter uppercase text-center max-w-4xl mx-auto leading-[1.15]">
            A trusted Digital record Built for Continuity, privacy and impact.
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* 5-Column Responsive Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-stretch relative">
          
          {/* Item 1: Data Capture */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col text-center bg-zinc-900/40 rounded-3xl border border-white/5 p-6 hover:border-indigo-500/30 transition-all duration-300 relative group justify-between"
          >
            {/* Desktop Flow Arrow to Step 2 */}
            <div className="hidden lg:flex absolute top-[64px] -right-3 xl:-right-3.5 -translate-y-1/2 z-25 items-center justify-center pointer-events-none">
              <svg className="w-5 h-5 text-indigo-500/40 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Mobile Flow Arrow (Downward) */}
            <div className="lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 z-25 pointer-events-none">
              <svg className="w-4 h-4 text-indigo-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 group-hover:border-indigo-500/40 transition-colors shadow-lg">
                <img 
                  src={about3Img} 
                  alt="Data Capture" 
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                  referrerPolicy="no-referrer"
                  onError={(e) => console.error("Failed to load about_3 image")}
                />
              </div>
              <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                Data Capture
              </h4>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
              Structured clinical data captured at every meaningful touch-point.
            </p>
          </motion.div>

          {/* Item 2: Standardization & validation (Arrow & Node) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col text-center bg-zinc-900/20 rounded-3xl border border-dashed border-white/10 p-6 hover:border-purple-500/30 transition-all duration-300 relative group justify-between"
          >
            {/* Desktop Flow Arrow to Step 3 */}
            <div className="hidden lg:flex absolute top-[64px] -right-3 xl:-right-3.5 -translate-y-1/2 z-25 items-center justify-center pointer-events-none">
              <svg className="w-5 h-5 text-purple-500/40 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Mobile Flow Arrow (Downward) */}
            <div className="lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 z-25 pointer-events-none">
              <svg className="w-4 h-4 text-purple-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={about4Img} 
                  alt="Arrow: Standardization & validation" 
                  className="w-14 h-14 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                  onError={(e) => console.error("Failed to load about_4 image")}
                />
              </div>
              <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                Standardization & validation
              </h4>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2 font-light">
              Data is standardized, validated and secured to ensure accuracy and reliability.
            </p>
          </motion.div>

          {/* Item 3: Trusted Digital Record (Centerpiece) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col text-center bg-indigo-950/10 rounded-3xl border border-indigo-500/20 p-6 hover:border-indigo-400/40 transition-all duration-300 relative group justify-between shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent rounded-3xl pointer-events-none" />
            
            {/* Desktop Flow Arrow to Step 4 */}
            <div className="hidden lg:flex absolute top-[112px] -right-3 xl:-right-3.5 -translate-y-1/2 z-25 items-center justify-center pointer-events-none">
              <svg className="w-5 h-5 text-indigo-500/40 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Mobile Flow Arrow (Downward) */}
            <div className="lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 z-25 pointer-events-none">
              <svg className="w-4 h-4 text-indigo-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex flex-col items-center z-10">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-indigo-500/30 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 ring-2 ring-indigo-500/10 group-hover:ring-indigo-500/30 transition-all shadow-lg">
                <img 
                  src={eveLogoImg} 
                  alt="Trusted Digital Record" 
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                  referrerPolicy="no-referrer"
                  onError={(e) => console.error("Failed to load eve_logo image")}
                />
              </div>
              <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-400 uppercase mb-1">
                Central Ledger
              </span>
              <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                Trusted Digital Record
              </h4>
            </div>
            <p className="text-indigo-200/70 text-xs sm:text-sm leading-relaxed mt-2 z-10">
              The continuous, verifiable health timeline verifying true clinical records across all care environments.
            </p>
          </motion.div>

          {/* Item 4: Secure Interoperability (Arrow & Node) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col text-center bg-zinc-900/20 rounded-3xl border border-dashed border-white/10 p-6 hover:border-emerald-500/30 transition-all duration-300 relative group justify-between"
          >
            {/* Desktop Flow Arrow to Step 5 */}
            <div className="hidden lg:flex absolute top-[112px] -right-3 xl:-right-3.5 -translate-y-1/2 z-25 items-center justify-center pointer-events-none">
              <svg className="w-5 h-5 text-emerald-500/40 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Mobile Flow Arrow (Downward) */}
            <div className="lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 z-25 pointer-events-none">
              <svg className="w-4 h-4 text-emerald-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={about5Img} 
                  alt="Arrow: Secure Interoperability" 
                  className="w-14 h-14 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                  onError={(e) => console.error("Failed to load about_5 image")}
                />
              </div>
              <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                Secure Interoperability
              </h4>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2 font-light">
              Seamless and consent-driven exchange across healthcare system and partners.
            </p>
          </motion.div>

          {/* Item 5: Verified Outcomes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col text-center bg-zinc-900/40 rounded-3xl border border-white/5 p-6 hover:border-emerald-500/30 transition-all duration-300 relative group justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 group-hover:border-emerald-500/40 transition-colors shadow-lg">
                <img 
                  src={about6Img} 
                  alt="Verified Outcomes" 
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                  referrerPolicy="no-referrer"
                  onError={(e) => console.error("Failed to load about_6 image")}
                />
              </div>
              <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                Verified Outcomes
              </h4>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
              Real-world evidence generates insights that improve care and inform decisions.
            </p>
          </motion.div>

        </div>

        {/* Additional Architecture Core Pillars */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h4 className="text-xs font-black tracking-[0.35em] text-emerald-500 uppercase mb-3">
              Operational Principles
            </h4>
            <h3 className="text-2xl md:text-3.5xl font-black text-white tracking-tighter uppercase">
              Core Pillars of the Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* Pillar 1: Privacy by Design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col text-center bg-zinc-900/30 rounded-3xl border border-white/5 p-6 hover:border-indigo-500/30 transition-all duration-300 relative group justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 group-hover:border-indigo-500/40 transition-colors shadow-lg">
                  <img 
                    src={about7Img} 
                    alt="Privacy by Design" 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => console.error("Failed to load about_7 image")}
                  />
                </div>
                <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight animate-none">
                  Privacy by Design
                </h4>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                Built with robust security and patient consent at the core.
              </p>
            </motion.div>

            {/* Pillar 2: Clinically Governed */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col text-center bg-zinc-900/30 rounded-3xl border border-white/5 p-6 hover:border-indigo-500/30 transition-all duration-300 relative group justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 group-hover:border-indigo-500/40 transition-colors shadow-lg">
                  <img 
                    src={about8Img} 
                    alt="Clinically Governed" 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => console.error("Failed to load about_8 image")}
                  />
                </div>
                <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                  Clinically Governed
                </h4>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                Guided by clinical expertise and evidence-based standards.
              </p>
            </motion.div>

            {/* Pillar 3: Ecosystem Connected */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col text-center bg-zinc-900/30 rounded-3xl border border-white/5 p-6 hover:border-emerald-500/30 transition-all duration-300 relative group justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 group-hover:border-emerald-500/40 transition-colors shadow-lg">
                  <img 
                    src={about9Img} 
                    alt="Ecosystem Connected" 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => console.error("Failed to load about_9 image")}
                  />
                </div>
                <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                  Ecosystem Connected
                </h4>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                Built to integrate with clinics, hospital, labs, and trusted partners.
              </p>
            </motion.div>

            {/* Pillar 4: Outcome Focused */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col text-center bg-zinc-900/30 rounded-3xl border border-white/5 p-6 hover:border-emerald-500/30 transition-all duration-300 relative group justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 group-hover:border-emerald-500/40 transition-colors shadow-lg">
                  <img 
                    src={about10Img} 
                    alt="Outcome Focused" 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => console.error("Failed to load about_10 image")}
                  />
                </div>
                <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                  Outcome Focused
                </h4>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                Designed to deliver measurable improvements in continuity and safety.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Our Roadmap : Proving the Infrastructure */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h4 className="text-xs font-black tracking-[0.35em] text-indigo-500 uppercase mb-3">
              EVE Evaluation Path
            </h4>
            <h3 className="text-2xl md:text-3.5xl font-black text-white tracking-tighter uppercase">
              Our Roadmap : Proving the Infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* Step 1: Clinical Adoption */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col text-center bg-zinc-900/30 rounded-3xl border border-white/5 p-6 hover:border-indigo-500/30 transition-all duration-300 relative group justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 group-hover:border-indigo-500/40 transition-colors shadow-lg">
                  <img 
                    src={about11Img} 
                    alt="1. Clinical Adoption" 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => console.error("Failed to load about_11 image")}
                  />
                </div>
                <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                  1. Clinical Adoption
                </h4>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                Ensuring Doctors actively use EVE in daily consultations.
              </p>
            </motion.div>

            {/* Step 2: Live journey */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col text-center bg-zinc-900/30 rounded-3xl border border-white/5 p-6 hover:border-indigo-500/30 transition-all duration-300 relative group justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 group-hover:border-indigo-500/40 transition-colors shadow-lg">
                  <img 
                    src={about12Img} 
                    alt="2. Live journey" 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => console.error("Failed to load about_12 image")}
                  />
                </div>
                <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                  2. Live journey
                </h4>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                Capturing real patient data from throughout pregnancy.
              </p>
            </motion.div>

            {/* Step 3: Ecosystem Anchors */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col text-center bg-zinc-900/30 rounded-3xl border border-white/5 p-6 hover:border-emerald-500/30 transition-all duration-300 relative group justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 group-hover:border-emerald-500/40 transition-colors shadow-lg">
                  <img 
                    src={about13Img} 
                    alt="Ecosystem Anchors" 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => console.error("Failed to load about_13 image")}
                  />
                </div>
                <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                  Ecosystem Anchors
                </h4>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                Establishing formal partnerships with clinics and hospitals.
              </p>
            </motion.div>

            {/* Step 4: Verified outcomes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col text-center bg-zinc-900/30 rounded-3xl border border-white/5 p-6 hover:border-emerald-500/30 transition-all duration-300 relative group justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/60 flex items-center justify-center p-3 mb-4 group-hover:border-emerald-500/40 transition-colors shadow-lg">
                  <img 
                    src={about14Img} 
                    alt="Verified outcomes" 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => console.error("Failed to load about_14 image")}
                  />
                </div>
                <h4 className="text-lg font-black text-white mb-2 leading-snug tracking-tight">
                  Verified outcomes
                </h4>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                Generating concrete evidence that reliable clinical data improves continuity of care.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </Section>
  );
};
