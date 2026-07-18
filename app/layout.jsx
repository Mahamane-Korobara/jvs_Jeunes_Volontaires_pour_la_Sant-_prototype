import localFont from "next/font/local";
import "./globals.css";

// Police Inter (variable, subset latin) servie en self-hosted — pas de Google Fonts (CDC §6.6)
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://jvs.sahelstack.tech"),
  title: {
    default:
      "Jeunes Volontaires pour la Santé (JVS) — Droits et santé sexuels et reproductifs au Bénin [Prototype]",
    template: "%s · JVS [Prototype]",
  },
  description:
    "Prototype de refonte du site de Jeunes Volontaires pour la Santé (JVS), ONG béninoise qui facilite l'accès des jeunes aux informations et services de droits et santé sexuels et reproductifs (DSSR) au Bénin.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
