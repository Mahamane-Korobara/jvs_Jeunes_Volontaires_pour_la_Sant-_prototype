"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

// Avis réels de JVS. « Ouvert » / « Clos » : démonstration de l'archivage automatique promis au CDC.
const jobs = [
  {
    poste: "Point Focal — Zone Sanitaire Parakou–N'Dali",
    statut: "Ouvert",
    date: "Date limite : 16 juin 2026",
    projet: "Projet « Priority For Choice »",
    lien: "https://associationjvs.org/notre-actualite/avis-de-recrutement-point-focal-jvs-zone-sanitaire-parakou-ndali",
  },
  {
    poste: "Chargée de Projet & Comptable",
    statut: "Clos",
    date: "Publié le 3 novembre 2025",
    projet: "Renforcement de l'équipe JVS",
    lien: "https://associationjvs.org/notre-actualite/jvs-recrute-une-chargee-de-projet-et-un-e-compatable",
  },
  {
    poste: "Chargé·e de Suivi-Évaluation & Consultant plan stratégique",
    statut: "Clos",
    date: "Publié le 27 mars 2024",
    projet: "Rédaction du plan stratégique",
    lien: "https://associationjvs.org/notre-actualite/jvs-recrute-un-e-charge-e-de-suivi-evaluation-et-un-consultant-pour-la-redaction-dun-plan-strategique",
  },
];

const filters = ["Tous", "Ouvert", "Clos"];

function Badge({ statut }) {
  const open = statut === "Ouvert";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
        open ? "bg-[#2d6a4f]/10 text-[#2d6a4f]" : "bg-[#1b4332]/8 text-[#52645d]"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${open ? "bg-[#2d6a4f]" : "bg-[#8a988f]"}`} />
      {statut}
    </span>
  );
}

export default function RecruitmentList() {
  const [filter, setFilter] = useState("Tous");
  const visible = jobs.filter((j) => filter === "Tous" || j.statut === filter);
  const count = (s) => jobs.filter((j) => j.statut === s).length;

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer les recrutements">
        {filters.map((f) => {
          const active = filter === f;
          const n = f === "Tous" ? jobs.length : count(f);
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                active ? "bg-[#1b4332] text-white" : "border border-[#1b4332]/15 bg-white text-[#1b4332] hover:bg-[#1b4332]/5"
              }`}
            >
              {f} <span className={active ? "text-white/70" : "text-[#52645d]"}>({n})</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {visible.map((j) => {
            const open = j.statut === "Ouvert";
            return (
              <motion.article
                key={j.poste}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col gap-4 rounded-3xl border p-6 sm:flex-row sm:items-center sm:justify-between ${
                  open ? "border-[#1b4332]/10 bg-white shadow-sm" : "border-[#1b4332]/8 bg-[#f4f6f2] opacity-75"
                }`}
              >
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <Badge statut={j.statut} />
                    <span className="text-xs font-semibold text-[#8a988f]">{j.projet}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#1b4332]">{j.poste}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-[#52645d]">
                    <CalendarDays size={15} /> {j.date}
                  </p>
                </div>
                <a
                  href={j.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-transform hover:scale-105 ${
                    open ? "bg-[#d97706] text-white shadow-lg shadow-[#d97706]/25" : "border border-[#1b4332]/20 text-[#1b4332]"
                  }`}
                >
                  {open ? "Consulter l'avis" : "Voir l'archive"}
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
