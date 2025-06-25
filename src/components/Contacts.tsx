import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Контакты
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Социальные сети
              </h3>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-purple-500 text-white hover:bg-purple-500 hover:text-white"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  ВКонтакте
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-blue-500 text-white hover:bg-blue-500 hover:text-white"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-800/30 to-yellow-800/30 p-8 rounded-lg border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Поддержка</h3>
              <div className="text-center">
                <Icon
                  name="Mail"
                  size={48}
                  className="mx-auto mb-4 text-orange-400"
                />
                <p className="text-gray-300 mb-4">
                  По вопросам покупки и возврата билетов:
                </p>
                <a
                  href="mailto:info@bombbit.ru"
                  className="text-orange-400 hover:text-orange-300 text-xl font-semibold transition-colors"
                >
                  info@bombbit.ru
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-12 py-6 rounded-full text-xl"
            >
              Купить билет сейчас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
