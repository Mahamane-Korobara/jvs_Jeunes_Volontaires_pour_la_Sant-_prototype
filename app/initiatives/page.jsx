import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import PrototypeBanner from "@/components/jvs/PrototypeBanner";
import Header from "@/components/jvs/Header";
import Footer from "@/components/jvs/Footer";
import PageHero from "@/components/jvs/PageHero";
import { Stagger } from "@/components/jvs/Reveal";
import InitiativeCard from "@/components/jvs/InitiativeCard";
import PageTransition from "@/components/jvs/PageTransition";

export const metadata = {
  title: "Nos initiatives",
  description:
    "Les programmes de JVS pour informer, former et autonomiser les jeunes et les femmes au Bénin : FONAJ-DSSR, Forum des femmes entrepreneures, Programme Rêv'Elles.",
};

const initiatives = [
  ["Forum National des Jeunes sur les DSSR (FONAJ-DSSR)", null, "Un espace de dialogue et de plaidoyer réunissant les jeunes, décideurs et acteurs de la santé pour faire avancer les droits en santé sexuelle et reproductive.", "/images/initiative-fonaj-dssr.webp", "https://associationjvs.org/nos-initiatives/forum-national-des-jeunes-sur-les-droits-et-sante-sexuels-et-reproductifs-fonaj-dssr"],
  ["Forum des femmes entrepreneures", "Édition 1", "Un espace d'échanges, de partage d'expériences et d'inspiration pour promouvoir l'autonomisation économique des femmes.", "/images/initiative-forum-femmes-entrepreneures.webp", "https://associationjvs.org/nos-initiatives/forum-des-femmes-entrepreneures"],
  ["Programme Rêv'Elles", "Édition 2", "Un programme d'accompagnement, de formation professionnelle et d'autonomisation de jeunes filles.", "/images/initiative-revelles.webp", "https://associationjvs.org/nos-initiatives/programme-revelles"],
];

export default function InitiativesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f9faf7]">
        <PrototypeBanner />
        <Header />
        <main>
          <PageHero
            eyebrow="Nos initiatives"
            title="Des programmes qui transforment la vie des jeunes"
            text="JVS déploie des initiatives concrètes pour informer, former et autonomiser les jeunes et les femmes à travers le Bénin."
          />
          <section className="px-4 py-20 lg:px-8">
            <div className="mx-auto max-w-[1240px]">
              <Stagger className="grid gap-7 md:grid-cols-2 lg:grid-cols-3" stagger={0.14}>
                {initiatives.map(([title, edition, text, image, href], i) => (
                  <InitiativeCard key={title} title={title} edition={edition} text={text} image={image} href={href} index={i} />
                ))}
              </Stagger>
            </div>
          </section>

          {/* OREMI CTA */}
          <section className="bg-white px-4 py-20 lg:px-8">
            <div className="mx-auto max-w-[1240px]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#d97706] to-[#a95505] px-8 py-14 text-center text-white shadow-2xl sm:px-16">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[#1b4332]/20 blur-3xl" />
                <div className="relative">
                  <h2 className="text-3xl font-extrabold sm:text-4xl">Besoin d'écoute ? Contactez OREMI</h2>
                  <p className="mx-auto mt-4 max-w-xl text-white/85">La ligne d'écoute jeune-à-jeune de JVS, confidentielle et sans jugement.</p>
                  <Link href="/oremi" className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-[#a95505] transition-transform hover:scale-105">
                    <PhoneCall size={18} /> Découvrir OREMI <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
