import { motion } from "motion/react";
import { Section } from "./Section";
import { SECTIONS } from "../constants";
import { Shield, Target, Award } from "lucide-react";

export const About = () => {
  const details = [
    {
      icon: <Shield className="text-indigo-500" size={32} />,
      title: "Our Mission",
      desc: "To empower healthcare professionals with clinical clarity and seamless digital tools that prioritize patient outcomes."
    },
    {
      icon: <Target className="text-purple-500" size={32} />,
      title: "Patient Focused",
      desc: "From the first kick to birth, we ensure a safe and monitored journey for every patient through data-driven insights."
    },
    {
      icon: <Award className="text-blue-500" size={32} />,
      title: "Excellence",
      desc: "EVE System represents the pinnacle of medical technology, integrating education and practice into one unified platform."
    }
  ];

  return (
    <Section id={SECTIONS.ABOUT} className="bg-zinc-950">
      <div className="grid md:grid-template-columns-[1.2fr_1fr] gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-[0.3em] mb-4">About EVE Medic</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            REDEFINING THE <br />
            MEDICAL EXPERIENCE.
          </h3>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
            At EVE Medic, we believe in the power of clarity. Our systems are designed to provide a comprehensive snapshot of a patient's health, allowing doctors to make informed decisions faster and with more confidence than ever before.
          </p>
          
          <div className="space-y-8">
            {details.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex gap-6"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-white/10 relative group">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2670&auto=format&fit=crop" 
              alt="Medical Professional" 
              className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <p className="text-white font-bold text-lg mb-1">Dr. Eve Sterling</p>
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">Chief Medical Officer</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/20 blur-[80px] rounded-full" />
        </div>
      </div>
    </Section>
  );
};
