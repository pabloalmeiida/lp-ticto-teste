import Script from "next/script";

const WIDGET_ID = process.env.NEXT_PUBLIC_YAYFORMS_WIDGET_ID ?? "Be9VvKj";

/**
 * Parâmetros repassados da URL da página para o formulário (requisito 4 do
 * teste), via atributo oficial do YayForms. O script de embed lê os valores
 * da URL e os injeta como campos hidden no formulário.
 */
const TRANSITIVE_PARAMS =
  "utm_source,utm_medium,utm_campaign,utm_content,utm_term,src,sck";

export default function YayFormsEmbed() {
  return (
    <div className="h-[472px]">
      <div
        data-yf-widget={WIDGET_ID}
        data-yf-transitive-search-params={TRANSITIVE_PARAMS}
        style={{ width: "100%", height: "100%" }}
      />
      <Script
        src="https://embed.yayforms.link/next/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
