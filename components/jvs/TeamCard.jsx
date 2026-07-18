"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/components/jvs/Reveal";

export default function TeamCard({ name, role, image, delay = 0 }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_15px_50px_rgba(27,67,50,.08)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          loading="lazy" src={image} width="400" height="500"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={`${name}, ${role} chez JVS`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e22]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-extrabold text-[#1b4332]">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-[#a95505]">{role}</p>
      </div>
    </motion.article>
  );
}