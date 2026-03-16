const b2cGroups = [
  { title: "Семьи с детьми", subtitle: "Родители выбирают содержательный досуг" },
  { title: "Культурная аудитория", subtitle: "Ценят качество постановки и визуальный язык" },
  { title: "Театральное сообщество", subtitle: "Профессиональный интерес к форматам" },
];

const b2bGroups = [
  { title: "Частные инвесторы и фонды", subtitle: "Долгосрочные проекты" },
  { title: "Государственные институции", subtitle: "Культурная миссия и работа с наследием" },
  { title: "Бренды для коллабораций", subtitle: "Репутационный капитал и семейная аудитория" },
  { title: "Театры и площадки", subtitle: "Сильный контент с прогнозируемым спросом" },
];

function AudienceCard({
  groups,
  category,
}: {
  groups: { title: string; subtitle: string }[];
  category: string;
}) {
  return (
    <div className="border border-accent-grey rounded-xl p-8 flex flex-col gap-6">
      <h3 className="font-display font-bold text-dark text-2xl leading-8">
        {category}
      </h3>
      <div className="flex flex-col gap-5">
        {groups.map((g) => (
          <div key={g.title} className="flex flex-col gap-1">
            <p className="font-display font-semibold text-dark text-[18px] leading-7">
              {g.title}
            </p>
            <p className="font-sans text-muted text-[14px] leading-5">
              {g.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Audience() {
  return (
    <section id="audience" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-5 sm:px-10 lg:px-[208px]">
        <div className="max-w-[925px]">
          {/* Label */}
          <p className="font-sans text-brand-blue text-[14px] leading-5 tracking-[1.4px] uppercase mb-5">
            Аудитория
          </p>

          {/* Heading */}
          <h2 className="font-display font-bold text-dark text-3xl lg:text-[36px] leading-10 mb-10 lg:mb-12">
            Для кого мы работаем
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AudienceCard category="B2C · Зрители" groups={b2cGroups} />
            <AudienceCard category="B2B · Партнёры" groups={b2bGroups} />
          </div>
        </div>
      </div>
    </section>
  );
}
