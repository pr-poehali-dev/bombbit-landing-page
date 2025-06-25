import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Tickets = () => {
  const tickets = [
    {
      type: "Входной (Танцпол)",
      price: "3 500 ₽",
      description:
        "Доступ на основную часть фестиваля, отдельная зона для отдыха и танцпол",
      color: "from-purple-500 to-pink-500",
    },
    {
      type: "Билет VIP",
      price: "8 000 ₽",
      description: "Комфортная зона на VIP-балконе, отдельный вход",
      color: "from-pink-500 to-orange-500",
    },
    {
      type: "VIP FULL",
      price: "12 000 ₽",
      description: "Вход на after-party с артистами в премиальном месте",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Билеты
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm border-pink-200 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <CardHeader
                className={`bg-gradient-to-r ${ticket.color} p-6 rounded-t-lg`}
              >
                <h3 className="text-2xl font-bold text-white text-center">
                  {ticket.type}
                </h3>
                <div className="text-4xl font-bold text-white text-center mt-2">
                  {ticket.price}
                </div>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <p className="text-gray-700 mb-6">{ticket.description}</p>
                <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold py-3 rounded-full shadow-lg">
                  <Icon name="Ticket" size={20} className="mr-2" />
                  Купить билет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
