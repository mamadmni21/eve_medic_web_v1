import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  gradientPlacement?: 'top-left' | 'top-right' | 'top-mid' | 'bottom-left' | 'bottom-right' | 'bottom-mid' | 'center';
}

export const Section = ({ id, children, className = "", dark = false, gradientPlacement }: SectionProps) => {
  const renderGradient = () => {
    if (!gradientPlacement) return null;
    
    // As per user request, make all gradations positioned at top-right and much brighter
    return (
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-[#3533CD] via-[#4f46e5] to-[#8b5cf6] opacity-75 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 z-0" />
    );
  };

  return (
    <section 
      id={id} 
      className={`min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden ${dark ? 'bg-black text-white' : ''} ${className}`}
    >
      {renderGradient()}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};
