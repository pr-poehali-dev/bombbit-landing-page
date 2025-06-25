import Icon from "@/components/ui/icon";

const Venue = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Место проведения
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Icon
              name="MapPin"
              size={64}
              className="mx-auto mb-6 text-orange-400"
            />
            <h3 className="text-3xl font-bold mb-4">
              Олимпийский комплекс «Лужники»
            </h3>
            <p className="text-xl text-gray-300">г. Москва</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-lg border border-purple-500/20">
              <Icon
                name="Music"
                size={32}
                className="mx-auto mb-4 text-purple-400"
              />
              <h4 className="text-lg font-semibold mb-2">Главная сцена</h4>
              <p className="text-gray-300">
                Профессиональное звуковое оборудование
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-800/30 to-yellow-800/30 p-6 rounded-lg border border-orange-500/20">
              <Icon
                name="Coffee"
                size={32}
                className="mx-auto mb-4 text-orange-400"
              />
              <h4 className="text-lg font-semibold mb-2">Lounge-зона</h4>
              <p className="text-gray-300">
                Зона отдыха с напитками и закусками
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-800/30 to-red-800/30 p-6 rounded-lg border border-pink-500/20">
              <Icon
                name="ShoppingBag"
                size={32}
                className="mx-auto mb-4 text-pink-400"
              />
              <h4 className="text-lg font-semibold mb-2">Мерч-зона</h4>
              <p className="text-gray-300">Официальная атрибутика фестиваля</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
