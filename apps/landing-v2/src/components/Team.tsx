"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import WaveHero from "@/components/WaveHero";
import { Reveal } from "@/components/Reveal";

// ─── Modal ───────────────────────────────────────────────────────────────────

type ModalItem =
  | { type: "video"; src: string }
  | { type: "image"; src: string };

function LightboxModal({ item, onClose }: { item: ModalItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Закрыть"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="2" y1="2" x2="14" y2="14" />
          <line x1="14" y1="2" x2="2" y2="14" />
        </svg>
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <div className="relative w-full max-h-[90vh]">
            <img
              src={item.src}
              alt=""
              className="max-w-full max-h-[90vh] w-auto h-auto mx-auto rounded-xl object-contain shadow-2xl"
            />
          </div>
        ) : (
          <video
            src={item.src}
            className="max-w-full max-h-[90vh] w-full rounded-xl shadow-2xl"
            controls
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>,
    document.body
  );
}

// ─── VideoPlayer ──────────────────────────────────────────────────────────────

function VideoPlayer({ src, onExpand }: { src: string; onExpand: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress(v.currentTime / v.duration);
  };

  const onLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setShowControls(false), 2500);
  };

  useEffect(() => () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  }, []);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300"
        style={{ opacity: showControls ? 1 : 0 }}
      />

      {/* Center play/pause */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none"
        style={{ opacity: !playing || showControls ? 1 : 0 }}
      >
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          {playing ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="white">
              <rect x="4" y="3" width="4" height="16" rx="1.5" />
              <rect x="14" y="3" width="4" height="16" rx="1.5" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="white">
              <path d="M6 4l14 7-14 7V4z" />
            </svg>
          )}
        </div>
      </div>

      {/* Bottom controls */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-6 flex flex-col gap-2 transition-opacity duration-300"
        style={{ opacity: showControls ? 1 : 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress bar */}
        <div className="w-full h-1 bg-white/30 rounded-full cursor-pointer" onClick={seek}>
          <div
            className="h-full bg-white rounded-full transition-all duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Play/pause */}
            <button onClick={togglePlay} className="text-white/90 hover:text-white transition-colors" aria-label={playing ? "Пауза" : "Воспроизвести"}>
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <rect x="3" y="2" width="3.5" height="14" rx="1" />
                  <rect x="11.5" y="2" width="3.5" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M5 3.5l11 5.5-11 5.5V3.5z" />
                </svg>
              )}
            </button>

            {/* Mute */}
            <button onClick={toggleMute} className="text-white/90 hover:text-white transition-colors" aria-label={muted ? "Включить звук" : "Выключить звук"}>
              {muted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </button>

            {/* Time */}
            {duration > 0 && (
              <span className="text-white/70 text-xs font-sans tabular-nums">
                {fmt(progress * duration)} / {fmt(duration)}
              </span>
            )}
          </div>

          {/* Expand */}
          <button
            onClick={onExpand}
            className="text-white/90 hover:text-white transition-colors"
            aria-label="На весь экран"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── ImageThumb ───────────────────────────────────────────────────────────────

function ImageThumb({ src, onExpand }: { src: string; onExpand: () => void }) {
  return (
    <div className="relative w-full h-full group/img rounded-2xl overflow-hidden cursor-pointer" onClick={onExpand}>
      <Image src={src} alt="" fill sizes="(max-width: 1024px) 50vw, 30vw" loading="lazy" className="object-cover transition-transform duration-500 group-hover/img:scale-105" />
      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export function Team() {
  const [modal, setModal] = useState<ModalItem | null>(null);
  const closeModal = useCallback(() => setModal(null), []);

  return (
    <section id="team" className="relative bg-navy py-14 lg:py-24">

      <div className="absolute inset-0 pointer-events-none z-0 bg-navy">
        <WaveHero
          src="/images/hero-bg-mirrored.jpg"
          amplitudeScale={0.3}
          riseRate={0.06}
          fallRate={0.01}
          className="opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
        <div className="max-w-[925px]">
          <Reveal delay={0}>
            <h2 className="font-display font-bold text-white text-[28px] leading-[1.2] lg:text-[36px] lg:leading-10 mb-8 lg:mb-14">
              КОМАНДА
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-col lg:flex-row gap-4">

              {/* Video */}
              <div className="w-full lg:flex-[3]">
                <VideoPlayer
                  src="/videos/team.mp4"
                  onExpand={() => setModal({ type: "video", src: "/videos/team.mp4" })}
                />
              </div>

              {/* Two images */}
              <div className="flex flex-row lg:flex-col gap-4 lg:flex-[2]">
                <div className="relative flex-1 lg:flex-none lg:h-[calc(50%-8px)]">
                  <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full">
                    <ImageThumb
                      src="/images/team-1.jpg"
                      onExpand={() => setModal({ type: "image", src: "/images/team-1.jpg" })}
                    />
                  </div>
                </div>
                <div className="relative flex-1 lg:flex-none lg:h-[calc(50%-8px)]">
                  <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full">
                    <ImageThumb
                      src="/images/team-2.jpg"
                      onExpand={() => setModal({ type: "image", src: "/images/team-2.jpg" })}
                    />
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>

      {modal && <LightboxModal item={modal} onClose={closeModal} />}
    </section>
  );
}
