import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Контакты
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-purple-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Социальные сети
              </h3>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full bg-gradient-to-r from-purple-100 to-pink-100 border-purple-300 text-purple-700 hover:bg-purple-200 hover:text-purple-800"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  ВКонтакте
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300 text-blue-700 hover:bg-blue-200 hover:text-blue-800"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Поддержка
              </h3>
              <div className="text-center">
                <Icon
                  name="Mail"
                  size={48}
                  className="mx-auto mb-4 text-orange-500"
                />
                <p className="text-gray-700 mb-4">
                  По вопросам покупки и возврата билетов:
                </p>
                <a
                  href="mailto:info@bombbit.ru"
                  className="text-orange-500 hover:text-orange-600 text-xl font-semibold transition-colors"
                >
                  info@bombbit.ru
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold px-12 py-6 rounded-full text-xl shadow-lg"
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
