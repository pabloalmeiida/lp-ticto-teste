import Image from "next/image";
import { Suspense } from "react";
import YayFormsEmbed from "./YayFormsEmbed";

export default function FormCard() {
  return (
    <aside
      id="cadastro"
      className="-mx-[7px] mt-[51px] rounded-md bg-white px-5 py-6 lg:mx-0 lg:mt-[75px] lg:w-[488px] lg:shrink-0 lg:px-[43px] lg:py-10"
    >
      <p className="font-display text-sm font-bold uppercase leading-[1.35] tracking-[0.7px] text-brand">
        Cadastro 100% gratuito
      </p>
      <h2 className="mt-2 font-display text-[22px] font-normal leading-[1.25] text-ink lg:text-[32px]">
        Crie sua conta e comece a vender hoje mesmo
      </h2>
      <div className="mt-9">
        <Suspense
          fallback={<div className="h-[472px] rounded-3xl bg-[#f2f2f2]" aria-hidden />}
        >
          <YayFormsEmbed />
        </Suspense>
      </div>
      <div className="mt-9 flex items-center gap-3.5">
        <Image
          src="/assets/icon-shield.svg"
          alt=""
          width={22}
          height={24}
          className="h-6 w-[22px]"
        />
        <span className="font-display text-sm leading-[1.3] text-[#1e1c2d]">
          Seus dados estão seguros
        </span>
      </div>
    </aside>
  );
}
