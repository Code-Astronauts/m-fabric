const historyParagraphs = [
  "М_фабрика детского контента продолжает линию сильного культурного наследия, переосмысляя его в языке современности.",
  "В основе лежат произведения, которые уже стали частью коллективной памяти — истории, знакомые поколениям, образы, которые формируют представление о добре, ответственности и человеке.",
  "Мы работаем с этим материалом бережно и точно, сохраняя его смысловую глубину и раскрывая его через современные сценические формы, технологии и визуальный язык.",
  "Для нас наследие — это не архив. Это живой материал, который может говорить с новой аудиторией.",
  "Каждый проект становится точкой соединения между тем, что было важно раньше, и тем, что становится важным сегодня.",
];

export function History() {
  return (
    <section id="history" className="bg-white py-14 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
        <div className="max-w-[976px]">
          <h2 className="font-display font-bold text-dark text-3xl lg:text-[36px] leading-[1.2] lg:leading-10 uppercase mb-7 lg:mb-10">
            История
          </h2>
          <div className="flex flex-col gap-4 lg:gap-6">
            {historyParagraphs.map((text, i) => (
              <p
                key={i}
                className="font-sans text-muted text-[15px] leading-[1.5] lg:text-[18px] lg:leading-7"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
