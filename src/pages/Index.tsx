import Hero from "@/components/Hero";
import Artists from "@/components/Artists";
import Schedule from "@/components/Schedule";
import Tickets from "@/components/Tickets";
import Venue from "@/components/Venue";
import Partners from "@/components/Partners";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Artists />
      <Schedule />
      <Tickets />
      <Venue />
      <Partners />
      <Contacts />
    </div>
  );
};

export default Index;
