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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Партнёры
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold">{partner}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
