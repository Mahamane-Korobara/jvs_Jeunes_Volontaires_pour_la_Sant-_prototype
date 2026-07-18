"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 max-w-3xl"
    >
      <p className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${light ? "text-[#f5b45f]" : "text-[#d97706]"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${light ? "text-white" : "text-[#1b4332]"}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? "text-white/75" : "text-[#41564e]"}`}>{text}</p>}
    </motion.div>
  );
}