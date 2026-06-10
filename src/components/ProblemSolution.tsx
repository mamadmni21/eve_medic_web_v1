import { motion } from "motion/react";
import { AlertCircle, ArrowRight, Database, Network, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
// @ts-ignore
import home3Img from "../assets/images/home/home_3.png";
// @ts-ignore
import home4Img from "../assets/images/home/home_4.png";

export const ProblemSolution = () => {
  const { language } = useLanguage();
  
  /* the contents edit up till text here */
  
  const localizedContent = {
    en: {
      badge: "The Maternal Health Crisis & Innovation",
      title: "The Problem & Solution",
      probNum: "01",
      probTitle: "Solving the Crisis of Fragmented Clinical Data",
      probDesc: "Current maternal healthcare is characterized by disconnected silos. Patient history is strapped within individual institutions, leading to redundant diagnostic cycles and elevated clinical risk.",
      solNum: "02",
      solTitle: "EVE: The Longitudinal Data Spine",
      solDesc: "EVE standardizes clinical data ingestion, creating a unified record that follows the patient across clinics, hospitals, and labs.",
      probBadge: "The Crisis",
      solBadge: "The Breakthrough",
    },
    ms: {
      badge: "Krisis Kesihatan Ibu & Inovasi",
      title: "Cabaran & Penyelesaian",
      probNum: "01",
      probTitle: "Menyelesaikan Krisis Data Klinikal yang Berpecah-belah",
      probDesc: "Penjagaan kesihatan ibu ketika ini dikategorikan sebagai silo yang terputus. Sejarah pesakit terikat dalam institusi individu yang membawa kepada kitaran diagnostik yang berlebihan dan mempunyai risiko klinikal yang tinggi.",
      solNum: "02",
      solTitle: "EVE: Tulang Belakang Data Longitudinal",
      solDesc: "EVE menyeragamkan pengambilan data klinikal, mencipta rekod bersatu yang mengikuti pesakit di merentas klinik, hospital, dan makmal.",
      probBadge: "Krisis Data",
      solBadge: "Penyelesaian Pintar",
    },
    id: {
      badge: "Krisis Kesehatan Ibu & Inovasi",
      title: "Tantangan & Solusi",
      probNum: "01",
      probTitle: "Menyelesaikan Krisis Data Klinis yang Terfragmentasi",
      probDesc: "Pelayanan kesehatan ibu saat ini dicirikan oleh silo informasi terpisah. Riwayat pasien terikat dalam institusi masing-masing, menyebabkan siklus diagnostik yang berulang dan peningkatan risiko klinis secara signifikan.",
      solNum: "02",
      solTitle: "EVE: Tulang Punggung Data Longitudinal",
      solDesc: "EVE menstandarisasi penerimaan data klinis, menciptakan catatan terpadu yang mengikuti perjalanan pasien di berbagai klinik, rumah sakit, dan laboratorium.",
      probBadge: "Tantangan Klinis",
      solBadge: "Terobosan Baru",
    },
    zh: {
      badge: "孕产妇医疗危机与创新",
      title: "面临挑战与解决方案",
      probNum: "01",
      probTitle: "解决碎片化临床数据的危机",
      probDesc: "当前的孕产妇医疗保健具有零散和割裂的特征。患者的既往病史被局限在各个独立的机构内，导致重复的诊断周期并增加了临床安全风险。",
      solNum: "02",
      solTitle: "EVE: 纵向数据中枢",
      solDesc: "EVE 标准化了临床数据的摄入，创建了一个统一的健康档案记录，该记录伴随着患者跨越诊所、医院和实验室。",
      probBadge: "行业瓶颈",
      solBadge: "数字突破",
    }
  };

  // Safely fallback to English if the current language mapping gets out of sync
  const content = localizedContent[language] || localizedContent.en;

  return (
    <section className="relative py-20 px-6 md:px-12 bg-black overflow-hidden border-t border-white/5">
      {/* Visual background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-900/10 blur-[130px] rounded-full z-0 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-900/10 blur-[130px] rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Headings */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-4 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <Sparkles size={12} className="text-indigo-400 animate-pulse" />
              {content.badge}
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              {content.title}
            </h3>
          </motion.div>
        </div>

        {/* Binary Layout: Problem on left, Solution on right */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch relative">
          
          {/* Visual Indicator arrow bridge for large screens */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10 w-14 h-14 rounded-full bg-black border border-white/10 shadow-lg shadow-black">
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowRight className="text-indigo-400" size={20} />
            </motion.div>
          </div>

          {/* CARD 1: THE PROBLEM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-zinc-900/50 via-zinc-950/20 to-black border border-white/10 hover:border-red-500/30 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            {/* Absolute background card visual */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl rounded-full pointer-events-none group-hover:bg-red-600/10 transition-colors duration-500" />
            
            <div>
              {/* Card Header row */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-5xl font-black text-white/5 group-hover:text-red-500/15 transition-all font-mono">
                  {content.probNum}
                </span>
                <span className="px-3.5 py-1.5 bg-red-500/10 border border-red-500/20 font-bold text-[10px] tracking-widest text-red-400 rounded-full uppercase">
                  {content.probBadge}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 group-hover:text-red-400 transition-colors leading-snug">
                {content.probTitle}
              </h4>

              {/* Description body */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-normal">
                {content.probDesc}
              </p>
            </div>

            {/* Visual Diagram representing Fragmented Clinical Data */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/40 p-3 shadow-2xl relative flex justify-center items-center min-h-[140px]">
              <img 
                src={home3Img} 
                alt="Fragmented Clinical Data" 
                className="w-[300px] h-[300px] object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  console.error("Failed to load home_3 image");
                }}
              />
              <div className="absolute top-3 left-3 bg-red-500/20 border border-red-500/30 text-red-400 rounded-full px-2 py-0.5 text-[8px] font-mono font-black tracking-widest uppercase flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Fragmented Ingestion Silos
              </div>
            </div>
          </motion.div>

          {/* CARD 2: THE SOLUTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-indigo-950/20 via-zinc-950/20 to-black border border-white/10 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            {/* Absolute background card visual */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none group-hover:bg-indigo-600/25 transition-colors duration-500" />
            
            <div>
              {/* Card Header row */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-5xl font-black text-white/5 group-hover:text-indigo-500/15 transition-all font-mono">
                  {content.solNum}
                </span>
                <span className="px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/20 font-bold text-[10px] tracking-widest text-indigo-400 rounded-full uppercase">
                  {content.solBadge}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 group-hover:text-indigo-400 transition-colors leading-snug">
                {content.solTitle}
              </h4>

              {/* Description body */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-normal">
                {content.solDesc}
              </p>
            </div>

            {/* Visual Diagram representing Longitudinal Data Spine */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/40 p-3 shadow-2xl relative flex justify-center items-center min-h-[140px]">
              <img 
                src={home4Img} 
                alt="Longitudinal Data Spine" 
                className="w-[300px] h-[300px] object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  console.error("Failed to load home_4 image");
                }}
              />
              <div className="absolute top-3 left-3 bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 rounded-full px-2 py-0.5 text-[8px] font-mono font-black tracking-widest uppercase flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Unified Spine Network Connected
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};