import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop"
          alt="Festival Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 text-center text-gray-800 px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          BOMB
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            BIT
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 animate-fade-in text-gray-700">
          Музыкальный фестиваль, который взорвёт твой мир
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-lg text-gray-700">
          <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
            <Icon name="Calendar" size={24} className="text-pink-500" />
            <span>20 июля 2023</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
            <Icon name="MapPin" size={24} className="text-purple-500" />
            <span>Лужники, Москва</span>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Купить билет
        </Button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-purple-500" />
      </div>
    </section>
  );
};

export default Hero;
