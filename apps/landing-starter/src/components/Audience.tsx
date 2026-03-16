import Image from "next/image";

export function Audience() {
  const b2c = [
    {
      title: "Семьи с детьми",
      description: "Родители выбирают содержательный досуг",
    },
    {
      title: "Культурная аудитория",
      description: "Ценят качество постановки и визуальный язык",
    },
    {
      title: "Театральное сообщество",
      description: "Профессиональный интерес к форматам",
    },
  ];

  const b2b = [
    {
      title: "Частные инвесторы и фонды",
      description: "Долгосрочные проекты",
    },
    {
      title: "Государственные институции",
      description: "Культурная миссия и работа с наследием",
    },
    {
      title: "Бренды для коллабораций",
      description: "Репутационный капитал и семейная аудитория",
    },
    {
      title: "Театры и площадки",
      description: "Сильный контент с прогнозируемым спросом",
    },
  ];

  return (
    <section id="audience" className="relative px-6 lg:px-10 py-16 lg:py-20">
      {/* Decorative vector */}
      <div className="absolute left-10 top-[180px] w-[514px] h-[20px] pointer-events-none hidden lg:block">
        <Image
          src="/images/audience-vector.svg"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Section heading */}
      <div className="flex flex-col gap-4 mb-12 lg:mb-16">
        <p className="font-sans font-semibold text-blue-900 text-[16.76px] tracking-[1.676px] uppercase leading-[25px]">
          аудитория
        </p>
        <h2 className="font-display font-extrabold text-black-800 text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-[-1.26px]">
          Для кого мы работаем
        </h2>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5">
        {/* B2C */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="border-t-2 border-blue-900 pt-5">
            <h3 className="font-sans font-bold text-blue-900 text-xl lg:text-2xl">
              B2C · Зрители
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {b2c.map((item) => (
              <div
                key={item.title}
                className="border-b border-black/8 pb-3 flex flex-col gap-1"
              >
                <h4 className="font-display font-semibold text-black-800 text-xl lg:text-[28px] leading-[47px] tracking-[-0.54px]">
                  {item.title}
                </h4>
                <p className="font-sans text-grey-700 text-base lg:text-[20px] leading-[42px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* B2B */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="border-t-2 border-grey-500 pt-5">
            <h3 className="font-sans font-bold text-grey-500 text-xl lg:text-2xl">
              B2B · Партнёры
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {b2b.map((item) => (
              <div
                key={item.title}
                className="border-b border-black/8 pb-3 flex flex-col gap-1"
              >
                <h4 className="font-display font-semibold text-black-800 text-xl lg:text-[28px] leading-[47px] tracking-[-0.54px]">
                  {item.title}
                </h4>
                <p className="font-sans text-grey-700 text-base lg:text-[20px] leading-[42px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
