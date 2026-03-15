import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Calendar, DollarSign, Info } from "lucide-react";
import nameLogo from "@/assets/v2/NAME.png";

const RegistrationForm = () => {
  return (
    <section
      id="inscricao"
      className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(5,164,217,0.06),rgba(255,255,255,0.96)_35%)] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <img src={nameLogo} alt="Sedentos" className="mx-auto mb-5 w-[min(460px,92vw)]" />
            <h2 className="mb-4 text-4xl uppercase tracking-[0.07em] text-[#0f3f77] md:text-6xl">
              Garanta sua vaga
            </h2>
            <p className="text-lg text-slate-600 md:text-xl">
              Faça sua inscrição e participe dessa experiência com Deus.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="border-2 border-[#1f57c5]/20 bg-white/80 shadow-[0_22px_50px_-24px_rgba(22,58,145,0.7)] backdrop-blur-sm transition-smooth hover:border-[#1f57c5]/40">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl md:text-3xl">Resumo do Evento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 md:space-y-7">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-[#1f57c5]" />
                    <div>
                      <div className="font-semibold text-lg md:text-xl">24 a 26 de Abril</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-[#1f57c5]" />
                    <div>
                      <div className="font-semibold text-lg md:text-xl">Valor: R$ 200,00</div>
                      <div className="font-semibold text-base md:text-lg">lote único</div>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex items-center space-x-3 mb-2">
                      <Info className="w-6 h-6 text-[#1f57c5]" />
                      <div className="font-semibold text-lg md:text-xl">Incluso no valor</div>
                    </div>
                    <ul className="list-disc pl-5 text-base md:text-lg space-y-2">
                      <li>Transporte até o local</li>
                      <li>
                        Todas as alimentações (Café da manhã, almoço, janta e dois lanches por dia)
                      </li>
                      <li>Lembranças, mimos e etc...</li>
                    </ul>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-[#1f57c5]" />
                    <div>
                      <div className="font-semibold text-lg md:text-xl">Vagas Limitadas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="overflow-hidden text-center shadow-[0_22px_50px_-24px_rgba(254,65,46,0.75)]">
                <CardHeader className="bg-[linear-gradient(125deg,#ff5a41,#f23f2d_45%,#d93225)] text-white">
                  <CardTitle className="text-2xl uppercase tracking-[0.08em]">
                    Garanta sua vaga agora!
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(125deg,#2a69da,#05a4d9)]">
                      <ExternalLink className="w-10 h-10 text-white" />
                    </div>

                    <div>
                      <h3 className="mb-3 text-2xl font-bold">Inscrição rápida e segura</h3>
                      <p className="mb-6 text-muted-foreground">
                        Clique no botão abaixo para acessar nosso formulário oficial do Google Forms
                        e garantir sua participação neste evento único.
                      </p>
                    </div>

                    <Button
                      size="lg"
                      className="bg-[#ff4530] px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_28px_-12px_rgba(243,62,44,0.9)] transition-all duration-300 hover:scale-105 hover:bg-[#df3320]"
                      onClick={() =>
                        window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLScs5hYI2NbKTjPPTY8cwj2f2LmNqezGUwoDjU-sUxcjptfo6w/viewform?usp=dialog",
                          "_blank",
                        )
                      }>
                      <ExternalLink className="w-5 h-5 mr-2" />
                      INSCREVER-SE AGORA
                    </Button>

                    <div className="mt-6 grid grid-cols-3 gap-4 border-t pt-6">
                      <div>
                        <div className="text-2xl mb-1">⚡</div>
                        <p className="text-sm font-medium">Processo Rápido</p>
                        <p className="text-xs text-muted-foreground">Apenas 2 minutos</p>
                      </div>
                      <div>
                        <div className="text-2xl mb-1">🔒</div>
                        <p className="text-sm font-medium">100% Seguro</p>
                        <p className="text-xs text-muted-foreground">Google Forms</p>
                      </div>
                      <div>
                        <div className="text-2xl mb-1">📧</div>
                        <p className="text-sm font-medium">Confirmação</p>
                        <p className="text-xs text-muted-foreground">Por email</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Dúvidas sobre a inscrição? Entre em contato:
                  <a href="mailto:contato@evento.com" className="text-primary hover:underline ml-1">
                    contato@evento.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
