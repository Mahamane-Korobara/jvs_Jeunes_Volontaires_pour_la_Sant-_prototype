"use client";

import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/jvs/Reveal";

export default function Recruitment() {
  return (
    <section className="bg-white px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1b4332] via-[#163d2d] to-[#0f2e22] text-white shadow-2xl">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d97706]/15 blur-3xl" />
            <div className="grid md:grid-cols-5">
              <div className="relative p-8 sm:p-12 md:col-span-3">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                  className="inline-flex rounded-full bg-[#d97706] px-4 py-2 text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#d97706]/30"
                >
                  Recrutement en cours
                </motion.span>
                <h2 className="mt-7 text-3xl font-extrabold leading-tight sm:text-4xl">Point Focal JVS — Zone Sanitaire Parakou–N'Dali</h2>
                <p className="mt-5 max-w-2xl leading-7 text-white/75">JVS recrute un Point Focal pour accompagner la mise en œuvre du projet « Priority For Choice » sur le terrain.</p>
                <div className="mt-7 flex flex-wrap gap-5 text-sm text-white/80">
                  <span className="flex items-center gap-2"><MapPin size={18} />Parakou–N'Dali</span>
                  <span className="flex items-center gap-2"><CalendarDays size={18} />Date limite : 16 juin 2026</span>
                </div>
                <a href="https://associationjvs.org/notre-actualite/avis-de-recrutement-point-focal-jvs-zone-sanitaire-parakou-ndali" className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#1b4332] transition-transform hover:scale-105">
                  Consulter l'avis <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <motion.img
                loading="lazy" src="/images/recrutement-point-focal.webp"
                width="700" height="700"
                initial={{ scale: 1.15 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-full min-h-72 w-full object-cover md:col-span-2"
                alt="Affiche du recrutement Point Focal JVS Parakou-N'Dali"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}