import Image from "next/image";
import Link from "next/link";

/**
 * About = История (2106-40) + О нас (2151-76), обёрнутые в один
 * относительный контейнер, так как иллюстрация звёзд перекрывает оба блока.
 */
export function About() {
  return (
    <div className="relative">
      {/*
        Illustrations: rainbow / drop / circle
        Coordinates derived from Figma node 2155:86 container (x=635, y=963 in section)
        and child positions within it. Section is overflow-hidden so illustrations
        that extend beyond right edge are naturally clipped.
      */}
      <div
        className="hidden lg:block absolute pointer-events-none z-0 overflow-hidden"
        style={{ right: 0, top: 0, bottom: 0, width: 805 }}
        aria-hidden="true"
      >
        {/* Rainbow / arc (2313:3) — top right */}
        <Image
          src="/images/illus-rainbow.svg"
          alt=""
          width={181}
          height={161}
          style={{ position: "absolute", right: "70%", top: 550, transform: "rotate(-50deg)" }}
          unoptimized
        />
        {/* Drop (2313:6) — right, mid-height */}
        <Image
          src="/images/illus-drop.svg"
          alt=""
          width={164}
          height={196}
          style={{ position: "absolute", right: "10%", top: 630, transform: "rotate(-20deg)" }}
          unoptimized
        />
        {/* Circle (2313:9) — right, lower center */}
        <Image
          src="/images/illus-circle.svg"
          alt=""
          width={298}
          height={381}
          style={{ position: "absolute", right: "30%", top: 1000 }}
          unoptimized
        />
      </div>

      {/* ─── Блок «История» ─────────────────────────────────────────────── */}
      <section id="history" className="relative z-10 px-6 lg:px-10 pt-16 lg:pt-20 pb-8 lg:pb-10">
        {/* Label c подчёркиванием */}
        <div className="relative inline-block mb-8">
          <p className="font-sans font-semibold text-blue-900 text-[16px] tracking-[1.676px] uppercase leading-[25px]">
            История
          </p>
          <div className="absolute left-0 -bottom-[5px] h-[8px]" style={{ width: 156 }}>
            <Image
              src="/images/underline.svg"
              alt=""
              width={156}
              height={8}
              style={{ width: "100%", height: "100%" }}
              unoptimized
            />
          </div>
        </div>

        {/* Заголовок */}
        <h2 className="font-display font-extrabold text-black-800 text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-[-1.26px] mb-8">
          О нас
        </h2>

        {/* Две колонки текста */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 font-sans text-grey-700 text-base sm:text-lg lg:text-[22px] leading-[38px]">
          {/* Левая колонка */}
          <div className="flex flex-col gap-[22px] flex-1 max-w-[540px]">
            <p>
              М_фабрика детского контента продолжает линию сильного культурного
              наследия, переосмысляя его в языке современности.
            </p>
            <p>
              В основе лежат произведения, которые уже стали частью коллективной
              памяти — истории, знакомые поколениям, образы, которые формируют
              представление о добре, ответственности и человеке.
            </p>
            <p>
              Мы работаем с этим материалом бережно и точно, сохраняя его смысловую
              глубину и раскрывая его через современные сценические формы,
              технологии и визуальный язык.
            </p>
          </div>

          {/* Правая колонка — текст + пространство для звёзд */}
          <div className="flex flex-col gap-[22px] flex-1 max-w-[540px]">
            <p>
              Для нас наследие — это не архив. Это живой материал, который может
              говорить с новой аудиторией.
            </p>
            <p>
              Каждый проект становится точкой соединения между тем, что было важно
              раньше, и тем, что становится важным сегодня.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Блок «О нас» ────────────────────────────────────────────────── */}
      <section id="about" className="relative z-10 px-6 lg:px-10 pt-10 lg:pt-16 pb-16 lg:pb-20">
        <div className="flex flex-col gap-8">
          {/* Section label */}
          <p className="font-sans font-semibold text-blue-900 text-[16px] tracking-[1.676px] uppercase leading-[25px]">
            О нас
          </p>

          {/* Heading */}
          <h2 className="font-display font-extrabold text-black-800 text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-[-1.26px] max-w-[832px]">
            Мы создаем продукты детского контента для больших и маленьких
          </h2>

          {/* Text */}
          <div className="max-w-[700px] flex flex-col gap-[22px] font-sans text-grey-700 text-base sm:text-lg lg:text-[22px] leading-[38px]">
            <p>
              М_фабрика детского контента — компания, которая основана Анной и
              Надеждой Михалковыми. Мы работаем на пересечении театра, технологий
              и современного детского восприятия.
            </p>
            <p>
              Наша задача — переводить классические культурные произведения в
              современный язык: понятный детям и одновременно ценный для взрослых.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="#team"
            className="inline-flex items-center bg-blue-800 border border-white/20 text-white-300 font-sans font-medium text-lg lg:text-[21px] px-10 py-5 rounded-xl hover:bg-blue-900 transition-colors self-start"
          >
            Наша команда
          </Link>
        </div>

          {/* Illustration: asterisk (2287-9) — left side, near cards */}
          <div
              className="absolute pointer-events-none hidden lg:block"
              style={{ left: "34%", top: "80%", width: 145, height: 148, zIndex: -99 }}
              aria-hidden="true"
          >
              <Image
                  src="/images/illus-asterisk.svg"
                  alt=""
                  fill
                  className="object-contain"
              />
          </div>
      </section>
    </div>
  );
}
