"use client";

import { motion } from "framer-motion";

export default function PrototypeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#102f24] px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-white sm:text-xs"
    >
      Prototype non officiel — proposition de refonte réalisée par Mahamane Korobara dans le cadre de l'AMI de JVS — juil. 2026
    </motion.div>
  );
}