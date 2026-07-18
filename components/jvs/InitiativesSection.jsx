"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/jvs/SectionTitle";
import { Stagger, itemVariants } from "@/components/jvs/Reveal";

const cards = [
  ["OREMI", "Une ligne d'assistance jeune pour jeunes, pensée pour faciliter l'accès à une information sûre et confidentielle.", "/oremi"],
  ["Programme Rêv'Elles", "Un programme d'accompagnement, de formation professionnelle et d'autonomisation de jeunes filles.", "https://associationjvs.org/nos-initiatives/programme-revelles"],
  ["Forum des femmes entrepreneures", "Un espace d'échanges, de partage d'expériences et d'inspiration pour promouvoir l'autonomisation économique.", "https://associationjvs.org/nos-initiatives/forum-des-femmes-entrepreneures"],
];

export default function InitiativesSection() {
  return (
    <section id="initiatives" className="bg-[#f9faf7] px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle eyebrow="Initiatives à la une" title="Des espaces pour s'informer, apprendre et agir" />
        <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.14}>
          {cards.map(([title, text, href], i) => {
            const inner = (
              <>
                <span className="mb-10 text-sm font-bold text-[#d97706]">INITIATIVE 0{i + 1}</span>
                <h3 className="text-2xl font-extrabold text-[#1b4332]">{title}</h3>
                <p className="mt-4 flex-1 leading-7 text-[#52645d]">{text}</p>
                <span className="group/link mt-6 inline-flex items-center gap-2 font-bold text-[#1b4332]">
                  Découvrir
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  <span className="absolute bottom-0 left-7 h-0.5 w-0 bg-[#d97706] transition-all duration-300 group-hover/link:w-[calc(100%-3.5rem)]" />
                </span>
              </>
            );
            return (
              <motion.article
                key={title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-80 flex-col overflow-hidden rounded-[2rem] border border-[#1b4332]/5 bg-white p-7 shadow-[0_20px_60px_rgba(27,67,50,.07)] transition-shadow hover:shadow-[0_30px_80px_rgba(27,67,50,.13)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d97706] to-[#f5b45f] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                {href.startsWith("/")
                  ? <Link href={href} className="relative flex h-full flex-col">{inner}</Link>
                  : <a href={href} className="relative flex h-full flex-col">{inner}</a>}
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}