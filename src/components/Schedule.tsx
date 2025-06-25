const Schedule = () => {
  const schedule = [
    { time: "17:00", event: "Вступительная речь, приветствие, разогрев" },
    { time: "17:40", event: "Cream Soda" },
    { time: "18:00", event: "Дора" },
    { time: "18:30", event: "Niletto" },
    { time: "19:00", event: "Xolidayboy" },
    { time: "19:30", event: "Хаски" },
    { time: "19:50", event: "Перерыв, развлекательная программа" },
    { time: "20:20", event: "Thomas Mraz" },
    { time: "20:50", event: "OG Buda" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Программа
        </h2>

        <div className="max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-6 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-orange-400 min-w-[120px]">
                {item.time}
              </div>
              <div className="text-lg flex-1 ml-6">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
