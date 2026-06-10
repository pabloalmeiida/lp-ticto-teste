import Image from "next/image";

export default function PrizeCard() {
  return (
    <div className="mt-8 rounded-[4.4px] bg-linear-to-r from-brand to-transparent p-px lg:rounded-lg">
      <div className="relative h-[115px] overflow-hidden rounded-[3.4px] bg-night lg:h-[191px] lg:rounded-[7px]">
        {/* brilho sutil do fill gradiente branco do Figma */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(102deg,rgba(255,255,255,0.08),rgba(255,255,255,0)_55%)]"
        />
        <p className="absolute left-[22px] top-[21px] w-[194px] font-display text-base leading-[1.2] text-white lg:left-[53px] lg:top-[39px] lg:w-[350px] lg:text-2xl">
          Criando sua conta na plataforma, você pode concorrer a um
          <br />
          <span className="font-bold text-brand">iPhone 16 Pro</span>
        </p>
        <Image
          src="/assets/iphone-prize@3x.png"
          alt="iPhone 16 Pro"
          width={474}
          height={516}
          className="absolute bottom-0 right-[28px] h-[100px] w-[83px] lg:right-[67px] lg:h-[172px] lg:w-[158px]"
        />
      </div>
    </div>
  );
}
