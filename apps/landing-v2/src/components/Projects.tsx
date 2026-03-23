"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    id: "stepa",
    tag: "Флагманский проект",
    title: "Дядя Степа «Говорят: под Новый год»",
    description:
      "Масштабное новогоднее шоу с героями произведений писателя Сергея Михалкова.",
    images: [
      "/images/project-1-0.png",
      "/images/project-1-1.jpg",
      "/images/project-1-2.jpg",
      "/images/project-1-3.jpg",
      "/images/project-1-4.jpg",
      "/images/project-1-5.jpg",
      "/images/project-1-6.jpg",
    ],
    ctaText: "Подробнее →",
    ctaLink: "https://stepa.show/",
    imageFirst: false,
  },
  {
    id: "piglets",
    tag: "Спектакль",
    title: "«Три поросенка. ОЙ»",
    description:
      "Знакомая с детства история о трёх поросятах, написанная Сергеем Михалковым, получила новое прочтение благодаря его внучкам — Анне и Надежде Михалковым.",
    images: [
      "/images/project-2-0.jpg",
      "/images/project-2-1.jpg",
      "/images/project-2-2.jpg",
      "/images/project-2-3.jpg",
      "/images/project-2-4.jpg",
      "/images/project-2-5.png",
    ],
    ctaText: "Купить билет →",
    ctaLink: "https://www.kino-teatr.ru/teatr/news/y2025/9-13/38957/print/",
    imageFirst: true,
  },
];

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
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

  return (
    <div className="relative w-full lg:w-[479px] shrink-0 group">
      <div
        className="relative w-full aspect-[479/320] rounded-2xl overflow-hidden shadow-lg"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            <Image
              src={src}
              alt={i === 0 ? title : ""}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Prev / Next */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Предыдущее фото"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="#1d2030" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Следующее фото"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="#1d2030" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Фото ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 h-1.5 bg-brand-blue"
                  : "w-1.5 h-1.5 bg-accent-grey hover:bg-brand-blue/50"
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
    <section id="projects" className="relative overflow-hidden bg-white py-14 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
        <div className="max-w-[925px]">
          <Reveal>
            <h2 className="font-display font-bold text-dark text-[28px] leading-[1.2] lg:text-[36px] lg:leading-10 mb-8 lg:mb-14">
              ПРОЕКТЫ
            </h2>
          </Reveal>

          {/* Illustrations */}
          <div
            className="hidden lg:block absolute pointer-events-none z-0"
            style={{ left: 0, top: 0, width: "100%", height: "100%" }}
            aria-hidden="true"
          >
            {/* Cloud — floats */}
            <div style={{ position: "absolute", left: "18%", bottom: -975 }}>
              <div className="animate-illus-float">
                <Image
                  src="/images/illus-cloud.svg"
                  alt=""
                  width={201}
                  height={175}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Circle — pulses */}
            <div style={{ position: "absolute", right: "5%", top: 370 }}>
              <div>
                <Image
                  src="/images/illus-circle.svg"
                  alt=""
                  width={220}
                  height={273}
                  style={{ transform: "rotate(35deg)" }}
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:gap-20">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 120}>
                <div
                  className={`flex flex-col ${
                    project.imageFirst
                      ? "lg:flex-row-reverse"
                      : "lg:flex-row"
                  } gap-5 lg:gap-12 items-start`}
                >
                  {/* Carousel */}
                  <ProjectCarousel images={project.images} title={project.title} />

                  {/* Text */}
                  <div className="flex flex-col gap-3 lg:gap-5 pt-1 flex-1">
                    <p className="font-sans text-brand-blue text-[13px] leading-[1.4] tracking-[1.4px] uppercase">
                      {project.tag}
                    </p>
                    <h3 className="font-display font-bold text-dark text-[22px] leading-[1.2] lg:text-[30px] lg:leading-9">
                      {project.title}
                    </h3>
                    <p className="font-sans text-muted text-[15px] leading-[1.5] lg:text-[16px] lg:leading-6 max-w-[385px]">
                      {project.description}
                    </p>
                    <Link
                      href={project.ctaLink}
                      style={{ zIndex: 9 }}
                      className="inline-flex items-center bg-brand-blue text-white font-sans font-medium text-[14px] px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-colors self-start mt-1"
                    >
                      {project.ctaText}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
