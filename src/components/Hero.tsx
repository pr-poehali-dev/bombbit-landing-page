import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          BOMB
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            BIT
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
          Музыкальный фестиваль, который взорвёт твой мир
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-lg">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={24} />
            <span>20 июля 2023</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={24} />
            <span>Лужники, Москва</span>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
        >
          Купить билет
        </Button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;
