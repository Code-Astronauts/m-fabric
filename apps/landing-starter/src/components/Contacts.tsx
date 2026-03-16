import Image from "next/image";
import Link from "next/link";

export function Contacts() {
  return (
    <section
      id="contacts"
      className="relative px-6 lg:px-10 py-16 lg:py-[168px] overflow-hidden"
    >
      {/* Decorative background vector — fixed size, no stretch */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ overflow: "hidden" }}
      >
        <Image
          src="/images/contacts-vector.svg"
          alt=""
          width={1440}
          height={800}
          className="absolute top-0 left-0 w-full h-auto min-h-full object-cover"
          unoptimized
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left column — Contact info */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="font-sans font-semibold text-blue-900 text-[16.76px] tracking-[1.676px] uppercase leading-[25px]">
            Контакты
          </p>

          <h2 className="font-display font-extrabold text-black-800 text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-[-1.26px]">
            Написать нам
          </h2>

          <p className="font-sans text-grey-500 text-base lg:text-[24px] leading-[38px] max-w-[494px]">
            Открыты к партнёрству, коллаборациям и переговорам
          </p>

          {/* Social links */}
          <div className="flex gap-3 flex-wrap">
            {/* Email */}
            <Link
              href="mailto:hello@stepa.show"
              className="flex items-center gap-4 border border-blue-50 rounded-2xl p-5 hover:bg-blue-900/5 transition-colors"
            >
              <div className="w-[62px] h-[62px] rounded-[14px] bg-[rgba(72,117,255,0.1)] flex items-center justify-center shrink-0">
                <Image
                  src="/images/icon-mail.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <span className="font-display font-bold text-black-800 text-lg lg:text-[22px] leading-8">
                hello@stepa.show
              </span>
            </Link>

            {/* VK */}
            <Link
              href="#"
              className="flex items-center border border-blue-50 rounded-2xl p-5 hover:bg-blue-900/5 transition-colors"
            >
              <div className="w-[62px] h-[62px] rounded-[14px] bg-[rgba(72,117,255,0.1)] flex items-center justify-center">
                <Image
                  src="/images/icon-vk.svg"
                  alt="VK"
                  width={32}
                  height={32}
                />
              </div>
            </Link>

            {/* Telegram */}
            <Link
              href="#"
              className="flex items-center border border-blue-50 rounded-2xl p-5 hover:bg-blue-900/5 transition-colors"
            >
              <div className="w-[62px] h-[62px] rounded-[14px] bg-[rgba(72,117,255,0.1)] flex items-center justify-center">
                <Image
                  src="/images/icon-telegram.svg"
                  alt="Telegram"
                  width={32}
                  height={32}
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Right column — Projects links */}
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="font-display font-bold text-black-800 text-xl lg:text-[25px] leading-10 tracking-[-0.25px]">
            Наши проекты
          </h3>

          <div className="flex flex-col gap-4">
            {/* stepashoe.ru */}
            <Link
              href="https://stepashoe.ru"
              target="_blank"
              className="flex items-center justify-between bg-white-300 border border-black/6 rounded-2xl px-8 py-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-1">
                <span className="font-display font-bold text-black-800 text-lg lg:text-[22px] leading-8">
                  stepashoe.ru
                </span>
                <span className="font-sans text-grey-500 text-sm lg:text-[18px] leading-7">
                  Сайт шоу «Дядя Стёпа»
                </span>
              </div>
              <Image
                src="/images/icon-arrow-external.svg"
                alt=""
                width={25}
                height={25}
                aria-hidden="true"
              />
            </Link>

            {/* Три поросёнка */}
            <Link
              href="#"
              className="flex items-center justify-between bg-white-300 border border-black/6 rounded-2xl px-8 py-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-1">
                <span className="font-display font-bold text-black-800 text-lg lg:text-[22px] leading-8">
                  «Три поросёнка.Ой»
                </span>
                <span className="font-sans text-grey-500 text-sm lg:text-[18px] leading-7">
                  Постановка в театре на Таганке
                </span>
              </div>
              <Image
                src="/images/icon-arrow-external-2.svg"
                alt=""
                width={25}
                height={25}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
