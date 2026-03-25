"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Reveal } from "@/components/Reveal";

const stepaImages = [
  "/images/project-1-0.jpg",
  "/images/project-1-1.png",
  "/images/project-1-3.jpg",
  "/images/project-1-4.jpg",
  "/images/project-1-5.jpg",
  "/images/project-1-6.jpg",
];

const pigletImages = [
  "/images/project-2-0.jpg",
  "/images/project-2-1.jpg",
  "/images/project-2-2.jpg",
  "/images/project-2-3.jpg",
  "/images/project-2-4.jpg",
  "/images/project-2-5.png",
];

function ProjectCarousel({
  images,
  title,
  theme = "light",
}: {
  images: string[];
  title: string;
  theme?: "light" | "dark";
}) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const activeDot = theme === "dark" ? "bg-white" : "bg-brand-blue";
  const inactiveDot =
    theme === "dark"
      ? "bg-white/30 hover:bg-white/60"
      : "bg-accent-grey hover:bg-brand-blue/50";

  return (
    <div className="relative w-full lg:w-[340px] shrink-0 group">
      <div
        className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            <Image
              src={src}
              alt={i === 0 ? title : ""}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Предыдущее фото"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#1d2030"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Следующее фото"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#1d2030"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Фото ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? `w-5 h-1.5 ${activeDot}`
                  : `w-1.5 h-1.5 ${inactiveDot}`
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <>
      {/* ── Дядя Степа — синий фон, галерея слева, текст справа ── */}
      <section id="projects" className="relative overflow-hidden bg-brand-blue py-14 lg:py-24">
        <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
          <Reveal>
            <h2 className="font-display font-bold text-white text-[28px] leading-[1.2] lg:text-[36px] lg:leading-10 mb-8 lg:mb-14">
              ПРОЕКТЫ
            </h2>
          </Reveal>

          <Reveal>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 items-start">
              {/* Галерея — слева (в DOM первая → сверху на мобиле) */}
              <ProjectCarousel
                images={stepaImages}
                title="Дядя Степа «Говорят: под Новый год»"
                theme="dark"
              />

              {/* Текст — справа */}
              <div className="flex flex-col gap-3 lg:gap-5 pt-1 flex-1">
                <p className="font-sans text-white/60 text-[13px] leading-[1.4] tracking-[1.4px] uppercase">
                  Флагманский проект
                </p>
                <h3 className="font-display font-bold text-white text-[22px] leading-[1.2] lg:text-[30px] lg:leading-9">
                  Дядя Степа «Говорят: под Новый год»
                </h3>
                <p className="font-sans text-white/70 text-[15px] leading-[1.5] lg:text-[16px] lg:leading-6 max-w-[385px]">
                  Масштабное новогоднее шоу с героями произведений писателя Сергея Михалкова.
                </p>
                <Link
                  href="https://stepa.show/"
                  target="_blank"
                  className="inline-flex items-center bg-white text-brand-blue font-sans font-medium text-[14px] px-6 py-3 rounded-xl hover:bg-white/90 transition-colors self-start mt-1"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Три Поросенка — белый фон, текст слева, галерея справа ── */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-24">
        {/* Illustration */}
        <div
          className="hidden lg:block absolute pointer-events-none z-0 inset-0"
          aria-hidden="true"
        >
          <div style={{ position: "absolute", right: "3%", top: 40 }}>
            <Image
              src="/images/illus-circle.svg"
              alt=""
              width={180}
              height={224}
              style={{ transform: "rotate(35deg)" }}
              unoptimized
            />
          </div>
        </div>

        <div className="relative z-10 max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
          <Reveal>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 items-start max-w-[925px]">
              {/* Текст — слева (в DOM первый → сверху на мобиле) */}
              <div className="flex flex-col gap-3 lg:gap-5 pt-1 flex-1">
                <p className="font-sans text-brand-blue text-[13px] leading-[1.4] tracking-[1.4px] uppercase">
                  Спектакль
                </p>
                <h3 className="font-display font-bold text-dark text-[22px] leading-[1.2] lg:text-[30px] lg:leading-9">
                  «Три поросенка. ОЙ»
                </h3>
                <p className="font-sans text-muted text-[15px] leading-[1.5] lg:text-[16px] lg:leading-6 max-w-[385px]">
                  Знакомая с детства история о трёх поросятах, написанная Сергеем Михалковым, получила новое прочтение
                  благодаря его внучкам — Анне и Надежде Михалковым.
                </p>
                <Link
                  href="https://tagankateatr.ru/repertuar/Tri-porosyonka-oi"
                  target="_blank"
                  className="inline-flex items-center bg-brand-blue text-white font-sans font-medium text-[14px] px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-colors self-start mt-1"
                >
                  Купить билет →
                </Link>
              </div>

              {/* Галерея — справа */}
              <ProjectCarousel
                images={pigletImages}
                title="«Три поросенка. ОЙ»"
                theme="light"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
