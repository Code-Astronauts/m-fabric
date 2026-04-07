import { useRef } from "react";

export function Hero({ logoMainSrc }: { logoMainSrc: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <style>{`
        @keyframes silkSky {
          to { opacity: 1 }
        }
        @keyframes silk1In {
          0%   { opacity: 0; transform: translateX(-60%) translateY(30%) rotate(-8deg) scale(1.3) }
          100% { opacity: 0.9; transform: translateX(0) translateY(0) rotate(0) scale(1) }
        }
        @keyframes silk2In {
          0%   { opacity: 0; transform: translateX(70%) translateY(-20%) rotate(12deg) scale(1.4) }
          100% { opacity: 0.85; transform: translateX(0) translateY(0) rotate(0) scale(1) }
        }
        @keyframes silk3In {
          0%   { opacity: 0; transform: translateX(-40%) translateY(60%) rotate(-5deg) scale(1.5) }
          100% { opacity: 0.7; transform: translateX(0) translateY(0) rotate(0) scale(1) }
        }
        @keyframes silk4In {
          0%   { opacity: 0; transform: translateX(40%) translateY(-50%) rotate(8deg) scale(1.3) }
          100% { opacity: 0.6; transform: translateX(0) translateY(0) rotate(0) scale(1) }
        }
        @keyframes silkBeam {
          0%   { transform: translateX(-100%) skewX(-15deg) }
          100% { transform: translateX(300%) skewX(-15deg) }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="hero"
        className="relative overflow-hidden w-screen"
        style={{
          height: "100svh",
          background:
            "radial-gradient(ellipse at 30% 50%, #0a1958 0%, #040826 60%, #01030f 100%)",
        }}
      >
        {/* SilkWaves background */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 40%, #1e3aa8 0%, transparent 50%),
              radial-gradient(ellipse at 80% 60%, rgba(41,82,255,0.2) 0%, transparent 50%)
            `,
            opacity: 0,
            animation: "silkSky 2.5s 0.3s forwards ease-out",
          }}
        />

        {/* Silk layer 1 */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            left: "-20%",
            top: "-20%",
            width: "140%",
            height: "140%",
            transformOrigin: "center",
            opacity: 0,
            mixBlendMode: "screen",
            animation: "silk1In 3s 0.4s forwards cubic-bezier(0.2,0.8,0.2,1)",
          }}
        >
          <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="hero-sw-g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#4a7bff" stopOpacity="0" />
                <stop offset="0.5" stopColor="#6a9bff" stopOpacity="0.8" />
                <stop offset="1" stopColor="#1a3aa8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M -100 500 Q 300 300 700 480 T 1700 420 L 1700 900 L -100 900 Z" fill="url(#hero-sw-g1)" />
          </svg>
        </div>

        {/* Silk layer 2 */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            left: "-20%",
            top: "-20%",
            width: "140%",
            height: "140%",
            transformOrigin: "center",
            opacity: 0,
            mixBlendMode: "screen",
            animation: "silk2In 3.2s 0.7s forwards cubic-bezier(0.2,0.8,0.2,1)",
          }}
        >
          <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="hero-sw-g2" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#2952ff" stopOpacity="0" />
                <stop offset="0.5" stopColor="#5a8aff" stopOpacity="0.7" />
                <stop offset="1" stopColor="#0a1650" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M -100 550 Q 400 350 800 540 T 1700 480 L 1700 900 L -100 900 Z" fill="url(#hero-sw-g2)" />
          </svg>
        </div>

        {/* Silk layer 3 */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            left: "-20%",
            top: "-20%",
            width: "140%",
            height: "140%",
            transformOrigin: "center",
            opacity: 0,
            mixBlendMode: "screen",
            animation: "silk3In 3.4s 1s forwards cubic-bezier(0.2,0.8,0.2,1)",
          }}
        >
          <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="hero-sw-g3" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#1a3aa8" stopOpacity="0" />
                <stop offset="0.5" stopColor="#3a6aff" stopOpacity="0.6" />
                <stop offset="1" stopColor="#05092a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M -100 620 Q 500 420 900 600 T 1700 560 L 1700 900 L -100 900 Z" fill="url(#hero-sw-g3)" />
          </svg>
        </div>

        {/* Silk layer 4 */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            left: "-20%",
            top: "-20%",
            width: "140%",
            height: "140%",
            transformOrigin: "center",
            opacity: 0,
            mixBlendMode: "screen",
            animation: "silk4In 3.6s 1.3s forwards cubic-bezier(0.2,0.8,0.2,1)",
          }}
        >
          <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="hero-sw-g4" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#0a1650" stopOpacity="0" />
                <stop offset="0.5" stopColor="#2a4ad8" stopOpacity="0.5" />
                <stop offset="1" stopColor="#01030f" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M -100 700 Q 600 500 1000 680 T 1700 640 L 1700 900 L -100 900 Z" fill="url(#hero-sw-g4)" />
          </svg>
        </div>

        {/* Light beam sweep */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            top: 0,
            left: "20%",
            width: 600,
            height: "100%",
            background:
              "linear-gradient(105deg, transparent 45%, rgba(120,170,255,0.25) 50%, transparent 55%)",
            transform: "translateX(-100%) skewX(-15deg)",
            animation: "silkBeam 2s 1.8s forwards ease-out",
          }}
        />

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
              <a
                href="#history"
                className="inline-flex items-center justify-center bg-brand-blue text-white font-sans font-medium text-sm px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-colors"
              >
                История
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center border border-white/30 text-white font-sans font-medium text-sm px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                Наши проекты
              </a>
            </div>
          </div>

          {/* Right: logo card */}
          <div className="hidden lg:flex shrink-0 ml-auto">
            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <img
                src={logoMainSrc}
                alt="М_фабрика детского контента логотип"
                width={251}
                height={281}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
