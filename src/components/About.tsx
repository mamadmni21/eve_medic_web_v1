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
    </Section>
  );
};
