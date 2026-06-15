import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./Section";
import { SECTIONS } from "../constants";
import { 
  Activity, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  GraduationCap, 
  Zap,
  Database,
  Compass,
  Heart,
  LineChart,
  ShieldCheck,
  Smartphone,
  Laptop
} from "lucide-react";
import { EveEducationPortal } from "./EveEducationPortal";
import { useLanguage } from "../context/LanguageContext";

// @ts-ignore
import laptopImg from "../assets/images/products/Laptop.png";
// @ts-ignore
import phoneImg from "../assets/images/products/Phone.png";
// @ts-ignore
import prod0Img from "../assets/images/products/product_0.png";
// @ts-ignore
import prod1Img from "../assets/images/products/product_1.png";
// @ts-ignore
import prod2Img from "../assets/images/products/product_2.png";
// @ts-ignore
import prod3Img from "../assets/images/products/product_3.png";
// @ts-ignore
import prod4Img from "../assets/images/products/product_4.png";
// @ts-ignore
import prod5Img from "../assets/images/products/product_5.png";
// @ts-ignore
import prod6Img from "../assets/images/products/product_6.png";

// Fallback component for product bullet indicators when images are blank or fail
interface ProductImageOrIconProps {
  src: string;
  alt: string;
  iconName: "database" | "gap" | "triage" | "journey" | "expert" | "baby" | "wellness";
}

const ProductImageOrIcon = ({ src, alt, iconName }: ProductImageOrIconProps) => {
  const [hasError, setHasError] = useState(false);

  const renderFallbackIcon = () => {
    switch (iconName) {
      case "database":
        return <Database className="w-8 h-8 text-indigo-400 animate-pulse" />;
      case "gap":
        return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
      case "triage":
        return <LineChart className="w-8 h-8 text-indigo-400" />;
      case "journey":
        return <Compass className="w-8 h-8 text-purple-400" />;
      case "expert":
        return <GraduationCap className="w-8 h-8 text-pink-400" />;
      case "baby":
        return <Heart className="w-8 h-8 text-rose-500 animate-[bounce_1.5s_infinite]" />;
      case "wellness":
        return <Activity className="w-8 h-8 text-teal-400 animate-[pulse_2s_infinite]" />;
      default:
        return <Activity className="w-8 h-8 text-indigo-400" />;
    }
  };

  // If the source is empty or errored, render the glowing lucide fallback icon
  if (hasError || !src) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-950/80 rounded-xl border border-white/5 shadow-inner">
        {renderFallbackIcon()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(79,70,229,0.15)]"
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
    />
  );
};

