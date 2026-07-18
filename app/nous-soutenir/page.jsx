import { HandHeart, Users } from "lucide-react";
import PrototypeBanner from "@/components/jvs/PrototypeBanner";
import Header from "@/components/jvs/Header";
import Footer from "@/components/jvs/Footer";
import PageHero from "@/components/jvs/PageHero";
import { Reveal } from "@/components/jvs/Reveal";
import MobileMoneyDon from "@/components/jvs/MobileMoneyDon";
import MembershipForm from "@/components/jvs/MembershipForm";
import PageTransition from "@/components/jvs/PageTransition";

export const metadata = {
  title: "Nous soutenir",
  description:
    "Soutenez Jeunes Volontaires pour la Santé (JVS) : faites un don par Mobile Money ou rejoignez l'association comme membre ou bénévole.",
};

export default function NousSoutenirPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f9faf7]">
        <PrototypeBanner />
        <Header />
        <main>
          <PageHero
            eyebrow="Nous soutenir"
            title="Votre soutien fait avancer les droits des jeunes"
            text="Chaque don et chaque adhésion renforce l'action de JVS pour l'accès des jeunes à l'information et aux services de santé sexuelle et reproductive au Bénin."
          />

          <section className="px-4 py-20 lg:px-8">
            <div className="mx-auto max-w-[1240px]">
              <div className="grid items-start gap-8 lg:grid-cols-2">
                <Reveal>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#d97706]/10 text-[#d97706]"><HandHeart /></span>
                    <h2 className="text-2xl font-extrabold text-[#1b4332]">Faire un don</h2>
                  </div>
                  <MobileMoneyDon />
                </Reveal>

                <Reveal delay={0.12}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#1b4332]/10 text-[#1b4332]"><Users /></span>
                    <h2 className="text-2xl font-extrabold text-[#1b4332]">Adhérer</h2>
                  </div>
                  <MembershipForm />
                </Reveal>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
