/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export 100 % statique : aucun serveur Node, servi tel quel par Apache (CDC §5)
  output: "export",
  // Chaque route = /route/index.html → URLs propres et servies sans réécriture Apache
  trailingSlash: true,
  // next/image est incompatible avec l'optimisation à la volée en export statique
  images: { unoptimized: true },
};

export default nextConfig;
