import { motion } from "motion/react";
import { Section } from "./Section";
import { SECTIONS, SOCIAL_LINKS } from "../constants";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

interface ContactProps {
  onSendMessage: () => void;
}

export const Contact = ({ onSendMessage }: ContactProps) => {
  const socials = [
    { icon: <Facebook />, link: SOCIAL_LINKS.facebook, label: "Facebook" },
    { icon: <Instagram />, link: SOCIAL_LINKS.instagram, label: "Instagram" },
    { icon: <Youtube />, link: SOCIAL_LINKS.youtube, label: "YouTube" },
    { 
      icon: <div className="flex items-center gap-1"><span className="text-xs">TikTok</span></div>, 
      link: SOCIAL_LINKS.tiktok, 
      label: "TikTok" 
    },
  ];

  return (
    <Section id={SECTIONS.CONTACT} className="bg-zinc-950 border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-[0.4em] mb-4">Connect With Us</h2>
          <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-12">GET IN TOUCH.</h3>
          
          <div className="space-y-10">
            <div className="flex gap-6 items-center group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</span>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">{SOCIAL_LINKS.email}</a>
              </div>
            </div>

            <div className="flex gap-6 items-center group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Location</span>
                <span className="text-xl font-bold text-white">Global Medical Network</span>
              </div>
            </div>
            
            <button
              onClick={onSendMessage}
              className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20"
            >
              Send Application Message
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[48px] p-12 backdrop-blur-sm self-stretch">
          <h4 className="text-2xl font-black text-white mb-8 tracking-tight">Social Platforms</h4>
          <div className="grid grid-cols-2 gap-6">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-indigo-500/50 hover:bg-white/5 transition-all group"
              >
                <div className="text-indigo-400 group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                <span className="font-bold text-white tracking-tight">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/5 text-center">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Official EVE Medic Channels</p>
            <div className="flex justify-center gap-4">
               {/* Small icons row for extra flair */}
               <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
               <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
               <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
