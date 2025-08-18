import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";

type DeadlineBannerProps = {
  // Opcional: defina um prazo fixo (ISO string ou Date).
  // Se não for passado, cria um prazo de 24h a partir da primeira visita (persistido em localStorage).
  deadline?: string | Date;
};

const STORAGE_KEY = "registrationDeadline";

function formatTime(msRemaining: number) {
  if (msRemaining <= 0) return { hours: "00", minutes: "00", seconds: "00" };
  const totalSeconds = Math.floor(msRemaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return { hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
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

    // Caso contrário, tenta recuperar do localStorage ou cria 24h a partir de agora
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const ts = Number(stored);
      if (!Number.isNaN(ts)) {
        setTargetTime(ts);
        return;
      }
    }

    const newTarget = Date.now() + 24 * 60 * 60 * 1000; // 24 horas
    localStorage.setItem(STORAGE_KEY, String(newTarget));
    setTargetTime(newTarget);
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

  const { hours, minutes, seconds } = useMemo(() => formatTime(remaining), [remaining]);

  const isExpired = remaining <= 0;

  const handleScrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-10 md:py-14 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
              Contagem Regressiva
            </p>
            <h3 className="text-2xl md:text-3xl font-bold">
              {isExpired ? "Inscrições encerradas" : "Últimas 24 horas para se inscrever"}
            </h3>
            <p className="text-muted-foreground mt-1">
              {isExpired
                ? "O prazo de inscrição foi finalizado."
                : "Garanta sua vaga antes do término do prazo."}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3 md:gap-4">
              <TimeBox label="Horas" value={hours} />
              <span className="text-2xl font-bold -mt-3">:</span>
              <TimeBox label="Min" value={minutes} />
              <span className="text-2xl font-bold -mt-3">:</span>
              <TimeBox label="Seg" value={seconds} />
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow text-white px-6 md:px-8"
              onClick={handleScrollToForm}
              disabled={isExpired}
            >
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
    <div className="rounded-lg border border-primary/20 bg-white/70 backdrop-blur-md shadow-sm px-3 py-2 text-center">
      <div className="text-2xl md:text-3xl font-bold tabular-nums tracking-wider">{value}</div>
    </div>
    <div className="text-xs text-center text-muted-foreground mt-1">{label}</div>
  </div>
);

export default DeadlineBanner;

