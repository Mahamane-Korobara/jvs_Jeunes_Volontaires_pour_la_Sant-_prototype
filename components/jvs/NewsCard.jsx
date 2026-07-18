"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { itemVariants } from "@/components/jvs/Reveal";

export default function NewsCard({ date, title, excerpt, image, href }) {
  const internal = href.startsWith("/");
  const cta = internal ? "Lire l'article" : "Lire sur le site JVS";
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] shadow-[0_18px_50px_rgba(27,67,50,.12)] transition-shadow hover:shadow-[0_28px_70px_rgba(27,67,50,.22)]"
    >
      <img
        loading="lazy" src={image} width="720" height="900"
        alt={`Illustration : ${title}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
      />
      {/* dégradé pour lisibilité du texte (contraste AA) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b241a] via-[#0b241a]/60 to-[#0b241a]/5" />
      {/* liseré ocre révélé au survol */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#d97706] to-[#f5b45f] transition-transform duration-500 group-hover:scale-x-100" />

      <time className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25 backdrop-blur-md">{date}</time>

      <div className="relative z-10 p-5 sm:p-6">
        <h3 className="text-lg font-extrabold leading-snug text-white [text-wrap:balance] sm:text-xl">{title}</h3>
        {excerpt && <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">{excerpt}</p>}
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f5b45f]">
          {cta} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>

      {/* lien étiré : toute la carte est cliquable */}
      {internal ? (
        <Link href={href} aria-label={title} className="absolute inset-0 z-20" />
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${title} (site JVS)`} className="absolute inset-0 z-20" />
      )}
    </motion.article>
  );
}
