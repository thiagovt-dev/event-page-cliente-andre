import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/background.png";
import heroLogo from "@/assets/logo.png";
import tema from "@/assets/tema 1.png";
import rcc from "@/assets/rcc.png";
import poco from "@/assets/poco.png";

const EventHero = () => {
  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* <div className="absolute inset-0 bg-gradient-hero opacity-90" /> */}

      <div className="relative z-10 container mx-auto px-4 py-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="tracking-tight animate-in slide-in-from-bottom-4 duration-1000 flex flex-col items-center">
            <img
              src={heroLogo}
              alt="Sedentos Logo"
              className="w-[90vw] md:w-[35vw] animate-in slide-in-from-bottom-4 duration-1000"
            />
          </div>
          <div className="flex justify-center items-center gap-4 mb-4">
            <Calendar className="w-8 h-8 text-primary-glow" />
            <span className="text-lg md:text-xl font-semibold">26 a 28 de Setembro</span>
          </div>
          <div className="flex justify-center items-center gap-4 mb-8">
            <MapPin className="w-8 h-8 text-primary-glow" />
            <span className="text-lg font-semibold"> Imperatriz - MA</span>
          </div>
          <p className="text-lg md:text-2xl block mt-2 font-bold text-[#007EBD] tracking-wider relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
            Tema: Fé & Conversão
          </p>
          <div className=" tracking-tight animate-in slide-in-from-bottom-4 duration-1000 flex flex-col items-center">
            <img
              src={tema}
              alt="tema"
              className="w-[90vw] md:w-[20vw] mb-2 animate-in slide-in-from-bottom-4 duration-1000"
            />
          </div>
          {/* <p className="text-xl md:text-3xl mb-8 opacity-95 animate-in slide-in-from-bottom-4 duration-1000 delay-200 text-center">
            <span className="block bg-gradient-to-r from-primary-glow to-secondary-foreground bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
              "Mas o que beber da água que eu lhe der jamais terá sede"
            </span>
            <span className="block mt-2 font-bold text-accent tracking-wider relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
              João 04,14
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-8 h-0.5 bg-accent/70 rounded-full"></span>
            </span>
          </p> */}

          <Button
            variant="hero"
            size="lg"
            onClick={scrollToForm}
            className="text-xl px-12 py-6 animate-in slide-in-from-bottom-4 duration-1000 delay-600">
            Inscreva-se
          </Button>

          <div className="mt-8 flex justify-center gap-8">
            <img src={poco} alt="Poço de Jacó" className="h-26" />
            <img src={rcc} alt="RCC Diocese de Imperatriz" className="h-26" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
