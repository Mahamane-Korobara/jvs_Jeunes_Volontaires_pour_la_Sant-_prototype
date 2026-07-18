import { FileText, ExternalLink } from "lucide-react";
import PrototypeBanner from "@/components/jvs/PrototypeBanner";
import Header from "@/components/jvs/Header";
import Footer from "@/components/jvs/Footer";
import PageHero from "@/components/jvs/PageHero";
import { Reveal } from "@/components/jvs/Reveal";
import RecruitmentList from "@/components/jvs/RecruitmentList";
import PageTransition from "@/components/jvs/PageTransition";

export const metadata = {
  title: "Ressources",
  description:
    "Rapports d'activité et avis de recrutement de Jeunes Volontaires pour la Santé (JVS) : documents et opportunités, ouverts comme archivés.",
};

// Structure d'accueil des documents — les fichiers réels seront fournis par JVS (aucun faux rapport).
const rapports = [2024, 2023, 2022];

function RapportCard({ year }) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-3xl border border-dashed border-[#1b4332]/20 bg-white/60 p-7">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1b4332]/5 text-[#1b4332]">
        <FileText />
      </span>
      <div>
        <h3 className="text-xl font-extrabold text-[#1b4332]">Rapport annuel {year}</h3>
        <p className="mt-2 text-sm font-semibold text-[#5f6f66]">[ Document à fournir par JVS ]</p>
      </div>
      <span className="mt-1 rounded-full bg-[#1b4332]/5 px-3 py-1 text-xs font-bold text-[#52645d]">Bientôt disponible</span>
    </div>
  );
}

export default function RessourcesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f9faf7]">
        <PrototypeBanner />
        <Header />
        <main>
          <PageHero
            eyebrow="Ressources"
            title="Rapports & recrutements"
            text="Retrouvez les documents institutionnels de JVS et les opportunités à rejoindre l'équipe — les avis clos restent archivés et consultables."
          />

          {/* Rapports */}
          <section className="px-4 py-20 lg:px-8">
            <div className="mx-auto max-w-[1240px]">
              <Reveal>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a95505]">Documents</p>
                <h2 className="text-3xl font-extrabold text-[#1b4332] sm:text-4xl">Rapports annuels</h2>
                <p className="mt-4 max-w-2xl leading-7 text-[#41564e]">
                  Cette section accueillera les rapports d'activité publiés par JVS. La structure est prête ; les fichiers seront ajoutés dès leur transmission.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rapports.map((year) => (
                    <RapportCard key={year} year={year} />
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <a
                  href="https://associationjvs.org/nos-rapports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#2d6a4f] transition-colors hover:text-[#a95505]"
                >
                  <ExternalLink size={16} /> Voir les rapports actuels sur associationjvs.org
                </a>
              </Reveal>
            </div>
          </section>

          {/* Recrutements */}
          <section className="bg-white px-4 py-20 lg:px-8">
            <div className="mx-auto max-w-[1240px]">
              <Reveal>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a95505]">Rejoindre JVS</p>
                <h2 className="text-3xl font-extrabold text-[#1b4332] sm:text-4xl">Recrutements</h2>
                <p className="mt-4 max-w-2xl leading-7 text-[#41564e]">
                  Les avis ouverts sont mis en avant ; les avis clos sont automatiquement archivés et restent consultables.
                </p>
              </Reveal>
              <div className="mt-10">
                <RecruitmentList />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
