import { motion } from "motion/react";
import { ChevronRight, MessageSquare } from "lucide-react";
import { SECTIONS } from "../constants";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onSendMessage: () => void;
  onNavigate: (page: string) => void;
}

export const Hero = ({ onSendMessage, onNavigate }: HeroProps) => {
  const { t } = useLanguage();

  const handleExplore = () => {
    onNavigate("product");
  };

  return (
    <section 
      id={SECTIONS.HOME}
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-black"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#3533CD] blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, -100, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#25094B] blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm animate-pulse">
            {t.hero.badge}
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            {t.hero.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              {t.hero.titleAccent}
            </span>{" "}
            {t.hero.title2}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleExplore}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-600/20"
            >
              {t.hero.exploreBtn}
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onSendMessage}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <MessageSquare size={20} />
              {t.hero.messageBtn}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Badge/Stats simulation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 md:flex hidden items-center gap-12 text-white/40"
      >
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-white">99%</span>
          <span className="text-[10px] uppercase tracking-widest font-bold">{t.hero.accuracy}</span>
        </div>
        <div className="w-[1px] h-8 bg-white/10" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-white">24/7</span>
          <span className="text-[10px] uppercase tracking-widest font-bold">{t.hero.support}</span>
        </div>
        <div className="w-[1px] h-8 bg-white/10" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-white">50k+</span>
          <span className="text-[10px] uppercase tracking-widest font-bold">{t.hero.patients}</span>
        </div>
      </motion.div>
    </section>
  );
};
