import BackgroundGlow from "@/components/BackgroundGlow";
import FormCard from "@/components/FormCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PrizeCard from "@/components/PrizeCard";
import Rules from "@/components/Rules";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="relative overflow-hidden">
        <BackgroundGlow />
        <div className="relative">
          <Header />
          <main className="mx-auto flex w-full max-w-[1216px] flex-col px-6 pb-11 lg:flex-row lg:items-start lg:justify-between lg:px-0 lg:pb-[121px]">
            <section className="pt-[37px] lg:w-[624px] lg:pt-[95px]">
              <Hero />
              <PrizeCard />
              <p className="mt-8 text-base leading-[1.4]">
                A Ticto tem o orgulho de ser uma das patrocinadoras do evento
                Ebulição por Rafa Prado e trouxe esta oportunidade especial
                para você.
              </p>
              <Rules />
            </section>
            <FormCard />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
