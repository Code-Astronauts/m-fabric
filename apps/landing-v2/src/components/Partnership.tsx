const partnerCards = [
  {
    title: "Инвесторы",
    text: "Портфель масштабируемых проектов с долгосрочным циклом жизни. Доказанный спрос и растущая аудитория из сезона в сезон.",
  },
  {
    title: "Государственные институции",
    text: "Развитие культурной среды и работа с национальным наследием. Проекты с высоким социальным и образовательным значением.",
  },
  {
    title: "Бренды",
    text: "Репутационный капитал и семейная аудитория.",
  },
  {
    title: "Площадки",
    text: "Сильный контент с прогнозируемым спросом.",
  },
];

export function Partnership() {
  return (
    <section id="partnership" className="bg-navy py-16 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-5 sm:px-10 lg:px-[208px]">
        <div className="max-w-[925px]">
          {/* Label */}
          <p className="font-sans text-label-dark text-[14px] leading-5 tracking-[1.4px] uppercase mb-5">
            Партнёрство
          </p>

          {/* Heading */}
          <h2 className="font-display font-bold text-white text-3xl lg:text-[36px] leading-10 mb-5">
            Возможности для партнёрства
          </h2>

          {/* Description */}
          <p className="font-sans text-light-muted text-base lg:text-[18px] leading-7 max-w-[768px] mb-10 lg:mb-12">
            М_фабрика детского контента открыта к долгосрочному сотрудничеству
            с инвесторами, институциями, брендами и площадками.
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partnerCards.map((card) => (
              <div
                key={card.title}
                className="bg-white/10 border border-white/10 rounded-xl p-8 flex flex-col gap-4"
              >
                <h3 className="font-display font-bold text-white text-[20px] leading-7">
                  {card.title}
                </h3>
                <p className="font-sans text-light-muted text-[14px] leading-[22.75px]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
