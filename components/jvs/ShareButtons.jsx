"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

export default function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const open = (url) => window.open(url, "_blank", "noopener,noreferrer");
  const currentUrl = () => (typeof window !== "undefined" ? window.location.href : "");

  const shareWhatsApp = () => open(`https://wa.me/?text=${encodeURIComponent(`${title} ${currentUrl()}`)}`);
  const shareFacebook = () => open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl())}`);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard indisponible : on ignore silencieusement */
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-bold text-[#1b4332]">Partager :</span>

      <button
        onClick={shareWhatsApp}
        aria-label="Partager sur WhatsApp"
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.07-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.23 3.08c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1-1.44-5.01c0-5.2 4.24-9.44 9.46-9.44 2.53 0 4.9.99 6.68 2.78a9.38 9.38 0 0 1 2.77 6.67c0 5.2-4.24 9.44-9.46 9.44zM20.52 3.49A11.78 11.78 0 0 0 12.04.02C5.5.02.18 5.33.18 11.86c0 2.09.55 4.13 1.59 5.93L.08 24l6.36-1.67a11.85 11.85 0 0 0 5.6 1.43h.01c6.53 0 11.85-5.31 11.85-11.84 0-3.17-1.23-6.15-3.38-8.43z" />
        </svg>
        WhatsApp
      </button>

      <button
        onClick={shareFacebook}
        aria-label="Partager sur Facebook"
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
        </svg>
        Facebook
      </button>

      <button
        onClick={copyLink}
        aria-label="Copier le lien"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#1b4332]/20 bg-white px-4 py-2 text-sm font-bold text-[#1b4332] transition-colors hover:bg-[#1b4332]/5"
      >
        {copied ? <Check size={18} className="text-[#2d6a4f]" /> : <Link2 size={18} />}
        {copied ? "Lien copié" : "Copier le lien"}
      </button>
    </div>
  );
}
