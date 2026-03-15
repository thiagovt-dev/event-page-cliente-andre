import photo from "@/assets/v2/imagem.png";
import sectionLogo from "@/assets/v2/o que é o sedentos_.png";
import objectOne from "@/assets/v2/objeto 01.png";

const WhatIsSection = () => {
  return (
    <section id="sobre" className="relative overflow-hidden py-16 md:py-24">
      <img
        src={objectOne}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-8 hidden w-20 opacity-60 md:block"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="order-2 flex flex-col items-start text-left lg:order-1">
          <img src={sectionLogo} alt="O que e o Sedentos" className="mb-6 w-[min(520px,92vw)]" />

          <h2 className="mb-5 text-3xl uppercase tracking-[0.06em] text-[#0f3f77] md:text-5xl">
            Conheça essa experiência
          </h2>

          <p className="mb-5 text-base leading-relaxed text-slate-700 md:text-lg">
            O Sedentos 2K26.1 e um retiro de jovens que desejam viver um encontro real com o
            Espírito Santo, em um ambiente de oração, comunhão e alegria.
          </p>

          <p className="mb-5 text-base leading-relaxed text-slate-700 md:text-lg">
            Serão dias de pregações, louvor, adoração e partilhas que ajudam você a mergulhar mais
            fundo no chamado de Deus para a sua vida.
          </p>

          <p className="rounded-xl border border-[#2a69da]/20 bg-white/75 px-4 py-3 text-sm font-semibold uppercase tracking-[0.09em] text-[#12478b] shadow-sm md:text-base">
            Não e apenas um evento. E uma resposta para quem sente sede de mais.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[linear-gradient(120deg,#06afe8,#3f5dcf,#ff5a41)] opacity-20 blur-xl" />
            <img
              src={photo}
              alt="Participantes reunidos no Sedentos"
              className="w-full rotate-[-2deg] drop-shadow-[0_26px_46px_rgba(3,18,50,0.28)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
