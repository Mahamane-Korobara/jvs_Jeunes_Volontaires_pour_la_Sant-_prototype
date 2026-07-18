import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import PrototypeBanner from "@/components/jvs/PrototypeBanner";
import Header from "@/components/jvs/Header";
import Footer from "@/components/jvs/Footer";
import PageTransition from "@/components/jvs/PageTransition";
import ShareButtons from "@/components/jvs/ShareButtons";

const TITLE = "Godomey : la campagne « Priority For Choice » dans les rues et auprès des jeunes";
const DESCRIPTION =
  "Le 2 août 2024 à Godomey, JVS a déployé la campagne « Priority For Choice » pour promouvoir les droits et la santé sexuels et reproductifs et déconstruire les fausses informations sur l'IVG au Bénin.";
const ORIGINAL =
  "https://associationjvs.org/notre-actualite/godomey-la-campagne-priority-for-choice-dans-les-rues-et-aupres-des-jeunes";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/actualites/godomey-priority-for-choice" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/actualites/godomey-priority-for-choice",
    type: "article",
    locale: "fr_FR",
    images: [{ url: "/images/actu-godomey-priority-for-choice.webp", width: 900, height: 600, alt: "Campagne Priority For Choice à Godomey" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/actu-godomey-priority-for-choice.webp"],
  },
};

const gallery = [
  "/images/godomey-galerie-1.webp",
  "/images/godomey-galerie-2.webp",
  "/images/godomey-galerie-3.webp",
  "/images/godomey-galerie-4.webp",
];

export default function GodomeyArticle() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f9faf7]">
        <PrototypeBanner />
        <Header />
        <main>
          <article className="mx-auto max-w-[820px] px-4 py-14 lg:px-8">
            <Link href="/actualites" className="inline-flex items-center gap-2 text-sm font-bold text-[#2d6a4f] transition-colors hover:text-[#d97706]">
              <ArrowLeft size={16} /> Toutes les actualités
            </Link>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#d97706]">Campagne · Priority For Choice</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#1b4332] sm:text-4xl">{TITLE}</h1>
            <time className="mt-4 block text-sm font-semibold text-[#52645d]">Publié le 15 décembre 2025 · Godomey, Abomey-Calavi</time>

            <img
              src="/images/actu-godomey-priority-for-choice.webp"
              width="900" height="600" fetchPriority="high"
              className="mt-8 w-full rounded-[2rem] object-cover shadow-xl"
              alt="Équipe de JVS lors de la campagne Priority For Choice à Godomey"
            />

            <div className="mt-10 space-y-5 text-lg leading-8 text-[#33413b]">
              <p>C'est le pari qu'a relevé Jeunes Volontaires pour la Santé (JVS) le 2 août 2024, lors de son passage à Godomey, à travers la campagne Priority For Choice, une initiative audacieuse dédiée à la promotion des droits et santé sexuels et reproductifs (#DSSR) et à la déconstruction des fausses informations sur le cadre légal de l'IVG au Bénin.</p>

              <h2 className="pt-4 text-2xl font-extrabold text-[#1b4332]">Une campagne au cœur du quartier</h2>
              <p>Dans le cadre du grand festival « Podium Vacances », organisé à la Maison des Jeunes de Godomey, JVS avec l'appui de ses partenaires a transformé l'espace en un véritable carrefour d'échanges, de sensibilisation et de partage sur la santé sexuelle et reproductive, y compris l'accès aux soins sécurisés d'IVG.</p>
              <p>Mais l'action ne s'est pas arrêtée aux portes du podium. Grâce à des Communications Interpersonnelles menées dans les rues de l'arrondissement de Godomey, plus grand arrondissement de la Commune d'Abomey-Calavi, l'équipe est allée à la rencontre directe des jeunes — dans les ateliers de formation, les maisons, les coins de vente de repas — en apportant la bonne information là où elle manque le plus.</p>

              <blockquote className="border-l-4 border-[#d97706] bg-white px-6 py-5 text-xl font-semibold italic leading-8 text-[#1b4332] shadow-sm">
                « Nous croyons que l'information sauve des vies. En allant dans les rues, nous rencontrons les jeunes dans leur réalité pour apporter l'information vraie sur leur santé reproductive, sans barrière, sans jugement, afin qu'ils et elles fassent des choix éclairés. »
                <cite className="mt-3 block text-sm font-bold not-italic text-[#d97706]">— Marilyne SOUROU, Chargée de Communication de JVS</cite>
              </blockquote>

              <h2 className="pt-4 text-2xl font-extrabold text-[#1b4332]">Une soif d'information</h2>
              <p>Sur le terrain, les échanges ont révélé une soif d'information et un profond besoin de clarification. Plusieurs jeunes filles ont exprimé leur surprise face aux connaissances acquises et leur gratitude pour cette démarche de proximité. L'une d'elles confiait ainsi qu'elle « ne savait pas qu'elle avait autant de droits en tant que femme au Bénin ».</p>
              <p>Une autre témoignait : « Grâce à cette campagne, j'ai découvert des informations précieuses sur mes droits reproductifs et sur la manière dont je peux protéger ma santé. Je me sens maintenant plus confiante pour prendre les décisions qui me concernent. »</p>

              <h2 className="pt-4 text-2xl font-extrabold text-[#1b4332]">Informer, c'est protéger</h2>
              <p>Entre les fausses croyances sur la contraception, les tabous autour de l'IVG et la désinformation persistante sur les droits reproductifs, les Communications Interpersonnelles ont permis d'apporter des réponses claires et légales, basées sur la loi n°2021-12 du 20 décembre 2021. Les jeunes filles ont ainsi appris dans quel cadre l'avortement sécurisé est autorisé au Bénin, et à quelles conditions légales.</p>
              <p>Pour l'une des participantes, « quand on connaît la loi, on peut mieux se protéger et défendre sa santé » — une conviction que partage l'équipe de JVS, qui croit que la bonne information est une arme de protection et un levier d'autonomie.</p>

              <h2 className="pt-4 text-2xl font-extrabold text-[#1b4332]">OREMI, une oreille attentive</h2>
              <p>Afin de garantir un accès continu à l'information et aux soins, JVS a rappelé l'existence d'OREMI, sa ligne d'assistance et de référencement en santé sexuelle et reproductive. Accessible, confidentielle et bienveillante, OREMI est perçue comme « une oreille attentive, une parole bienveillante et un pont vers les services sûrs et de qualité ». Les jeunes peuvent y poser toutes leurs questions en toute confidentialité et recevoir des orientations fiables et gratuites.</p>
            </div>

            {/* Galerie */}
            <h2 className="mt-12 text-2xl font-extrabold text-[#1b4332]">En images</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {gallery.map((src, i) => (
                <img
                  key={src} loading="lazy" src={src} width="800" height="600"
                  className="aspect-square w-full rounded-2xl object-cover shadow-sm"
                  alt={`Photo ${i + 1} de la campagne Priority For Choice à Godomey`}
                />
              ))}
            </div>

            {/* Partage + source */}
            <div className="mt-12 flex flex-col gap-6 border-t border-[#1b4332]/10 pt-8">
              <ShareButtons title={TITLE} />
              <a href={ORIGINAL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#2d6a4f] transition-colors hover:text-[#d97706]">
                <ExternalLink size={16} /> Lire l'article original sur associationjvs.org
              </a>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
