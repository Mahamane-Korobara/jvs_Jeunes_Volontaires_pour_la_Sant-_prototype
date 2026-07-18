"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants } from "@/components/jvs/Reveal";

export default function InitiativeCard({ title, edition, image, href, text, index = 0 }) {
  const internal = href.startsWith("/");
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] shadow-[0_18px_50px_rgba(27,67,50,.12)] transition-shadow hover:shadow-[0_28px_80px_rgba(27,67,50,.22)]"
    >
      <img
        loading="lazy" src={image} width="720" height="900"
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b241a] via-[#0b241a]/60 to-[#0b241a]/5" />
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#d97706] to-[#f5b45f] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <span className="rounded-full bg-[#d97706] px-3 py-1 text-xs font-extrabold text-white shadow-lg">INITIATIVE 0{index + 1}</span>
        {edition && <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25 backdrop-blur-md">{edition}</span>}
      </div>

      <div className="relative z-10 p-5 sm:p-6">
        <h3 className="text-xl font-extrabold leading-snug text-white [text-wrap:balance] sm:text-2xl">{title}</h3>
        {text && <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/75">{text}</p>}
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f5b45f]">
          Lire la suite <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>

      {internal ? (
        <Link href={href} aria-label={title} className="absolute inset-0 z-20" />
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${title} (site JVS)`} className="absolute inset-0 z-20" />
      )}
    </motion.article>
  );
}
