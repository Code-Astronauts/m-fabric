import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform sampler2D uTex;
  uniform float uTime;
  uniform float uIntensity;
  uniform vec2 uRes;
  uniform vec2 uTexRes;
  varying vec2 vUv;

  vec2 coverUV(vec2 uv, vec2 res, vec2 texRes) {
    float ra = res.x / res.y;
    float ta = texRes.x / texRes.y;
    vec2 scale = ra > ta ? vec2(1.0, ta / ra) : vec2(ra / ta, 1.0);
    return (uv - 0.5) * scale + 0.5;
  }

  void main() {
    vec2 uv = coverUV(vUv, uRes, uTexRes);

    float amp = uIntensity * 0.07;
    float freq = 4.0;
    float speed = uTime * 2.5;

    float dx = sin(uv.y * freq * 6.2832 + speed) * amp;
    dx += sin(uv.y * freq * 2.0 * 6.2832 + speed * 1.3) * amp * 0.5;
    dx += cos(uv.x * freq * 1.5 * 6.2832 + speed * 0.7) * amp * 0.3;

    float dy = cos(uv.x * freq * 6.2832 + speed * 0.9) * amp * 0.6;
    dy += sin(uv.x * freq * 2.5 * 6.2832 + speed * 1.1) * amp * 0.3;

    vec2 displaced = uv + vec2(dx, dy);

    vec4 color = texture2D(uTex, displaced);

    float ca = uIntensity * 0.009;
    color.r = texture2D(uTex, displaced + vec2(ca, 0.0)).r;
    color.b = texture2D(uTex, displaced - vec2(ca, 0.0)).b;

    color.rgb *= 1.0 + uIntensity * 0.18;

    gl_FragColor = color;
  }
`;

export interface WaveHeroProps {
  src: string;
  className?: string;
  amplitudeScale?: number;
  riseRate?: number;
  fallRate?: number;
  maxDpr?: number;
}

export default function WaveHero({
  src,
  className = "",
  amplitudeScale = 1,
  riseRate = 0.04,
  fallRate = 0.015,
  maxDpr = 2,
}: WaveHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    velocity: 0,
    smoothVelocity: 0,
    lastScrollY: 0,
    lastTime: performance.now(),
    animId: 0,
    disposed: false,
  });

  const onScroll = useCallback(() => {
    const s = stateRef.current;
    const now = performance.now();
    const dt = Math.max(now - s.lastTime, 1);
    const y = window.scrollY;
    s.velocity = Math.abs(y - s.lastScrollY) / dt;
    s.lastScrollY = y;
    s.lastTime = now;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const s = stateRef.current;
    s.disposed = false;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDpr));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const loader = new THREE.TextureLoader();
    const texture = loader.load(src, (t: THREE.Texture) => {
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
      const img = t.image as HTMLImageElement;
      material.uniforms.uTexRes.value.set(img.width, img.height);
    });

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTex: { value: texture },
        uTime: { value: 0 },
        uIntensity: { value: 0 },
        uRes: { value: new THREE.Vector2() },
        uTexRes: { value: new THREE.Vector2(1, 1) },
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
    });

    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      material.uniforms.uRes.value.set(
        w * renderer.getPixelRatio(),
        h * renderer.getPixelRatio()
      );
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      if (s.disposed) return;
      s.animId = requestAnimationFrame(tick);
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      s.disposed = true;
      cancelAnimationFrame(s.animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      renderer.dispose();
      material.dispose();
      texture.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [src, amplitudeScale, riseRate, fallRate, maxDpr, onScroll]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    />
  );
}
