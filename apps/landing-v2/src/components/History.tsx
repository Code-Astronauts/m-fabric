import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const historyParagraphs = [
  "М_фабрика детского контента продолжает линию сильного культурного наследия, переосмысляя его в языке современности.",
  "В основе лежат произведения, которые уже стали частью коллективной памяти — истории, знакомые поколениям, образы, которые формируют представление о добре, ответственности и человеке.",
  "Мы работаем с этим материалом бережно и точно, сохраняя его смысловую глубину и раскрывая его через современные сценические формы, технологии и визуальный язык.",
  "Для нас наследие — это не архив. Это живой материал, который может говорить с новой аудиторией.",
  "Каждый проект становится точкой соединения между тем, что было важно раньше, и тем, что становится важным сегодня.",
];

export function History() {
  return (
    <section id="history" className="relative bg-white py-16 lg:py-24">
      {/* Illustration: rainbow — floats */}
      <div
        className="hidden lg:block absolute pointer-events-none z-0"
        style={{ right: 0, top: 0, bottom: 0, width: "100%" }}
        aria-hidden="true"
      >
        <div style={{ position: "absolute", left: 50, top: 27 }}>
          <div className="animate-illus-float">
            <Image
              src="/images/illus-rainbow.svg"
              alt=""
              width={110}
              height={103}
              style={{ transform: "rotate(-75deg)" }}
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[140px]">
        <div className="max-w-[976px]">
          <Reveal>
            <h2 className="font-display font-bold text-dark text-3xl lg:text-[36px] leading-[1.2] lg:leading-10 uppercase mb-7 lg:mb-10">
              История
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4 lg:gap-6">
            {historyParagraphs.map((text, i) => (
              <Reveal key={i} delay={i * 70 + 100}>
                <p className="font-sans text-muted text-[15px] leading-[1.5] lg:text-[18px] lg:leading-7">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
