export const CodeSnipConfettiCannon = `"use client";
import React, { useEffect, useRef, useState } from "react";

const COLORS = [
  "#f87171",
  "#facc15",
  "#4ade80",
  "#60a5fa",
  "#c084fc",
  "#f472b6",
  "#fb923c",
  "#34d399",
];
type Shape = "rect" | "circle";
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  age: number;
  rotation: number;
  spin: number;
  shape: Shape;
};

export default function ItsConfettiCannon(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const maxParticles = 1200;

  const [animKey, setAnimKey] = useState(0); // 🚀 for spam-click animation

  // canvas resize
  useEffect(() => {
    const canvas = canvasRef.current!;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.style.width = \`\${window.innerWidth}px\`;
      canvas.style.height = \`\${window.innerHeight}px\`;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // animation loop
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const step = (t: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = t;
      const dt = Math.min(0.05, (t - lastTimeRef.current) / 1000);
      lastTimeRef.current = t;

      const parts = particlesRef.current;
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.vy += 400 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rotation += p.spin * dt;
        p.age += dt;
        if (p.age >= p.life) parts.splice(i, 1);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of parts) {
        const tNorm = p.age / p.life;
        let alpha = tNorm >= 0.8 ? Math.max(0, 1 - (tNorm - 0.8) / 0.2) : 1;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        if (p.shape === "rect") {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
        } else {
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, []);

  const spawnBurst = (x: number, y: number) => {
    const parts = particlesRef.current;
    const count = 32 + Math.floor(Math.random() * 16);
    for (let i = 0; i < count; i++) {
      if (parts.length > maxParticles) break;
      const angle = (Math.PI / 180) * (-85 + Math.random() * 70);
      const speed = 260 + Math.random() * 420;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      const size = 4 + Math.random() * 10;
      const life = 0.9 + Math.random() * 0.9;
      const rotation = Math.random() * Math.PI * 2;
      const spin = (Math.random() - 0.5) * 10;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const shape = size > 6 && Math.random() > 0.4 ? "rect" : "circle";
      parts.push({
        x,
        y,
        vx,
        vy,
        size,
        color,
        life,
        age: 0,
        rotation,
        spin,
        shape,
      });
    }
  };

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ev.currentTarget;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    spawnBurst(cx, cy);

    // 🚀 increment key to retrigger animation instantly
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        aria-label="Pop confetti"
        title="Click / spam-click me!"
        className={\`relative z-20 select-none text-4xl\`}
        key={animKey} // 🔑 triggers re-mount for animation restart
      >
        🎉
      </button>

      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      <style jsx global>{\`
        @keyframes confetti-pop {
          0% {
            transform: scale(1) rotate(0deg);
          }
          25% {
            transform: scale(1.3) rotate(-10deg);
          }
          50% {
            transform: scale(0.9) rotate(10deg);
          }
          75% {
            transform: scale(1.15) rotate(-5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        button[aria-label="Pop confetti"] {
          animation: confetti-pop 0.3s ease-in-out;
        }
      \`}</style>
    </div>
  );
}

`