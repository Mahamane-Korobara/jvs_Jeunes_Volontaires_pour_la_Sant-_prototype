import PrototypeBanner from "@/components/jvs/PrototypeBanner";
import Header from "@/components/jvs/Header";
import Hero from "@/components/jvs/Hero";
import InterventionGrid from "@/components/jvs/InterventionGrid";
import ImpactStats from "@/components/jvs/ImpactStats";
import InitiativesSection from "@/components/jvs/InitiativesSection";
import NewsSection from "@/components/jvs/NewsSection";
import Partners from "@/components/jvs/Partners";
import Recruitment from "@/components/jvs/Recruitment";
import Newsletter from "@/components/jvs/Newsletter";
import Footer from "@/components/jvs/Footer";
import PageTransition from "@/components/jvs/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f9faf7]">
        <PrototypeBanner />
        <Header />
        <main>
          <Hero />
          <InterventionGrid />
          <ImpactStats />
          <InitiativesSection />
          <NewsSection />
          <Partners />
          <Recruitment />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
