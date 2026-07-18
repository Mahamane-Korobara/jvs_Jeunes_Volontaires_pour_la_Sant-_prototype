"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  ["Mon appel est-il anonyme ?", "Vous pouvez parler sans donner votre identité. L'échange est traité de manière confidentielle."],
  ["Quels sont les horaires ?", "Les horaires de disponibilité doivent être confirmés par JVS avant la mise en ligne officielle."],
  ["Qui répond à mon appel ?", "OREMI est une ligne d'écoute jeune-à-jeune portée par Jeunes Volontaires pour la Santé."],
  ["Que puis-je demander ?", "Vous pouvez poser vos questions sur les droits et la santé sexuels et reproductifs, sans jugement."],
];

export default function OremiFaq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-[#1b4332]/15">
      {faqs.map(([q, a], i) => (
        <div key={q}>
          <button
            className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold text-[#1b4332]"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            {q}
            <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="shrink-0" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.p
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden pr-10 leading-7 text-[#52645d]"
              >
                <span className="pb-6 block">{a}</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}