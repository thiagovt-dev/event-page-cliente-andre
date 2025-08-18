import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const EventFooter = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Event Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Conecte-se ao Futuro</h3>
            <p className="text-white/80 mb-4">
              Um evento transformador que reunirá mentes brilhantes para discutir 
              inovação e o futuro dos negócios.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>contato@evento.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-white/80 hover:text-white transition-smooth">
                Início
              </a>
              <a href="#sobre" className="block text-white/80 hover:text-white transition-smooth">
                Sobre o Evento
              </a>
              <a href="#palestrantes" className="block text-white/80 hover:text-white transition-smooth">
                Palestrantes
              </a>
              <a href="#inscricao" className="block text-white/80 hover:text-white transition-smooth">
                Inscrições
              </a>
            </div>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Detalhes do Evento</h4>
            <div className="space-y-2 text-white/80">
              <div>
                <div className="font-medium">Data:</div>
                <div>15 de Outubro de 2025</div>
              </div>
              <div>
                <div className="font-medium">Horário:</div>
                <div>09:00 às 18:00</div>
              </div>
              <div>
                <div className="font-medium">Local:</div>
                <div>Centro de Convenções</div>
                <div>Av. Paulista, 1000</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Conecte-se ao Futuro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EventFooter;