"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1b4332] via-[#163d2d] to-[#0f2e22] px-4 py-20 text-white lg:px-8 sm:py-28">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2e22] via-[#0f2e22]/85 to-[#0f2e22]/40" />
        </div>
      )}
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#d97706]/12 blur-3xl" />
      <div className="relative mx-auto max-w-[1240px]">
        <motion.nav
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 text-sm text-white/60"
        >
          <Link href="/" className="transition-colors hover:text-[#f5b45f]">Accueil</Link>
          <ChevronRight size={14} />
          <span className="text-white/90">{eyebrow}</span>
        </motion.nav>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#f5b45f]"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-6xl"
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/75"
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}