// Custom interactive ultra-modern Clinical Dashboard Mockup (replaces static Laptop.png)
const ClinicalDashboardMockup = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getWavePath = () => {
    let path = "M 0 50 ";
    for (let x = 0; x <= 300; x += 10) {
      const phase = (x + seconds * 15) % 100;
      let y = 50;
      if (phase > 30 && phase < 40) {
        y = 20;
      } else if (phase >= 40 && phase < 45) {
        y = 80;
      } else if (phase >= 45 && phase < 50) {
        y = 50;
      } else {
        y = 50 + Math.sin(x * 0.1 + seconds) * 3;
      }
      path += `L ${x} ${y} `;
    }
    return path;
  };

  return (
    <div className="w-full rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden font-mono text-left text-white shadow-2xl relative select-none">
      {/* OS Header */}
      <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-white/5 text-[10px] text-gray-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-gray-200">EVE CLINICAL OS V1.4</span>
        </div>
        <div className="hidden sm:block">STABLE • LATENCY: 12ms</div>
      </div>

      {/* Main Screen Layout */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left column: Cardiovascular telemetry */}
        <div className="bg-zinc-900/60 border border-white/5 rounded-xl p-3 flex flex-col gap-2">
          <div className="flex justify-between items-center text-[10px] text-zinc-400 border-b border-white/5 pb-1">
            <span>FETAL HEART MONITOR</span>
            <span className="text-emerald-400 font-bold">LIVE TELEMETRY</span>
          </div>
          {/* Animated Waveform */}
          <div className="h-24 bg-black/40 rounded-lg relative overflow-hidden border border-white/5 flex items-center justify-center">
            <svg viewBox="0 0 300 100" className="w-full h-full stroke-emerald-400 stroke-[2] fill-none">
              <path d={getWavePath()} />
            </svg>
            <div className="absolute bottom-2 right-2 text-right">
              <div className="text-xl md:text-2xl font-black text-emerald-400 leading-none">144</div>
              <div className="text-[8px] text-zinc-500">BPM (STABLE)</div>
            </div>
          </div>
          {/* Diagnostic Stats */}
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 bg-black/20 rounded border border-white/5">
              <span className="text-zinc-500 block">MATERNAL SAO2</span>
              <strong className="text-indigo-400 text-sm">99.4%</strong>
            </div>
            <div className="p-2 bg-black/20 rounded border border-white/5">
              <span className="text-zinc-500 block">CONTRACTIONS</span>
              <strong className="text-purple-400 text-sm">3.5m FREQ</strong>
            </div>
          </div>
        </div>

        {/* Right column: Risk profiles & critical checks */}
        <div className="bg-zinc-900/60 border border-white/5 rounded-xl p-3 flex flex-col justify-between gap-2">
          <div>
            <div className="flex justify-between items-center text-[10px] text-zinc-400 border-b border-white/5 pb-1 mb-2">
              <span>GAP TRACKER & TRUING</span>
              <span className="text-indigo-400 font-bold">OPTIMAL</span>
            </div>
            {/* Risk indicators */}
            <div className="space-y-1.5 text-[9px]">
              <div className="flex items-center justify-between text-gray-300">
                <span>Triage Model:</span>
                <span className="px-1.5 py-0.5 bg-indigo-500/10 text-indigo-300 rounded font-bold uppercase">Active</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Gestational Age:</span>
                <span className="text-zinc-200 font-bold">28 Weeks</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Maternal BP:</span>
                <span className="text-emerald-400 font-bold">118/76 mmHg</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-2">
            <span className="text-[8px] text-zinc-500 block mb-1">CLINICAL GAPS STATUS</span>
            <div className="text-[10px] px-2 py-1 bg-indigo-950/20 text-indigo-300 border border-indigo-950/50 rounded-md text-center font-bold">
              All compliance milestones fulfilled.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom interactive ultra-modern Mobile Phone Mockup (replaces static Phone.png)
const MaternalAppMockup = () => {
  const [kickCount, setKickCount] = useState(12);
  const [lastKickTime, setLastKickTime] = useState("09:30 AM");
  const [pulsing, setPulsing] = useState(false);

  const handleLogKick = () => {
    setKickCount((prev) => prev + 1);
    setPulsing(true);
    const date = new Date();
    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setLastKickTime(timeStr);
    setTimeout(() => {
      setPulsing(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-[280px] mx-auto aspect-[9/19] rounded-[36px] bg-zinc-950 border-[5px] border-zinc-800 relative shadow-2xl flex flex-col overflow-hidden text-left font-sans select-none my-4">
      {/* Top Device Notch (Dynamic Island) */}
      <div className="absolute top-2 inset-x-0 flex justify-center z-20 pointer-events-none">
        <div className="w-20 h-4 bg-black rounded-full" />
      </div>

      {/* Screen Header Info */}
      <div className="pt-8 px-4 pb-2 flex justify-between items-center text-[10px] text-zinc-400 font-mono">
        <span>09:41</span>
        <div className="flex gap-1 items-center">
          <span className="w-2.5 h-1.5 bg-zinc-300 rounded-sm inline-block" />
          <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
        </div>
      </div>

      {/* App Body */}
      <div className="flex-1 p-3 flex flex-col justify-between bg-zinc-950">
        <div>
          {/* App Header */}
          <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-purple-400 font-bold font-mono">My EVE Companion</span>
              <h5 className="text-xs font-black text-white leading-tight">Sarah • Week 28</h5>
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-[8px] font-bold text-white">
              S
            </div>
          </div>

          {/* Interactive Kick Counter Center Widget */}
          <div className="relative my-4 flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-900/40 border border-white/5">
            <div className="relative flex items-center justify-center">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" className="stroke-zinc-800 stroke-[5] fill-none" />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  className="stroke-purple-500 stroke-[5] fill-none transition-all duration-500"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * Math.min(kickCount, 15)) / 15}
                />
              </svg>
              {/* Kick Count Stats Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-white">{kickCount}</span>
                <span className="text-[7px] text-zinc-500 font-mono uppercase tracking-wider">Kicks Logged</span>
              </div>

              {/* Glowing ring animation on user click */}
              <AnimatePresence>
                {pulsing && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-purple-500/20 rounded-full pointer-events-none"
                    transition={{ duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Click to log kick */}
            <button
              onClick={handleLogKick}
              className="mt-3 w-full py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-[9px] font-bold shadow-md shadow-purple-600/20 hover:from-purple-500 hover:to-indigo-500 active:scale-95 transition-all uppercase tracking-wider"
            >
              + Log Active Kick
            </button>
            <span className="text-[7px] text-zinc-500 mt-1 font-mono">Last Kick: {lastKickTime}</span>
          </div>
        </div>

        {/* Weekly Tips */}
        <div className="p-2 bg-gradient-to-tr from-purple-950/30 to-zinc-900 border border-white/5 rounded-xl">
          <span className="text-[7px] font-mono text-purple-400 font-black block uppercase tracking-wider mb-1">Today's Advice</span>
          <p className="text-[9px] text-zinc-300 leading-relaxed font-light">
            Baby's active times are usually after dinner. 10 kicks in 2 hours is a healthy movement trend.
          </p>
        </div>

        {/* Bottom Menu tabs */}
        <div className="border-t border-white/5 pt-1.5 flex justify-around text-zinc-500 text-[8px] font-mono mt-2">
          <span className="text-purple-400 font-bold">HOME</span>
          <span>CURRICULUM</span>
          <span>STATS</span>
        </div>
      </div>
    </div>
  );
};

export const Product = () => {
  const [activeTab, setActiveTab] = useState<"system" | "education">("system");
  const { language, t } = useLanguage();

  const sectionContent = {
    en: {
      badge: "Clinical Clarity at a Glance",
      title: "Precision Data, Prioritized for Health Providers",
      parts: [
        {
          img: prod0Img,
          title: "Consolidated data streams",
          desc: "Reduce manual chart review and errors."
        },
        {
          img: prod1Img,
          title: "Automated gap tracker",
          desc: "Ensures high-quality compliance and patient safety."
        },
        {
          img: prod2Img,
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
          img: prod0Img,
          title: "Aliran data terpusat",
          desc: "Mengurangkan semakan carta secara manual dan ralat."
        },
        {
          img: prod1Img,
          title: "Penjejak jurang automatik",
          desc: "Memastikan pematuhan piawaian tinggi dan keselamatan pesakit."
        },
        {
          img: prod2Img,
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
          img: prod0Img,
          title: "Aliran data terintegrasi",
          desc: "Mengurangi kesalahan dan peninjauan grafik secara manual."
        },
        {
          img: prod1Img,
          title: "Pelacak kesenjangan otomatis",
          desc: "Memastikan kepatuhan standar berkualitas tinggi dan keselamatan pasien."
        },
        {
          img: prod2Img,
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
          img: prod3Img,
          title: "Clinical Journey",
          desc: "Your complete pregnancy record in one place"
        },
        {
          img: prod4Img,
          title: "Expert Knowledge",
          desc: "Trustworthy guides to help you through the changes."
        },
        {
          img: prod5Img,
          title: "Baby Connection",
          desc: "Track daily kicks to bond & ensure baby's safety"
        },
        {
          img: prod6Img,
          title: "Wellness Support",
          desc: "Quick check-ins to stay on top of your well-being animate-pulse"
        }
      ]
    },
    ms: {
      badge: "Penjagaan Lancar Sejak Tendangan Pertama Sehingga Kelahiran",
      title: "Alami Kesinambungan Sepenuhnya bersama EVE",
      parts: [
        {
          img: prod3Img,
          title: "Perjalanan Klinikal",
          desc: "Rekod kehamilan lengkap anda di satu tempat"
        },
        {
          img: prod4Img,
          title: "Pengetahuan Pakar",
          desc: "Panduan dipercayai untuk membantu anda melalui perubahan."
        },
        {
          img: prod5Img,
          title: "Hubungan Bayi",
          desc: "Jejak tendangan harian untuk mengeratkan hubungan & memastikan keselamatan bayi"
        },
        {
          img: prod6Img,
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
          img: prod3Img,
          title: "Perjalanan Klinikal",
          desc: "Rekam kehamilan lengkap Anda di satu tempat"
        },
        {
          img: prod4Img,
          title: "Pengetahuan Pakar",
          desc: "Panduan tepercaya untuk membantu Anda melalui perubahan."
        },
        {
          img: prod5Img,
          title: "Hubungan Bayi",
          desc: "Lacak tendangan harian untuk mengeratkan ikatan & memastikan keselamatan bayi"
        },
        {
          img: prod6Img,
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
      (t.product as any).systemF4
    ].filter(Boolean) as string[],
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
                <div className="aspect-square rounded-[60px] overflow-hidden relative border border-white/10 bg-gradient-to-tr from-indigo-950/40 via-blue-950/20 to-purple-950/10">
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
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
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
                      <ProductImageOrIcon
                        src={p.img}
                        alt={p.title}
                        iconName={idx === 0 ? "database" : idx === 1 ? "gap" : "triage"}
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

              {/* Right Column: Title + Subtitle + Laptop Image */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.25em] mb-3 font-mono">
                  {currentSection.badge}
                </span>
                <h3 className="text-2xl md:text-4.5xl font-black text-white tracking-tight uppercase leading-tight mb-8">
                  {currentSection.title}
                </h3>
                
                <div className="w-full rounded-[40px] bg-gradient-to-tr from-indigo-950/40 via-purple-950/20 to-emerald-950/10 p-3 border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="w-full flex justify-center items-center">
                    <img
                      src={laptopImg}
                      alt="EVE Clinical OS"
                      className="w-full h-auto object-contain max-h-[460px] rounded-2xl filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Spec / Features Part: Seamless Care from First Kick to Birth */}
            <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center border-t border-white/10 pt-20">
              {/* Left Column: Title + Subtitle + Phone Image */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left order-1">
                <span className="text-purple-400 text-xs font-bold uppercase tracking-[0.25em] mb-3 font-mono">
                  {currentContinuity.badge}
                </span>
                <h3 className="text-2xl md:text-4.5xl font-black text-white tracking-tight uppercase leading-tight mb-8">
                  {currentContinuity.title}
                </h3>
                
                <div className="w-full rounded-[40px] bg-gradient-to-tr from-purple-950/40 via-indigo-950/20 to-pink-950/10 p-3 border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-0 bg-radial-gradient from-purple-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="w-full flex justify-center items-center">
                    <img
                      src={phoneImg}
                      alt="EVE Maternal App"
                      className="w-full h-auto object-contain max-h-[460px] rounded-2xl filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: 1, 2, 3, 4 Feature Cards */}
              <div className="lg:col-span-5 space-y-6 order-2">
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
                      <ProductImageOrIcon
                        src={p.img}
                        alt={p.title}
                        iconName={idx === 0 ? "journey" : idx === 1 ? "expert" : idx === 2 ? "baby" : "wellness"}
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
