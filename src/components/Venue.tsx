import Icon from "@/components/ui/icon";

const Venue = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          Место проведения
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Venue Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop"
              alt="Лужники"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="text-center mb-12">
            <Icon
              name="MapPin"
              size={64}
              className="mx-auto mb-6 text-blue-500"
            />
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Олимпийский комплекс «Лужники»
            </h3>
            <p className="text-xl text-gray-600">г. Москва</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-xl border border-pink-200 shadow-lg">
              <Icon
                name="Music"
                size={32}
                className="mx-auto mb-4 text-pink-500"
              />
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                Главная сцена
              </h4>
              <p className="text-gray-600">
                Профессиональное звуковое оборудование
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 p-6 rounded-xl border border-blue-200 shadow-lg">
              <Icon
                name="Coffee"
                size={32}
                className="mx-auto mb-4 text-blue-500"
              />
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                Lounge-зона
              </h4>
              <p className="text-gray-600">
                Зона отдыха с напитками и закусками
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl border border-purple-200 shadow-lg">
              <Icon
                name="ShoppingBag"
                size={32}
                className="mx-auto mb-4 text-purple-500"
              />
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                Мерч-зона
              </h4>
              <p className="text-gray-600">Официальная атрибутика фестиваля</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
