import Image from "next/image";
import Link from "next/link";

/** Блок «История» — фрейм 2106-40 */
function History() {
  return (
    <section id="history" className="px-6 lg:px-10 py-16 lg:py-20">
      {/* Section label */}
      <div className="relative inline-block mb-8">
        <p className="font-sans font-semibold text-blue-900 text-[16px] tracking-[1.676px] uppercase leading-[25px]">
          История
        </p>
        {/* Underline decoration from Figma */}
        <div className="absolute left-0 -bottom-[6px] w-[156px] h-[10px]">
          <Image
            src="/images/underline.svg"
            alt=""
            fill
            className="object-contain object-left"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Heading */}
        <h2 className="font-display font-extrabold text-black-800 text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-[-1.26px]">
          О нас
        </h2>

        {/* Two-column text + decorative stars */}
        <div className="relative">
          {/* Decorative stars — right side, absolutely positioned, no stretch */}
          <div
            className="hidden lg:block absolute right-0 top-0 pointer-events-none"
            style={{ width: 320, height: 320, overflow: "hidden" }}
            aria-hidden="true"
          >
            <Image
              src="/images/illustration-stars.svg"
              alt=""
              width={805}
              height={1224}
              className="absolute -rotate-90 opacity-25"
              style={{
                right: -160,
                top: -80,
                width: 500,
                height: "auto",
              }}
              unoptimized
            />
          </div>

          {/* Text columns */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 font-sans text-grey-700 text-base sm:text-lg lg:text-[22px] leading-[38px] max-w-[1280px]">
            {/* Left column */}
            <div className="flex flex-col gap-[22px] flex-1">
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

            {/* Right column */}
            <div className="flex flex-col gap-[22px] flex-1 lg:justify-center">
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
        </div>
      </div>
    </section>
  );
}

/** Блок «О нас» — фрейм 2151-76 */
function AboutUs() {
  return (
    <section id="about" className="relative px-6 lg:px-10 py-16 lg:py-20 overflow-hidden">
      {/* Decorative stars — right side, fixed size, no stretch */}
      <div
        className="hidden lg:block absolute pointer-events-none"
        style={{
          right: 0,
          top: -261,
          width: 805,
          height: 1224,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        {/* The SVG is 1224×805 rotated -90deg, placed to the right */}
        <div
          style={{
            position: "absolute",
            right: -160,
            top: 0,
            transform: "rotate(-90deg)",
            transformOrigin: "right top",
            width: 1224,
            height: 805,
          }}
        >
          <Image
            src="/images/illustration-stars.svg"
            alt=""
            width={1224}
            height={805}
            className="opacity-20"
            unoptimized
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-8">
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
          href="#"
          className="inline-flex items-center bg-blue-800 border border-white/20 text-white-300 font-sans font-medium text-lg lg:text-[21px] px-10 py-5 rounded-xl hover:bg-blue-900 transition-colors self-start"
        >
          Наша команда
        </Link>
      </div>
    </section>
  );
}

export function About() {
  return (
    <>
      <History />
      <AboutUs />
    </>
  );
}
