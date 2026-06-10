const RULES = [
  {
    desktop: "Crie sua conta no formulário ao lado",
    mobile: "Crie sua conta no formulário abaixo",
  },
  { desktop: "Deposite seu nome na urna no stand da Ticto" },
  { desktop: "Aguarde o sorteio presencialmente no stand da Ticto" },
];

export default function Rules() {
  return (
    <div className="mt-8">
      <p className="text-sm leading-[1.6] text-white/50">
        Confira as regras para participar
      </p>
      <ol className="mt-2 flex flex-col gap-3.5">
        {RULES.map((rule, index) => (
          <li key={rule.desktop} className="flex items-center gap-3.5">
            <span className="text-base font-bold leading-[1.6] text-brand">
              {index + 1}
            </span>
            <span aria-hidden className="size-1 bg-brand" />
            <span className="text-base leading-[1.2]">
              {rule.mobile ? (
                <>
                  <span className="lg:hidden">{rule.mobile}</span>
                  <span className="hidden lg:inline">{rule.desktop}</span>
                </>
              ) : (
                rule.desktop
              )}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
