"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header id="header" className="bg-blue-900 relative flex items-center px-6 lg:px-10 py-5">
      {/* Navigation — left */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-6 z-10">
        {[
          { label: "История", href: "#history" },
          { label: "О нас", href: "#about" },
          { label: "Проекты", href: "#projects" },
          { label: "Партнерство", href: "#partnership" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-display font-medium text-white-300 text-base lg:text-lg px-3 lg:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Logo — truly centered via absolute */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Link href="/" className="pointer-events-auto">
          <Image
            src="/images/logo.png"
            alt="М-фабрика"
            width={110}
            height={91}
            className="h-16 lg:h-[91px] w-auto"
            priority
          />
        </Link>
      </div>

      {/* Contact button — right */}
      <div className="ml-auto flex items-center z-10">
        <Link
          href="#contacts"
          className="border border-white-300 text-white-300 font-display font-medium text-base lg:text-lg px-4 lg:px-5 py-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          Контакты
        </Link>

        {/* Mobile burger */}
        <button className="md:hidden text-white-300 p-2 ml-2" aria-label="Меню">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
