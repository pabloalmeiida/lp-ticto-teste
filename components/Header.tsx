import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1216px] items-center px-6 pt-8 lg:px-0 lg:pt-[55px]">
      <Image
        src="/assets/logo-ticto-master-partner.png"
        alt="Ticto Master Partner"
        width={153}
        height={44}
        priority
        className="h-[33px] w-auto lg:h-11"
      />
      <span aria-hidden className="mx-[34px] h-6 w-px bg-white lg:mx-[45px] lg:h-8" />
      <Image
        src="/assets/logo-ebulicao.png"
        alt="Ebulição"
        width={197}
        height={52}
        priority
        className="h-[39px] w-auto lg:h-13"
      />
    </header>
  );
}
