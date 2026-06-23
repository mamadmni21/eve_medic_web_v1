import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

// @ts-ignore
import laptopImg from "../assets/images/home/Laptop.png";
// @ts-ignore
import phoneImg from "../assets/images/home/Phone.png";

export const TotalVisibility = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "One Platform . Total Visibility",
      description: "Integrated data for providers. Empowered access for patients.",
      laptopAlt: "EVE Provider Dashboard Interface - Laptop Screen",
      phoneAlt: "EVE Patient Companion Application - Mobile Screen"
    },
    ms: {
      title: "Satu Platform . Penglihatan Sepenuhnya",
      description: "Data bersepadu untuk penyedia. Akses diperkasakan untuk pesakit.",
      laptopAlt: "Antaramuka Papan Pemuka Penyedia EVE - Skrin Laptop",
      phoneAlt: "Rakan Aplikasi Pesakit EVE - Skrin Telefon"
    },
    id: {
      title: "Satu Platform . Visibilitas Total",
      description: "Data terintegrasi untuk penyedia. Akses mandiri bagi pasien.",
      laptopAlt: "Antarmuka Dasbor Klinik EVE - Layar Laptop",
      phoneAlt: "Aplikasi Pendamping Pasien EVE - Layar Ponsel"
    },
    zh: {
      title: "统一平台 · 全维透析",
      description: "面向诊疗终端的集成化数据流 · 赋予患者自主掌控的数字健档",
      laptopAlt: "EVE 临床专家管理面板 - 笔记本电脑端",
      phoneAlt: "EVE 孕期专属健康助理 - 移动智能手机端"
    }
  };

  const text = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-24 px-6 md:px-12 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient Top-Right Gradient (Vibrant & Brighter) */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-[#3533CD] via-[#4f46e5] to-[#8b5cf6] opacity-75 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 z-0" />
      {/* Ambient background glow effects */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Headheading layout */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.3em] font-mono text-indigo-400 font-extrabold uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/25">
              Dual-Terminal Integration
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none"
          >
            {text.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-lg text-gray-400 font-medium tracking-tight max-w-2xl mx-auto"
          >
            {text.description}
          </motion.p>
        </div>

        {/* Side by side images container */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mt-12">
          
          {/* Laptop view card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group flex flex-col bg-zinc-950/40 border border-white/5 hover:border-indigo-500/30 rounded-[32px] overflow-hidden p-6 transition-all duration-300 relative shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-400 font-extrabold">EVE Portal // Provider</span>
            </div>
            
            <div className="relative flex-grow flex items-center justify-center rounded-2xl overflow-hidden bg-black/60 border border-white/5 p-2 group-hover:border-indigo-500/10 transition-all duration-300">
              <img 
                src={laptopImg} 
                alt={text.laptopAlt}
                className="w-full h-auto object-contain max-h-[380px] rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Phone view card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group flex flex-col bg-zinc-950/40 border border-white/5 hover:border-pink-500/30 rounded-[32px] overflow-hidden p-6 transition-all duration-300 relative shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-pink-400 font-extrabold">EVE App // Patient</span>
            </div>

            <div className="relative flex-grow flex items-center justify-center rounded-2xl overflow-hidden bg-black/60 border border-white/5 p-2 group-hover:border-pink-500/10 transition-all duration-300">
              <img 
                src={phoneImg} 
                alt={text.phoneAlt}
                className="w-full h-auto object-contain max-h-[380px] rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
