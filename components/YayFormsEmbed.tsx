"use client";

import { useSearchParams } from "next/navigation";

/**
 * Parâmetros de rastreamento repassados da URL da página para o formulário
 * (requisito 4 do teste — campos hidden equivalentes ao
 * data-yf-transitive-search-params).
 */
const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "sck",
  "src",
] as const;

const FORM_URL = process.env.NEXT_PUBLIC_YAYFORMS_FORM_URL;

export default function YayFormsEmbed() {
  const searchParams = useSearchParams();

  if (!FORM_URL) {
    return (
      <div className="flex h-[472px] items-center justify-center rounded-3xl bg-[#f2f2f2] p-6 text-center text-sm text-muted">
        Defina NEXT_PUBLIC_YAYFORMS_FORM_URL no .env.local para carregar o
        formulário.
      </div>
    );
  }

  const url = new URL(FORM_URL);
  for (const param of TRACKED_PARAMS) {
    const value = searchParams.get(param);
    if (value !== null) {
      url.searchParams.set(param, value);
    }
  }

  return (
    <iframe
      src={url.toString()}
      title="Formulário de cadastro"
      className="h-[472px] w-full border-0"
      allow="clipboard-write"
    />
  );
}
