import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import dataBadge from "@/assets/v2/DATA.png";

type DeadlineBannerProps = {
  // Opcional: defina um prazo fixo (ISO string ou Date).
  // Se não for passado, usa 25/04 (fim do dia) do ano corrente.
  deadline?: string | Date;
};

function formatTime(msRemaining: number) {
  if (msRemaining <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  const totalSeconds = Math.floor(msRemaining / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
}

const DeadlineBanner = ({ deadline }: DeadlineBannerProps) => {
  const [targetTime, setTargetTime] = useState<number | null>(null);
  const [now, setNow] = useState<number>(Date.now());

  // Define/recupera o prazo alvo.
  useEffect(() => {
    // Se o prazo vier por prop, usa-o diretamente
    if (deadline) {
      const ts = typeof deadline === "string" ? new Date(deadline).getTime() : deadline.getTime();
      setTargetTime(ts);
      return;
    }

    // Padrão: 25/04 do ano corrente às 23:59:59 (horário local)
    const nowDate = new Date();
    const currentYear = nowDate.getFullYear();
    const target = new Date(currentYear, 3, 25, 23, 59, 59, 999); // mês 3 = Abril

    // Caso já tenha passado neste ano, define para o próximo ano
    if (target.getTime() <= nowDate.getTime()) {
      target.setFullYear(currentYear + 1);
    }

    setTargetTime(target.getTime());
  }, [deadline]);

  // Tick do relógio a cada segundo
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = useMemo(() => {
    if (!targetTime) return 0;
    return Math.max(targetTime - now, 0);
  }, [targetTime, now]);

  const { days, hours, minutes, seconds } = useMemo(() => formatTime(remaining), [remaining]);

  const isExpired = remaining <= 0;

  const handleScrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative border-y border-white/10 bg-[linear-gradient(120deg,#05a4d9_0%,#2a5fd6_45%,#152050_100%)] py-10 md:py-14">
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.23),transparent_35%),radial-gradient(circle_at_80%_65%,rgba(255,82,55,0.32),transparent_32%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <img
              src={dataBadge}
              alt="Data do evento"
              className="mx-auto mb-3 w-44 md:mx-0 md:w-52"
            />
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Contagem Regressiva
            </p>
            <h3 className="text-2xl font-black text-white md:text-3xl">
              {isExpired ? "Inscrições encerradas" : "Não perca a chance de se inscrever!"}
            </h3>
            <p className="mt-1 text-white/80">
              {isExpired
                ? "O prazo de inscrição foi finalizado."
                : "Garanta sua vaga antes do término do prazo."}
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="flex items-center gap-2 md:gap-3">
              <TimeBox label="Dias" value={days} />
              <span className="-mt-3 text-2xl font-black text-white">:</span>
              <TimeBox label="Horas" value={hours} />
              <span className="-mt-3 text-2xl font-black text-white">:</span>
              <TimeBox label="Min" value={minutes} />
              <span className="-mt-3 text-2xl font-black text-white">:</span>
              <TimeBox label="Seg" value={seconds} />
            </div>

            <Button
              size="lg"
              className="bg-[#ff4530] px-6 font-bold uppercase tracking-[0.08em] text-white hover:bg-[#df3320] md:px-8"
              onClick={handleScrollToForm}
              disabled={isExpired}>
              {isExpired ? "Prazo encerrado" : "Inscreva-se agora"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeBox = ({ label, value }: { label: string; value: string }) => (
  <div className="w-20 md:w-24">
    <div className="rounded-lg border border-white/35 bg-black/25 px-3 py-2 text-center shadow-sm backdrop-blur-md">
      <div className="tabular-nums text-2xl font-black tracking-wider text-white md:text-3xl">
        {value}
      </div>
    </div>
    <div className="mt-1 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
      {label}
    </div>
  </div>
);

export default DeadlineBanner;
