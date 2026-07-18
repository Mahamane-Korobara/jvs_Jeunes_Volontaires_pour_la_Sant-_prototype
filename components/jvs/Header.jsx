"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  ["Accueil", "/"], ["Qui sommes-nous", "/qui-sommes-nous"],
  ["Nos initiatives", "/initiatives"], ["Actualités", "/actualites"],
  ["Ressources", "/ressources"], ["Nous soutenir", "/nous-soutenir"],
];
const isExternal = (h) => h.startsWith("http");

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-[#1b4332]/10 bg-[#f9faf7]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" aria-label="Accueil JVS">
          <img src="/images/logo-jvs.webp" width="150" height="64" className="h-12 w-auto" alt="Logo Jeunes Volontaires pour la Santé" />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {links.map(([label, href]) =>
            isExternal(href)
              ? <a key={label} href={href} className="text-sm font-semibold text-[#1b4332] transition-colors hover:text-[#d97706]">{label}</a>
              : <Link key={label} href={href} className="text-sm font-semibold text-[#1b4332] transition-colors hover:text-[#d97706]">{label}</Link>
          )}
          <Link href="/oremi" className="group relative overflow-hidden rounded-full bg-[#d97706] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#d97706]/30 transition-transform hover:scale-105">
            <span className="relative z-10">OREMI</span>
          </Link>
        </nav>
        <button className="grid min-h-11 min-w-11 place-items-center rounded-full text-[#1b4332] lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ouvrir le menu">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X /></motion.span>
            ) : (
              <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu /></motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#1b4332]/10 bg-[#f9faf7] lg:hidden"
            aria-label="Navigation mobile"
          >
            <div className="mx-auto grid max-w-[1240px] gap-1 px-4 py-4">
              {links.map(([label, href], i) => (
                <motion.div key={label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.05 }}>
                  {isExternal(href)
                    ? <a href={href} className="block min-h-11 rounded-xl px-4 py-3 font-semibold text-[#1b4332] hover:bg-[#1b4332]/5">{label}</a>
                    : <Link href={href} onClick={() => setOpen(false)} className="block min-h-11 rounded-xl px-4 py-3 font-semibold text-[#1b4332] hover:bg-[#1b4332]/5">{label}</Link>}
                </motion.div>
              ))}
              <Link href="/oremi" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-[#d97706] px-4 py-3 text-center font-bold text-white">Contacter OREMI</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}