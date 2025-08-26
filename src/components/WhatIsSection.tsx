import photo from "@/assets/imagem2.png";
import heroLogo from "@/assets/hero_o_que_e.png";

const WhatIsSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        {/* Texto (esquerda) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="tracking-tight animate-in slide-in-from-bottom-4 duration-1000 flex flex-col items-center mb-4">
            <img
              src={heroLogo}
              alt="O que é"
              className="w-[90vw] md:w-[35vw] animate-in slide-in-from-bottom-4 duration-1000"
            />
          </div>

          <h2  className="text-lg md:text-2xl block mb-6 font-bold text-[#007EBD] tracking-wider relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
            Conheça mais sobre essa experiência
          </h2>

          <p className="text-primary md:text-xl text-lg leading-relaxed mb-8 max-w-xl font-extrabold">
            O SEDENTOS 25.2 será um divisor de águas na sua vida com Deus!
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
            São três dias inesquecíveis, onde você viverá as águas mais profundas com Deus.
          </p>
        </div>

        {/* Imagem (direita) */}
        <div className="tracking-tight animate-in slide-in-from-bottom-4 duration-1000 flex flex-col items-center mb-4">
          <img
            src={photo}
            alt="Participantes reunidos no evento"
            className="w-[90vw] md:w-[35vw] animate-in slide-in-from-bottom-4 duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
