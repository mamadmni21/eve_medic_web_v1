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
    { name: t.nav.contact, id: SECTIONS.CONTACT },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const languages = [
    {
      code: "en",
      label: "English",
      flag: (
        <svg className="w-5 h-5 rounded-full object-cover shrink-0 border border-white/20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="en-clip"><circle cx="15" cy="15" r="15"/></clipPath>
          <g clipPath="url(#en-clip)">
            <rect width="30" height="30" fill="#012169"/>
            <path d="M0 0L30 30M30 0L0 30" stroke="#fff" strokeWidth="3"/>
            <path d="M0 0L30 30M30 0L0 30" stroke="#C8102E" strokeWidth="2"/>
            <path d="M15 0V30M0 15H30" stroke="#fff" strokeWidth="5"/>
            <path d="M15 0V30M0 15H30" stroke="#C8102E" strokeWidth="3"/>
          </g>
        </svg>
      )
    },
    {
      code: "ms",
      label: "Malaysia",
      flag: (
        <svg className="w-5 h-5 rounded-full object-cover shrink-0 border border-white/20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="ms-clip"><circle cx="15" cy="15" r="15"/></clipPath>
          <g clipPath="url(#ms-clip)">
            <rect width="30" height="30" fill="#fff"/>
            {/* 14 Stripes */}
            <rect width="30" height="2.14" fill="#C8102E"/>
            <rect y="4.28" width="30" height="2.14" fill="#C8102E"/>
            <rect y="8.56" width="30" height="2.14" fill="#C8102E"/>
            <rect y="12.84" width="30" height="2.14" fill="#C8102E"/>
            <rect y="17.12" width="30" height="2.14" fill="#C8102E"/>
            <rect y="21.4" width="30" height="2.14" fill="#C8102E"/>
            <rect y="25.68" width="30" height="2.14" fill="#C8102E"/>
            {/* Canton */}
            <rect width="15" height="15" fill="#012169"/>
            {/* Crescent */}
            <circle cx="6.5" cy="7.5" r="4.5" fill="#FFC72C"/>
            <circle cx="8" cy="7.5" r="4.5" fill="#012169"/>
            {/* Star simplified */}
            <polygon points="11,7.5 10,6.5 11.5,5.5 10,5.3 10.5,3.9 9.1,4.6 9,3.2 8,4.3 7.1,3.2 7,4.6 5.6,3.9 6.1,5.3 4.6,5.5 5.9,6.5" fill="#FFC72C"/>
          </g>
        </svg>
      )
    },
    {
      code: "id",
      label: "Indonesia",
      flag: (
        <svg className="w-5 h-5 rounded-full object-cover shrink-0 border border-white/20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="id-clip"><circle cx="15" cy="15" r="15"/></clipPath>
          <g clipPath="url(#id-clip)">
            <rect width="30" height="15" fill="#C8102E"/>
            <rect y="15" width="30" height="15" fill="#FFFFFF"/>
          </g>
        </svg>
      )
    }
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

          {/* Inline Flags Multi Language Selector */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                title={lang.label}
                className={`relative p-1 rounded-full transition-all flex items-center justify-center hover:scale-110 active:scale-95 ${language === lang.code ? 'bg-indigo-600 ring-2 ring-indigo-400 border-indigo-400 scale-105' : 'opacity-70 hover:opacity-100'}`}
              >
                {lang.flag}
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
          {/* Flag Toggle for Mobile bar */}
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full p-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                title={lang.label}
                className={`relative p-1 rounded-full transition-all ${language === lang.code ? 'bg-indigo-600 ring-2 ring-indigo-400 opacity-100' : 'opacity-50'}`}
              >
                {lang.flag}
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
