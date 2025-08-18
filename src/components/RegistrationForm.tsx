import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Calendar, MapPin, DollarSign, Info } from "lucide-react";

const RegistrationForm = () => {
  return (
    <section id="inscricao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Garante Sua Vaga
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário abaixo e faça parte desta experiência única
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Event Summary */}
            <div className="space-y-6">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Resumo do Evento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 md:space-y-7">
                <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-lg md:text-xl">25 a 26 de Setembro</div>
                </div>
                </div>
                <div className="flex items-center space-x-3">
                <DollarSign className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-lg md:text-xl">Valor: R$ 180,00</div>
                  <div className="font-semibold text-base md:text-lg">lote único</div>
                </div>
                </div>
                <div className="flex flex-col ">
                <div className="flex items-center space-x-3 mb-2">
                  <Info className="w-6 h-6 text-primary" />
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
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-lg md:text-xl">Vagas Limitadas</div>
                  {/* <div className="text-sm text-muted-foreground">Apenas 500 participantes</div> */}
                </div>
                </div>
              </CardContent>
              </Card>

              {/* <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Incluído na Inscrição:</h3>
                <ul className="space-y-2 text-sm">
                <li>✓ Acesso a todas as palestras</li>
                <li>✓ Material didático exclusivo</li>
                <li>✓ Coffee breaks e almoço</li>
                <li>✓ Certificado de participação</li>
                <li>✓ Acesso ao networking exclusivo</li>
                <li>✓ Kit do participante</li>
                </ul>
              </CardContent>
              </Card> */}
            </div>

            {/* Call to Action para Inscrição */}
            <div>
              <Card className="overflow-hidden shadow-elegant text-center">
                <CardHeader className="bg-gradient-primary text-white">
                  <CardTitle className="text-2xl">Garanta Sua Vaga Agora!</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <ExternalLink className="w-10 h-10 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3">Inscrição Rápida e Segura</h3>
                      <p className="text-muted-foreground mb-6">
                        Clique no botão abaixo para acessar nosso formulário oficial do Google Forms
                        e garantir sua participação neste evento único.
                      </p>
                    </div>

                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-primary-glow text-white px-8 py-4 text-lg font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                      onClick={() =>
                        window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLSfD4vMppfkvBLwqUTGjRkcBZQU33eqNCJfkNZ4G_mUYxKXOrA/viewform?usp=header",
                          "_blank"
                        )
                      }>
                      <ExternalLink className="w-5 h-5 mr-2" />
                      INSCREVER-SE AGORA
                    </Button>

                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
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
