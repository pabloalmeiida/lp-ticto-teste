/**
 * Elipses cyan desfocadas do grupo "bg" do Figma (layer blur 460-480).
 * Posições aproximadas dos dois aglomerados: topo-esquerda e centro-direita.
 */
export default function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* aglomerado esquerdo (hero) */}
      <div className="absolute -left-[190px] top-[74px] h-[696px] w-[560px] rounded-full bg-brand/45 blur-[200px] max-lg:-left-[204px] max-lg:-top-[22px] max-lg:h-[533px] max-lg:w-[429px] max-lg:blur-[160px]" />
      {/* aglomerado central-direito (entre form e footer) */}
      <div className="absolute left-[33%] top-[690px] h-[793px] w-[837px] rounded-full bg-brand/40 blur-[230px] max-lg:left-[58%] max-lg:top-[726px] max-lg:h-[533px] max-lg:w-[429px] max-lg:blur-[160px]" />
    </div>
  );
}
