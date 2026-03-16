import Image from "next/image";

export function Approach() {
  return (
    <section className="mx-6 lg:mx-10 my-8 lg:my-12 bg-blue-900 rounded-3xl lg:rounded-[32px] relative overflow-hidden px-6 lg:px-10 py-16 lg:py-20">
      {/* Decorative line */}
      <div className="absolute -left-[364px] -top-[706px] w-[2169px] h-[1944px] pointer-events-none opacity-15">
        <Image
          src="/images/approach-line.svg"
          alt=""
          fill
          className="object-contain -rotate-[25.51deg]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 lg:gap-12">
        {/* Headings */}
        <div className="flex flex-col gap-6 text-white-300 text-center">
          <div className="flex flex-col gap-4 items-center">
            <p className="font-sans font-semibold text-[16.76px] tracking-[1.676px] uppercase leading-[25px]">
              Подход
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-[-1.26px]">
              Не адаптируем. Переосмысляем.
            </h2>
          </div>
          <div className="font-display font-medium text-lg lg:text-2xl tracking-[-0.54px]">
            <p>Встроенная аудитория. Долгосрочный потенциал.</p>
            <p>Для больших и маленьких.</p>
          </div>
        </div>

        {/* Text content */}
        <div className="max-w-[700px] flex flex-col gap-6 lg:gap-8 text-light-blue-bg font-sans text-base sm:text-lg lg:text-2xl leading-8">
          <p>
            Рынок детского контента быстро трансформируется. Классическое шоу без
            культурной основы теряет устойчивость.
          </p>
          <p>
            М_фабрика детского контента работает именно в этой точке. Мы берём
            произведения, которые уже стали частью культурного кода — Сергей
            Михалков, русская классика — и переводим их на современный театральный
            язык.
          </p>
          <p>
            Результат — проекты с встроенной аудиторией, высоким доверием родителей
            и долгосрочным потенциалом масштабирования.
          </p>
        </div>
      </div>
    </section>
  );
}
