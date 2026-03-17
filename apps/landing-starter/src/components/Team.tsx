"use client";

export function Team() {
  return (
    <section id="team" className="relative px-6 lg:px-10 py-16 lg:py-20">
      {/* Section heading */}
      <div className="flex flex-col gap-4 mb-10 lg:mb-14">
        <p className="font-sans font-semibold text-blue-900 text-[16.76px] tracking-[1.676px] uppercase leading-[25px]">
          Команда
        </p>
        <h2 className="font-display font-extrabold text-black-800 text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-[-1.26px]">
          Наша команда
        </h2>
      </div>

      {/* Video player */}
      <div className="relative w-full rounded-3xl lg:rounded-[32px] overflow-hidden bg-black aspect-video shadow-lg">
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          playsInline
          poster="/images/team-video-poster.jpg"
        >
          <source src="/videos/m_fabric_video.mp4" type="video/mp4" />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
      </div>
    </section>
  );
}
