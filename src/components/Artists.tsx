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
    <section className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Артисты
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <Card
              key={artist}
              className="bg-white/80 backdrop-blur-sm border-pink-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1470225620780 + index}-15ded8ba5ccb?q=80&w=400&auto=format&fit=crop`}
                    alt={artist}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {artist}
                </h3>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-xl">🎤</span>
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
