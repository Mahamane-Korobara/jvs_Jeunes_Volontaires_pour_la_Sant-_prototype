import Link from "next/link";
import { CheckCircle2, Target, Eye, ArrowRight, HeartHandshake } from "lucide-react";
import PrototypeBanner from "@/components/jvs/PrototypeBanner";
import Header from "@/components/jvs/Header";
import Footer from "@/components/jvs/Footer";
import PageHero from "@/components/jvs/PageHero";
import Partners from "@/components/jvs/Partners";
import { Reveal, Stagger } from "@/components/jvs/Reveal";
import TeamCard from "@/components/jvs/TeamCard";
import PageTransition from "@/components/jvs/PageTransition";

export const metadata = {
  title: "Qui sommes-nous",
  description:
    "Jeunes Volontaires pour la Santé (JVS) est une ONG de jeunes Béninois au service de la jeunesse, créée en 2016 et enregistrée en 2017.",
};

const team = [
  ["Présidente JVS", "Directrice Exécutive", "/images/equipe-directrice-executive.webp"],
  ["Dieudonné ADJE", "Vice-président", "/images/equipe-dieudonne-adje.webp"],
  ["Gérardine SONGBE", "Secrétaire Générale", "/images/equipe-gerardine-songbe.webp"],
  ["Marilyne SOUROU", "Responsable Communication & Plaidoyer", "/images/equipe-marilyne-sourou.webp"],
  ["Vanessa SEKPON", "Responsable Suivi-évaluation", "/images/equipe-vanessa-sekpon.webp"],
  ["Marielle DOSSOU-YOVO", "Responsable des Finances", "/images/equipe-marielle-dossou-yovo.webp"],
  ["Anselme KOSSOUHO", "Chargé de Matériels & Logistique", "/images/equipe-anselme-kossouho.webp"],
];

const objectives = [
  "Faciliter l'accès des jeunes aux informations et services de Santé Sexuelle et Reproductive adaptés à leurs besoins.",
  "Promouvoir le bien-être des jeunes Béninois en veillant à ce qu'ils aient accès à des informations cruciales concernant leur santé.",
  "Briser les barrières qui limitent la compréhension et l'accès à ces informations vitales.",
  "Favoriser un environnement où les jeunes peuvent prendre des décisions éclairées sur leur propre santé.",
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f9faf7]">
        <PrototypeBanner />
        <Header />
        <main>
          <PageHero
            eyebrow="Qui sommes-nous"
            title="Une ONG de jeunes, au service de la jeunesse béninoise"
            text="Jeunes Volontaires pour la Santé (JVS) est composée de jeunes Béninois qui travaillent pour l'épanouissement de la jeunesse. Créée en 2016 et officiellement enregistrée en 2017."
            image="/images/apropos-hero.webp"
          />

          {/* Mission & Vision */}
          <section className="px-4 py-24 lg:px-8">
            <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="flex h-full flex-col rounded-[2rem] bg-gradient-to-br from-[#1b4332] to-[#163d2d] p-9 text-white shadow-xl">
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#d97706] text-white shadow-lg"><Target /></span>
                  <h2 className="text-2xl font-extrabold">Notre Mission</h2>
                  <p className="mt-4 leading-7 text-white/80">Faciliter l'accès des jeunes aux informations et services de Droits et Santé Sexuels et Reproductifs adaptés à leurs besoins, au moyen de l'art et des Technologies de l'Information et de la Communication.</p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex h-full flex-col rounded-[2rem] border-2 border-[#d97706]/20 bg-white p-9 shadow-xl">
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#1b4332] text-[#f5b45f] shadow-lg"><Eye /></span>
                  <h2 className="text-2xl font-extrabold text-[#1b4332]">Notre Vision</h2>
                  <p className="mt-4 leading-7 text-[#52645d]">Contribuer à un Bénin où les jeunes autonomes jouissent pleinement de leurs droits en matière de SSR, à travers une réduction des obstacles d'accès aux services et informations DSSR/PF.</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Presentation */}
          <section className="bg-white px-4 py-24 lg:px-8">
            <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2">
              <Reveal>
                <img loading="lazy" src="/images/apropos-presentation.webp" width="640" height="480" className="w-full rounded-[2rem] object-cover shadow-2xl" alt="Activité communautaire de JVS au Bénin" />
              </Reveal>
              <Reveal delay={0.15}>
                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#d97706]">Présentation</p>
                  <h2 className="text-3xl font-extrabold text-[#1b4332] sm:text-4xl">Briser les barrières, informer pour autonomiser</h2>
                  <ul className="mt-8 space-y-4">
                    {objectives.map((obj) => (
                      <li key={obj} className="flex gap-3 leading-7 text-[#41564e]">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#d97706]" size={20} />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Team */}
          <section className="px-4 py-24 lg:px-8">
            <div className="mx-auto max-w-[1240px]">
              <Reveal className="mb-12 text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#d97706]">Notre équipe</p>
                <h2 className="text-3xl font-extrabold text-[#1b4332] sm:text-4xl">Rencontrez les visages de JVS</h2>
                <p className="mx-auto mt-4 max-w-2xl text-[#41564e]">Une équipe engagée de jeunes professionnels qui oeuvrent quotidiennement pour les droits et la santé des jeunes Béninois.</p>
              </Reveal>
              <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
                {team.map(([name, role, image]) => (
                  <TeamCard key={name} name={name} role={role} image={image} />
                ))}
              </Stagger>
            </div>
          </section>

          {/* Partenaires */}
          <Partners />

          {/* CTA Nous rejoindre */}
          <section className="bg-white px-4 py-20 lg:px-8">
            <div className="mx-auto max-w-[1240px]">
              <Reveal>
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1b4332] via-[#163d2d] to-[#0f2e22] px-8 py-14 text-center text-white shadow-2xl sm:px-16">
                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d97706]/15 blur-3xl" />
                  <div className="relative">
                    <span className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#d97706] text-white shadow-lg"><HeartHandshake /></span>
                    <h2 className="text-3xl font-extrabold sm:text-4xl">Envie de vous engager à nos côtés ?</h2>
                    <p className="mx-auto mt-4 max-w-xl leading-7 text-white/80">Rejoignez une équipe de jeunes engagés pour les droits et la santé de la jeunesse béninoise, ou soutenez nos actions sur le terrain.</p>
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                      <Link href="/ressources" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d97706] px-7 py-3 font-bold text-white shadow-xl shadow-[#d97706]/25 transition-transform hover:scale-105">
                        Voir nos recrutements <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                      <a href="https://associationjvs.org/nous-soutenir" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3 font-bold text-white transition-colors hover:bg-white/10">
                        Nous soutenir
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
