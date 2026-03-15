import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import background from "@/assets/v2/background.png";
import dataBadge from "@/assets/v2/DATA.png";
import nameLogo from "@/assets/v2/NAME.png";
import poster from "@/assets/v2/PASSAGEM.png";
import verse from "@/assets/v2/LOGO.png";
import objectOne from "@/assets/v2/objeto 01.png";
import objectTwo from "@/assets/v2/objeto 02.png";

const EventHero = () => {
  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative isolate h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(0,0,0,0.22),rgba(0,0,0,0.48))]" />
      <img
        src={objectOne}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-5 z-0 hidden w-24 rotate-6 opacity-70 md:block md:w-32"
      />
      <img
        src={objectTwo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-2 z-0 hidden w-24 -rotate-12 opacity-70 md:block md:w-32"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col px-4 py-3 text-white md:py-4">
        <div className="flex shrink-0 flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="w-fit rounded-full border border-white/35 bg-white/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm md:text-xs">
            Retiro Sedentos 2K26.1
          </div>

          <img
            src={dataBadge}
            alt="Data do evento"
            className="w-[clamp(120px,18svh,210px)] max-w-[72vw] drop-shadow-[0_14px_26px_rgba(0,0,0,0.42)]"
          />

          <img
            src={nameLogo}
            alt="Sedentos"
            className="w-[clamp(260px,42svh,560px)] max-w-[88vw] drop-shadow-[0_20px_32px_rgba(0,0,0,0.35)]"
          />
        </div>

        <div className="grid min-h-0 flex-1 items-center gap-3 md:gap-4 xl:grid-cols-[1.02fr_0.98fr]">
          <img
            src={poster}
            alt="Arte do retiro Sedentos 2K26.1"
            className="mx-auto max-h-[36svh] w-[min(350px,68vw)] rotate-[-2deg] object-contain drop-shadow-[0_22px_44px_rgba(0,0,0,0.44)] md:max-h-[39svh] md:w-[min(390px,36vw)] xl:max-h-[41svh]"
          />

          <div className="flex flex-col justify-center items-center gap-y-4 mx-auto w-full max-w-md rounded-2xl border border-white/20 bg-black/35 p-3 backdrop-blur-md md:p-4">
            <img src={verse} alt="Versículo tema" className="w-1/2"/>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 md:text-xs">
              <CalendarDays className="h-4 w-4" />
              Abril 2026
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-white/85 md:text-xs">
              Um encontro para reacender a sede pelo Espírito Santo, viver comunhão e se lançar em
              uma nova estação com Deus.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center justify-center gap-2.5 pt-2 sm:flex-row">
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToForm}
            className="w-full max-w-xs bg-[#fe412e] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white hover:bg-[#e63623] sm:w-auto md:text-sm">
            Quero me inscrever
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToAbout}
            className="w-full max-w-xs border-white/40 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-white hover:bg-white/20 sm:w-auto md:text-sm">
            O que e o Sedentos?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
