import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./Section";
import { SECTIONS } from "../constants";
import { Activity, BookOpen, CheckCircle2, ChevronRight, GraduationCap, Zap } from "lucide-react";
import { EveEducationPortal } from "./EveEducationPortal";
import { useLanguage } from "../context/LanguageContext";

export const Product = () => {
  const [activeTab, setActiveTab] = useState<"system" | "education">("system");
  const { language, t } = useLanguage();

  const sectionContent = {
    en: {
      badge: "Clinical Clarity at a Glance",
      title: "Precision Data, Prioritized for Health Providers",
      parts: [
        {
          img: "/src/assets/images/products/product_0.png",
          title: "Consolidated data streams",
          desc: "Reduce manual chart review and errors."
        },
        {
          img: "/src/assets/images/products/product_1.png",
          title: "Automated gap tracker",
          desc: "Ensures high-quality compliance and patient safety."
        },
        {
          img: "/src/assets/images/products/product_2.png",
          title: "Predictive triage",
          desc: "Optimizes your workflow by prioritizing high-risk cases"
        }
      ]
    },
    ms: {
      badge: "Kejelasan Klinikal Sepintas Lalu",
      title: "Data Tepat, Diutamakan untuk Penyedia Penjagaan Kesihatan",
      parts: [
        {
          img: "/src/assets/images/products/product_0.png",
          title: "Aliran data terpusat",
          desc: "Mengurangkan semakan carta secara manual dan ralat."
        },
        {
          img: "/src/assets/images/products/product_1.png",
          title: "Penjejak jurang automatik",
          desc: "Memastikan pematuhan piawaian tinggi dan keselamatan pesakit."
        },
        {
          img: "/src/assets/images/products/product_2.png",
          title: "Triage ramalan",
          desc: "Mengoptimumkan aliran kerja anda dengan mengutamakan kes berisiko tinggi."
        }
      ]
    },
    id: {
      badge: "Kejelasan Klinis Sekilas Pandang",
      title: "Data Presisi, Diprioritaskan untuk Penyedia Layanan Kesehatan",
      parts: [
        {
          img: "/src/assets/images/products/product_0.png",
          title: "Aliran data terintegrasi",
          desc: "Mengurangi kesalahan dan peninjauan grafik secara manual."
        },
        {
          img: "/src/assets/images/products/product_1.png",
          title: "Pelacak kesenjangan otomatis",
          desc: "Memastikan kepatuhan standar berkualitas tinggi dan keselamatan pasien."
        },
        {
          img: "/src/assets/images/products/product_2.png",
          title: "Triage prediktif",
          desc: "Mengoptimalkan alur kerja Anda dengan memprioritaskan kasus berisiko tinggi."
        }
      ]
    }
  };

  const continuityContent = {
    en: {
      badge: "Seamless Care from First Kick to Birth",
      title: "Experience Total Continuity with EVE",
      parts: [
        {
          img: "/src/assets/images/products/product_3.png",
          title: "Clinical Journey",
          desc: "Your complete pregnancy record in one place"
        },
        {
          img: "/src/assets/images/products/product_4.png",
          title: "Expert Knowledge",
          desc: "Trustworthy guides to help you through the changes."
        },
        {
          img: "/src/assets/images/products/product_5.png",
          title: "Baby Connection",
          desc: "Track daily kicks to bond & ensure baby's safety"
        },
        {
          img: "/src/assets/images/products/product_6.png",
          title: "Wellness Support",
          desc: "Quick check-ins to stay on top of your well-being"
        }
      ]
    },
    ms: {
      badge: "Penjagaan Lancar Sejak Tendangan Pertama Sehingga Kelahiran",
      title: "Alami Kesinambungan Sepenuhnya bersama EVE",
      parts: [
        {
          img: "/src/assets/images/products/product_3.png",
          title: "Perjalanan Klinikal",
          desc: "Rekod kehamilan lengkap anda di satu tempat"
        },
        {
          img: "/src/assets/images/products/product_4.png",
          title: "Pengetahuan Pakar",
          desc: "Panduan dipercayai untuk membantu anda melalui perubahan."
        },
        {
          img: "/src/assets/images/products/product_5.png",
          title: "Hubungan Bayi",
          desc: "Jejak tendangan harian untuk mengeratkan hubungan & memastikan keselamatan bayi"
        },
        {
          img: "/src/assets/images/products/product_6.png",
          title: "Sokongan Kesejahteraan",
          desc: "Daftar masuk segera untuk sentiasa memantau kesejahteraan anda"
        }
      ]
    },
    id: {
      badge: "Asuhan Mulus Sejak Tendangan Pertama Hingga Kelahiran",
      title: "Rasakan Kontinuitas Total Bersama EVE",
      parts: [
        {
          img: "/src/assets/images/products/product_3.png",
          title: "Perjalanan Klinikal",
          desc: "Rekam kehamilan lengkap Anda di satu tempat"
        },
        {
          img: "/src/assets/images/products/product_4.png",
          title: "Pengetahuan Pakar",
          desc: "Panduan tepercaya untuk membantu Anda melalui perubahan."
        },
        {
          img: "/src/assets/images/products/product_5.png",
          title: "Hubungan Bayi",
          desc: "Lacak tendangan harian untuk mengeratkan ikatan & memastikan keselamatan bayi"
        },
        {
          img: "/src/assets/images/products/product_6.png",
          title: "Dukungan Kesejahteraan",
          desc: "Pemeriksaan cepat untuk memastikan kesejahteraan Anda terpantau"
        }
      ]
    }
  };

  const currentLangCode = (language === "ms" || language === "id") ? language : "en";
  const currentSection = sectionContent[currentLangCode];
  const currentContinuity = continuityContent[currentLangCode];

  const systemInfo = {
    title: t.product.systemTitle,
    desc: t.product.systemDesc,
    features: [
      t.product.systemF1,
      t.product.systemF2,
      t.product.systemF3,
      t.product.systemF4
    ],
    highlights: [
      { icon: <Activity />, label: t.product.highlight1 },
      { icon: <Zap />, label: t.product.highlight2 },
    ]
  };

  return (
    <Section id={SECTIONS.PRODUCT} className="bg-black">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-purple-400 uppercase tracking-[0.4em] mb-4">{t.product.badge}</h2>
        <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter">{t.product.title}</h3>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-16">
        <div className="p-1.5 bg-white/5 border border-white/10 rounded-[24px] flex gap-2 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("system")}
            className={`px-8 py-3 rounded-[20px] text-sm font-bold transition-all ${activeTab === 'system' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-gray-400 hover:text-white'}`}
          >
            {t.product.systemTab}
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-8 py-3 rounded-[20px] text-sm font-bold transition-all ${activeTab === 'education' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-gray-400 hover:text-white'}`}
          >
            {t.product.educationTab}
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
            className="space-y-24"
          >
            {/* Main Overview Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                          <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{t.product.statusLabel}</span>
                          <span className="text-xl font-black">{t.product.statusActive}</span>
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
            </div>

            {/* Spec / Features Part: Clinical Clarity at a Glance */}
            <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center border-t border-white/10 pt-20">
              {/* Left Column: 1, 2, 3 Feature Cards */}
              <div className="lg:col-span-5 space-y-6">
                {currentSection.parts.map((p, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="flex gap-5 items-start p-6 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-indigo-500/35 hover:bg-zinc-900/50 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-zinc-950 overflow-hidden border border-white/10 shrink-0 p-1 flex items-center justify-center shadow-inner">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(79,70,229,0.15)]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h5 className="text-white text-base md:text-lg font-black tracking-tight mb-1 uppercase font-sans text-left">
                        {p.title}
                      </h5>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light text-left">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Title + Subtitle + Laptop Mockup */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.25em] mb-3 font-mono">
                  {currentSection.badge}
                </span>
                <h3 className="text-2xl md:text-4.5xl font-black text-white tracking-tight uppercase leading-tight mb-8">
                  {currentSection.title}
                </h3>
                
                <div className="w-full rounded-[40px] bg-gradient-to-tr from-indigo-950/40 via-purple-950/20 to-emerald-950/10 p-3 border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <img
                    src="/src/assets/images/products/Laptop.png"
                    alt="Clinical Presentation Mockup"
                    className="w-full max-h-[380px] object-contain rounded-2xl filter drop-shadow-[0_20px_40px_rgba(79,70,229,0.25)] hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Spec / Features Part: Seamless Care from First Kick to Birth */}
            <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center border-t border-white/10 pt-20">
              {/* Left Column: Title + Subtitle + Phone Mockup */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <span className="text-purple-400 text-xs font-bold uppercase tracking-[0.25em] mb-3 font-mono">
                  {currentContinuity.badge}
                </span>
                <h3 className="text-2xl md:text-4.5xl font-black text-white tracking-tight uppercase leading-tight mb-8">
                  {currentContinuity.title}
                </h3>
                
                <div className="w-full rounded-[40px] bg-gradient-to-tr from-purple-950/40 via-indigo-950/20 to-pink-950/10 p-3 border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-0 bg-radial-gradient from-purple-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <img
                    src="/src/assets/images/products/Phone.png"
                    alt="Patient Mobile App Mockup"
                    className="w-full max-h-[380px] object-contain rounded-2xl filter drop-shadow-[0_20px_40px_rgba(139,92,246,0.25)] hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Right Column: 1, 2, 3, 4 Feature Cards */}
              <div className="lg:col-span-5 space-y-6">
                {currentContinuity.parts.map((p, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="flex gap-5 items-start p-6 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-indigo-500/35 hover:bg-zinc-900/50 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-zinc-950 overflow-hidden border border-white/10 shrink-0 p-1 flex items-center justify-center shadow-inner">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(139,92,246,0.15)]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h5 className="text-white text-base md:text-lg font-black tracking-tight mb-1 uppercase font-sans text-left">
                        {p.title}
                      </h5>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light text-left">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
