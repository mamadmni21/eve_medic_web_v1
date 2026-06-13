import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PopupForm = ({ isOpen, onClose }: PopupFormProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setFormData({ name: "", email: "", message: "" });
        }, 2500);
      }
    } catch (error: any) {
      console.error("Failed to send message:", error?.message || String(error));
      setStatus("idle");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-zinc-900 border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden shadow-2xl z-10"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-[60px] rounded-full z-0" />
            
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>

            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-600/40">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h4 className="text-3xl font-black text-white mb-2 tracking-tight">{t.popup.successTitle}</h4>
                <p className="text-gray-400">{t.popup.successDesc}</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-10">
                  <h4 className="text-3xl font-black text-white tracking-tighter mb-2">{t.popup.title}</h4>
                  <p className="text-gray-400 font-medium italic">{t.popup.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2 ml-1">{t.popup.nameLabel}</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder={t.popup.namePlaceholder}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2 ml-1">{t.popup.emailLabel}</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder={t.popup.emailPlaceholder}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2 ml-1">{t.popup.messageLabel}</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      placeholder={t.popup.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {status === "submitting" ? t.popup.submitting : t.popup.submitBtn}
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
