"use client";

import { useEffect, useRef } from "react";

// ── Частица взрыва ─────────────────────────────────────────────────────────

interface ExplodeParticle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; rotation: number; rotSpeed: number;
  life: number; decay: number;
}

function spawnExplosion(
  particles: ExplodeParticle[],
  w: number, h: number,
  driftH: number,
) {
  for (let i = 0; i < 18; i++) {
    particles.push({
      x: Math.random() * w,
      y: h - Math.random() * driftH * 0.8,
      vx: (Math.random() - 0.5) * 5,
      vy: -(0.5 + Math.random() * 4),
      size: 1.5 + Math.random() * 5,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.08,
      life: 1,
      decay: 0.012 + Math.random() * 0.018,
    });
  }
}

// ── Draw helpers ───────────────────────────────────────────────────────────

function drawSnowflake(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  size: number, rotation: number, opacity: number,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = Math.max(0.4, size * 0.08);

  for (let a = 0; a < 6; a++) {
    ctx.save();
    ctx.rotate((a / 6) * Math.PI * 2);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(size, 0); ctx.stroke();
    const bLen = size * 0.35;
    const p1 = size * 0.4;
    const p2 = size * 0.7;
    ctx.beginPath(); ctx.moveTo(p1, 0); ctx.lineTo(p1 + bLen * 0.5, -bLen); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(p1, 0); ctx.lineTo(p1 + bLen * 0.5,  bLen); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(p2, 0); ctx.lineTo(p2 + bLen * 0.3, -bLen * 0.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(p2, 0); ctx.lineTo(p2 + bLen * 0.3,  bLen * 0.6); ctx.stroke();
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(0, 0, size * 0.12, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawDrift(
  ctx: CanvasRenderingContext2D,
  w: number, h: number,
  amount: number, t: number,
) {
  if (amount <= 0) return;

  const maxDriftH = h * 0.25 * amount; // не более 1/4 высоты галереи

  // Три слоя — точно как в референсе
  for (let layer = 0; layer < 3; layer++) {
    const layerH = maxDriftH * (1 - layer * 0.25);
    const baseY  = h - layerH;
    const alpha  = 0.7 - layer * 0.15; // 0.70 / 0.55 / 0.40 — из референса

    ctx.beginPath();
    ctx.moveTo(0, h);

    for (let x = 0; x <= w; x += 8) {
      const nx = x / w;
      const bump1 = Math.sin(nx * 8  + layer * 2 + t * 0.10) * layerH * 0.08;
      const bump2 = Math.sin(nx * 15 + layer * 5            ) * layerH * 0.04;
      const bump3 = Math.sin(nx * 3              + t * 0.05 ) * layerH * 0.12;
      ctx.lineTo(x, baseY + bump1 + bump2 + bump3);
    }

    ctx.lineTo(w, h);
    ctx.closePath();

    // Точные цвета из референса
    const grad = ctx.createLinearGradient(0, baseY, 0, h);
    grad.addColorStop(0,   `rgba(230,240,255,${alpha})`);
    grad.addColorStop(0.3, `rgba(210,225,245,${alpha * 0.9})`);
    grad.addColorStop(1,   `rgba(190,210,240,${alpha * 0.7})`);
    ctx.fillStyle = grad;
    ctx.fill();
  }

  // Блики — 15 штук, точно как в референсе
  for (let i = 0; i < 15 * amount; i++) {
    const sx      = Math.sin(t * 0.5 + i * 3.7) * 0.5 * w + w * 0.5;
    const sy      = h - maxDriftH + Math.sin(i * 2.1) * maxDriftH * 0.3;
    const sparkle = Math.sin(t * 3 + i * 1.3) * 0.5 + 0.5;
    ctx.beginPath();
    ctx.arc(sx, sy, 1 + sparkle * 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${sparkle * 0.4 * amount})`;
    ctx.fill();
  }
}

// ── Component ──────────────────────────────────────────────────────────────

export function SnowDrift({ visible = true }: { visible?: boolean }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const visibleRef = useRef(visible);

  useEffect(() => { visibleRef.current = visible; }, [visible]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let snowAmount  = 0;
    let prevScrollY = window.scrollY;
    const particles: ExplodeParticle[] = [];
    const startTime = performance.now();

    function resize() {
      canvas!.width  = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const section = canvas.closest("section");

    // Возвращает 0..1: 1 когда секция полностью видна на экране
    function sectionVisibility(): number {
      if (!section) return 0;
      const r  = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const sH = section.offsetHeight;
      // видимая часть секции в пикселях
      const visH = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
      // 1.0 когда вся секция (или столько, сколько влезает) в экране
      return Math.min(1, visH / Math.min(sH, vh));
    }

    function draw() {
      const t  = (performance.now() - startTime) / 1000;
      const w  = canvas!.width;
      const h  = canvas!.height;

      const curScrollY = window.scrollY;
      const delta      = curScrollY - prevScrollY;
      prevScrollY      = curScrollY;

      // 0 если не первый слайд, иначе — видимость секции
      const target = visibleRef.current ? sectionVisibility() : 0;

      // Плавно следуем за целевым значением
      snowAmount += (target - snowAmount) * 0.04;

      ctx!.clearRect(0, 0, w, h);

      drawDrift(ctx!, w, h, snowAmount, t);

      // Частицы взрыва
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy += 0.07; // лёгкая гравитация
        p.vx *= 0.98;
        p.life -= p.decay;
        p.rotation += p.rotSpeed;

        if (p.life <= 0) { particles.splice(i, 1); continue; }

        drawSnowflake(ctx!, p.x, p.y, p.size, p.rotation, p.life * 0.8);
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // inset-0 + z-10 — поверх фото, но под кнопками (z-10 у стрелок)
      className="absolute inset-0 w-[102%] h-full pointer-events-none z-[5]"
    />
  );
}
