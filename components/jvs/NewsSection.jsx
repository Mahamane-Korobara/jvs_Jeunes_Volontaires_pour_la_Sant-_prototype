"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/jvs/SectionTitle";
import { Stagger, itemVariants } from "@/components/jvs/Reveal";

const news = [
  ["8 juin 2026", "AVIS DE RECRUTEMENT – Point Focal JVS Zone Sanitaire Parakou-N'dali", "/images/recrutement-point-focal.webp", "https://associationjvs.org/notre-actualite/avis-de-recrutement-point-focal-jvs-zone-sanitaire-parakou-ndali"],
  ["15 déc. 2025", "Godomey : La campagne « Priority For Choice » dans les rues et auprès des jeunes", "/images/actu-godomey-priority-for-choice.webp", "https://associationjvs.org/notre-actualite/godomey-la-campagne-priority-for-choice-dans-les-rues-et-aupres-des-jeunes"],
  ["15 déc. 2025", "Sous l'arbre à palabres : Quand la parole des jeunes devient levier de transformation", "/images/actu-arbre-a-palabres.webp", "https://associationjvs.org/notre-actualite/sous-larbre-a-palabres-quand-la-parole-des-jeunes-devient-levier-de-transformation"],
];

export default function NewsSection() {
  return (
    <section id="actualites" className="bg-white px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle eyebrow="Dernières actualités" title="Ce qui se passe maintenant chez JVS" />
        <Stagger className="grid gap-7 md:grid-cols-3" stagger={0.14}>
          {news.map(([date, title, img, href]) => (
            <motion.article
              key={title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-[#1b4332]/8 bg-[#f9faf7] transition-shadow hover:shadow-[0_25px_60px_rgba(27,67,50,.12)]"
            >
              <div className="overflow-hidden">
                <img loading="lazy" src={img} width="720" height="480" className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Illustration de l'actualité : ${title}`} />
              </div>
              <div className="p-6">
                <time className="text-sm font-bold text-[#d97706]">{date}</time>
                <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#1b4332]">{title}</h3>
                <a className="group/link mt-5 inline-flex items-center gap-2 font-bold text-[#2d6a4f]" href={href}>
                  Lire sur le site JVS
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}