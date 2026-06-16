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
    switch (gradientPlacement) {
      case 'top-left':
        return <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#191863] opacity-45 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3 z-0" />;
      case 'top-right':
        return <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#191863] opacity-45 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 z-0" />;
      case 'top-mid':
        return <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#191863] opacity-40 blur-[140px] rounded-full pointer-events-none -translate-y-1/3 z-0" />;
      case 'bottom-left':
        return <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-[#191863] opacity-45 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3 z-0" />;
      case 'bottom-right':
        return <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-[#191863] opacity-45 blur-[150px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 z-0" />;
      case 'bottom-mid':
        return <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#191863] opacity-40 blur-[140px] rounded-full pointer-events-none translate-y-1/3 z-0" />;
      case 'center':
        return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#191863] opacity-35 blur-[160px] rounded-full pointer-events-none z-0" />;
      default:
        return null;
    }
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
