import { Reveal } from "@/components/Reveal";

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
    <div className="border border-accent-grey rounded-xl p-6 lg:p-8 flex flex-col gap-5 lg:gap-6">
      <h3 className="font-display font-bold text-dark text-[22px] leading-[1.2] lg:text-2xl lg:leading-8">
        {category}
      </h3>
      <div className="flex flex-col gap-4 lg:gap-5">
        {groups.map((g) => (
          <div key={g.title} className="flex flex-col gap-0.5">
            <p className="font-display font-semibold text-dark text-[16px] leading-[1.4] lg:text-[18px] lg:leading-7">
              {g.title}
            </p>
            <p className="font-sans text-muted text-[13px] leading-[1.4] lg:text-[14px] lg:leading-5">
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
    <section id="audience" className="relative bg-white py-14 lg:py-24">
      {/* Illustration: flower */}
      <div
        className="hidden lg:block absolute pointer-events-none z-0"
        style={{ right: "5%", bottom: 500, width: 178, height: 161 }}
        aria-hidden="true"
      >
        <img
          src="/images/illus-flower.svg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
        <div className="max-w-[925px]">
          <Reveal>
            <p className="font-sans text-brand-blue text-[13px] leading-[1.4] tracking-[1.4px] uppercase mb-4 lg:mb-5">
              Аудитория
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display font-bold text-dark text-[28px] leading-[1.2] lg:text-[36px] lg:leading-10 mb-8 lg:mb-12">
              Для кого мы работаем
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            <Reveal delay={200}>
              <AudienceCard category="B2C · Зрители" groups={b2cGroups} />
            </Reveal>
            <Reveal delay={320}>
              <AudienceCard category="B2B · Партнёры" groups={b2bGroups} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
