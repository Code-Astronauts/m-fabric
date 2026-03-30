import { useEffect, useRef } from "react";

class Snowflake {
  x = 0; y = 0; size = 0; speed = 0;
  drift = 0; driftSpeed = 0; opacity = 0;
  rotation = 0; rotSpeed = 0;

  constructor(private w: number, private h: number) {
    this.reset(true);
  }

  reset(initial: boolean) {
    this.x = Math.random() * this.w;
    this.y = initial ? Math.random() * this.h : -20 - Math.random() * 100;
    this.size = 3 + Math.random() * 10;
    this.speed = 0.15 + Math.random() * 0.45;
    this.drift = Math.random() * Math.PI * 2;
    this.driftSpeed = 0.008 + Math.random() * 0.015;
    this.opacity = 0.25 + Math.random() * 0.5;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.015;
  }
}

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
  ctx.lineWidth = Math.max(0.5, size * 0.08);

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
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.fill();

  ctx.globalAlpha = 1;
  ctx.restore();
}

export function SnowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let flakes: Snowflake[] = [];
    let rafId: number;
    let visible = false;
    const startTime = performance.now();

    function resize() {
      canvas!.width  = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      flakes = Array.from({ length: 80 }, () => new Snowflake(canvas!.width, canvas!.height));
    }

    resize();
    window.addEventListener("resize", resize);

    const section = canvas.closest("section");
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0.05 },
    );
    if (section) observer.observe(section);

    function draw() {
      const t = (performance.now() - startTime) / 1000;
      const w = canvas!.width;
      const h = canvas!.height;

      ctx!.clearRect(0, 0, w, h);

      if (visible) {
        for (const f of flakes) {
          f.y += f.speed;
          f.x += Math.sin(t * f.driftSpeed * 10 + f.drift) * 0.6;
          f.rotation += f.rotSpeed;
          if (f.y > h + 20) f.reset(false);
          if (f.opacity > 0.01) drawSnowflake(ctx!, f.x, f.y, f.size, f.rotation, f.opacity);
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
