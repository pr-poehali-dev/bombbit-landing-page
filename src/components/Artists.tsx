import { Card, CardContent } from "@/components/ui/card";

const Artists = () => {
  const artists = [
    "Cream Soda",
    "Дора",
    "Niletto",
    "Xolidayboy",
    "Хаски",
    "Thomas Mraz",
    "OG Buda",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Артисты
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <Card
              key={artist}
              className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 border-purple-500/30 hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{artist}</h3>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎤</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
