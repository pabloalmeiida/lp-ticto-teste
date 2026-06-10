import Image from "next/image";

/* URLs institucionais não especificadas no Figma — apontam para o site da Ticto */
const TICTO_URL = "https://ticto.com.br";

const SOCIAL_ICONS = [
  { icon: "instagram", label: "Instagram" },
  { icon: "youtube", label: "YouTube" },
  { icon: "threads", label: "Threads" },
  { icon: "linkedin", label: "LinkedIn" },
  { icon: "facebook", label: "Facebook" },
  { icon: "tiktok", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black px-6 py-12 lg:py-20">
      {/* No mobile as colunas viram `contents` e os itens são reordenados
          conforme o frame ticto_mobile (menu → CTA → lojas → sociais) */}
      <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-lg:contents lg:flex lg:w-96 lg:flex-col lg:gap-8">
          <Image
            src="/assets/logo-ticto-footer.svg"
            alt="Ticto"
            width={193}
            height={56}
            className="h-8 w-auto max-lg:order-1 lg:h-14"
          />
          <p className="font-display text-sm leading-[1.5] tracking-[-0.154px] text-smoke max-lg:order-2 max-lg:text-center lg:text-base lg:leading-6 lg:tracking-[-0.176px]">
            A Ticto é a única plataforma focada em vendas e conversão de
            produtos físicos e digitais 💡
          </p>
          <ul className="flex items-center gap-4 max-lg:order-6">
            {SOCIAL_ICONS.map(({ icon, label }) => (
              <li key={icon}>
                <a
                  href={TICTO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-[42px] items-center justify-center rounded-lg border border-white/20 lg:h-11 lg:w-[51px]"
                >
                  <Image
                    src={`/assets/icon-social-${icon}.svg`}
                    alt=""
                    width={22}
                    height={22}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-lg:contents lg:flex lg:w-96 lg:flex-col lg:gap-8">
          <p className="font-display text-base font-bold leading-6 tracking-[-0.176px] max-lg:hidden">
            Páginas
          </p>
          <nav className="w-full max-lg:order-3">
            <ul>
              <li className="border-b border-white/10">
                <a
                  href={TICTO_URL}
                  className="flex h-14 items-center gap-2 font-display text-base leading-6 tracking-[-0.176px] max-lg:justify-center"
                >
                  Entrar
                </a>
              </li>
              <li className="border-b border-white/10">
                <a
                  href={TICTO_URL}
                  className="flex h-14 items-center gap-2 font-display text-base leading-6 tracking-[-0.176px] max-lg:justify-center"
                >
                  Suporte
                  <Image
                    src="/assets/icon-arrow-narrow-right.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </a>
              </li>
              <li className="border-b border-white/10">
                <a
                  href={TICTO_URL}
                  className="flex h-14 items-center gap-2 font-display text-base leading-6 tracking-[-0.176px] max-lg:justify-center"
                >
                  <span className="lg:hidden">Perguntas frequentes</span>
                  <span className="hidden lg:inline">Blog</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="max-lg:contents lg:flex lg:w-96 lg:flex-col lg:gap-8">
          <p className="font-display text-base font-bold leading-6 tracking-[-0.176px] max-lg:hidden">
            Baixe o nosso aplicativo
          </p>
          <div className="flex items-center gap-4 max-lg:order-5">
            <a
              href={TICTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Disponível no Google Play"
              className="flex h-14 w-[163px] items-center justify-center rounded-full border border-white/20 lg:w-[184px]"
            >
              <Image
                src="/assets/badge-google-play.svg"
                alt=""
                width={121}
                height={29}
              />
            </a>
            <a
              href={TICTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar na App Store"
              className="flex h-14 w-[163px] items-center justify-center rounded-full border border-white/20 lg:w-[184px]"
            >
              <Image
                src="/assets/badge-app-store.svg"
                alt=""
                width={105}
                height={28}
              />
            </a>
          </div>
          <a
            href="#cadastro"
            className="w-full rounded-[32px] bg-[linear-gradient(90deg,#FF9C2B_0%,#FF2689_59%,#9747FF_100%)] p-0.5 max-lg:order-4"
          >
            <span className="flex h-[52px] items-center justify-between rounded-[30px] bg-black px-6 font-display text-base font-bold leading-6 tracking-[-0.176px]">
              <span className="lg:hidden">Crie agora sua conta</span>
              <span className="hidden lg:inline">Crie sua conta</span>
              <Image
                src="/assets/icon-arrow-right.svg"
                alt=""
                width={24}
                height={24}
              />
            </span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-[1216px] flex-col items-center gap-6 lg:flex-row lg:justify-between">
        <p className="text-sm leading-[1.5] tracking-[-0.154px] text-smoke max-lg:order-2 max-lg:text-center">
          © 2025 - Ticto Tecnologia - Todos os direitos reservados. CNPJ sob nº
          28.618.386/0001-19
        </p>
        <div className="flex items-center gap-6 max-lg:order-1 max-lg:flex-col">
          <Image
            src="/assets/selo-reclame-aqui.png"
            alt="Selo RA 1000 — Reclame Aqui"
            width={94}
            height={44}
          />
          <Image
            src="/assets/selo-pci.png"
            alt="Selo PCI Security Standards Council"
            width={145}
            height={44}
          />
        </div>
        <a
          href={TICTO_URL}
          className="text-sm leading-[1.5] tracking-[-0.154px] text-smoke underline-offset-2 hover:underline max-lg:order-3"
        >
          Políticas e Termos
        </a>
      </div>
    </footer>
  );
}
