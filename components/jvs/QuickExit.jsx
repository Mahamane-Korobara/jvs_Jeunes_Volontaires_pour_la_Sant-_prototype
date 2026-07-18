"use client";

import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

export default function QuickExit() {
  const leave = () => {
    window.history.replaceState(null, "", "/");
    window.location.replace("https://www.google.com");
  };
  return (
    <motion.button
      onClick={leave}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#b42318] px-5 py-3 font-extrabold text-white shadow-2xl hover:bg-[#8e1b13]"
      aria-label="Quitter rapidement la page OREMI"
    >
      <LogOut size={19} /> Quitter rapidement
    </motion.button>
  );
}