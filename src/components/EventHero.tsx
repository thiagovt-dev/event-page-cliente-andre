import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";

const EventHero = () => {
  const scrollToForm = () => {
    document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-4 duration-1000">
            Conecte-se ao Futuro
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Um evento transformador que reunirá as mentes mais brilhantes para 
            discutir inovação, tecnologia e o futuro dos negócios
          </p>
          
          {/* Event Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
            <div className="flex flex-col items-center space-y-2">
              <Calendar className="w-8 h-8 text-primary-glow" />
              <div className="text-sm font-semibold">15 de Março</div>
              <div className="text-xs opacity-80">2025</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Clock className="w-8 h-8 text-primary-glow" />
              <div className="text-sm font-semibold">09:00 - 18:00</div>
              <div className="text-xs opacity-80">Horário</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-8 h-8 text-primary-glow" />
              <div className="text-sm font-semibold">Centro de Convenções</div>
              <div className="text-xs opacity-80">São Paulo</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="w-8 h-8 text-primary-glow" />
              <div className="text-sm font-semibold">500+ Participantes</div>
              <div className="text-xs opacity-80">Networking</div>
            </div>
          </div>

          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToForm}
            className="text-xl px-12 py-6 animate-in slide-in-from-bottom-4 duration-1000 delay-600"
          >
            Inscreva-se Agora
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-glow rounded-full animate-bounce" />
      <div className="absolute top-32 right-20 w-6 h-6 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary-glow rounded-full animate-ping" />
    </section>
  );
};

export default EventHero;