import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./Section";
import { SECTIONS } from "../constants";
import { Activity, BookOpen, CheckCircle2, ChevronRight, GraduationCap, Zap } from "lucide-react";
import { EveEducationPortal } from "./EveEducationPortal";

export const Product = () => {
  const [activeTab, setActiveTab] = useState<"system" | "education">("system");

  const systemInfo = {
    title: "EVE System",
    desc: "A revolutionary health monitoring ecosystem for precision medicine.",
    features: [
      "Doctors can only access a snapshot of a patient's health condition",
      "Clinical Clarity at a Glance",
      "Seamless Care from First Kick to Birth",
      "Real-time health telemetry integration"
    ],
    highlights: [
      { icon: <Activity />, label: "Health Snapshot" },
      { icon: <Zap />, label: "Instant Clarity" },
    ]
  };

  return (
    <Section id={SECTIONS.PRODUCT} className="bg-black">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-purple-400 uppercase tracking-[0.4em] mb-4">Our Offering</h2>
        <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter">THE PLATFORM.</h3>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-16">
        <div className="p-1.5 bg-white/5 border border-white/10 rounded-[24px] flex gap-2 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("system")}
            className={`px-8 py-3 rounded-[20px] text-sm font-bold transition-all ${activeTab === 'system' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-gray-400 hover:text-white'}`}
          >
            EVE System
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-8 py-3 rounded-[20px] text-sm font-bold transition-all ${activeTab === 'education' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-gray-400 hover:text-white'}`}
          >
            EVE Education
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "system" ? (
          <motion.div
            key="system"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content Left */}
            <div className="order-2 lg:order-1">
              <h4 className="text-4xl font-extrabold text-white mb-6 uppercase tracking-tight">{systemInfo.title}</h4>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">{systemInfo.desc}</p>
              
              <div className="space-y-4 mb-10">
                {systemInfo.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <CheckCircle2 className="text-indigo-500 mt-1 shrink-0" size={20} />
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Right */}
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-[60px] overflow-hidden relative border border-white/10 bg-gradient-to-tr from-indigo-900/40 via-blue-900/20 to-purple-900/10">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="grid grid-cols-2 gap-6 w-full">
                    {systemInfo.highlights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center gap-4 text-center group hover:bg-white/10 transition-all cursor-default"
                      >
                        <div className="text-indigo-400 group-hover:scale-110 transition-transform">
                          <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 rounded-2xl">
                             <div className="w-8 h-8 text-indigo-400">
                               {h.icon}
                             </div>
                          </div>
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-white/60">{h.label}</span>
                      </motion.div>
                    ))}
                    
                    <div className="col-span-2 p-8 rounded-[40px] bg-white text-black flex items-center justify-between shadow-2xl">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Status</span>
                        <span className="text-xl font-black">ACTIVE</span>
                      </div>
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                         <Activity className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Blur */}
                <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full bg-blue-600/30" />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="education"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="w-full"
          >
            <EveEducationPortal />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};
