"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  [86, "jeunes bénéficiaires de formations"],
  [107658, "personnes touchées en ligne"],
  [393, "personnes touchées en présentiel"],
  [5, "départements couverts"],
];

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(value); return; }
    let start;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / 1600, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(value * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  return <strong ref={ref} className="block bg-gradient-to-br from-white to-white/80 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">{n.toLocaleString("fr-FR")}</strong>;
}

export default function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1b4332] via-[#163d2d] to-[#0f2e22] px-4 py-24 lg:px-8">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#d97706]/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5b45f]">Résultats 2022</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">L'impact en chiffres</h2>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm text-white/60">Des résultats datés, mis à jour en un clic.</motion.p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-l-2 border-[#d97706]/40 pl-5"
            >
              <Counter value={value} />
              <span className="mt-3 block max-w-[14rem] leading-6 text-white/70">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}