import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#f9faf7] px-4 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a95505]">Erreur 404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-[#1b4332] sm:text-5xl">Page introuvable</h1>
        <p className="mx-auto mt-4 max-w-md leading-7 text-[#41564e]">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1b4332] px-7 py-3 font-bold text-white transition-transform hover:scale-105 hover:bg-[#2d6a4f]"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
