"use client";

import { useState } from "react";
import { Smartphone, Copy, Check } from "lucide-react";

const amounts = [500, 1000, 2000, 5000, 10000];
const buildCode = (m) => `*880*41*008073*${m ?? "MONTANT"}#`;

const steps = [
  "Composez le code USSD ci-dessus depuis votre téléphone (MTN / Moov Money).",
  "Confirmez le montant, puis validez avec votre code secret Mobile Money.",
  "Vous recevez un SMS de confirmation du don. Merci !",
];

export default function MobileMoneyDon() {
  const [amount, setAmount] = useState(null);
  const [copied, setCopied] = useState(false);
  const code = buildCode(amount);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard indisponible */
    }
  };

  return (
    <div className="rounded-[2rem] border border-[#1b4332]/10 bg-white p-7 shadow-xl sm:p-9">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#d97706] text-white shadow-lg">
          <Smartphone />
        </span>
        <div>
          <h3 className="text-xl font-extrabold text-[#1b4332]">Faire un don par Mobile Money</h3>
          <p className="text-sm text-[#52645d]">Rapide, depuis votre téléphone, sans frais bancaires.</p>
        </div>
      </div>

      <p className="mt-6 text-sm font-bold text-[#1b4332]">1. Choisissez un montant (FCFA)</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {amounts.map((m) => (
          <button
            key={m}
            onClick={() => setAmount(m)}
            aria-pressed={amount === m}
            className={`min-h-11 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              amount === m ? "bg-[#1b4332] text-white" : "border border-[#1b4332]/15 bg-white text-[#1b4332] hover:bg-[#1b4332]/5"
            }`}
          >
            {m.toLocaleString("fr-FR")}
          </button>
        ))}
        <button
          onClick={() => setAmount(null)}
          className="min-h-11 rounded-full border border-[#1b4332]/15 px-4 py-2 text-sm font-semibold text-[#52645d] hover:bg-[#1b4332]/5"
        >
          Autre
        </button>
      </div>

      <p className="mt-6 text-sm font-bold text-[#1b4332]">2. Composez ce code USSD</p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
        <code className="flex-1 rounded-2xl bg-[#f1f5ef] px-5 py-4 text-center text-lg font-extrabold tracking-wide text-[#1b4332]">
          {code}
        </code>
        <button
          onClick={copy}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d97706] px-5 font-bold text-white shadow-lg shadow-[#d97706]/25 transition-transform hover:scale-105"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? "Copié" : "Copier"}
        </button>
      </div>
      <p className="mt-2 text-xs text-[#5f6f66]">
        Remplacez « MONTANT » par la somme souhaitée si vous choisissez « Autre ».
      </p>

      <ol className="mt-7 space-y-3">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3 text-sm leading-6 text-[#41564e]">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#1b4332] text-xs font-bold text-white">{i + 1}</span>
            {s}
          </li>
        ))}
      </ol>

      <p className="mt-6 rounded-xl bg-[#1b4332]/5 px-4 py-3 text-xs text-[#52645d]">
        Prototype : code de collecte à confirmer par JVS avant toute mise en ligne officielle.
      </p>
    </div>
  );
}
