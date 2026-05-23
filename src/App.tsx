import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Product } from "./components/Product";
import { Contact } from "./components/Contact";
import { PopupForm } from "./components/PopupForm";
import { SECTIONS } from "./constants";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white selection:bg-indigo-500 selection:text-white">
      <Navbar onSendMessage={() => setIsPopupOpen(true)} />
      
      <main>
        <Hero onSendMessage={() => setIsPopupOpen(true)} />
        <About />
        <Product />
        <Contact onSendMessage={() => setIsPopupOpen(true)} />
      </main>

      <footer className="py-12 px-6 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-lg text-white">E</div>
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
