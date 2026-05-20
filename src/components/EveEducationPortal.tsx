import { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  
  // Interactive Checklist State (Delivery checklist mockup)
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, text: "Identity cards / medical booklets", checked: true },
    { id: 2, text: "Comfortable nightgowns & nursing bras", checked: false },
    { id: 3, text: "Newborn outfits & baby swaddle blankets", checked: false },
    { id: 4, text: "Maternity pads & personal toiletries", checked: false },
    { id: 5, text: "Slippers & warm cozy socks", checked: false },
    { id: 6, text: "Phone, camera & extra-long chargers", checked: false },
  ]);

  // Interactive Kick Counter
  const [kickCount, setKickCount] = useState<number>(0);
  const [kickLogs, setKickLogs] = useState<{ id: string; time: string; count: number }[]>([
    { id: "1", time: "Yesterday, 09:15 AM", count: 10 },
    { id: "2", time: "Yesterday, 04:30 PM", count: 12 },
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

  const toggleChecklist = (id: number) => {
    setChecklistItems(
      checklistItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const articles: Article[] = [
    {
      id: "preparing-body",
      category: "getting-pregnant",
      title: "Preparing Your Body for Pregnancy",
      readTime: "5 min read",
      excerpt: "Preparing your body for pregnancy is more than physical readiness—it is a holistic journey of nourishing your body, tending to emotions, and welcoming new life.",
      content: "Preparing your body for pregnancy is a sacred, holistic journey. It begins with physical readiness but extends deeply into nurturing your emotional well-being, creating a calm/stable environment, and aligning your spiritual energy. Focus on whole-food nutrition, preconception healthcare, adequate folic acid intake, and surrendering outcomes with mindfulness and faith. By welcoming these changes intentionally, you align your body, heart, and soul to nurture a miraculous new beginning.",
      spiritualNote: "By taking intentional steps with love and mindfulness, you align your body, heart, and soul to welcome new life.",
      tips: [
        "Schedule a preconception check-up with your OB-GYN",
        "Begin taking a prenatal vitamin with at least 400mcg of Folic Acid",
        "Adopt a nutrition-dense diet full of leafy greens, lean proteins, and healthy fats",
        "Foster emotional stillness and reduce environmental stress",
      ]
    },
    {
      id: "kick-counting",
      category: "pregnancy",
      title: "Kick Counting : Why It Matters",
      readTime: "4 min read",
      excerpt: "Your baby’s kicks are vital signals of health and safety. Every movement matters, every kick counts — and you are never alone on this journey.",
      content: "Your baby's fetal movements are more than just reassuring bonding moments; they are official, biological indicators of wellness in the womb. Standard clinical practice recommends established tracking parameters (such as the 'count to 10' method) where you record how long it takes to feel 10 clear movements. A sudden decrease or change in the baby's regular movement pattern is a signal to consult your doctor immediately. Tracking daily empowers you to be your baby's strongest guardian.",
      spiritualNote: "By paying attention, tracking daily, and acting quickly if something feels different... you’re giving your baby the best chance to thrive.",
      tips: [
        "Find a quiet room, lie on your left side to maximize placental blood flow",
        "Set aside the same times daily, ideally after meals when the baby is active",
        "Count kicks, flutters, swishes, and rolls — anything except hiccups",
        "Aim to record 10 movements within a maximum of 2 hours",
      ]
    },
    {
      id: "checklist-delivery",
      category: "delivery",
      title: "Checklist for Delivery",
      readTime: "6 min read",
      excerpt: "Being well-prepared for labor and delivery helps reduce stress and allows you to focus on what truly matters — welcoming your baby safely.",
      content: "A well-packaged hospital bag removes a layer of logistical anxiety when it's time to head to the delivery room. Prepare your hospital bag around week 36 of your pregnancy to ensure readiness. Divide your checklist into essential documents, items for the mother's comfort during active labor, newborn essentials, and support partner materials. Having your bag packed and placed by the front door is a powerful mental milestone of preparedness.",
      spiritualNote: "Packing your essentials in advance ensures both you and your little one have everything needed for a smooth, peaceful hospital stay.",
      tips: [
        "Keep your maternal health record, IDs, and hospital forms neatly in a folder",
        "Pack loose, breathable button-front nursing gowns and postpartum support clothes",
        "Include high-absorption maternity pads and organic baby swaddle blankets",
        "Don't forget extra-long charging cables, lip balm, and massage oils for relaxing pressure therapy",
      ]
    },
    {
      id: "signs-labour",
      category: "labor",
      title: "Signs for Labour",
      readTime: "5 min read",
      excerpt: "Recognising the signs of labour early helps you feel more confident and prepared for the big moment. Learn when to contact your provider.",
      content: "Every birth experience is a custom, unique journey. However, certain hallmark metabolic and mechanical events herald the true onset of labor. Recognizing the difference between Braxton Hicks (practice contractions) and true labor contractions is critical. True contractions become progressively stronger, longer, and closer together, and do not ease when you shift positions or walk. Other signs include the mucus plug release (bloody show) and the rupture of membranes (water breaking).",
      spiritualNote: "While every birth experience is unique, paying attention to your body’s changes ensures you know exactly when it’s time.",
      tips: [
        "Monitor the 5-1-1 rule: contractions 5 minutes apart, lasting 1 minute, for at least 1 hour",
        "Note the color and consistency of water breaking; it should be clear (report immediately to OB-GYN)",
        "Differentiate Braxton Hicks: false contractions are irregular and stop with hydration or rest",
        "Trust your instincts — if you feel something is starting, call your birthing team immediately",
      ]
    },
    {
      id: "induction-labour",
      category: "labor",
      title: "Induction of Labour",
      readTime: "7 min read",
      excerpt: "Understanding the clinical procedures and indications for induction helps reduce anxiety and prepare for a safe birth experience.",
      content: "Labor induction is the stimulation of uterine contractions during pregnancy before labor begins on its own to achieve a vaginal birth. It is recommended when a health practitioner determines that a baby or mother's safety is better served by birth than by continuing the pregnancy. Common physiological indicators include preeclampsia, gestational diabetes, prolonged rupture of membranes without naturally commencing labor, or post-dates (beyond 41-42 weeks). Understanding pharmacological and mechanical triggers (like membrane sweeping, balloon catheters, and oxytocin) transforms fear into empowerment.",
      spiritualNote: "Always discuss your options with your healthcare provider, so you feel supported and confident as you prepare to welcome your little one.",
      tips: [
        "Discuss your bishop score (cervical ripeness) ahead of your scheduled induction date",
        "Understand that medical induction often produces more intense contractions than custom onset",
        "Ask about non-pharmacological comfort alternatives and portable monitoring options",
        "Stay active and upright during early induction stages if medically permitted",
      ]
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-zinc-950/60 border border-white/10 rounded-[40px] p-6 md:p-10 relative overflow-hidden">
      {/* Absolute Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600/10 blur-[130px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 blur-[130px] rounded-full" />

      {/* Header bar simulated from evemedic.co */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 mb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-mono text-emerald-400">Live Portal Portal: evemedic.co</span>
          </div>
          <h4 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center gap-3">
            <Heart size={28} className="text-pink-500 fill-pink-500/20" />
            EVE Education Hub
          </h4>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
          <a
            href="https://evemedic.co"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-xs font-bold text-gray-300 rounded-xl hover:text-white hover:bg-white/10 transition-colors"
          >
            Go to official Website
            <ExternalLink size={12} />
          </a>
          <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 font-bold text-[10px] tracking-widest text-pink-400 rounded-lg uppercase">
            Care • Connect • Empower
          </span>
        </div>
      </div>

      {/* Inner Website Welcome Mockup */}
      <div className="mb-12 text-center max-w-3xl mx-auto py-8 px-6 rounded-3xl bg-gradient-to-r from-pink-900/10 via-indigo-900/20 to-zinc-900 border border-white/5 relative">
        <div className="absolute top-3 right-3 text-pink-400/30">
          <Sparkles size={20} className="animate-pulse" />
        </div>
        <p className="text-pink-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Care • Connect • Empower</p>
        <blockquote className="text-xl md:text-2xl font-black text-white mb-4 italic tracking-tight leading-snug">
          "With Every Mother, Every Step — Towards a Better Beginning"
        </blockquote>
        <p className="text-xs text-gray-400 font-medium">
          Diving deep into the world of maternal clarity, fetal health tracking, and interactive community guides compiled directly from the certified <span className="text-indigo-400 font-bold">evemedic.co</span> platform.
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
                placeholder="Search pregnancy insights, labour, delivery preparation..."
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0">
              {[
                { id: "all", label: "All Insights" },
                { id: "getting-pregnant", label: "Pre-Pregnancy" },
                { id: "pregnancy", label: "Pregnancy" },
                { id: "labor", label: "Labor" },
                { id: "delivery", label: "Delivery" }
              ].map((pill) => (
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
                        {article.category.replace("-", " ")}
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
                    <span>Read Article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-16 bg-white/5 rounded-3xl border border-dashed border-white/10">
                <p className="text-gray-400 text-sm font-medium">No medical insights matched your search terms.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }} 
                  className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold"
                >
                  Clear Filters
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
              Mummy's Kick Tracker
            </h5>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              "Every movement matters, every kick counts." Count 10 baby movements in a active session.
            </p>

            <div className="flex flex-col items-center justify-center py-4 bg-black/40 border border-white/5 rounded-2xl mb-6">
              <span className="text-[10px] uppercase font-mono text-gray-500 mb-1">Session Kicks</span>
              <motion.span 
                key={kickCount}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-5xl font-black text-indigo-400"
              >
                {kickCount}
              </motion.span>
              <span className="text-[10px] text-gray-500 font-medium mt-1">Goal: 10 kicks</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={handleAddKick}
                className="py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all shadow-md active:scale-95"
              >
                Record Kick +1
              </button>
              <button
                onClick={handleResetKicks}
                className="py-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-bold text-xs rounded-xl transition-all"
              >
                Reset
              </button>
            </div>

            <button
              onClick={handleSaveKickLog}
              disabled={kickCount === 0}
              className="w-full py-2.5 bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-600 hover:text-white disabled:opacity-30 disabled:pointer-events-none text-xs font-bold rounded-xl transition-all"
            >
              Save to Daily Log
            </button>

            {kickLogs.length > 0 && (
              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block mb-3">Saved Session History:</span>
                <div className="space-y-3 max-h-[140px] overflow-y-auto">
                  {kickLogs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between text-xs bg-white/5 border border-white/5 p-2.5 rounded-xl">
                      <span className="text-gray-400 font-medium">{log.time}</span>
                      <span className="font-bold text-indigo-400">{log.count} movements</span>
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
              Delivery Bag Essentials
            </h5>
            <p className="text-xs text-gray-400 mb-6">
              Pack your labor room toolkit by week 36 to reduce last minute stress.
            </p>

            <div className="space-y-3">
              {checklistItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${item.checked ? 'bg-indigo-600/10 border-indigo-500/30 text-white/50' : 'bg-black/20 border-white/5 text-white hover:border-white/10'}`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${item.checked ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-white/20'}`}>
                    {item.checked && <span className="text-[10px] font-bold">✓</span>}
                  </div>
                  <span className={`text-xs font-medium tracking-tight ${item.checked ? 'line-through opacity-60' : ''}`}>
                    {item.text}
                  </span>
                </div>
              ))}
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
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-[40px] p-8 md:p-12 overflow-y-auto max-h-[85vh] shadow-2xl"
            >
              <button 
                onClick={() => setActiveArticle(null)}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="mb-6 flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-pink-400 px-3 py-1 bg-pink-500/10 rounded-lg border border-pink-500/20">
                  {activeArticle.category.replace("-", " ")}
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
                  Key Clinical & Practical Tips:
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
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold text-xs rounded-xl transition-all"
                >
                  Close Article
                </button>
                <a
                  href={`https://evemedic.co/${activeArticle.category === 'getting-pregnant' ? 'gettingpregnant.html' : 'pregnancyjourney.html'}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-2"
                >
                  Read full copy at evemedic.co
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
