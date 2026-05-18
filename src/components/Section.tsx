import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section = ({ id, children, className = "", dark = false }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden ${dark ? 'bg-black text-white' : ''} ${className}`}
    >
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
