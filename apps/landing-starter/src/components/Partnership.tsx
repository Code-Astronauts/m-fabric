export function Partnership() {
  const partners = [
    {
      title: "Инвесторы",
      description: "Портфель масштабируемых проектов с долгосрочным циклом жизни.",
    },
    {
      title: "Государственные институции",
      description: "Развитие культурной среды и работа с национальным наследием.",
    },
    {
      title: "Бренды",
      description: "Репутационный капитал и семейная аудитория.",
    },
    {
      title: "Площадки",
      description: "Сильный контент с прогнозируемым спросом.",
    },
  ];

  return (
    <section id="partnership" className="px-6 lg:px-10 py-16 lg:py-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12 lg:mb-16">
        <div className="flex flex-col gap-4 max-w-[676px]">
          <p className="font-sans font-semibold text-blue-900 text-[16px] tracking-[1.676px] uppercase leading-6">
            Партнёрство
          </p>
          <h2 className="font-display font-extrabold text-black-800 text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-[-1.26px]">
            Возможности
            <br />
            для партнёрства
          </h2>
        </div>
        <p className="font-sans text-grey-700 text-base lg:text-[20px] leading-8 max-w-[495px]">
          М_фабрика детского контента открыта к долгосрочному сотрудничеству с
          инвесторами, институциями, брендами и площадками.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {partners.map((partner) => (
          <div
            key={partner.title}
            className="bg-white border border-black/8 rounded-3xl p-10 lg:p-[51px] min-h-[180px] lg:min-h-[220px] flex flex-col gap-3"
          >
            <h3 className="font-display font-bold text-blue-900 text-xl lg:text-[28px] leading-[42px] tracking-[-0.28px]">
              {partner.title}
            </h3>
            <p className="font-sans text-black/55 text-base lg:text-[20px] leading-8">
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
