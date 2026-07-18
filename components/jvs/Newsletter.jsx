"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-gradient-to-r from-[#efe9dc] to-[#f5f0e3] px-4 py-16 lg:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-7 md:flex-row md:items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-bold uppercase tracking-wider text-[#d97706]">Rester informé·e</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#1b4332]">Les nouvelles de JVS, directement.</h2>
        </motion.div>
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.p
              key="ok" role="status"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-[#1b4332] shadow-lg"
            >
              <Check className="text-[#d97706]" /> Merci — inscription de démonstration uniquement.
            </motion.p>
          ) : (
            <motion.form
              key="form"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              className="flex w-full max-w-lg flex-col gap-2 sm:flex-row"
            >
              <label className="sr-only" htmlFor="newsletter">Adresse email</label>
              <input id="newsletter" required type="email" placeholder="Votre adresse email" className="min-h-12 flex-1 rounded-full border border-[#1b4332]/20 bg-white px-5 shadow-sm focus:border-[#d97706]" />
              <button className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d97706] px-6 font-bold text-white shadow-lg shadow-[#d97706]/25 transition-transform hover:scale-105">
                S'inscrire <Send size={17} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}