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
    <section className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
          Программа
        </h2>

        <div className="max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-6 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="text-2xl font-bold text-purple-600 min-w-[120px] bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg">
                {item.time}
              </div>
              <div className="text-lg flex-1 ml-6 text-gray-800">
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
