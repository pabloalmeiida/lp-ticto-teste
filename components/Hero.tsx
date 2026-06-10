export default function Hero() {
  return (
    <div>
      <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-5 py-2 font-display text-[9px] font-bold uppercase leading-[1.35] tracking-[0.45px] text-brand backdrop-blur-[6px] lg:text-sm lg:tracking-[0.7px]">
        Transforme seu negócio em uma máquina de vendas
      </span>
      <h1 className="mt-8 font-display text-[28px] font-normal leading-[1.2] text-white lg:text-[32px]">
        A ebulição instantânea para produtos digitais e físicos começa com a
        maior e mais poderosa plataforma do Brasil
      </h1>
      {/* Subtítulo presente apenas no layout desktop do Figma */}
      <p className="mt-3.5 hidden text-base leading-[1.4] lg:block">
        Milhares de empresários <strong className="font-bold">como você</strong>{" "}
        alavancaram seus negócios e alcançaram 6 e 7 dígitos no digital com as
        estratégias que compartilhamos.
      </p>
    </div>
  );
}
