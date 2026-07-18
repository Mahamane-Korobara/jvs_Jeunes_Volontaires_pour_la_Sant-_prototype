"use client";

import { CheckCircle2, MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import PrototypeBanner from "@/components/jvs/PrototypeBanner";
import Header from "@/components/jvs/Header";
import Footer from "@/components/jvs/Footer";
import QuickExit from "@/components/jvs/QuickExit";
import OremiFaq from "@/components/jvs/OremiFaq";
import { Reveal, Stagger, itemVariants } from "@/components/jvs/Reveal";
import PageTransition from "@/components/jvs/PageTransition";

const promises = ["Confidentiel", "Sans jugement", "Gratuit ou coût d'un appel local"];
const steps = [
  [PhoneCall, "Tu appelles", "Compose le numéro OREMI lorsqu'il aura été confirmé par JVS."],
  [MessageCircle, "Tu parles librement", "Pose ta question avec tes mots, sans obligation de donner ton identité."],
  [ShieldCheck, "Tu es orienté·e", "Tu reçois une écoute et des informations adaptées à ta situation."],
];
const ease = [0.22, 1, 0.36, 1];

export default function OremiContent() {
  return (
    <PageTransition><div className="min-h-screen bg-[#f9faf7]">
      <PrototypeBanner />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1b4332] via-[#163d2d] to-[#0f2e22] px-4 py-24 text-white lg:px-8">
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#d97706]/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2">
            <div>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-sm font-bold uppercase tracking-[.18em] text-[#f5b45f]">Ligne d'écoute JVS</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }} className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl">OREMI <span className="text-[#f5b45f]">— « mon ami·e »</span></motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }} className="mt-6 max-w-xl text-xl leading-8 text-white/80">Première ligne d'écoute jeune-à-jeune du Bénin, créée en mai 2023.</motion.p>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.4, ease }} className="mt-9 rounded-3xl border border-white/10 bg-white p-6 text-[#1b4332] shadow-2xl">
                <p className="text-sm font-bold uppercase text-[#a95505]">Numéro OREMI</p>
                <p className="mt-2 text-3xl font-extrabold">+229 XX XX XX XX</p>
                <p className="mt-2 text-sm">Numéro à confirmer par JVS.</p>
              </motion.div>
            </div>
            <motion.img initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2, ease }} src="/images/oremi-ecoute.webp" width="700" height="560" className="h-full max-h-[480px] w-full rounded-[2.5rem] object-cover shadow-2xl" alt="Jeunes de JVS réunis dans un espace d'écoute" />
          </div>
        </section>
        <section className="px-4 py-14 lg:px-8">
          <Stagger className="mx-auto grid max-w-[1240px] gap-4 sm:grid-cols-3" stagger={0.1}>
            {promises.map((x) => (
              <motion.div key={x} variants={itemVariants} whileHover={{ y: -4 }} className="flex items-center gap-3 rounded-2xl border border-[#1b4332]/5 bg-white p-5 font-bold text-[#1b4332] shadow-sm">
                <CheckCircle2 className="text-[#a95505]" />{x}
              </motion.div>
            ))}
          </Stagger>
        </section>
        <section className="bg-white px-4 py-24 lg:px-8">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a95505]">En toute simplicité</p>
              <h2 className="mt-3 text-4xl font-extrabold text-[#1b4332]">Comment ça se passe ?</h2>
            </Reveal>
            <Stagger className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.14}>
              {steps.map(([Icon, t, d], i) => (
                <motion.article key={t} variants={itemVariants} whileHover={{ y: -8 }} className="group rounded-3xl bg-gradient-to-b from-[#f1f5ef] to-[#e8f0e8] p-7 transition-shadow hover:shadow-xl">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1b4332] text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6"><Icon /></span>
                  <p className="mt-7 text-sm font-bold text-[#a95505]">ÉTAPE {i + 1}</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#1b4332]">{t}</h3>
                  <p className="mt-3 leading-7 text-[#52645d]">{d}</p>
                </motion.article>
              ))}
            </Stagger>
          </div>
        </section>
        <section className="px-4 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a95505]">Questions fréquentes</p>
              <h2 className="mt-3 text-4xl font-extrabold text-[#1b4332]">Avant d'appeler</h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 rounded-3xl bg-white px-6 shadow-lg sm:px-8">
              <OremiFaq />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <QuickExit />
    </div></PageTransition>
  );
}
