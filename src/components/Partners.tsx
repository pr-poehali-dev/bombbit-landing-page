const Partners = () => {
  const partners = [
    "ВКонтакте",
    "Яндекс.Музыка",
    "Одноклассники",
    "Русское Радио",
    "Сбербанк",
    "Альфа Банк",
    "ТНТ Музыка",
    "Муз-ТВ",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Партнёры
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {partner}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
