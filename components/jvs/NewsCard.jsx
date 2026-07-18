"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { itemVariants } from "@/components/jvs/Reveal";

export default function NewsCard({ date, title, excerpt, image, href }) {
  const internal = href.startsWith("/");
  const cta = internal ? "Lire l'article" : "Lire sur le site JVS";
  const linkClass = "group/link mt-5 inline-flex items-center gap-2 font-bold text-[#2d6a4f]";
  const linkInner = (
    <>
      {cta} <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
    </>
  );
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-[#1b4332]/8 bg-[#f9faf7] transition-shadow hover:shadow-[0_25px_60px_rgba(27,67,50,.12)]"
    >
      <div className="overflow-hidden">
        <img loading="lazy" src={image} width="720" height="480" className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Illustration : ${title}`} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time className="text-sm font-bold text-[#d97706]">{date}</time>
        <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#1b4332]">{title}</h3>
        {excerpt && <p className="mt-3 flex-1 text-sm leading-6 text-[#52645d]">{excerpt}</p>}
        {internal ? (
          <Link className={linkClass} href={href}>{linkInner}</Link>
        ) : (
          <a className={linkClass} href={href} target="_blank" rel="noopener noreferrer">{linkInner}</a>
        )}
      </div>
    </motion.article>
  );
}
