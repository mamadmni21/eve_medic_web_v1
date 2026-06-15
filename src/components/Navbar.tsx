import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Mail } from "lucide-react";
import { SECTIONS } from "../constants";
import { useLanguage } from "../context/LanguageContext";

// @ts-ignore
import eveLogo from "../assets/images/eve_logo.png";

interface NavbarProps {
  onSendMessage: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar = ({ onSendMessage, currentPage, onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, id: SECTIONS.HOME },
    { name: t.nav.about, id: SECTIONS.ABOUT },
    { name: t.nav.product, id: SECTIONS.PRODUCT },
    { name: t.nav.blog, id: SECTIONS.BLOG },
    { name: t.nav.contact, id: SECTIONS.CONTACT },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: "en", label: "EN" },
    // { code: "ms", label: "MY" },
    // { code: "id", label: "ID" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick(SECTIONS.HOME)}
        >
          <div className="relative w-10 h-10">
            <img 
              src={eveLogo} 
              alt="EVE Logo" 
              className="w-10 h-10 object-contain rounded-full border border-white/10" 
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
                const fallback = document.getElementById('navbar-logo-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div id="navbar-logo-fallback" style={{ display: 'none' }} className="absolute inset-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-xl text-white">
              E
            </div>
          </div>
          <span className="text-xl font-bold text-white tracking-tighter uppercase">EVE Medic</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-all ${
                  isActive 
                    ? "text-indigo-400 font-extrabold bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 shadow-md shadow-indigo-500/5" 
                    : "text-gray-300 hover:text-white px-2 py-1"
                }`}
              >
                {link.name}
              </button>
            );
          })}

          {/* Text-based Multi Language Selector */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                title={lang.label}
                className={`text-xs font-mono font-extrabold px-3 py-1.5 rounded-full transition-all flex items-center justify-center hover:scale-105 active:scale-95 ${
                  language === lang.code 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={onSendMessage}
            className="px-5 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all flex items-center gap-2"
          >
            <Mail size={16} />
            {t.nav.sendMessage}
          </button>
        </div>

        {/* Mobile Toggle & Mobile Flags display */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Text-based Language Selector for Mobile bar */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                title={lang.label}
                className={`text-[10px] font-mono font-extrabold px-2.5 py-1.5 rounded-full transition-all flex items-center justify-center ${
                  language === lang.code 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left text-lg font-medium transition-colors ${
                      isActive ? "text-indigo-400 font-extrabold" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <button
                onClick={onSendMessage}
                className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                {t.nav.sendMessage}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
