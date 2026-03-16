// Simple SVG icons matching the Figma design

function IconProject() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="10" height="10" rx="1.5" stroke="#1d2030" strokeWidth="1.5" />
      <rect x="15" y="3" width="10" height="10" rx="1.5" stroke="#1d2030" strokeWidth="1.5" />
      <rect x="3" y="15" width="10" height="10" rx="1.5" stroke="#1d2030" strokeWidth="1.5" />
      <rect x="15" y="15" width="10" height="10" rx="1.5" stroke="#1d2030" strokeWidth="1.5" />
    </svg>
  );
}

function IconScale() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 4v20M4 14h20" stroke="#1d2030" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="14" r="10" stroke="#1d2030" strokeWidth="1.5" />
    </svg>
  );
}

function IconCulture() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 22h20M7 22V12l7-8 7 8v10" stroke="#1d2030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="11" y="16" width="6" height="6" stroke="#1d2030" strokeWidth="1.5" />
    </svg>
  );
}

function IconShow() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10" stroke="#1d2030" strokeWidth="1.5" />
      <path d="M11 10l8 4-8 4V10z" stroke="#1d2030" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

const formats = [
  {
    Icon: IconProject,
    title: "Разработка проектов",
    subtitle: "Создание оригинальных форматов и интеллектуальной собственности",
  },
  {
    Icon: IconScale,
    title: "Масштабирование",
    subtitle: "Гастроли, франшиза и лицензирование проектов",
  },
  {
    Icon: IconCulture,
    title: "Работа с культурным кодом",
    subtitle: "Адаптация классики под современного зрителя",
  },
  {
    Icon: IconShow,
    title: "Продюсирование шоу",
    subtitle: "От идеи до полной реализации на ведущих площадках",
  },
];

export function WhatWeDo() {
  return (
    <section id="formats" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-5 sm:px-10 lg:px-[208px]">
        <div className="max-w-[925px]">
          <h2 className="font-display font-bold text-dark text-3xl lg:text-[36px] leading-10 mb-10 lg:mb-12">
            Форматы и направления
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {formats.map((item) => (
              <div
                key={item.title}
                className="border border-accent-grey rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-7 h-7">
                  <item.Icon />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-display font-normal text-dark text-[20px] leading-7">
                    {item.title}
                  </p>
                  <p className="font-sans text-muted text-[14px] leading-5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
