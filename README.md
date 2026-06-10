# LP Ebulição — Teste Técnico Ticto (Gerente de Automações)

Landing page de captura do evento **Ebulição**, reproduzida pixel perfect a partir do Figma
[LPs 2025 — node 8304-51](https://www.figma.com/design/KhdDl0T5xLwOjUJHB1g0SA/LPs-2025?node-id=8304-51),
com formulário YayForms embeddado, integração com o CRM Datacrazy e rastreamento de
parâmetros UTM/SCK/SRC.

## Como rodar localmente

```bash
npm install
npm run dev
```

A página fica disponível em `http://localhost:3000`. Nenhuma variável de ambiente é
obrigatória — o ID do widget YayForms tem fallback no código e pode ser sobrescrito
via `NEXT_PUBLIC_YAYFORMS_WIDGET_ID` (ver `.env.example`).

URL de teste com parâmetros de rastreamento:

```
http://localhost:3000/?utm_source=teste&utm_medium=email&utm_campaign=avaliacao&utm_content=criativo1&utm_term=palavra&sck=123&src=linkedin
```

## Stack e decisões técnicas

- **Next.js 16 (App Router) + TypeScript** — stack obrigatória do teste; App Router por ser o padrão atual.
- **Tailwind CSS v4** — citado nos critérios de avaliação; os tokens do Figma (cores, fontes) viram tema em `app/globals.css` e os valores exatos de espaçamento/tipografia entram como valores arbitrários, extraídos do JSON do design via API REST do Figma.
- **Formulário YayForms embeddado inline (modo Standard)** dentro do card branco do layout (no lugar dos campos desenhados no Figma), usando o snippet oficial de embed. O teste permite que o formulário use o estilo padrão do YayForms; mantive o "casco" do card (título, selo "cadastro 100% gratuito" e "Seus dados estão seguros") fiel ao design.
- **Rastreamento UTM/SCK/SRC** (`components/YayFormsEmbed.tsx`): os 7 parâmetros (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `sck`, `src`) são repassados ao formulário via atributo oficial **`data-yf-transitive-search-params`**, exatamente como previsto no enunciado. O script de embed do YayForms lê os valores da URL da página, injeta-os como campos hidden no formulário e os envia ao Datacrazy junto com o lead.
- **Imagens e ícones** exportados diretamente do Figma (PNG para fotos/logos bitmap, SVG para ícones e logos vetoriais) via API REST.

### Fonte substituta (Tomato Grotesk)

O design usa **Tomato Grotesk** (títulos e UI), uma fonte comercial sem licença gratuita.
Substituí por **Inter** (Google Fonts, via `next/font`) — escolha apoiada pelo próprio arquivo
do Figma, cujas anotações de inspeção indicam "Inter Fallback" como fallback do design.
**Space Grotesk**, usada nos textos corridos, é gratuita e foi mantida exata.

## Inconsistências encontradas (e decisões tomadas)

1. **Enunciado × Figma**: o contexto do teste cita a LP do evento **Outlier Experience**, mas o
   node `8304-51` indicado é a LP de captura da Ticto no evento **Ebulição** (by Rafa Prado).
   A página real do Outlier (`lp3.outlierxp.com.br`) é uma página de vendas de ingressos, sem
   formulário de captura. Como o critério de avaliação é a comparação lado a lado com o Figma,
   implementei **fielmente o node indicado, copy incluída**.
2. **Anotações de QA dentro do próprio Figma**: a página "Ebulição" contém notas de revisão
   ("No figma está bold", "Fonte errada no título", "Hat com fonte e estilo errado"), indicando
   que o design tem divergências conhecidas da produção. Segui o que está desenhado no frame.
3. **Divergências entre desktop e mobile no Figma** — resolvidas com swap responsivo para manter
   fidelidade a cada breakpoint:
   - Regra 1: "formulário **ao lado**" (desktop) × "formulário **abaixo**" (mobile);
   - Menu do footer: "Blog" (desktop) × "Perguntas frequentes" (mobile);
   - CTA do footer: "Crie sua conta" (desktop) × "Crie agora sua conta" (mobile);
   - Subtítulo do hero ("Milhares de empresários...") existe apenas no desktop.
4. **Camadas ocultas no Figma** (grupo "depoimento" com Lorem Ipsum e as abas "Para você /
   Para empresa" do formulário) estão com `visible: false` no design e **não** foram implementadas.
5. **Links institucionais** (menu, redes sociais, lojas de aplicativo, Políticas e Termos) não têm
   destino especificado no design; apontam para `ticto.com.br`.

## Dificuldades e como foram resolvidas

- **Acesso ao Figma**: o servidor MCP oficial do Figma limita contas Starter a 6 chamadas/mês e
  exige que o arquivo pertença ao plano do usuário — inviável para um arquivo view-only de
  terceiros. Solução: **API REST do Figma** com personal access token, extraindo o JSON completo
  dos frames (medidas, cores, tipografia e efeitos exatos) e exportando os assets em PNG/SVG.
- **Verificação pixel perfect**: screenshots automatizados (Playwright + Chrome) em 1440px e
  390px comparados lado a lado com os PNGs exportados do Figma em 2x.

## Estrutura

```
app/
  layout.tsx        # fontes (next/font) e metadata
  page.tsx          # composição da página
  globals.css       # tema Tailwind com tokens do Figma
components/
  Header.tsx        # logos Ticto Master Partner | Ebulição
  Hero.tsx          # badge + título + subtítulo
  PrizeCard.tsx     # card do iPhone 16 Pro
  Rules.tsx         # regras do sorteio
  FormCard.tsx      # card branco com o embed do YayForms
  YayFormsEmbed.tsx # iframe + repasse dos parâmetros de rastreamento
  Footer.tsx        # footer completo (responsivo com reordenação)
  BackgroundGlow.tsx# elipses desfocadas do fundo
public/assets/      # imagens e ícones exportados do Figma
```
