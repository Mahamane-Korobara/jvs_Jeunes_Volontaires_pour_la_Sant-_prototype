import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PrototypeBanner from "@/components/jvs/PrototypeBanner";
import Header from "@/components/jvs/Header";
import Footer from "@/components/jvs/Footer";
import PageHero from "@/components/jvs/PageHero";
import { Reveal } from "@/components/jvs/Reveal";
import ContactForm from "@/components/jvs/ContactForm";
import PageTransition from "@/components/jvs/PageTransition";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Jeunes Volontaires pour la Santé (JVS) : Agla-Akplomey, Cotonou, Bénin · +229 52 52 40 76 · contact@associationjvs.org.",
};

const coords = [
  [MapPin, "Adresse", "Agla-Akplomey, Cotonou, Bénin"],
  [Phone, "Téléphone", "+229 52 52 40 76", "tel:+22952524076"],
  [Mail, "Email", "contact@associationjvs.org", "mailto:contact@associationjvs.org"],
  [Clock, "Disponibilité", "Du lundi au vendredi"],
];

const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Agla-Akplomey,Cotonou,Benin";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f9faf7]">
        <PrototypeBanner />
        <Header />
        <main>
          <PageHero
            eyebrow="Contact"
            title="Parlons de votre projet ou de votre question"
            text="L'équipe de JVS est joignable pour toute information, partenariat ou demande. Écrivez-nous, nous vous répondrons."
          />

          <section className="px-4 py-20 lg:px-8">
            <div className="mx-auto grid max-w-[1240px] items-start gap-8 lg:grid-cols-2">
              <Reveal>
                <div className="grid gap-4 sm:grid-cols-2">
                  {coords.map(([Icon, label, value, href]) => (
                    <div key={label} className="rounded-2xl border border-[#1b4332]/8 bg-white p-5 shadow-sm">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#d97706]/10 text-[#a95505]"><Icon size={20} /></span>
                      <p className="mt-3 text-sm font-bold text-[#1b4332]">{label}</p>
                      {href ? (
                        <a href={href} className="mt-1 block text-sm text-[#52645d] transition-colors hover:text-[#a95505]">{value}</a>
                      ) : (
                        <p className="mt-1 text-sm text-[#52645d]">{value}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Carte statique (image, pas d'iframe : performance) */}
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="group mt-4 block overflow-hidden rounded-2xl border border-[#1b4332]/8 shadow-sm" aria-label="Ouvrir la localisation de JVS dans Google Maps">
                  <img
                    src="/images/carte-jvs.webp" width="900" height="554" loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="Carte de localisation de JVS — Agla-Akplomey, Cotonou, Bénin"
                  />
                  <span className="flex items-center gap-2 bg-[#1b4332] px-4 py-3 text-sm font-bold text-white">
                    <MapPin size={16} /> Ouvrir dans Google Maps
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.12}>
                <ContactForm />
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
