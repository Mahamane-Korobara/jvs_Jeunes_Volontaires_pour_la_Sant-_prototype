"use client";

import SectionTitle from "@/components/jvs/SectionTitle";
import { Stagger } from "@/components/jvs/Reveal";
import NewsCard from "@/components/jvs/NewsCard";

// date, titre, extrait, image, lien (Godomey = article témoin interne)
const news = [
  ["8 juin 2026", "AVIS DE RECRUTEMENT – Point Focal JVS Zone Sanitaire Parakou-N'dali", "JVS recrute un Point Focal pour le projet « Priority For Choice » dans la Zone Sanitaire Parakou–N'Dali.", "/images/recrutement-point-focal.webp", "https://associationjvs.org/notre-actualite/avis-de-recrutement-point-focal-jvs-zone-sanitaire-parakou-ndali"],
  ["15 déc. 2025", "Godomey : La campagne « Priority For Choice » dans les rues et auprès des jeunes", "À Godomey, JVS a promu les droits et la santé sexuels et reproductifs et déconstruit les fausses informations sur l'IVG.", "/images/actu-godomey-priority-for-choice.webp", "/actualites/godomey-priority-for-choice"],
  ["15 déc. 2025", "Sous l'arbre à palabres : Quand la parole des jeunes devient levier de transformation", "JVS mobilise les #Billi de Tori-Bossito pour un accès éclairé et sécurisé à la santé reproductive.", "/images/actu-arbre-a-palabres.webp", "https://associationjvs.org/notre-actualite/sous-larbre-a-palabres-quand-la-parole-des-jeunes-devient-levier-de-transformation"],
];

export default function NewsSection() {
  return (
    <section id="actualites" className="bg-white px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle eyebrow="Dernières actualités" title="Ce qui se passe maintenant chez JVS" />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.14}>
          {news.map(([date, title, excerpt, img, href]) => (
            <NewsCard key={href} date={date} title={title} excerpt={excerpt} image={img} href={href} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
