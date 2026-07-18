import PrototypeBanner from "@/components/jvs/PrototypeBanner";
import Header from "@/components/jvs/Header";
import Footer from "@/components/jvs/Footer";
import PageHero from "@/components/jvs/PageHero";
import { Stagger } from "@/components/jvs/Reveal";
import NewsCard from "@/components/jvs/NewsCard";
import PageTransition from "@/components/jvs/PageTransition";

export const metadata = {
  title: "Actualités",
  description:
    "Suivez les initiatives, campagnes et événements de Jeunes Volontaires pour la Santé (JVS) à travers le Bénin.",
};

// date, titre, extrait (repris des articles réels), image locale, lien (interne = article témoin)
const news = [
  ["8 juin 2026", "AVIS DE RECRUTEMENT – Point Focal JVS Zone Sanitaire Parakou-N'dali", "JVS recrute un Point Focal pour accompagner la mise en œuvre du projet « Priority For Choice » dans la Zone Sanitaire Parakou–N'Dali.", "/images/recrutement-point-focal.webp", "https://associationjvs.org/notre-actualite/avis-de-recrutement-point-focal-jvs-zone-sanitaire-parakou-ndali"],
  ["15 déc. 2025", "Godomey : La campagne « Priority For Choice » dans les rues et auprès des jeunes", "Le 2 août 2024 à Godomey, JVS a déployé « Priority For Choice » pour promouvoir les droits et la santé sexuels et reproductifs et déconstruire les fausses informations sur l'IVG.", "/images/actu-godomey-priority-for-choice.webp", "/actualites/godomey-priority-for-choice"],
  ["15 déc. 2025", "Sous l'arbre à palabres : Quand la parole des jeunes devient levier de transformation", "JVS mobilise les #Billi de Tori-Bossito pour un accès éclairé et sécurisé à la santé reproductive.", "/images/actu-arbre-a-palabres.webp", "https://associationjvs.org/notre-actualite/sous-larbre-a-palabres-quand-la-parole-des-jeunes-devient-levier-de-transformation"],
  ["15 déc. 2025", "Akassato et Allada : Les jeunes filles en zone rurale prennent la parole pour parler de leurs droits en SSR", "Dans le cadre de « Priority For Choice », JVS a mobilisé plus de 100 jeunes filles non scolarisées à Akassato et Allada pour renforcer leurs connaissances sur leurs droits en SSR.", "/images/actu-akassato-allada.webp", "https://associationjvs.org/notre-actualite/akassato-et-allada-les-jeunes-filles-en-zone-rurale-prennent-la-parole-pour-parler-de-leurs-droits-en-sante-sexuelle-et-reproductive"],
  ["3 nov. 2025", "JVS recrute Une Chargée de Projet et Un.e Comptable", "JVS renforce son équipe et recrute une Chargée de Projet ainsi qu'un·e Comptable.", "/images/actu-recrutement-chargee-projet.webp", "https://associationjvs.org/notre-actualite/jvs-recrute-une-chargee-de-projet-et-un-e-compatable"],
  ["30 sept. 2025", "Renforcement de capacités sur le Counseling for Choice (C4C) : Des acteurs de la SSR outillé·e·s par JVS", "Les 20 et 21 juin 2024, JVS a organisé un atelier de renforcement de capacités sur le Counseling for Choice (C4C) pour le personnel de prise en charge et de référencement.", "/images/actu-c4c-counseling.webp", "https://associationjvs.org/notre-actualite/renforcement-de-capacites-sur-le-counseling-for-choice-c4c-des-acteurs-et-actrices-de-la-sante-sexuelle-et-reproductive-outille-e-s-par-jvs-pour-un-accompagnement-de-qualite"],
  ["30 sept. 2025", "Soirée de mobilisation : Billi Now Now Bénin célèbre ses acquis et renforce les partenariats pour les #DSSR", "Le 5 juillet 2024, Billi Now Now West Africa Bénin, via JVS, a réuni acteurs gouvernementaux, organisations de jeunesse et activistes lors d'une soirée de mobilisation et de réseautage.", "/images/actu-billi-now-now.webp", "https://associationjvs.org/notre-actualite/soiree-de-mobilisation-et-de-reseautage-billi-now-now-benin-celebre-ses-acquis-et-renforce-les-partenariats-pour-la-promotion-des-dssr"],
  ["30 sept. 2025", "Journée Mondiale de l'Hygiène Menstruelle : sensibilisation communautaire à Hevié pour briser les tabous", "À l'occasion de la Journée mondiale de l'hygiène menstruelle, JVS, avec U-Reporters Abomey-Calavi et Le Clan Bénin, a mené le 27 mai 2024 une sensibilisation communautaire à Hevié.", "/images/actu-hygiene-menstruelle.webp", "https://associationjvs.org/notre-actualite/journee-mondiale-de-lhygiene-menstruelle-une-sensibilisation-communautaire-a-hevie-pour-briser-les-tabous-et-promouvoir-la-sante"],
  ["23 mai 2024", "Forum National BILLI", "Billi 229 en route pour briser les tabous et faire entendre les droits des jeunes.", "/images/actu-forum-billi.webp", "https://associationjvs.org/notre-actualite/forum-national-billi"],
  ["27 mars 2024", "JVS recrute un.e chargé.e de suivi-évaluation et un consultant pour un plan stratégique", "JVS recrute un·e chargé·e de suivi-évaluation et un consultant pour la rédaction de son plan stratégique.", "/images/actu-recrutement-suivi-evaluation.webp", "https://associationjvs.org/notre-actualite/jvs-recrute-un-e-charge-e-de-suivi-evaluation-et-un-consultant-pour-la-redaction-dun-plan-strategique"],
];

export default function NewsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f9faf7]">
        <PrototypeBanner />
        <Header />
        <main>
          <PageHero
            eyebrow="Notre actualité"
            title="Les actions de JVS en mouvement"
            text="Suivez les initiatives, campagnes et événements de Jeunes Volontaires pour la Santé à travers le Bénin."
          />
          <section className="px-4 py-20 lg:px-8">
            <div className="mx-auto max-w-[1240px]">
              <Stagger className="grid gap-7 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
                {news.map(([date, title, excerpt, img, href]) => (
                  <NewsCard key={href} date={date} title={title} excerpt={excerpt} image={img} href={href} />
                ))}
              </Stagger>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
