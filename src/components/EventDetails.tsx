import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Coffee } from "lucide-react";
import speakersImage from "@/assets/speakers-event.jpg";
import networkingImage from "@/assets/networking-event.jpg";
import workspaceImage from "@/assets/workspace-event.jpg";
import certificateImage from "@/assets/certificate-event.jpg";

const EventDetails = () => {
  const highlights = [
    {
      icon: Users,
      title: "Networking Premium",
      description: "Conecte-se com líderes de mercado e expanda sua rede profissional"
    },
    {
      icon: Target,
      title: "Insights Estratégicos",
      description: "Aprenda as últimas tendências e estratégias do mercado"
    },
    {
      icon: Award,
      title: "Certificação",
      description: "Receba certificado de participação reconhecido no mercado"
    },
    {
      icon: Coffee,
      title: "Coffee Breaks",
      description: "Momentos exclusivos para networking e troca de experiências"
    }
  ];

  const speakers = [
    {
      name: "Ana Silva",
      role: "CEO Tech Innovation",
      topic: "O Futuro da Inteligência Artificial",
      img: "/ana.jpg"
    },
    {
      name: "Carlos Santos",
      role: "Diretor de Inovação",
      topic: "Transformação Digital nas Empresas",
      img: "/carlos.jpg"
    },
    {
      name: "Jorge Sousa",
      role: "Head of Strategy",
      topic: "Liderança no Século XXI",
      img: "/jorge.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Por que Participar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Este evento foi cuidadosamente planejado para oferecer a você as melhores oportunidades
            de aprendizado e networking
          </p>
        </div>

        {/* Highlights com Imagens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="group overflow-hidden hover:shadow-elegant transition-smooth border-0">
            <div className="relative h-48">
              <img
                src={speakersImage}
                alt="Palestrantes especialistas apresentando no evento"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold mb-1">Palestrantes de Elite</h3>
                <p className="text-sm opacity-90">Especialistas reconhecidos mundialmente</p>
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden hover:shadow-elegant transition-smooth border-0">
            <div className="relative h-48">
              <img
                src={networkingImage}
                alt="Sessão de networking entre profissionais"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold mb-1">Networking Premium</h3>
                <p className="text-sm opacity-90">Conecte-se com líderes do mercado</p>
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden hover:shadow-elegant transition-smooth border-0">
            <div className="relative h-48">
              <img
                src={workspaceImage}
                alt="Ambiente moderno de aprendizado e inovação"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold mb-1">Ambiente Inovador</h3>
                <p className="text-sm opacity-90">Tecnologia e conforto em primeiro lugar</p>
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden hover:shadow-elegant transition-smooth border-0">
            <div className="relative h-48">
              <img
                src={certificateImage}
                alt="Cerimônia de entrega de certificados de participação"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold mb-1">Certificação Oficial</h3>
                <p className="text-sm opacity-90">Reconhecimento profissional garantido</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Speakers */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Palestrantes Confirmados</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-smooth border-0">
              <CardContent className="p-6">
                <div className="w-44 h-44 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="w-[90%] h-[90%] object-cover rounded-full"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2">{speaker.name}</h4>
                <Badge variant="secondary" className="mb-3">
                  {speaker.role}
                </Badge>
                <p className="text-muted-foreground">{speaker.topic}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;