"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/jvs/SectionTitle";
import { Stagger, itemVariants } from "@/components/jvs/Reveal";

// titre, texte, lien, image
const cards = [
  ["OREMI", "Une ligne d'assistance jeune pour jeunes, pensée pour faciliter l'accès à une information sûre et confidentielle.", "/oremi", "/images/oremi-ecoute.webp"],
  ["Programme Rêv'Elles", "Un programme d'accompagnement, de formation professionnelle et d'autonomisation de jeunes filles.", "https://associationjvs.org/nos-initiatives/programme-revelles", "/images/initiative-revelles.webp"],
  ["Forum des femmes entrepreneures", "Un espace d'échanges, de partage d'expériences et d'inspiration pour promouvoir l'autonomisation économique.", "https://associationjvs.org/nos-initiatives/forum-des-femmes-entrepreneures", "/images/initiative-forum-femmes-entrepreneures.webp"],
];

export default function InitiativesSection() {
  return (
    <section id="initiatives" className="bg-[#f9faf7] px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle eyebrow="Initiatives à la une" title="Des espaces pour s'informer, apprendre et agir" />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.14}>
          {cards.map(([title, text, href, image], i) => {
            const internal = href.startsWith("/");
            return (
              <motion.article
                key={title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] shadow-[0_18px_50px_rgba(27,67,50,.12)] transition-shadow hover:shadow-[0_28px_80px_rgba(27,67,50,.22)]"
              >
                <img
                  loading="lazy" src={image} width="720" height="900" alt="" aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                {/* voile vert de marque : distingue les initiatives (programmes) des actualités (photo) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b241a] via-[#0f2e22]/90 to-[#1b4332]/75 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#d97706] to-[#f5b45f] transition-transform duration-500 group-hover:scale-x-100" />

                <span className="absolute left-5 top-5 text-sm font-extrabold tracking-wide text-[#f5b45f]">INITIATIVE 0{i + 1}</span>

                <div className="relative z-10 p-5 sm:p-6">
                  <h3 className="text-2xl font-extrabold leading-snug text-white [text-wrap:balance]">{title}</h3>
                  <p className="mt-3 line-clamp-3 leading-7 text-white/80">{text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#f5b45f]">
                    Découvrir <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                {internal ? (
                  <Link href={href} aria-label={title} className="absolute inset-0 z-20" />
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${title} (site JVS)`} className="absolute inset-0 z-20" />
                )}
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
