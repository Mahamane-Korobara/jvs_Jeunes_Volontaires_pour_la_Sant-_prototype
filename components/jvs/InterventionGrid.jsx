"use client";

import { HeartPulse, Scale, Sprout, Search } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/jvs/SectionTitle";
import { Stagger, itemVariants } from "@/components/jvs/Reveal";

const items = [
  [HeartPulse, "Droits et santé sexuels et reproductifs"],
  [Scale, "Égalité des genres"],
  [Sprout, "Autonomisation des jeunes et des femmes"],
  [Search, "Recherche-action"],
];

export default function InterventionGrid() {
  return (
    <section id="actions" className="bg-white px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle eyebrow="Nos domaines d'intervention" title="Agir là où l'information change des vies" text="Quatre domaines complémentaires structurent l'action de Jeunes Volontaires pour la Santé." />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {items.map(([Icon, title], i) => (
            <motion.article
              key={title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative min-h-60 overflow-hidden rounded-3xl bg-gradient-to-b from-[#f1f5ef] to-[#e8f0e8] p-7 transition-colors hover:from-[#1b4332] hover:to-[#143526]"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#d97706]/10 transition-transform duration-500 group-hover:scale-150" />
              <span className="relative mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#a95505] shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Icon />
              </span>
              <p className="relative mb-3 text-xs font-bold text-[#a95505]">0{i + 1}</p>
              <h3 className="relative text-xl font-bold leading-snug text-[#1b4332] transition-colors group-hover:text-white">{title}</h3>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}