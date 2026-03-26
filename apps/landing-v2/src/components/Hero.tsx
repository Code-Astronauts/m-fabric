"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import WaveHero from "@/components/WaveHero";

const SNAP_THRESHOLD = 80;  // px — сколько нужно проскроллить
const SCROLL_DURATION = 900; // ms — длительность анимации

function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function smoothScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuart(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function Hero() {
  const hasSnapped = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 10) {
        hasSnapped.current = false;
        return;
      }

      if (hasSnapped.current) return;

      const history = document.getElementById("history");
      if (!history) return;

      if (scrollY >= SNAP_THRESHOLD && scrollY < history.offsetTop) {
        hasSnapped.current = true;
        const headerHeight = document.getElementById("header")?.offsetHeight ?? 96;
        smoothScrollTo(history.offsetTop - headerHeight, SCROLL_DURATION);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-navy overflow-hidden w-screen h-svh min-h-svh"
    >
      {/* Background — WaveHero canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <WaveHero
          src="/images/hero-bg.jpg"
          amplitudeScale={1}
          riseRate={0.06}
          fallRate={0.01}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/60 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1341px] w-full mx-auto px-[38px] sm:px-10 lg:px-12 pt-[72px] lg:pt-[96px] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
        {/* Left: text */}
        <div className="lg:flex-1 flex flex-col gap-5 lg:gap-6 max-w-[580px]">
          <div className="flex flex-col gap-2">
            <h1 className="font-display font-bold text-white text-[36px] leading-[1.1] sm:text-5xl lg:text-[60px]">
              М_фабрика детского контента
            </h1>
            <p className="font-sans font-normal text-accent-grey text-base lg:text-[20px] leading-[1.4] lg:leading-7">
              Продюсерский центр
            </p>
          </div>

          <p className="font-sans text-accent-grey/90 text-[15px] leading-[1.5] lg:text-[20px] lg:leading-7 max-w-[580px]">
            создаем масштабные шоу и культурные проекты на основе литературного наследия, современных форматов и сильных смыслов для больших и маленьких
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Link
              href="#history"
              className="inline-flex items-center justify-center bg-brand-blue text-white font-sans font-medium text-sm px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-colors"
            >
              История
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center border border-white/30 text-white font-sans font-medium text-sm px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Наши проекты
            </Link>
          </div>
        </div>

        {/* Right: logo card */}
        <div className="hidden lg:flex shrink-0 ml-auto">
          <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <Image
              src="/images/logo-main.png"
              alt="М_фабрика детского контента логотип"
              width={251}
              height={281}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
