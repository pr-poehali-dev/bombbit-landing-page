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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Билеты
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:scale-105 transition-all duration-300"
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
                <p className="text-gray-300 mb-6">{ticket.description}</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full">
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
