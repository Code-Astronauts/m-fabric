import WaveHero from "@/components/WaveHero";

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
    <section id="partnership" className="bg-navy py-14 lg:py-24 relative">

      <div className="absolute inset-0 pointer-events-none z-0 bg-navy">
        <WaveHero
            src="/images/hero-bg-mirrored.jpg"
            amplitudeScale={0.3}
            riseRate={0.06}
            fallRate={0.01}
            className="opacity-30"
        />
      </div>

      <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px] relative z-5">
        <div className="max-w-[925px]">
          {/* Label */}
          <p className="font-sans text-label-dark text-[13px] leading-[1.4] tracking-[1.4px] uppercase mb-4 lg:mb-5">
            Партнёрство
          </p>

          {/* Heading */}
          <h2 className="font-display font-bold text-white text-[28px] leading-[1.2] lg:text-[36px] lg:leading-10 mb-4 lg:mb-5">
            Возможности для партнёрства
          </h2>

          {/* Description */}
          <p className="font-sans text-light-muted text-[15px] leading-[1.5] lg:text-[18px] lg:leading-7 max-w-[768px] mb-8 lg:mb-12">
            М_фабрика детского контента открыта к долгосрочному сотрудничеству
            с инвесторами, институциями, брендами и площадками.
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {partnerCards.map((card) => (
              <div
                key={card.title}
                className="bg-white/10 border border-white/10 rounded-xl p-6 lg:p-8 flex flex-col gap-3 lg:gap-4"
              >
                <h3 className="font-display font-bold text-white text-[18px] leading-[1.3] lg:text-[20px] lg:leading-7">
                  {card.title}
                </h3>
                <p className="font-sans text-light-muted text-[14px] leading-[1.5]">
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
