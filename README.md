# JVS — Jeunes Volontaires pour la Santé (prototype)

Prototype de refonte du site de **Jeunes Volontaires pour la Santé (JVS)**, ONG béninoise qui facilite l'accès des jeunes aux informations et services de **Droits et Santé Sexuels et Reproductifs (DSSR)** au Bénin.

> ⚠️ **Prototype non officiel** réalisé par Mahamane Korobara dans le cadre de l'AMI de JVS. Le site est en `noindex` (non référencé) ; le numéro de la ligne OREMI est un placeholder à confirmer par JVS.

## ✨ Fonctionnalités

- **Accueil** : héros, domaines d'intervention, chiffres clés animés (Résultats 2022), initiatives, actualités, partenaires, recrutement, newsletter (démo).
- **OREMI** : page dédiée à la ligne d'écoute jeune-à-jeune, FAQ en accordéon, bouton **« Quitter rapidement »**.
- **Qui sommes-nous** : mission, vision, présentation, équipe, partenaires, appel à rejoindre.
- **Actualités** : liste avec extraits + un article témoin complet (galerie, citation, partage WhatsApp/Facebook, Open Graph).
- **Ressources** : rapports annuels (structure) et recrutements avec filtre Ouvert/Clos.
- **Nous soutenir** : don par Mobile Money (code USSD + étapes) et adhésion (démo).
- **Contact** : coordonnées, carte statique, formulaire (démo).

## 🧱 Stack technique

- [Next.js 16](https://nextjs.org/) (App Router) en **export statique** (`output: 'export'`)
- React 19
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [lucide-react](https://lucide.dev/) (icônes)
- Police **Inter** auto-hébergée (`next/font`), aucune dépendance Google Fonts
- Images optimisées en **WebP** (≤ 120 Ko), servies en local

Aucun script tiers, aucun cookie, aucun analytics.

## 🚀 Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
```

## 📦 Build & export statique

```bash
npm run build    # génère le site statique dans ./out
```

Le dossier `out/` contient un site 100 % statique, déployable sur n'importe quel hébergeur.

## ▲ Déploiement (Vercel)

Le projet est prêt pour [Vercel](https://vercel.com/) :

1. Importer le dépôt GitHub dans Vercel.
2. Framework détecté automatiquement : **Next.js** (aucune configuration requise).
3. Déployer, puis relier le nom de domaine dans **Settings → Domains**.

## 🗂️ Structure

```
app/
  layout.jsx              # layout racine, métadonnées, favicon, noindex
  globals.css             # Tailwind + thème (variables CSS)
  page.jsx                # Accueil (/)
  oremi/                  # /oremi
  qui-sommes-nous/        # /qui-sommes-nous
  initiatives/            # /initiatives
  actualites/             # /actualites (+ article témoin)
  ressources/             # /ressources
  nous-soutenir/          # /nous-soutenir
  contact/                # /contact
  icon.png, apple-icon.png
components/jvs/           # composants d'interface
public/images/           # images WebP optimisées
```

## ♿ Accessibilité & performance

- `alt` sur toutes les images, navigation clavier (menu mobile, accordéon), focus visibles.
- Images WebP dimensionnées mobile-first, chargement différé hors écran.
- Objectif : PageSpeed mobile ≥ 90.

## 📄 Contenu

Tous les textes, images, chiffres et noms proviennent du site officiel [associationjvs.org](https://associationjvs.org) et des publications de l'association.

## 👤 Auteur

**Mahamane Korobara** — proposition de refonte, JVS (AMI, juillet 2026).
