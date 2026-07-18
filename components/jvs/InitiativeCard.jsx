"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants } from "@/components/jvs/Reveal";

export default function InitiativeCard({ title, edition, image, href, text, index = 0 }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(27,67,50,.08)] transition-shadow hover:shadow-[0_30px_80px_rgba(27,67,50,.15)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img loading="lazy" src={image} width="640" height="400" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e22]/60 to-transparent" />
        {edition && <span className="absolute left-4 top-4 rounded-full bg-[#d97706] px-3 py-1 text-xs font-bold text-white shadow-lg">{edition}</span>}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <span className="text-sm font-bold text-[#d97706]">INITIATIVE 0{index + 1}</span>
        <h3 className="mt-2 text-2xl font-extrabold text-[#1b4332]">{title}</h3>
        {text && <p className="mt-3 flex-1 leading-7 text-[#52645d]">{text}</p>}
        <a href={href} className="group/link mt-6 inline-flex items-center gap-2 font-bold text-[#1b4332]">
          Lire la suite <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}