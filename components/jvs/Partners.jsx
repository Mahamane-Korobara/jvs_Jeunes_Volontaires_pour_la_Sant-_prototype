"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/jvs/SectionTitle";
import { Stagger, itemVariants } from "@/components/jvs/Reveal";

const logos = [
  ["EngenderHealth", "/images/partenaire-engenderhealth.webp"],
  ["Global Fund for Women", "/images/partenaire-global-fund-for-women.webp"],
  ["Safe Abortion Action Fund", "/images/partenaire-saaf.webp"],
  ["Partenaire de JVS", "/images/partenaire-zamo.webp"],
];

export default function Partners() {
  return (
    <section className="bg-[#f9faf7] px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle eyebrow="Ils nous accompagnent" title="Partenaires" />
        <Stagger className="grid grid-cols-2 items-center gap-5 md:grid-cols-4" stagger={0.1}>
          {logos.map(([name, src]) => (
            <motion.div
              key={name} variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              className="grid h-32 place-items-center rounded-2xl border border-[#1b4332]/5 bg-white p-6 shadow-sm"
            >
              <img loading="lazy" src={src} width="220" height="100" className="max-h-16 max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0" alt={`Logo ${name}`} />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}