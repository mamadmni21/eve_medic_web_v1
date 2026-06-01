import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Product } from "./components/Product";
import { Contact } from "./components/Contact";
import { ProblemSolution } from "./components/ProblemSolution";
import { ClinicalInsights } from "./components/ClinicalInsights";
import { TotalVisibility } from "./components/TotalVisibility";
import { PopupForm } from "./components/PopupForm";
import { SECTIONS } from "./constants";
import { useLanguage } from "./context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

// @ts-ignore
import eveLogo from "./assets/images/eve_logo.png";

export default function App() {
  const getPageFromPath = (path: string): string => {
    const cleanPath = path.replace(/^\//, "").trim().toLowerCase();
    
    if (cleanPath === "" || cleanPath === "home") {
      return SECTIONS.HOME;
    }
    if (cleanPath === "about" || cleanPath === "about-us") {
      return SECTIONS.ABOUT;
    }
    if (cleanPath === "product" || cleanPath === "products") {
      return SECTIONS.PRODUCT;
    }
    if (cleanPath === "contact" || cleanPath === "contact-us") {
      return SECTIONS.CONTACT;
    }
    return SECTIONS.HOME;
  };

  const [currentPage, setCurrentPage] = useState<string>(() => getPageFromPath(window.location.pathname));
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "instant" as any });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (page: string) => {
    const path = page === "home" ? "/" : `/${page}`;
    window.history.pushState(null, "", path);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white selection:bg-indigo-500 selection:text-white flex flex-col min-h-screen">
      <Navbar 
        onSendMessage={() => setIsPopupOpen(true)} 
        currentPage={currentPage}
        onNavigate={navigate}
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === SECTIONS.HOME && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onSendMessage={() => setIsPopupOpen(true)} onNavigate={navigate} />
              <ProblemSolution />
              <ClinicalInsights />
              <TotalVisibility />
            </motion.div>
          )}

          {currentPage === SECTIONS.ABOUT && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <About />
            </motion.div>
          )}

          {currentPage === SECTIONS.PRODUCT && (
            <motion.div
              key="product"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Product />
            </motion.div>
          )}

          {currentPage === SECTIONS.CONTACT && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Contact onSendMessage={() => setIsPopupOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 bg-zinc-950 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(SECTIONS.HOME)}>
            <div className="relative w-8 h-8">
              <img 
                src={eveLogo} 
                alt="EVE Logo" 
                className="w-8 h-8 object-contain rounded-full border border-white/10" 
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                  const fallback = document.getElementById('footer-logo-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="footer-logo-fallback" style={{ display: 'none' }} className="absolute inset-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-lg text-white">
                E
              </div>
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase">EVE Medic</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          
          <div className="flex gap-8">
             <button className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">{t.footer.privacy}</button>
             <button className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">{t.footer.terms}</button>
          </div>
        </div>
      </footer>

      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
