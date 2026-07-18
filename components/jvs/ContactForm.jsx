"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Send } from "lucide-react";

const inputClass =
  "min-h-12 w-full rounded-xl border border-[#1b4332]/20 bg-white px-4 text-[#1b4332] shadow-sm transition-colors focus:border-[#d97706] focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-[2rem] border border-[#1b4332]/10 bg-white p-7 shadow-xl sm:p-9">
      <h2 className="text-xl font-extrabold text-[#1b4332]">Écrivez-nous</h2>
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.p
            key="ok" role="status"
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#2d6a4f]/10 px-6 py-5 font-bold text-[#1b4332]"
          >
            <Check className="text-[#a95505]" /> Message envoyé — démonstration uniquement. Merci !
          </motion.p>
        ) : (
          <motion.form
            key="form"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="mt-6 grid gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="c-nom" className="mb-1 block text-sm font-bold text-[#1b4332]">Nom complet</label>
                <input id="c-nom" name="nom" required autoComplete="name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-1 block text-sm font-bold text-[#1b4332]">Email</label>
                <input id="c-email" name="email" type="email" required autoComplete="email" className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="c-sujet" className="mb-1 block text-sm font-bold text-[#1b4332]">Sujet</label>
              <input id="c-sujet" name="sujet" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="c-msg" className="mb-1 block text-sm font-bold text-[#1b4332]">Message</label>
              <textarea id="c-msg" name="message" rows={5} required className="w-full rounded-xl border border-[#1b4332]/20 bg-white px-4 py-3 text-[#1b4332] shadow-sm transition-colors focus:border-[#d97706] focus:outline-none" />
            </div>
            <div>
              <button className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d97706] px-7 font-bold text-white shadow-lg shadow-[#d97706]/25 transition-transform hover:scale-105">
                Envoyer <Send size={17} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="mt-2 text-xs text-[#5f6f66]">Formulaire de démonstration — aucune donnée n'est envoyée ni conservée.</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
