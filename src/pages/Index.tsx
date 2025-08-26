import EventHero from "@/components/EventHero";
import EventDetails from "@/components/EventDetails";
import DeadlineBanner from "@/components/DeadlineBanner";
import WhatIsSection from "@/components/WhatIsSection";
import RegistrationForm from "@/components/RegistrationForm";
import EventFooter from "@/components/EventFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EventHero />
      {/* <EventDetails /> */}
      {/* Banner de contagem regressiva entre sessões */}
      <DeadlineBanner />
      <WhatIsSection />
      <RegistrationForm />
      {/* <EventFooter /> */}
    </div>
  );
};

export default Index;
