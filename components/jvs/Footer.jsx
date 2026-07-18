"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

function Facebook({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#102f24] text-white">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#d97706]/8 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-4 py-16 md:grid-cols-3 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <img src="/images/logo-jvs.webp" width="150" height="64" className="mb-5 h-14 w-auto rounded bg-white p-1" alt="Logo JVS" />
          <p className="max-w-sm text-sm leading-6 text-white/75">Faciliter l'accès des jeunes aux informations et services de Droits et Santé Sexuels et Reproductifs adaptés à leurs besoins.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="mb-4 text-lg font-bold">Nous contacter</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><MapPin size={18} />Agla-Akplomey, Cotonou, Bénin</li>
            <li><a className="flex gap-3 transition-colors hover:text-[#f5b45f]" href="tel:+22952524076"><Phone size={18} />+229 52 52 40 76</a></li>
            <li><a className="flex gap-3 transition-colors hover:text-[#f5b45f]" href="mailto:contact@associationjvs.org"><Mail size={18} />contact@associationjvs.org</a></li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h2 className="mb-4 text-lg font-bold">Accès rapides</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/80">
            <Link href="/" className="transition-colors hover:text-[#f5b45f]">Accueil</Link>
            <Link href="/oremi" className="transition-colors hover:text-[#f5b45f]">OREMI</Link>
            <Link href="/qui-sommes-nous" className="transition-colors hover:text-[#f5b45f]">Qui sommes-nous</Link>
            <Link href="/actualites" className="transition-colors hover:text-[#f5b45f]">Actualités</Link>
            <Link href="/ressources" className="transition-colors hover:text-[#f5b45f]">Ressources</Link>
            <Link href="/nous-soutenir" className="transition-colors hover:text-[#f5b45f]">Nous soutenir</Link>
            <Link href="/contact" className="transition-colors hover:text-[#f5b45f]">Contact</Link>
            <a href="https://www.facebook.com/JVSAssociation/" aria-label="JVS sur Facebook" className="flex items-center gap-2 transition-colors hover:text-[#f5b45f]"><Facebook size={18} />Facebook</a>
          </div>
        </motion.div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">© 2026 Jeunes Volontaires pour la Santé — Prototype non officiel</div>
    </footer>
  );
}