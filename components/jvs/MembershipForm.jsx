"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, UserPlus } from "lucide-react";

const inputClass =
  "min-h-12 w-full rounded-xl border border-[#1b4332]/20 bg-white px-4 text-[#1b4332] shadow-sm transition-colors focus:border-[#d97706] focus:outline-none";

export default function MembershipForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-[2rem] border border-[#1b4332]/10 bg-white p-7 shadow-xl sm:p-9">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1b4332] text-[#f5b45f] shadow-lg">
          <UserPlus />
        </span>
        <h3 className="text-xl font-extrabold text-[#1b4332]">Devenir membre de JVS</h3>
      </div>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.p
            key="ok" role="status"
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#2d6a4f]/10 px-6 py-5 font-bold text-[#1b4332]"
          >
            <Check className="text-[#d97706]" /> Merci ! Demande d'adhésion enregistrée — démonstration uniquement.
          </motion.p>
        ) : (
          <motion.form
            key="form"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <label htmlFor="m-nom" className="mb-1 block text-sm font-bold text-[#1b4332]">Nom complet</label>
              <input id="m-nom" name="nom" required autoComplete="name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="m-email" className="mb-1 block text-sm font-bold text-[#1b4332]">Email</label>
              <input id="m-email" name="email" type="email" required autoComplete="email" className={inputClass} />
            </div>
            <div>
              <label htmlFor="m-tel" className="mb-1 block text-sm font-bold text-[#1b4332]">Téléphone</label>
              <input id="m-tel" name="tel" type="tel" required autoComplete="tel" className={inputClass} />
            </div>
            <div>
              <label htmlFor="m-ville" className="mb-1 block text-sm font-bold text-[#1b4332]">Ville</label>
              <input id="m-ville" name="ville" className={inputClass} />
            </div>
            <div>
              <label htmlFor="m-type" className="mb-1 block text-sm font-bold text-[#1b4332]">Type d'adhésion</label>
              <select id="m-type" name="type" className={inputClass} defaultValue="Membre actif">
                <option>Membre actif</option>
                <option>Membre sympathisant</option>
                <option>Bénévole</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="m-motiv" className="mb-1 block text-sm font-bold text-[#1b4332]">Votre motivation</label>
              <textarea id="m-motiv" name="motivation" rows={4} className="w-full rounded-xl border border-[#1b4332]/20 bg-white px-4 py-3 text-[#1b4332] shadow-sm transition-colors focus:border-[#d97706] focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d97706] px-7 font-bold text-white shadow-lg shadow-[#d97706]/25 transition-transform hover:scale-105">
                Envoyer ma demande
              </button>
              <p className="mt-2 text-xs text-[#8a988f]">Formulaire de démonstration — aucune donnée n'est envoyée ni conservée.</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
