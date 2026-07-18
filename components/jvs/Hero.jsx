"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f9faf7] via-[#f1f5ef] to-[#eef3ec] px-4 py-16 sm:py-24 lg:px-8">
      <div className="absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-[#d97706]/15 to-transparent blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-[#1b4332]/10 to-transparent blur-3xl" />
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-12">
        <div className="relative z-10 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="mb-5 inline-flex rounded-full border border-[#2d6a4f]/20 bg-white/60 px-4 py-2 text-sm font-bold text-[#1b4332] backdrop-blur-sm"
          >
            Jeunes Volontaires pour la Santé · Bénin
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}
            className="max-w-4xl text-4xl font-extrabold leading-[1.06] tracking-[-0.035em] text-[#1b4332] sm:text-6xl"
          >
            Promouvoir l'accès des jeunes aux informations et aux services de Droits en Santé Sexuelle et Reproductive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[#41564e]"
          >
            Au moyen de l'art et des Technologies de l'Information et de la Communication, JVS agit pour l'épanouissement de la jeunesse béninoise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#actions" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1b4332] px-7 py-3 font-bold text-white shadow-xl shadow-[#1b4332]/20 transition-transform hover:scale-105 hover:bg-[#2d6a4f]">
              Découvrir nos actions <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/oremi" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d97706] px-7 py-3 font-bold text-white shadow-xl shadow-[#d97706]/25 transition-transform hover:scale-105 hover:bg-[#a95505]">
              <PhoneCall size={18} /> Contacter OREMI
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative lg:col-span-5"
        >
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.5rem] border-2 border-[#d97706]" />
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-[#1b4332]/20 to-[#d97706]/20 blur-xl" />
          <img
            src="/images/hero-accueil.webp"
            width="760" height="900" fetchPriority="high"
            className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-2xl"
            alt="Jeunes participant à une activité communautaire de JVS au Bénin"
          />
        </motion.div>
      </div>
    </section>
  );
}