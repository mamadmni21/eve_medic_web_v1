import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Heart, 
  ChevronRight, 
  ArrowRight, 
  Clock, 
  CheckSquare, 
  FileText, 
  Search, 
  ExternalLink,
  ChevronLeft,
  Calendar,
  Sparkles,
  HelpCircle,
  ThumbsUp,
  Inbox,
  X
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Article {
  id: string;
  category: "getting-pregnant" | "pregnancy" | "labor" | "delivery";
  title: string;
  readTime: string;
  excerpt: string;
  content: string;
  spiritualNote?: string;
  tips: string[];
}

export const EveEducationPortal = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  
  // Interactive Checklist Checked States (mapped indices to checked state)
  const [checkedStates, setCheckedStates] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  // Interactive Kick Counter
  const [kickCount, setKickCount] = useState<number>(0);
  const [kickLogs, setKickLogs] = useState<{ id: string; time: string; count: number }[]>([
    { 
      id: "1", 
      time: language === "ms" ? "Kelmarin, 09:15 AM" : language === "id" ? "Kemarin, 09:15 AM" : language === "zh" ? "昨天, 09:15 AM" : "Yesterday, 09:15 AM", 
      count: 10 
    },
    { 
      id: "2", 
      time: language === "ms" ? "Kelmarin, 04:30 PM" : language === "id" ? "Kemarin, 04:30 PM" : language === "zh" ? "昨天, 04:30 PM" : "Yesterday, 04:30 PM", 
      count: 12 
    },
  ]);

  const handleAddKick = () => {
    setKickCount((prev) => prev + 1);
  };

  const handleSaveKickLog = () => {
    if (kickCount === 0) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ", " + now.toLocaleDateString([], { month: 'short', day: 'numeric' });
    setKickLogs((prev) => [
      { id: Date.now().toString(), time: timeStr, count: kickCount },
      ...prev,
    ]);
    setKickCount(0);
  };

  const handleResetKicks = () => {
    setKickCount(0);
  };

  const toggleChecklist = (index: number) => {
    setCheckedStates((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Build localized articles array dynamically
  const articles: Article[] = [
    {
      id: "preparing-body",
      category: "getting-pregnant",
      title: t.articles["preparing-body"].title,
      readTime: "5 min read",
      excerpt: t.articles["preparing-body"].excerpt,
      content: t.articles["preparing-body"].content,
      spiritualNote: t.articles["preparing-body"].spiritualNote,
      tips: t.articles["preparing-body"].tips
    },
    {
      id: "kick-counting",
      category: "pregnancy",
      title: t.articles["kick-counting"].title,
      readTime: "4 min read",
      excerpt: t.articles["kick-counting"].excerpt,
      content: t.articles["kick-counting"].content,
      spiritualNote: t.articles["kick-counting"].spiritualNote,
      tips: t.articles["kick-counting"].tips
    },
    {
      id: "checklist-delivery",
      category: "delivery",
      title: t.articles["checklist-delivery"].title,
      readTime: "6 min read",
      excerpt: t.articles["checklist-delivery"].excerpt,
      content: t.articles["checklist-delivery"].content,
      spiritualNote: t.articles["checklist-delivery"].spiritualNote,
      tips: t.articles["checklist-delivery"].tips
    },
    {
      id: "signs-labour",
      category: "labor",
      title: t.articles["signs-labour"].title,
      readTime: "5 min read",
      excerpt: t.articles["signs-labour"].excerpt,
      content: t.articles["signs-labour"].content,
      spiritualNote: t.articles["signs-labour"].spiritualNote,
      tips: t.articles["signs-labour"].tips
    },
    {
      id: "induction-labour",
      category: "labor",
      title: t.articles["induction-labour"].title,
      readTime: "7 min read",
      excerpt: t.articles["induction-labour"].excerpt,
      content: t.articles["induction-labour"].content,
      spiritualNote: t.articles["induction-labour"].spiritualNote,
      tips: t.articles["induction-labour"].tips
    }
  ];

  // Update selected article on language change to reflect translations
  useEffect(() => {
    if (activeArticle) {
      const updated = articles.find(a => a.id === activeArticle.id);
      if (updated) {
        setActiveArticle(updated);
      }
    }
  }, [language]);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryOptions = [
    { id: "all", label: t.education.catAll },
    { id: "getting-pregnant", label: t.education.catPre },
    { id: "pregnancy", label: t.education.catPreg },
    { id: "labor", label: t.education.catLabor },
    { id: "delivery", label: t.education.catDelivery }
  ];

  return (
    <div className="w-full bg-zinc-950/60 border border-white/10 rounded-[40px] p-6 md:p-10 relative overflow-hidden">
      {/* Absolute Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600/10 blur-[130px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 blur-[130px] rounded-full z-0" />

      {/* Header bar simulated from evemedic.co */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 mb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-mono text-emerald-400">{t.education.livePortal}</span>
          </div>
          <h4 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center gap-3">
            <Heart size={28} className="text-pink-500 fill-pink-500/20" />
            {t.education.title}
          </h4>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
          <a
            href="https://evemedic.co"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-xs font-bold text-gray-300 rounded-xl hover:text-white hover:bg-white/10 transition-colors"
          >
            {t.education.officialWebBtn}
            <ExternalLink size={12} />
          </a>
          <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 font-bold text-[10px] tracking-widest text-pink-400 rounded-lg uppercase">
            {t.education.slogan}
          </span>
        </div>
      </div>

      {/* Inner Website Welcome Mockup */}
      <div className="mb-12 text-center max-w-3xl mx-auto py-8 px-6 rounded-3xl bg-gradient-to-r from-pink-900/10 via-indigo-900/20 to-zinc-900 border border-white/5 relative z-10">
        <div className="absolute top-3 right-3 text-pink-400/30">
          <Sparkles size={20} className="animate-pulse" />
        </div>
        <p className="text-pink-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">{t.education.slogan}</p>
        <blockquote className="text-xl md:text-2xl font-black text-white mb-4 italic tracking-tight leading-snug">
          "{t.education.quote}"
        </blockquote>
        <p className="text-xs text-gray-400 font-medium leading-relaxed">
          {t.education.quoteDesc}
        </p>
      </div>

      {/* Dashboard Section */}
      <div className="grid lg:grid-cols-3 gap-8 relative z-10 items-start">
        {/* Left 2 Cols: Main Blog Directory */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                placeholder={t.education.searchPlaceholder}
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0">
              {categoryOptions.map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedCategory(pill.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${selectedCategory === pill.id ? 'bg-pink-600 text-white shadow-md shadow-pink-600/20' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Article Results Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  layoutId={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-500/40 hover:bg-white/10 transition-all cursor-pointer flex flex-col justify-between group h-[220px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-wider text-pink-400 px-2.5 py-1 rounded-md bg-pink-500/10">
                        {article.category === 'getting-pregnant' ? t.education.catPre : article.category === 'pregnancy' ? t.education.catPreg : article.category === 'labor' ? t.education.catLabor : t.education.catDelivery}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                        <Clock size={12} />
                        {article.readTime}
                      </div>
                    </div>
                    <h5 className="text-lg font-extrabold text-white group-hover:text-pink-400 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h5>
                    <p className="text-gray-400 text-xs mt-3 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5 text-xs font-bold text-indigo-400 group-hover:text-white transition-colors">
                    <span>{t.education.readArticle}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-16 bg-white/5 rounded-3xl border border-dashed border-white/10">
                <p className="text-gray-400 text-sm font-medium">{t.education.noResults}</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }} 
                  className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold"
                >
                  {t.education.clearFilters}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Col: Active Interactive Tools Inspired by Kick Counting / Mummy's Corner */}
        <div className="space-y-8">
          {/* Interactive Kick Counter Panel */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/40 to-zinc-950 border border-white/10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full" />
            <h5 className="text-base font-black text-white flex items-center gap-2 mb-2 uppercase tracking-wide">
              <Sparkles size={16} className="text-indigo-400" />
              {t.education.trackerTitle}
            </h5>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              {t.education.trackerDesc}
            </p>

            <div className="flex flex-col items-center justify-center py-4 bg-black/40 border border-white/5 rounded-2xl mb-6">
              <span className="text-[10px] uppercase font-mono text-gray-500 mb-1">{t.education.sessionKicks}</span>
              <motion.span 
                key={kickCount}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-5xl font-black text-indigo-400"
              >
                {kickCount}
              </motion.span>
              <span className="text-[10px] text-gray-500 font-medium mt-1">{t.education.kickGoal}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={handleAddKick}
                className="py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                {t.education.btnRecord}
              </button>
              <button
                onClick={handleResetKicks}
                className="py-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                {t.education.btnReset}
              </button>
            </div>

            <button
              onClick={handleSaveKickLog}
              disabled={kickCount === 0}
              className="w-full py-2.5 bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-600 hover:text-white disabled:opacity-30 disabled:pointer-events-none text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              {t.education.btnSaveLog}
            </button>

            {kickLogs.length > 0 && (
              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block mb-3">{t.education.historyTitle}</span>
                <div className="space-y-3 max-h-[140px] overflow-y-auto">
                  {kickLogs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between text-xs bg-white/5 border border-white/5 p-2.5 rounded-xl">
                      <span className="text-gray-400 font-medium">{log.time}</span>
                      <span className="font-bold text-indigo-400">{log.count} {t.education.movements}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Checklist Panel - Delivery checklist mockup */}
          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-white/10">
            <h5 className="text-base font-black text-white flex items-center gap-2 mb-2 uppercase tracking-wide">
              <CheckSquare size={16} className="text-pink-500" />
              {t.education.checklistTitle}
            </h5>
            <p className="text-xs text-gray-400 mb-6">
              {t.education.checklistDesc}
            </p>

            <div className="space-y-3">
              {t.checklistItems.map((itemText, idx) => {
                const isItemChecked = !!checkedStates[idx];
                return (
                  <div 
                    key={idx}
                    onClick={() => toggleChecklist(idx)}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${isItemChecked ? 'bg-indigo-600/10 border-indigo-500/30 text-white/50' : 'bg-black/20 border-white/5 text-white hover:border-white/10'}`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${isItemChecked ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-white/20'}`}>
                      {isItemChecked && <span className="text-[10px] font-bold">✓</span>}
                    </div>
                    <span className={`text-xs font-medium tracking-tight ${isItemChecked ? 'line-through opacity-60' : ''}`}>
                      {itemText}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Full Article Reader Dialog */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-[40px] p-8 md:p-12 overflow-y-auto max-h-[85vh] shadow-2xl z-10"
            >
              <button 
                onClick={() => setActiveArticle(null)}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors p-2 bg-white/5 rounded-full cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="mb-6 flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-pink-400 px-3 py-1 bg-pink-500/10 rounded-lg border border-pink-500/20">
                  {activeArticle.category === 'getting-pregnant' ? t.education.catPre : activeArticle.category === 'pregnancy' ? t.education.catPreg : activeArticle.category === 'labor' ? t.education.catLabor : t.education.catDelivery}
                </span>
                <span className="text-gray-500 text-xs font-mono">{activeArticle.readTime}</span>
              </div>

              <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-6 leading-tight">
                {activeArticle.title}
              </h4>

              {activeArticle.spiritualNote && (
                <div className="p-5 rounded-2xl bg-indigo-500/10 border-l-4 border-indigo-500 text-indigo-300 text-sm mb-8 italic">
                  "{activeArticle.spiritualNote}"
                </div>
              )}

              <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed space-y-6 mb-8">
                <p>{activeArticle.content}</p>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h5 className="text-sm font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  {t.education.keyTipsTitle}
                </h5>
                <ul className="space-y-3">
                  {activeArticle.tips.map((tip, idx) => (
                    <li key={idx} className="flex gap-3 text-xs text-gray-400 font-medium">
                      <span className="text-pink-500 select-none">0{idx + 1}.</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex justify-end gap-3">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  {t.education.closeArticle}
                </button>
                <a
                  href={`https://evemedic.co/${activeArticle.category === 'getting-pregnant' ? 'gettingpregnant.html' : 'pregnancyjourney.html'}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-2"
                >
                  {t.education.readFullCopy}
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
