import Image from "next/image";
import Link from "next/link";

export function Contacts() {
  return (
    <section id="contacts" className="bg-navy py-14 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
        <div className="max-w-[925px] flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Logo column */}
          <div className="hidden lg:block shrink-0">
            <Image
              src="/images/logo.png"
              alt="М_фабрика"
              width={182}
              height={150}
              className="object-contain opacity-80"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <h2 className="font-display font-bold text-white text-[26px] leading-[1.15] lg:text-[30px] lg:leading-9">
              Свяжитесь с нами
            </h2>

            {/* Email */}
            <div className="flex items-center gap-3">
              {/* Email icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="#9ca3c9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13 2 6"
                  stroke="#9ca3c9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link
                href="mailto:hello@stepa.show"
                className="font-sans text-light-muted text-base lg:text-[18px] leading-7 hover:text-white transition-colors"
              >
                hello@stepa.show
              </Link>
            </div>

            {/* Social links */}
            <div className="flex gap-4 flex-wrap">
              <Link
                href="#"
                className="border border-white/10 rounded-xl px-5 py-2.5 font-sans text-light-muted text-[14px] leading-5 hover:bg-white/10 transition-colors"
              >
                ВКонтакте
              </Link>
              <Link
                href="#"
                className="border border-white/10 rounded-xl px-5 py-2.5 font-sans text-light-muted text-[14px] leading-5 hover:bg-white/10 transition-colors"
              >
                Telegram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
